# Mẫu: tài khoản của tôi

- Cột giữa rộng tối đa 720 px, khe 16 px. Các thẻ theo kiểu thẻ mềm: trên máy tính có viền, trên điện thoại có bóng mềm và không viền.
- **Thẻ đầu**: ảnh đại diện. Bấm biểu tượng máy ảnh để chọn ảnh JPG/PNG/WebP ≤ 4 MB, có xem trước, **tự lưu**, có nút Gỡ ảnh. Tiếp theo là tên 24 px/700, mã đăng nhập viết bằng font mono, chip nhóm (primary-container) và chip trạng thái (success-container). Máy tính căn trái (`grid-cols-[auto_minmax(0,1fr)]`); điện thoại căn giữa.
- **Thẻ thông tin**: danh sách `dl` 2 cột từ 768 px. Mỗi mục có nhãn 13 px text-muted ở trên và giá trị 15 px/500 ở dưới, có kẻ dưới, dùng `break-words`; giá trị trống hiện `—`.
- **Thẻ Bảo mật**: nút dạng viên thuốc cao 48 px. Đổi mật khẩu có viền màu chủ đạo; Đăng xuất chữ màu danger. Trên điện thoại các nút xếp dọc, rộng hết thẻ.
- **Đổi mật khẩu** chủ động dùng lại thành phần của trang đổi mật khẩu bắt buộc: ô có nút con mắt, thước độ mạnh 4 vạch, các quy tắc được tích dần khi đạt. Có nút Huỷ.
- Ảnh đại diện chỉ trả về cho chính người đang đăng nhập (qua route riêng). Mọi thao tác trên trang chỉ tác động lên chính người gọi.
