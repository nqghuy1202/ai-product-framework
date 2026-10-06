---
name: build
description: Biến một story hoặc một yêu cầu thay đổi thành code đã kiểm và review theo mức rủi ro. Việc nhỏ thì phiên chính tự làm; việc vừa và lớn thì Opus (agent planner) dựng khung code + test đỏ, người dùng duyệt khung, Sonnet (agent coder) điền thân hàm, máy kiểm hợp đồng, review none/quick/thorough, báo cáo rồi chờ duyệt commit. Dùng khi người dùng nói "build story 02-03", "làm story", "code tính năng này", "sửa chỗ này", hoặc đưa ID story.
argument-hint: "[id story | mô tả việc] [review=none|quick|thorough]"
---

# /apf:build

Thư mục gốc plugin là `../..` tính từ thư mục của skill này. Đọc `references/conventions.md` (một lần), và đọc các file trong `references/build/` **đúng lúc cần**, không đọc trước.
Script dự án: `node .apf/bin/apf.mjs …`. Nếu dự án chưa có thì đề nghị chạy `/apf:init`.

## 0. Nhận việc
1. Xác định đầu vào:
   - **ID story** (ví dụ `02-03`): tìm file trong `docs/stories/**`. `status` cho biết bắt đầu từ đâu: `draft` thì thiếu AC, chuyển sang `/apf:stories` để hoàn thiện; `ready` thì vào bước 1; `planned` thì vào bước 3 (khung đang chờ duyệt); `approved` hoặc `coding` thì vào bước 4; `review` thì vào bước 6.
   - **Yêu cầu tự do**: nếu là câu hỏi thì trả lời, không code. Nếu là việc cần làm: việc nhỏ đi luôn; việc vừa hoặc lớn mà không có story thì tạo story tối thiểu (dùng mẫu `templates/docs/story.md`, đặt ở `docs/stories/00-adhoc/`), viết AC cùng người dùng (tối đa 1–2 câu hỏi), rồi đi tiếp.
2. Đọc `git status`. Có thay đổi chưa commit **không thuộc việc này**: không đụng vào, và báo người dùng biết. Không stash, không reset.
3. Người dùng chỉ định mức review (`review=…`) thì mức đó thắng.

## 1. Phân loại
Ước lượng **số dòng code sẽ thêm hoặc sửa** và **số file**, dựa trên những gì đã biết (đọc nhanh vùng code liên quan, không điều tra sâu).
- **S** (≤ `build.smallMaxLines`, mặc định 80 dòng, ≤ `build.smallMaxFiles`, mặc định 3 file, không thêm cấu trúc mới như bảng, module, route hay đăng ký): **phiên chính tự làm**, nhảy tới bước 5. Vẫn viết test cho hành vi mới, trừ 3 ca được miễn.
- **M / L**: đi bước 2.
- Ghi `size` vào frontmatter story: `node .apf/bin/apf.mjs story set <id> size M`. Ghi `baseline` bằng `git rev-parse HEAD` nếu đang trống.

## 2. Dựng khung (agent `planner`, Opus)
Mở agent **planner** (subagent_type `apf:planner`, nếu không có thì dùng `planner`) với lời giao ngắn:
> Story: `<đường dẫn tuyệt đối>`. Dự án: `<thư mục tuyệt đối>`. Hướng dẫn dựng khung: `<plugin>/references/build/skeleton.md`. Ghi chú của người dùng: … (nếu có).

Không chép lại nội dung story vào lời giao, vì planner tự đọc. Planner trả về: danh sách file khung, kết quả "đỏ đúng lý do", các giả định A-n, các câu hỏi `[CHẶN]`.

Phiên chính kiểm nhanh trước khi trình: khung có typecheck xanh không; test có đỏ vì `NOT_IMPLEMENTED` hoặc assertion (không phải vì lỗi import) không; có khối `apf-contract` chưa. Hỏng thì gửi lại planner (SendMessage) một lần; vẫn hỏng thì phiên chính tự sửa.

## 3. ✅ Mốc duyệt khung (`checkpoints.afterSkeleton`)
Trình gọn (≤ 25 dòng):
- Bảng file khung (mới/sửa) và vai trò của từng file.
- Chữ ký chính: 3–8 dòng quan trọng nhất (kiểu vào/ra, mã lỗi). Người dùng muốn xem thêm thì mở file.
- Test đỏ: danh sách ID test, AC tương ứng.
- Giả định A-n cần duyệt; câu hỏi `[CHẶN]` (đặt bằng AskUserQuestion, kèm phương án khuyến nghị).
- Mức review dự kiến.

**Dừng chờ.** Người dùng sửa ý thì sửa khung (tự sửa nếu nhỏ, gửi lại planner nếu lớn), rồi trình lại. Khi người dùng đồng ý:
```bash
node .apf/bin/apf.mjs contract snapshot <id>
node .apf/bin/apf.mjs story set <id> status approved
```
Câu trả lời của người dùng ghi vào mục **Quyết định** của story (D-n); không thêm phụ lục ở cuối file.

