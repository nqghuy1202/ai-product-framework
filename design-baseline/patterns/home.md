# Mẫu: trang chủ và thẻ

- Thứ tự khối mặc định: lời chào → KPI → Thường dùng → (Việc cần làm 2/3 | Xu hướng, Tình hình 1/3). Người dùng được bật/tắt và kéo sắp xếp các khối có sẵn, không được thêm khối mới. `[MẶC ĐỊNH]`
- **Lời chào** nằm thẳng trên nền: không nền, không viền, không avatar. Trên điện thoại: chữ "Chào" 13 px màu text-muted ở trên, tên 28 px đậm màu chủ đạo ở dưới; nút Tuỳ chỉnh thành nút icon tròn ở góc.
- **Khối**: thẻ `rounded-card border bg-surface`, đệm 12 px ở điện thoại và 20 px ở máy tính; khe 12/16 px; 3 cột từ màn lớn.
- **KPI** `[CHỐT]`: dùng một mẫu duy nhất. Gồm ô icon 28 px bo 8 tô màu theo mức, tên 12,5 px text-muted, số 24 px với chữ số đều kèm đơn vị 13 px, và một chip xu hướng một dòng (cắt `…`, có tooltip). Không có chân "Xem chi tiết", không có viền màu bên trái, tối đa 4 thẻ một màn. Điện thoại xếp 2 × 2: icon 34 px ở trên, số 26 px/700 ở dưới.
- **Thường dùng**: 4 cột ở điện thoại, `auto-fill minmax(110px,1fr)` ở máy tính, tối đa 8 ô, icon tô màu theo phân hệ. Sửa bằng ngăn "Sửa thường dùng": kéo thả, ô tìm, nhóm theo phân hệ, thanh dưới cố định (Xong · Khôi phục · Đóng · Đã chọn n/8).
- **Việc cần làm** `[CHỐT]`: từ 768 px, bảng cao đúng bằng tiêu đề cột cộng 3 dòng (khoảng 180 px), dư thì cuộn bên trong; thẻ đặt cùng hàng giãn cao bằng nó. Điện thoại: không chia tab, hiện 5 việc đầu (khẩn trước, hạn gần trước), mỗi việc một thẻ gồm ô icon 40 px (đỏ khi khẩn hoặc quá hạn), tiêu đề tối đa 2 dòng, dòng "Loại · mã", hạn và viên mức ở bên phải, nút tròn ✓ 44 px. Khối bọc ngoài bỏ bóng để không thành hai khung lồng nhau. Khi trống: "Không có việc cần làm." căn giữa.
- **Thẻ xu hướng** chỉ để xem: một chuỗi số liệu, không có chú giải, chọn kỳ ở góc phải.
