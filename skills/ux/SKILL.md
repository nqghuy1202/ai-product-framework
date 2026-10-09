---
name: ux
description: Thu tầm nhìn UX của người dùng thành DESIGN.md (trông ra sao) và EXPERIENCE.md (vận hành ra sao) dựa trên bộ quy tắc thiết kế nền của framework (đã đúc kết từ các dự án trước, phủ máy tính, tablet, điện thoại), chỉ ghi phần khác và các ngoại lệ đã duyệt; có thể dựng bản thử HTML. Dùng khi người dùng nói "thiết kế giao diện", "UX", "làm bản thử", "màn này trông thế nào", hoặc sau khi PRD được duyệt.
argument-hint: "[update | validate | <màn hình>]"
---

# /apf:ux

Thư mục gốc plugin là `../..`. Đọc `references/conventions.md` một lần, rồi đọc `design-baseline/README.md` và `design-baseline/principles.md`. Các file khác trong `design-baseline/` (tokens, responsive, states, patterns, pitfalls, checklist) chỉ đọc khi tới phần cần; muốn xem cách làm v2 bằng mắt thì mở `design-baseline/mockups-v2/`. Mẫu: `templates/docs/DESIGN.md`, `templates/docs/EXPERIENCE.md`. Đầu ra: `docs/ux/DESIGN.md`, `docs/ux/EXPERIENCE.md`, `docs/ux/mockups/`.

## Tư thế
Hỏi như người thiết kế lâu năm. **Giữ các quy tắc `[CHỐT]` của bộ nền** (người dùng đã chốt qua nhiều dự án). Quy tắc nào muốn khác thì phải hỏi, và ghi vào mục Ngoại lệ đã duyệt kèm lý do. Phần **bản sắc** (màu, font, hình minh hoạ, giọng văn): **không tự đề xuất** khi chưa được mời; nếu người dùng muốn thấy phương án thì dựng 3–4 phương án để chọn.

## Các bước
1. **Nguồn**: liệt kê các nguồn (PRD, kiến trúc, logo, ảnh chụp màn hình phần mềm cũ, hình tham khảo) để người dùng xác nhận. Tài liệu dài thì giao subagent trích.
2. **Đổ ý**, hỏi mức độ quan trọng, chế độ Nhanh hay Kèm cặp.
3. **Thiết bị theo vai** (chốt trước khi bàn IA): vai nào dùng máy tính, tablet hay điện thoại, trong bối cảnh nào (văn phòng, kho, ngoài trời).
4. **Bản sắc**: hỏi tính cách sản phẩm (3 tính từ), màu thương hiệu (logo), font (mặc định Inter tự lưu), thứ người dùng thích và không thích. Ghi vào DESIGN.md. Màu chủ đạo phải có đủ giá trị cho 3 chế độ, và đạt tương phản ≥ 4,5:1 cho chữ.
5. **Luồng chính** lấy từ các UJ của PRD (giữ nguyên tên UJ và nhân vật), chỉ ra cao trào của từng luồng.
6. **Kiến trúc thông tin**: bảng màn hình (tới từ đâu · người dùng đến để làm gì · bước tiếp theo · nút chính · mẫu nền nào). **Đóng bề mặt**: mọi nhu cầu đều có màn hình phục vụ, mọi màn hình đều có hành trình dẫn tới; thiếu thì hỏi, không bịa.
7. **Gán mẫu nền** cho từng màn: danh sách (`patterns/list.md`), chi tiết (`detail.md`), chứng từ có dòng (`document-lines.md`), trang chủ, đăng nhập, tài khoản. Chỉ mô tả phần khác với mẫu.
8. **Trạng thái**: theo `design-baseline/states.md`; chỉ ghi các trạng thái đặc thù của dự án.
9. **Bản thử** (khi người dùng muốn xem, hoặc mức độ "ra mắt"): dựng 2–4 màn quan trọng nhất thành một **tệp HTML tự chứa** trong `docs/ux/mockups/`, mở được ở máy khác, dùng `design-baseline/tokens.css`, nội dung thật (không lorem), phủ cả 3 cỡ (có nút chuyển cỡ, hoặc dùng media query). Người dùng duyệt bằng mắt, thích thì chụp ảnh lại.
10. **Tự kiểm** (5 dòng): mọi UJ đều có luồng · mọi thành phần riêng đều có cả hình dạng lẫn hành vi · mọi màn đều có đủ trạng thái · màu có giá trị hoặc trỏ tới token trong code · không chép lại PRD.
11. **✅ Mốc duyệt kiến trúc + UX**: trình chung với kiến trúc nếu kiến trúc đã xong. Gồm: bảng màn hình, bản sắc, các ngoại lệ so với nền, bản thử.

## Không được
- Chép nguyên bộ nền vào DESIGN.md. Chỉ ghi phần khác và trỏ về nền.
- Nhét token vào frontmatter. Token sống trong code (`tokens.css`).
- Tự ý bỏ một quy tắc `[CHỐT]` mà không hỏi và không ghi vào Ngoại lệ đã duyệt.
