# Mẫu: đăng nhập

- Khi màn đăng nhập hiện thì vỏ ứng dụng (thanh đầu, sidebar, thanh tab) ẩn hoàn toàn.
- **Máy tính**: một cảnh nền minh hoạ đúng lĩnh vực của sản phẩm phủ toàn màn hình `[VÍ DỤ: sân đỗ máy bay]`, chỉ vài chi tiết chuyển động nhẹ. Tắt chuyển động khi người dùng bật giảm chuyển động, khi ở chế độ Sáng chói, và tạm dừng khi đang gõ mật khẩu. Thẻ đăng nhập rộng 420 px, bo 16, viền border, nền surface 94% và làm mờ phần phía sau, cách mép trên `clamp(56px, 10vh, 104px)`.
- **Trong thẻ**: hàng thương hiệu (logo 44 px, tên, dòng phụ); tiêu đề 22 px/600 và dòng phụ 13 px; ô nhập 44 px bo 10 (khi chạm 52 px, chữ 16); nút con mắt trong ô mật khẩu; "Quên mật khẩu?" cùng hàng với nhãn; nút chính rộng bằng thẻ; thông báo lỗi là khối bo 10 có nền semantic nhạt. Nút chọn ngôn ngữ dạng viên `VI | EN` ở góc phải trên; dòng bản quyền 12 px dưới thẻ.
- **Điện thoại** `[CHỐT]`: cảnh nền dọc riêng đặt ở đầu (cao `min(75vw, 44dvh)`), màu nền trang nối tiếp màu của cảnh. Thẻ đăng nhập là **tấm trượt từ đáy** bo góc trên 28 px, không viền, bóng lan lên trên. Ô nhập 52 px bo 14, chữ 16. Nút chính dạng **viên thuốc** 52 px có bóng cùng màu. Nút con mắt tròn 44 px. Tiêu đề 26 px/700.
- **Cấm**: ô "Ghi nhớ đăng nhập", chặn dán vào ô mật khẩu, đồng hồ đếm ngược gây áp lực.
- Tính năng chỉ dành cho bản demo (ví dụ đăng nhập một chạm theo danh sách tài khoản) phải được **khoá bằng nhiều lớp cờ môi trường**, và đặt ngay dưới nút Đăng nhập sao cho dòng báo lỗi không đẩy nút làm người dùng bấm trượt.
