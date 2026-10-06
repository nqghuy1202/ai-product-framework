# Nguyên tắc và quy tắc đã chốt

## 12 nguyên tắc
1. **Đẹp nhờ nhất quán và đúng mật độ, không nhờ hiệu ứng.** Nền sáng, bảng dày, ít trang trí. Thứ bậc tạo bằng cỡ chữ và khoảng trắng, chỉ một màu nhấn. Tiêu chí: chuyên nghiệp, hiện đại, đẹp, thân thiện.
2. **Ít khung, không lồng khung trong khung.** Bảng hay lưới nằm trong thẻ thì tràn sát mép thẻ, không có viền, bo góc hay nền riêng. Phân tách bằng hàng tiêu đề cột.
3. **Một mẫu dùng lại ở mọi nơi.** Mọi danh sách theo một chuẩn, mọi trang chi tiết theo một khung, mọi thẻ số theo một mẫu. Trang mới chỉ cần khai cột, trường và nút chính.
4. **Thấy trước rồi mới quyết.** Người dùng duyệt bằng bản thử HTML và ảnh chụp thật. Người làm phải báo rõ cái gì đã thử trên trình duyệt.
5. **Mỗi loại thiết bị một bố cục riêng**, không co giãn một bố cục cho mọi cỡ. Máy tính là đích chính cho khai báo và báo cáo. Điện thoại có ngôn ngữ riêng (thẻ mềm). Kích thước chạm theo `pointer: coarse`, bố cục theo bề rộng.
6. **Không bao giờ tràn khung.** Không cuộn ngang cả trang. Ở 320–390 px không phần tử nào rộng hơn khung chứa nó.
7. **Gọn hơn mặc định.** Nút, thanh công cụ, đầu trang đều nhỏ hơn mặc định của thư viện (người dùng từng chê "hơi bự").
8. **Màu chỉ dùng cho điều cần chú ý.** Mỗi dòng chỉ vài chữ đậm, một cột viên trạng thái; chỉ tô màu khi vượt ngưỡng. Không trạng thái nào chỉ dựa vào màu.
9. **Một màn hình, một nhiệm vụ, một nút chính.**
10. **Cảnh báo không chiếm cả hàng.** Cảnh báo là icon đặt cạnh trạng thái hoặc trong dòng, bấm vào thì mở khung chi tiết.
11. **Không có quyền thì ẩn, không làm mờ.** Nút bị vô hiệu luôn kèm lý do.
12. **Chống mất dữ liệu.** Lưu lỗi thì giữ nguyên dữ liệu đã nhập. Rời trang khi còn thay đổi chưa lưu thì hỏi.

## Quy tắc [CHỐT]

### Danh sách và lưới
- L1 · Mọi danh sách dữ liệu danh mục đi theo **một chuẩn danh sách nhập trực tiếp** (mẫu "Đơn vị tính", xem `patterns/list.md`). Trường phức tạp nhập ở trang hoặc hộp chi tiết, mở bằng **bút chì**.
- L2 · Danh sách **tràn sát hai mép** vùng nội dung: không lề, không viền trái phải, không bo góc. **Chỉ áp ở máy tính và tablet**; điện thoại giữ lề 16 px.
- L3 · Trang chỉ có danh sách thì vùng danh sách **cao hết màn hình**: bảng cuộn bên trong, phân trang ở đáy.
- L4 · **Không có dòng mô tả hay ghi chú** phía trên ô tìm kiếm. Đầu trang chỉ gồm breadcrumb, tên trang và các nút.
- L5 · Thanh tìm kiếm có đệm gọn. Không để đệm cộng dồn thành gấp đôi do khung bọc ngoài cũng có lề.
- L6 · Lưới đặt trong khung chi tiết thì triệt lề trái, phải, trên (`-mx-4 -mt-4` hoặc tương đương). **Không** triệt lề dưới, để đáy lưới không trùng viền khung.
- L7 · Chứng từ có đầu và dòng: **phần đầu giữ dạng biểu mẫu, phần dòng là danh sách theo chuẩn L1**. Cả chứng từ **lưu một lần**, không lưu từng dòng.
- L8 · Hàng đợi, báo cáo, tồn kho là danh sách **chỉ xem**: cùng kiểu dáng, không nhập trực tiếp.
- L9 · Lưới **lưu thủ công** bằng nút Lưu hoặc Ctrl+S. Không tự lưu khi rời dòng.
- L10 · **Bấm một lần để chọn dòng, bấm đúp (hoặc Enter, F2) mới sửa ô.**
- L11 · Bấm vào dòng hay vào số phiếu **không chuyển trang**. Chỉ bút chì mở chi tiết.
- L12 · Danh sách chỉ có **một mật độ: Gọn**.
- L13 · Nút **Thêm {đối tượng}** đặt ở vùng nút đầu trang và chèn dòng mới lên đầu lưới.
- L14 · Lọc theo cột bằng cách bấm tiêu đề cột. Bấm tiêu đề không sắp xếp ngay.
- L15 · Lưới không chiếm hết trang thì **cao cố định theo số dòng** (mặc định 8 dòng), không tính theo phần trăm màn hình.
- L16 · Bảng **chỉ kẻ ngang**, không kẻ dọc.

