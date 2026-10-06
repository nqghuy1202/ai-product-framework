# Danh sách kiểm một màn hình (trước khi báo xong)

Ghi rõ dòng nào **đã thử trên trình duyệt** và ở cỡ nào; dòng nào chỉ suy ra từ code.

## Cấu trúc
- [ ] Đúng mẫu: danh sách (`patterns/list.md`), chi tiết (`detail.md`), chứng từ có dòng (`document-lines.md`)…
- [ ] Một màn, một nhiệm vụ, một nút chính.
- [ ] Đầu trang chỉ có breadcrumb, tiêu đề và nút; không có dòng mô tả.
- [ ] Danh sách tràn mép (máy tính, tablet), cao hết màn nếu trang chỉ có danh sách.
- [ ] Hàng trường phủ đủ 12 cột; không khoảng trống trong hàng công cụ.
- [ ] Không lồng khung trong khung; không đệm gấp đôi.

## Trạng thái (`states.md`)
- [ ] Đang tải (skeleton) · rỗng · rỗng do lọc · lỗi tải tại khối · lỗi lưu giữ dữ liệu · không quyền (ẩn) · đã khoá · có thay đổi chưa lưu (hỏi khi rời trang) · xung đột đồng thời.
- [ ] Dữ liệu cực đoan: tên 60 ký tự, số 9 chữ số, số âm, số 0, 10.000 dòng.
- [ ] Bấm lưu hai lần không tạo bản ghi đôi (`requestId`).

## Ba cỡ màn hình (`responsive.md`)
- [ ] Máy tính 1440 và 1280: điều khiển 32 px; bảng chỉ kẻ ngang.
- [ ] Tablet 1024 ngang và 768 dọc: rail 72; lưới hàng 44.
- [ ] Điện thoại 390 / 360 / 320: **không tràn ngang**; lề 16; thẻ thay bảng; hộp thoại là tấm trượt; nút chính là nút nổi hoặc thanh Lưu cố định; ô nhập chữ 16.
- [ ] Phần tử cố định không che nhau, có tính safe-area.

## Thị giác và tiếp cận
- [ ] Chỉ dùng token, không viết mã màu; chạy đúng ở cả ba chế độ Sáng, Sáng chói, Tối.
- [ ] Trạng thái có icon và chữ, không chỉ màu; tương phản chữ ≥ 4,5:1.
- [ ] Có vòng focus ở mọi phần tử tương tác; dùng được bằng bàn phím (Tab, Enter, Esc, phím tắt của lưới).
- [ ] Vùng chạm ≥ 44 px trên màn chạm; không có đường thao tác nào chỉ mở bằng rê chuột.
- [ ] Nhãn không IN HOA; tên trạng thái và tên hành động không bị cắt chữ.
- [ ] Hành động có kết quả nhìn thấy: tạo xong thấy ngay bản ghi vừa tạo; xoá có xác nhận hoặc có Hoàn tác.
