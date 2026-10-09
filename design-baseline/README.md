# Bộ quy tắc thiết kế nền (design baseline)

Đúc kết từ các vòng "xem, chê, sửa" thật trên dự án Tapetco ERP (01–06/10/2026), cập nhật **giao diện v2** (08–09/10/2026, bản 0.1.4: nền ngả xanh, thẻ không viền có bóng, danh sách và biểu mẫu v2, trang chủ v2.1, đăng nhập v2). Ở chỗ code và spec lệch nhau, bộ này theo code, vì code mới hơn spec.

## Ba loại quy tắc
| Nhãn | Nghĩa | Đổi được không |
|---|---|---|
| `[CHỐT]` | Quy tắc người dùng đã ép qua nhiều vòng sửa | Giữ ở mọi dự án. Chỉ đổi khi người dùng nói rõ, và ghi vào mục **Ngoại lệ đã duyệt** của `docs/ux/DESIGN.md` dự án, kèm lý do (đối tượng người dùng khác, hoặc ràng buộc kỹ thuật) |
| `[MẶC ĐỊNH]` | Giá trị khởi đầu tốt (màu, cỡ, khoảng cách cụ thể) | Đổi tự do theo thương hiệu và đặc thù dự án; ghi giá trị mới vào DESIGN.md dự án |
| `[VÍ DỤ]` | Chi tiết riêng của Tapetco giữ lại để minh hoạ | Không áp nguyên văn |

**Không rập khuôn**: bộ này quy định *cách làm* (mật độ, nhất quán, chống tràn, trạng thái, 3 cỡ màn hình), không quy định *bản sắc*. Màu thương hiệu, font, hình minh hoạ, giọng văn thì mỗi dự án tự chọn khi chạy `/apf:ux`.

## Các file
| File | Nội dung |
|---|---|
| `principles.md` | 12 nguyên tắc và danh sách quy tắc `[CHỐT]` theo nhóm |
| `tokens.md` | Vai trò token, thang chữ, khoảng cách, bo góc, độ nổi, chiều cao điều khiển, kích thước vỏ, z-index, focus |
| `tokens.css` | Bản CSS sẵn dùng: 3 chế độ Sáng, Sáng chói, Tối, cộng ánh xạ `@theme` cho Tailwind v4 |
| `responsive.md` | Điểm ngắt và hành vi theo máy tính, tablet, điện thoại |
| `states.md` | Ma trận trạng thái: đang tải, rỗng, lỗi, không quyền, xung đột, dữ liệu cực đoan... |
| `patterns/*.md` | Mẫu màn hình: danh sách, chi tiết, chứng từ có dòng, trang chủ, đăng nhập, tài khoản, thành phần dùng chung |
| `pitfalls.md` | Các bẫy kỹ thuật đã gặp (CSS toàn cục, Radix, tràn lưới, SSR...) |
| `checklist.md` | Danh sách kiểm một màn hình trước khi báo xong |
| `screens/`, `capture-screens.mjs` | Ảnh tham chiếu 3 cỡ của các màn chuẩn, và script chụp bằng Playwright |
| `mockups-v2/` | 5 bản thử HTML v2 đã duyệt (danh sách, biểu mẫu, trang chủ v2 và v2.1, đăng nhập), chỉ để tham chiếu cách làm |

## Cách dùng trong dự án
1. `/apf:ux` đọc bộ này, hỏi người dùng phần bản sắc, rồi viết `docs/ux/DESIGN.md` và `docs/ux/EXPERIENCE.md` của dự án. Hai file đó chỉ ghi **phần khác** so với nền và trỏ về nền cho phần còn lại.
2. Preset Next.js chép `tokens.css` vào dự án lúc dựng khung. Màu thương hiệu thay theo DESIGN.md.
3. Khi review giao diện, dùng `checklist.md`.

## Còn chờ xác minh
Các điểm sau chỉ được suy ra từ code Tapetco, chưa có lời chốt của người dùng và chưa thử trên trình duyệt. Mỗi dự án quyết khi dựng, rồi ghi kết quả vào đây.
| Điểm | Code Tapetco hiện tại | Câu hỏi |
|---|---|---|
| Tiêu đề cột lưới | nền trắng, 13,5 px, weight 400, text-muted (spec cũ ghi nền xám, 12,5 px, 600) | Giữ theo code? |
| Viền ô nhập khi rê chuột | có chỗ màu chủ đạo, có chỗ border-strong | Thống nhất về một kiểu nào? |
| Thẻ trên máy tính | spec ghi "viền, không bóng"; một số thẻ có thêm bóng mức 1 | Có cho bóng mức 1 không? |
| Danh sách thẻ dòng trên điện thoại | liệt kê hết, không giới hạn chiều cao (spec cũ: cao 2,5 thẻ) | Giới hạn chiều cao không? |
| `tnum` cho toàn trang | đang bật ở `body` (spec: chỉ bật ở cột số) | Tắt ở body? (nền đã chọn: chỉ bật ở cột số) |
| CSS tấm trượt cho hộp chi tiết trên điện thoại | selector có thể không khớp với component | Thử ở 390 px |
