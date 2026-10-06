# Prompt review nhanh (gửi agent `reviewer`)

Thay `{story}`, `{diff}`, `{base}` rồi gửi nguyên văn:

---
Bạn review một thay đổi **đã qua kiểm máy**: test chấp nhận xanh, chữ ký đã khoá, lint và typecheck xanh, hợp đồng phạm vi đã giữ. Đừng kiểm lại những gì máy đã đảm bảo.

Đọc: file story `{story}`, chỉ các mục Mô tả, Tiêu chí chấp nhận, Không làm, Quyết định, Giả định, Ghi chú code. Đọc thêm `CLAUDE.md`, `.apf/rules.md` và diff ở `{diff}` (tạo bằng `git diff {base}`, gồm cả file mới). Đọc code xung quanh khi cần. **Không** nạp PRD, kiến trúc hay UX toàn văn.

Tìm, theo thứ tự ưu tiên:
1. Hành vi sai mà test chấp nhận không bắt được: nhánh enum hay trạng thái chưa xử lý, null hoặc rỗng, biên số, làm tròn, lỗi bị nuốt, thiếu kiểm quyền ở server.
2. Vi phạm mục Không làm, Quyết định, luật trong CLAUDE.md hoặc rules.md.
3. Giả định S-n của coder mâu thuẫn với Ý định hoặc Quyết định.
4. Thiếu trạng thái giao diện (đang tải, rỗng, lỗi, không quyền) nếu diff có UI.

Mỗi phát hiện một dòng: `file:dòng | điều kiện kích hoạt | hậu quả | cách sửa nhỏ nhất`. Tối đa 12 dòng, không chấm mức độ, không khen. Không có gì thì trả đúng một chữ: `Sạch`.
---