## 4. Điền code (agent `coder`, Sonnet)
`story set <id> status coding`, rồi mở agent **coder** (subagent_type `apf:coder` hoặc `coder`):
> Story: `<đường dẫn tuyệt đối>`. Dự án: `<thư mục tuyệt đối>`. Lượt: 1 (hoặc "tất cả các lượt"). Hợp đồng: `<plugin>/references/build/coder-contract.md`.

Story có nhiều lượt độc lập (khác file, khác lane) thì có thể mở nhiều coder **song song**, mỗi coder một lượt. Lượt có phụ thuộc thì chạy lần lượt.

Khi coder trả về:
1. Chạy `node .apf/bin/apf.mjs contract check <id>`. Mã 1 (VI PHẠM) thì gửi lại đúng coder đó, kèm danh sách vi phạm. Mã 3 (còn `APF:IMPLEMENT`) thì gửi lại phần còn thiếu.
2. Chạy các lệnh kiểm trong mục Kiểm của story (test liên quan, lint, typecheck).
3. Xử lý phiếu lệch DV-n: `accept` (phiên chính sửa khung hoặc test, chạy `contract snapshot` lại, ghi Quyết định) · `reject` (giải thích, chỉ cách làm trong hợp đồng) · `escalate` (đụng tới Ý định, đưa vào mốc duyệt cuối).
4. Tối đa `build.coderMaxRetries` vòng (mặc định 2). Sau đó phiên chính tự hoàn thiện phần còn lại.

## 5. Kiểm máy
```bash
node .apf/bin/apf.mjs contract check <id>     # bỏ qua với việc cỡ S
<lệnh lint> && <lệnh typecheck> && <test liên quan>
node .apf/bin/apf.mjs risk --base <baseline>  # gợi ý mức review
```
Không chạy bộ test đầy đủ mất nhiều phút trong vòng lặp. Chỉ chạy test liên quan; bộ đầy đủ để cho cổng gộp hoặc trước khi merge.

## 6. Review theo rủi ro
`story set <id> status review`. Mức = người dùng chỉ định > kết quả `apf risk` (phiên chính được nâng mức, không được hạ). Chi tiết ở `references/build/risk.md`.
- `none`: không gọi reviewer.
- `quick`: một agent **reviewer** chạy prompt trong `references/build/review-quick.md`.
- `thorough`: **cùng lúc** agent **reviewer-deep** (lens A) và **reviewer** (lens B), prompt trong `references/build/review-thorough.md`.

Diff được đưa bằng lệnh hoặc đường dẫn (`git diff <baseline>` cộng các file mới), không dán diff vào prompt. Khi đủ kết quả thì triage theo `references/build/triage.md`; mỗi phát hiện ghi một dòng vào mục Review của story. Vòng sửa tối đa `build.reviewMaxLoops` (mặc định 2).

## 7. ✅ Báo cáo và mốc duyệt commit (`checkpoints.beforeCommit`)
1. Viết báo cáo theo `references/build/report.md`, ghi vào mục Báo cáo của story, rồi trình cho người dùng. Mục **Giả định** là bắt buộc.
2. Nếu bật `features.docSync`: chạy `node .apf/bin/apf.mjs docs` để xem doc nào phụ trách vùng code vừa đổi, rồi sửa doc đó (hoặc `docs verify` nếu doc vẫn đúng) **trước khi** commit.
3. **Dừng chờ người dùng duyệt.** Được duyệt thì: `story set <id> status done`, `git add` đúng các file của việc này (không `git add -A` khi còn thay đổi của người dùng), rồi commit theo đề xuất. Cổng commit chạy tự động; bị CHẶN thì sửa rồi commit lại, **không** dùng `--no-verify` hay `APF_SKIP_GATE`.
4. Cập nhật bảng việc: `node .apf/bin/apf.mjs board --write`.
5. Bật `features.learn` mà người dùng đã sửa lại code của AI trong việc này thì gợi ý một dòng: "Có muốn chạy /apf:learn để ghi lại luật này không?"

## Đường tắt cho việc cỡ S
Bước 0 → 1 → tự code kèm test → 5 → 6 (thường là `none` hoặc `quick`) → 7. Không tạo story, không planner, không coder. Báo cáo rút gọn còn 5–8 dòng, vẫn có mục Giả định.

## Không được
- Bỏ mốc duyệt khung hoặc mốc duyệt commit, trừ khi config tắt mốc đó (khi đó ghi rõ trong báo cáo).
- Đưa cả PRD, kiến trúc hay UX vào lời giao cho agent. Agent chỉ đọc story cộng các mục được trỏ tới.
- Để reviewer chấm mức độ, hoặc ép reviewer phải tìm ra đủ một số lượng phát hiện.
- Push, deploy, chạy migration lên database dùng chung khi chưa được cho phép đúng lần đó.
