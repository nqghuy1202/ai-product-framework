# Quy ước chung của ai-product-framework

> Mọi skill `apf:*` đọc file này **một lần** đầu phiên, không đọc lại. Luật ở đây thắng cách làm mặc định của skill nếu hai bên khác nhau.

## 1. Đầu phiên (thay cho mọi thủ tục khởi động)

1. Đọc `.apf/config.json` và `.apf/rules.md` của dự án; `CLAUDE.md` đã có trong ngữ cảnh thì không đọc lại. Chưa có `.apf/config.json` thì đề nghị chạy `/apf:init` trước, trừ khi skill là `help` hoặc `init`.
2. Trạng thái dự án **suy ra từ file** (docs/, frontmatter story, `node .apf/bin/apf.mjs board`), không giữ file trạng thái riêng.
3. Đọc tài liệu khác bằng cách tìm theo ID hoặc heading (grep) trước. Chỉ đọc toàn văn khi thật cần. Tài liệu lớn hơn khoảng 400 dòng thì giao một subagent trích phần liên quan, chỉ nhận lại bản tóm tắt.
4. Doc mà `apf status` hoặc `apf docs` báo **SUSPECT** thì phải đối chiếu với code trước khi tin.

## 2. Tư thế khai thác (8 luật)

1. **Đổ ý trước**: mời người dùng kể hết ý trong đầu và đưa tài liệu sẵn có (memo, file Excel, slide, ảnh chụp, quy trình giấy). Rồi hỏi thêm một câu "còn gì nữa không?".
2. **Hỏi mức độ quan trọng một lần**: thử nghiệm / nội bộ / ra mắt cho khách / có ràng buộc pháp lý. Câu trả lời quyết định độ sâu của tài liệu.
3. **Một câu hỏi mỗi lượt**, theo thứ tự phụ thuộc. Mỗi câu kèm **phương án mình nghiêng về** và lý do, để người dùng chỉ cần gật hoặc sửa. Khi đang chạy trong Claude Code, ưu tiên dùng công cụ hỏi có lựa chọn (AskUserQuestion), tối đa 4 câu độc lập trong một lượt.
4. **Cái gì tự tìm được thì tự tìm** (trong repo, trong tài liệu, trên web), không hỏi người dùng.
5. **Không chấp nhận thuật ngữ mờ.** Một từ mang hai nghĩa (ví dụ "khách hàng" là người mua hay người trả tiền) thì nêu rõ chỗ mơ hồ và bắt chọn. Từ đã chốt thì dùng nguyên văn ở mọi nơi.
6. **Không khen để làm mượt.** Mỗi câu trả lời hoặc chỉ ra chỗ yếu, hoặc xây tiếp trên chỗ mạnh.
7. **Không quyết thay người dùng.** Thấy mình đang cắt phạm vi MVP, chọn màu hay chia giai đoạn thì dừng lại, bày phương án và trả quyền chọn.
8. **Người dùng thích được hỏi**, nhưng hỏi phải đáng: chỉ hỏi khi câu trả lời làm đổi cách làm. Câu đã được trả lời hai lần cùng kiểu thì ghi vào `.apf/rules.md` để khỏi hỏi lại.

**Hai chế độ**, hỏi người dùng ngay sau bước đổ ý:
- **Nhanh**: gom phần còn thiếu thành 1–2 lượt hỏi, viết bản nháp đủ, gắn `[GIẢ ĐỊNH]` ở chỗ tự quyết, người dùng sửa sau.
- **Kèm cặp**: đi từng phần, kéo ý ra từ người dùng, phản biện chỗ mỏng.

## 3. Định dạng tài liệu

- **Frontmatter chung**: `title`, `status` (draft | final), `updated` (YYYY-MM-DD), `sources` (danh sách tài liệu đầu vào). Không có `revision`, không có changelog. Lịch sử đã có git lo.
- **ID ổn định**, không đánh số lại, không dùng lại số đã bỏ: `UJ-n` (hành trình), `FR-n` (yêu cầu chức năng), `NFR-n`, `SM-n` / `SM-Cn` (chỉ tiêu / chỉ tiêu đối trọng), `OQ-n` (câu hỏi mở), `AD-n` (quyết định kiến trúc), `D-n` (quyết định thiết kế giao diện), `<epic>-<story>` (story).
- **Tham chiếu** viết dạng `loại — đường dẫn, mục`, ví dụ `prd — docs/product/prd.md, FR-12`. Tầng dưới không chép nội dung tầng trên mà trỏ tới bằng ID.
- **Nhãn trong dòng**:
  - `[GIẢ ĐỊNH]`: AI tự quyết khi tài liệu không nói.
  - `[CHƯA BIẾT]`: thiếu thông tin.
  - `[CHẶN]`: câu hỏi chặn pha sau, phải giải trước khi đi tiếp.
  - `[CHỐT]`: người dùng đã quyết, chỉ đổi khi người dùng nói đổi.
