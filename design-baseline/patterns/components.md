# Thành phần dùng chung

- **Viên trạng thái**: màu theo nhãn, tra từ một bảng ánh xạ duy nhất. Thường dùng nền nhạt với chữ semantic; trạng thái dừng an toàn dùng nền đặc. Có icon theo tông màu. Mỗi dòng tối đa một viên trạng thái chính. `[CHỐT]`
- **Icon cảnh báo**: viên 26 px đỏ (nền danger-container, viền danger 30%) hoặc vàng. Bấm vào mở khung 380 px, không rộng quá màn hình trừ 16 px. Dòng cảnh báo đỏ có nền danger-container 75% và vạch trái 3 px.
- **Toast** `[CHỐT]`: góc trên trái vùng nội dung (dưới thanh đầu 12 px, cách sidebar 16 px). Màu xanh lá khi thành công, đỏ khi lỗi. Tự tắt sau 4 giây (5 giây nếu có Hoàn tác, 6 giây nếu là lỗi), dừng đếm khi rê chuột hoặc focus. Không thay thế lỗi tại ô, không chứa thông tin an toàn quan trọng.
- **Hộp xác nhận**: tối đa 2 nút, nút Huỷ bên trái. Nút hành động được đặt tên theo hành động (động từ + đối tượng, ví dụ "Xoá 3 dòng"), không dùng chữ "OK".
- **Trạng thái trang** (`PageState kind="empty|error|forbidden|loading"`): một thành phần cho mọi trạng thái cả trang; dùng `h2` mặc định, chỉ dùng `h1` khi trang chỉ có trạng thái đó.
- **Logo ở chế độ Tối**: bỏ ô nền trắng, tăng sáng logo (`brightness(1.7) saturate(1.15)`).
- **Mở bằng rê chuột** phải luôn có đường thay thế bằng bấm hoặc Enter; màn cảm ứng không mở bằng rê. Rời khỏi nút và menu quá 250 ms mới đóng, để người dùng đi chéo chuột không làm mất menu.