### Khung trang và chi tiết
- K1 · Không đặt trần bề rộng nội dung; lề hai bên cố định.
- K2 · Đầu trang **dính** khi cuộn, nằm dưới thanh tab.
- K3 · Trang chi tiết **không chia tab**: các vùng xếp dọc. Tệp đính kèm, duyệt, trao đổi nằm trong menu ⋮.
- K4 · **Mọi hàng trường phủ đủ lưới 12 cột**, không để khoảng trống trong hàng trường hay hàng công cụ. Hàng thiếu thì chia đều 6/6 hoặc 4/4/4.
- K5 · Danh mục ít trường hoặc hồ sơ có ảnh mở **hộp chi tiết 80% màn hình đặt trên danh sách**, không mở trang mới. Thêm mới xong thì mở luôn hộp của bản ghi vừa tạo.
- K6 · Trang chi tiết **luôn ở chế độ nhập** (không có nút "Sửa"). Phiếu đã khoá thì ô khoá, không cần banner giải thích.
- K7 · Lưu xong báo bằng toast. Không hiện chữ "Đã lưu lúc…".
- K8 · Không để nhãn môi trường (DEMO, STAGING) chiếm chỗ trên màn hình làm việc. Nhãn chỉ xuất hiện ở bản in và tệp xuất.

### Điện thoại
- P1 · Lề **16 px thống nhất** cho thẻ, thanh tìm và tiêu đề.
- P2 · **Không tràn ở 320, 360, 390 px**. Lưới thẻ dùng `minmax(0,1fr)` cộng `min-w-0`; ô nhập và ô chọn có `max-width: 100%; min-width: 0`. Có test e2e đo tràn.
- P3 · Nút gọn: màn dày đặc dùng 36 px, nút nhỏ trong ngăn dùng 32 px. Vùng chạm vẫn tối thiểu 44 px.
- P4 · Phong cách **thẻ mềm**: nền trắng; thẻ không viền, bo 20 px, bóng mềm nhuốm màu chủ đạo; nút chính bo 16 px cao 48 px; nút phụ nền trắng viền mảnh.
- P5 · **Mọi hộp thoại, popover, ngăn kéo đều thành tấm trượt từ đáy**, có tay nắm; các nút ở chân xếp dọc và rộng hết tấm.
- P6 · Danh sách và lưới hiển thị thành **thẻ**. Nút chính ở đầu trang thành **nút nổi**. Trang chi tiết có **thanh Lưu/Hoàn thành cố định** phía trên thanh điều hướng dưới.
- P7 · Thanh tìm danh sách là thanh trắng cao 48 px, nút lọc nằm **trong** thanh.
- P8 · Thanh điều hướng dưới là **viên nổi** tối đa 4–5 mục. Menu đầy đủ là tấm trượt cao 90%, có các mục Gần đây, Đã ghim và lưới module.
- P9 · Ô nhập trên điện thoại dùng chữ **16 px** để iOS không tự phóng to.

### Thị giác chung
- V1 · Nền trắng toàn hệ thống. Thẻ trên máy tính tách nhau bằng viền xám nhạt, không dùng bóng.
- V2 · Ít khung, ít đường kẻ; tiêu đề thẻ không kẻ gạch dưới; không lồng khung trong khung.
- V3 · Điều khiển trên máy tính cao 32 px; trên màn chạm 44 px (theo `pointer: coarse`).
- V4 · Một màu chủ đạo. Màu chỉ dành cho ngoại lệ. Trạng thái luôn có icon và chữ, không chỉ có màu.
- V5 · Cảnh báo là icon cạnh trạng thái, không chiếm cả hàng.
- V6 · Viền ô nhập nhạt; đậm lên khi rê chuột; khi đang nhập thì viền chuyển màu chủ đạo và có quầng sáng.
- V7 · Có **ba chế độ hiển thị**: Sáng, Sáng chói (tương phản cao) và Tối. Mỗi token màu thêm mới phải có đủ ba giá trị ngay.
- V8 · Font tự lưu trong dự án, có subset tiếng Việt, cộng một font mono cho mã. Không tải font từ mạng lúc chạy.
- V9 · Nhãn không viết IN HOA (dấu tiếng Việt dễ bị cắt). Không dùng emoji làm icon. Chỉ dùng một bộ icon.
- V10 · Màu không viết tay trong code giao diện, chỉ dùng token. Độ trong suốt viết bằng `color-mix()` với token. Có test cấm mã màu viết tay.
- V11 · Có vòng focus thống nhất toàn app. Chỗ nào bỏ `outline` thì phải có `focus-visible` thay thế (có test kiểm).

### Trang chủ, đăng nhập, tài khoản
- H1 · Thẻ KPI dùng một mẫu duy nhất, chỉ để xem, không có chân "Xem chi tiết", tối đa 4 thẻ trên một màn.
- H2 · Bảng "Việc cần làm" cao bằng tiêu đề cột cộng 3 dòng, dư thì cuộn bên trong, và cao bằng thẻ đặt cạnh (từ 768 px).
- H3 · Đăng nhập trên điện thoại: thẻ đăng nhập là tấm trượt từ đáy, ô nhập 52 px, nút chính dạng viên thuốc.
- H4 · Tài khoản của tôi dùng thẻ mềm; ảnh đại diện tải lên là tự lưu (JPG, PNG, WebP ≤ 4 MB) và có nút Gỡ ảnh.
- H5 · Toast hiện ở góc trên trái vùng nội dung, tự tắt sau 4 giây (5 giây nếu có Hoàn tác, 6 giây nếu là lỗi), dừng đếm khi rê chuột hoặc focus.

### Cách làm việc (khi làm giao diện)
- W1 · Hỏi người dùng trước khi commit hay merge. Nêu cách mình hiểu rồi xin xác nhận; người dùng thích được hỏi tới khi đủ thông tin.
- W2 · Báo rõ phần nào đã thử trên trình duyệt, ở những cỡ màn hình nào.
- W3 · Xem trước bằng tệp HTML tự chứa đặt trong repo (mở được ở máy khác), hoặc chạy bản xem thử ở cổng riêng từ worktree thay vì merge sớm.
- W4 · Người dùng nhắc tới một yêu cầu từ phiên khác mà phiên này không thấy: không tranh luận, hỏi phạm vi rồi làm.
