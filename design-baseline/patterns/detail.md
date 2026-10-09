# Mẫu: chi tiết bản ghi và biểu mẫu

## Chọn dạng [CHỐT]
- **Trang chi tiết** (có địa chỉ riêng `?id=`, quay lại đúng danh sách): dùng cho chứng từ, danh mục có trên 6 trường, hồ sơ.
- **Hộp chi tiết 80% màn hình đặt trên danh sách**: dùng cho danh mục ít trường và hồ sơ có ảnh. Bản thu gọn rộng tối đa 860 px (loại rộng 1120), cao theo nội dung, có nút ✕. Đầu hộp có tiêu đề 20 px, trạng thái và các nút; thân hộp cuộn riêng; chân hộp có nút. Hộp có ảnh chia hai cột: Thông tin chung bên trái, ô ảnh tỉ lệ 3:4 bên phải (bấm, kéo thả hoặc dán ảnh; JPG/PNG/WebP ≤ 4 MB; ảnh lưu cùng nút Lưu). **Thêm mới xong thì mở luôn hộp của bản ghi vừa tạo.**

## Cấu trúc trang chi tiết
1. **Đầu phiếu dính** (v2): nút quay lại, breadcrumb, tiêu đề (số chứng từ, hoặc "mã - tên"), viên trạng thái, chip bước duyệt, icon cảnh báo, chữ "Chưa lưu" khi có thay đổi, mã hệ thống có nút sao chép. Bên phải: `⋮ · Bỏ thay đổi · Lưu · Hoàn thành`. Dưới tiêu đề là **dải Tình trạng** (các bước trạng thái, bước hiện tại nổi bật).
2. **Lưu** luôn hiện: mờ khi không có gì để lưu, có chấm warning khi có thay đổi; phím tắt Ctrl+S; lưu xong hiện toast "Đã lưu". **Hoàn thành** = lưu rồi chuyển bước, luôn qua hộp xác nhận. Bản ghi danh mục thì Lưu là nút chính, không có Hoàn thành.
3. **Menu ⋮** gồm: Tệp đính kèm · Duyệt và trao đổi (kèm số đếm) · In · các thao tác khác · Xoá hoặc Ngừng dùng (chữ màu danger, đặt cuối, có hộp xác nhận).
4. Các vùng **xếp dọc, không chia tab**. Mỗi vùng là một thẻ v2 (bo 20, không viền, bóng thẻ) có tiêu đề bấm để thu gọn (trạng thái thu gọn được nhớ); **vùng đầu luôn mở**; vùng thu gọn hiện tóm tắt. Biểu mẫu rộng hết trang, tối đa 4 cột trường. Lỗi chỉ báo khi bấm Lưu: tóm tắt lỗi ở đầu, câu lỗi dưới đúng ô. Bảng chỉ đọc trong vùng (phiên bản, dòng theo lô, lịch sử) dùng kiểu bảng tĩnh của danh sách (`lv2-static`). Thứ tự: Thông tin chung → Chi tiết dòng → các vùng bảng → Thông tin lịch sử (chỉ đọc, mặc định thu gọn).
5. **Lưới trường 12 cột**, mỗi trường chiếm 2, 3, 4, 6 hoặc 12 cột. **Mọi hàng phủ đủ 12 cột.** Nhãn đặt trên ô, 13 px, weight 500, màu text-muted, không có dấu hai chấm. Trường bắt buộc có dấu `*` đỏ.
6. Trang **luôn ở chế độ nhập**. Phiếu đã khoá thì ô vẫn hiện nhưng không nhập được, không kèm dòng thông báo.
7. Rời trang khi còn thay đổi: hỏi "Huỷ thay đổi?". Bấm Thêm khi còn thay đổi: hộp 3 nút Quay lại · Bỏ thay đổi · Lưu rồi thêm.
8. Điện thoại: mỗi vùng là một thẻ mềm; thanh Lưu/Hoàn thành cố định phía trên thanh dưới; ⋮ và quay lại là nút tròn 44 px.

## Ô nhập
- Ô chuẩn trên máy tính: cao 36 (token `field-height`), bo 6, viền input-edge; rê chuột và focus thì viền màu chủ đạo (focus kèm quầng sáng). Ô bị khoá: viền border, nền surface-muted. **Mọi trang dùng chung một hằng lớp ô nhập**; không để trang riêng còn ô kiểu cũ (`h-9 border-border-strong`).
- **Ô chọn có tìm** cho mọi trường lấy từ danh mục: hiện "mã - tên" trên một dòng; danh sách rộng bằng ô (tối thiểu 220 px, cao tối đa 340 px); ô tìm ở đầu; điều khiển bằng ↑ ↓ Enter Esc; ẩn mục đã ngừng dùng; chân danh sách có "Xem tất cả".
- **Ô ngày**: gõ dd/mm/yyyy hoặc chọn trên lịch; tuần bắt đầu Thứ Hai; có nút Hôm nay và Xoá ngày.
- Điện thoại: ô nền surface-muted, bo 14, cao 48, chữ 16, không viền. Nhóm trường là một thẻ (đệm 16, bo 20, bóng mềm). Cờ bật/tắt là công tắc 48 × 28 đặt bên phải dòng. Ảnh tròn đặt trên đầu. Nút Lưu to dính đáy. Nút ⋯ ở đầu chứa Thêm và Xoá.
