---
name: elicit
description: Đào sâu, phản biện một tài liệu, một mục, một quyết định hay một kế hoạch bằng kỹ thuật khai thác (pre-mortem, đảo ngược, nguyên lý gốc, 5 vì sao, Socrates, đội đỏ, kiểm kê giả định, xoay vai người liên quan, quét ca biên, hệ quả bậc hai, phép trừ). Dùng khi người dùng nói "đào sâu", "phản biện", "soi kỹ", "pre-mortem", "red team", "thử thách ý này".
argument-hint: "[tài liệu | mục | quyết định]"
---

# /apf:elicit

Thư mục gốc plugin là `../..`. Danh sách kỹ thuật ở `references/conventions.md` mục 7.

1. Xác định **đích**: tài liệu hoặc mục nào, quyết định nào. Không rõ thì lấy nội dung vừa làm xong gần nhất.
2. Chọn **5 kỹ thuật hợp với đích**: rủi ro trước khi ra mắt thì Pre-mortem, Đội đỏ, Kiểm kê giả định; nghiệp vụ nhiều vai thì Xoay vai người liên quan; nội dung phẳng thì Phép trừ, Đảo ngược; code hay luồng thì Quét ca biên. Trình qua AskUserQuestion, mỗi kỹ thuật kèm một dòng giải thích.
3. Chạy kỹ thuật được chọn, đúng độ sâu của đích. Trình **phát hiện kèm đề xuất sửa cụ thể** (đoạn cũ → đoạn mới).
4. Người dùng **Áp dụng** thì sửa tài liệu và ghi Nhật ký quyết định. **Bỏ** thì không sửa. Người dùng có thể chọn chạy thêm một kỹ thuật khác.