- **Nhật ký quyết định** là mục cuối của mỗi tài liệu. Mỗi dòng có dạng `- YYYY-MM-DD — Quyết định — lý do — ai chốt`. Chỉ ghi thêm, không sửa dòng cũ. Khi làm tiếp một tài liệu dở thì đọc mục này trước.
- **Chống phình**: mỗi template có trần độ dài, vượt thì tách file con đặt tên theo nội dung, tài liệu chính chỉ trỏ tới. Token thiết kế, mô hình dữ liệu chi tiết và migration sống trong code; tài liệu chỉ ghi luật và trỏ tới file.
- **Slug và tên file**: kebab-case, **bỏ dấu tiếng Việt** (đ→d, ă/â→a…), không xoá chữ. Ví dụ "Đơn hàng mua" → `don-hang-mua`.
- **Ngôn ngữ**: nội dung viết tiếng Việt (hoặc theo `project.language`), tên kỹ thuật (file, biến, bảng, API) viết tiếng Anh.

## 4. Doc phụ trách code (khi bật `features.docSync`)

Doc nào mô tả một vùng code thì khai trong frontmatter:
```yaml
covers: [src/modules/orders/**, app/(app)/orders/**]
last_verified: <sha>   # do `apf docs verify` ghi, không gõ tay
ttl_days: 90           # tuỳ chọn: quá hạn thì coi như SUSPECT
```
Khi đổi code thuộc `covers`, sửa doc **trong cùng commit**. Nếu doc vẫn đúng thì chạy `node .apf/bin/apf.mjs docs verify <doc>`. Doc máy sinh nằm trong `docs/_generated/`, không sửa tay.

## 5. Phân tầng rủi ro thao tác

| Tầng | Ví dụ | Cách xử lý |
|---|---|---|
| 🟢 XANH | sửa code, doc, test; viết file migration (chưa chạy); đọc dữ liệu thử | Cứ làm, không hỏi |
| 🟡 VÀNG | bảng mới, cột nullable mới chưa có dữ liệu, index mới, cron hoặc job mới chưa bật, đụng 2–3 module | Làm theo cách an toàn nhất, có đường lùi (down migration, cờ tính năng), ghi vào mục **Giả định** của báo cáo |
| 🔴 ĐỎ | DROP hoặc ALTER làm mất dữ liệu; sửa dữ liệu thật; đổi phân quyền đang chạy; xoá job đang chạy; deploy; gửi tin ra ngoài; cài thư viện mới | Dừng, hỏi **đúng một câu gộp** kèm phương án khuyến nghị, đợi trả lời |

Hai trục chấm độc lập: **dễ hoàn tác chưa chắc đã được phép.** Gửi tin, cài công cụ, publish hay deploy luôn cần người dùng cho phép tường minh cho đúng lần đó. "Lần trước đã đồng ý" không tính.

**Việc chưa commit của người dùng là bất khả xâm phạm**: không `git stash`, không `reset --hard`, không `checkout --` đè, không `clean -f`. Hook của plugin chặn các lệnh này; bị chặn thì hỏi người dùng, không tìm lệnh khác có cùng tác dụng.

## 6. Bốn mốc duyệt (theo `checkpoints` trong config)

1. **Sau PRD** (`afterPrd`): người dùng duyệt PRD và tiêu chí chấp nhận.
2. **Sau kiến trúc + UX** (`afterArchitectureUx`): duyệt một lần cho cả hai tài liệu.
3. **Sau khung + test đỏ** (`afterSkeleton`): duyệt khung code trước khi Sonnet viết code.
4. **Trước commit** (`beforeCommit`): xem báo cáo rồi mới commit.

Mốc nào có giá trị `false` trong config thì bỏ qua mốc đó và ghi vào báo cáo. Ở mỗi mốc, trình bày gọn: đã làm gì, các quyết định và giả định cần duyệt, câu hỏi `[CHẶN]`. Sau đó dừng chờ.

## 7. Kỹ thuật đào sâu (dùng khi người dùng nói "đào sâu", "phản biện", "soi kỹ", hoặc khi thấy chỗ mỏng)

Đưa ra 5 kỹ thuật hợp ngữ cảnh, người dùng chọn một, chạy kỹ thuật đó, trình kết quả kèm đề xuất. Người dùng **Áp dụng** thì sửa tài liệu, **Bỏ** thì thôi. Danh sách: Pre-mortem (giả sử đã thất bại, vì sao) · Đảo ngược (làm sao để chắc chắn hỏng) · Nguyên lý gốc · 5 lần "vì sao" · Socrates (chuỗi câu hỏi buộc định nghĩa) · Dựng bản mạnh nhất của phe kia · Đội đỏ tấn công · Kiểm kê giả định · Xoay vai người liên quan (kế toán, thủ kho, giám đốc, khách...) · Quét ca biên · Hệ quả bậc hai · Phép trừ (bỏ gì mà vẫn đạt).

## 8. Khi được skill khác gọi (không hỏi người dùng)

Tự suy luận, ghi giả định, và kết thúc bằng 3 dòng: `status: complete|partial|blocked`, `files: ...`, `open_questions: ...`.
