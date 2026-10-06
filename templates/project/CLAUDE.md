# {{TÊN_DỰ_ÁN}}

{{Một câu: sản phẩm làm gì, cho ai.}} Dự án dùng **ai-product-framework**: cấu hình ở `.apf/config.json`, luật riêng ở `.apf/rules.md`, quy trình gọi bằng `/apf:help`.

## Stack
{{FE · BE · DB · auth · hosting · test — 3–5 dòng, có phiên bản chính}}

## Bản đồ nhanh
| Cần gì | Xem ở đâu |
|---|---|
| Yêu cầu sản phẩm | `docs/product/prd.md` |
| Kiến trúc, quy ước | `docs/architecture/architecture.md` |
| Giao diện | `docs/ux/DESIGN.md`, `docs/ux/EXPERIENCE.md` (cùng bộ thiết kế nền của framework) |
| Việc đang làm | `docs/stories/BOARD.md` (`node .apf/bin/apf.mjs board`) |
| {{module / vùng code}} | {{đường dẫn}} |
| Sự cố hệ thống chạy nền | `docs/ops/` → runbook **trước khi** sửa code |

## Cấu trúc code
{{Cây thư mục tối thiểu, 5–12 dòng, kèm vai trò từng thư mục và hướng phụ thuộc.}}

## Lệnh
```bash
{{dev}}          # chạy dev
{{lint}}         # lint
{{typecheck}}    # kiểm kiểu
{{testFast}}     # test nhanh (unit) — dùng trong vòng sửa và kiểm
{{test}}         # test đầy đủ — chạy trước khi gộp
```

## Cách làm việc với AI
- **Hỏi hay yêu cầu?** Câu hỏi thì trả lời, không sửa code. Câu yêu cầu thì làm. Câu vừa hỏi vừa yêu cầu thì trả lời trước, rồi làm.
- **Rủi ro**: 🟢 sửa code, doc, test, viết file migration → cứ làm · 🟡 bảng hoặc cột mới, job mới chưa bật → làm theo cách an toàn nhất, ghi mục Giả định · 🔴 mất dữ liệu, sửa dữ liệu thật, đổi phân quyền đang chạy, deploy, gửi tin ra ngoài, cài thư viện → hỏi đúng một câu gộp, kèm phương án khuyến nghị.
- **Mốc duyệt**: sau PRD · sau kiến trúc + UX · sau khung + test đỏ · **trước commit** (luôn hỏi trước khi commit hoặc merge).
- **Git**: đọc `git status` trước khi sửa. Không stash, reset, `checkout --` hay clean đè lên việc chưa commit của người dùng.
- Việc theo story thì dùng `/apf:build <id>`; việc nhỏ cũng dùng `/apf:build`, framework sẽ tự đi đường tắt.

## Quy tắc viết code
1. Leo thang trước khi viết, dừng ở bậc đầu tiên đủ dùng: có cần làm không → repo đã có helper hay pattern chưa → thư viện chuẩn → nền tảng hoặc component đã chốt → thư viện **đã cài** → code tối thiểu. Không tạo interface cho một cài đặt duy nhất, không wrapper chỉ để gọi tiếp, không làm "để mở rộng sau".
2. "Được yêu cầu" nghĩa là có dòng trong PRD, AC hoặc spec. Không dùng YAGNI để cắt thứ spec đã ghi.
3. Sửa bug là sửa ở gốc: grep mọi nơi gọi, đặt guard ở hàm dùng chung. Trước khi thêm export mới: grep tên nó và grep việc nó làm.
4. **Không cắt**: validate ở ranh giới · xử lý lỗi chống mất dữ liệu · kiểm quyền ở server · đủ ma trận trạng thái (rỗng, đang tải, lỗi, không quyền, dữ liệu cực đoan) · vùng chạm 44 px · tương phản 4.5:1 · vòng focus.
5. Spec không nói tới một hành vi: trạng thái giao diện thì làm mặc định an toàn nhất và ghi Giả định; còn hành vi nghiệp vụ thì hỏi người dùng. Không lặng lẽ bỏ qua.
6. Chỉ miễn test cho 3 trường hợp: thay đổi thuần giao diện, chỉ cấu hình, chỉ tài liệu (ghi rõ trong commit message).
7. Cắt góc có chủ đích thì để lại `// nợ: <trần là gì>, <điều kiện nâng cấp>`, không để `TODO` trần.

## Doc và test đi cùng code
| Đổi gì | Cập nhật |
|---|---|
| Schema, migration | {{docs/architecture/... hoặc app-map}} + test integration |
| Luật nghiệp vụ | test unit của luật + doc có `covers` vùng đó |
| Giao diện dùng chung | `docs/ux/` nếu đổi hành vi + test UI |
{{thêm dòng riêng của dự án}}

Doc có `covers` mà code bị đổi thì sửa doc cùng commit, hoặc chạy `node .apf/bin/apf.mjs docs verify <doc>` nếu doc vẫn đúng.

## Commit
`<type>(<scope>): <mô tả tiếng Việt>` — type: feat, fix, refactor, test, docs, chore. {{quy ước riêng}}

## Không được
- Commit secret hay `.env` (cổng commit sẽ chặn).
- Chạy migration hay ghi dữ liệu lên {{database dev/demo/production}} khi chưa được cho phép.
- {{luật cứng riêng của dự án}}
