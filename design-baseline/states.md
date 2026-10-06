# Ma trận trạng thái [CHỐT]

Màn hình nào cũng phải có đủ các trạng thái áp dụng được, **trong code**, không chỉ trong spec. Planner viết test cho chúng; reviewer kiểm.

| Trạng thái | Cách thể hiện |
|---|---|
| Đang tải lần đầu | Skeleton đúng hình nội dung (hàng bảng, thẻ KPI), nền surface-sunken. Không dùng spinner toàn trang. Skeleton đứng yên khi người dùng bật giảm chuyển động |
| Đang làm mới | Giữ dữ liệu cũ; hiện "Cập nhật lúc {giờ}" và một spinner nhỏ ở tiêu đề |
| Đang lưu | Nút khoá ngay từ lần bấm đầu, đổi chữ thành "Đang lưu…" và giữ nguyên bề rộng. Mỗi form mang `requestId`, để bấm lại không tạo bản ghi đôi |
| Rỗng lần đầu | Một icon 32 px text-muted, một câu ngắn nêu lý do, một hành động chính. Không viết đoạn thuyết minh |
| Rỗng tích cực | "Không có việc cần làm." kèm icon dấu tích. Không chúc mừng, không hoạt hình |
| Rỗng do lọc | "Không có kết quả." kèm nút "Xoá lọc". Trong bảng: icon tìm + "Không có dòng nào." căn giữa |
| Lỗi tải | Báo **ngay tại khối** bị lỗi (không báo cả trang), kèm nút "Thử lại". Giữ dữ liệu cũ, làm mờ và ghi "Dữ liệu lúc {giờ}". **Không dùng toast** |
| Lỗi lưu | Giữ nguyên dữ liệu đã nhập. Có tóm tắt lỗi ở đầu form, nhận focus (`role="alert"`), mỗi mục nối tới ô lỗi. Tại ô lỗi: viền danger cùng độ dày, icon và câu hướng dẫn sửa ở dòng dưới (luôn giữ sẵn chỗ một dòng để bố cục không nhảy) |
| Xung đột đồng thời | Người lưu sau thấy banner "Dữ liệu đã thay đổi, hãy kiểm tra lại". Tải dữ liệu mới nhưng giữ nội dung đã gõ. Không khoá phiếu. Trong lưới: dòng gạch đỏ và câu "Dòng đã được người khác sửa. Tải lại trang để lấy bản mới." |
| Không có quyền | Trong giao diện: **ẩn** mục hoặc hành động. Vào bằng đường dẫn trực tiếp: hiện trang "Bạn chưa có quyền xem trang này." kèm hướng dẫn liên hệ quản trị. Quyền chỉ đọc: lưới chuyển sang readOnly (không cột tích, không nút Thêm, không menu ⋮) |
| Chưa đăng nhập | Chuyển tới trang đăng nhập, giữ địa chỉ đích để quay lại sau |
| Phiên sắp hết | Cảnh báo trước 2 phút, có nút "Tiếp tục làm việc". Hết phiên thì hiện lớp đăng nhập lại ngay trên trang; dữ liệu chưa lưu vẫn còn |
| Có thay đổi chưa lưu | Nút Lưu sáng lên kèm một chấm. Tìm hay lọc không tính là thay đổi. Rời trang thì hỏi |
| Đã khoá | Ô vẫn hiện nhưng không nhập được: nền surface-muted, chữ vẫn màu chính. Không thêm dòng thông báo, không icon ổ khoá |
| Chưa triển khai | Mục menu mờ kèm nhãn giai đoạn; bấm vào hiện banner thông tin trong vùng nội dung |
| Dữ liệu dài hoặc cực đoan | Thiết kế bằng dữ liệu xấu thật: tên 60 ký tự (cắt sau từ khoá phân biệt, kèm tooltip), số 0, số âm, 10.000 dòng (có phân trang, có bộ lọc mặc định, không cuộn vô hạn), số 9 chữ số không xuống dòng giữa số, chữ có dấu chồng tầng thì `line-height ≥ 1,4`. Ô chọn có giá trị dài không được kéo rộng biểu mẫu |
| Mất mạng | Banner warning cố định ở đầu màn hình. Nút Lưu không giả vờ thành công; dữ liệu vẫn được giữ |
