# Nguyên tắc và quy tắc đã chốt

> **v2 (0.1.4, 09/10/2026)**: đúc kết giao diện v2 của Tapetco (bản thử `mockups-v2/`). Quy tắc đổi ở v2 có ghi "v2" và nêu kiểu cũ; dự án cũ muốn giữ kiểu cũ thì ghi vào Ngoại lệ đã duyệt. Theo thoả thuận: **cách làm** là `[CHỐT]`, **bản sắc** (nền, bóng, bo góc, nút viên, chuyển sắc) là `[MẶC ĐỊNH]`.

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
- L2 · v2 `[MẶC ĐỊNH]`: khung danh sách là **một thẻ** (bo 20, không viền, bóng thẻ) nằm trong lề trang, bảng tràn sát mép **trong** thẻ. Kiểu cũ (0.1.3) là danh sách tràn sát hai mép vùng nội dung, không bo, chỉ ở máy tính và tablet. Điện thoại giữ lề 16 px.
- L3 · Trang chỉ có danh sách thì vùng danh sách **cao hết màn hình**: bảng cuộn bên trong, phân trang ở đáy.
- L4 · **Không có dòng mô tả hay ghi chú** phía trên ô tìm kiếm. Đầu trang gồm breadcrumb, tên trang và các nút; v2 cho phép **một dòng mô tả** ngay dưới tên trang, chữ 13 px text-muted, cắt `…` khi dài (không xuống dòng).
- L5 · Thanh tìm kiếm có đệm gọn. Không để đệm cộng dồn thành gấp đôi do khung bọc ngoài cũng có lề.
- L6 · Lưới đặt trong khung chi tiết thì triệt lề trái, phải, trên (`-mx-4 -mt-4` hoặc tương đương). **Không** triệt lề dưới, để đáy lưới không trùng viền khung.
- L7 · Chứng từ có đầu và dòng: **phần đầu giữ dạng biểu mẫu, phần dòng là danh sách theo chuẩn L1**. Cả chứng từ **lưu một lần**, không lưu từng dòng.
- L8 · Hàng đợi, báo cáo, tồn kho là danh sách **chỉ xem**: cùng kiểu dáng, không nhập trực tiếp.
- L9 · Lưới **lưu thủ công** bằng nút Lưu hoặc Ctrl+S. Không tự lưu khi rời dòng.
- L10 · **Bấm một lần để chọn dòng, bấm đúp (hoặc Enter, F2) mới sửa ô.**
- L11 · Bấm vào dòng hay vào số phiếu **không chuyển trang**. Chỉ bút chì mở chi tiết.
- L12 · Danh sách chỉ có **một mật độ: Gọn**.
- L13 · Nút **Thêm {đối tượng}** đặt ở vùng nút đầu trang và chèn dòng mới lên đầu lưới.
- L14 · v2: thanh công cụ có **ô tìm lớn tìm mọi cột, không phân biệt dấu**. Lọc theo cột là **hàng ô lọc dưới tiêu đề** (kiểu ô tìm), thu gọn hoặc mở bằng nút phễu ở cuối hàng tiêu đề và trong menu ⋮ của cột; bấm tiêu đề cột thì sắp xếp. Chuột phải trên dòng mở cùng menu với ⋮. (Kiểu cũ: bấm tiêu đề mở ô lọc của cột.)
- L15 · Lưới không chiếm hết trang thì **cao cố định theo số dòng** (mặc định 8 dòng), không tính theo phần trăm màn hình.
- L16 · Bảng **chỉ kẻ ngang**, không kẻ dọc.
- L17 · v2: **ô nhập dạng khung chỉ hiện khi đang sửa** (cùng kiểu ô lọc ở đầu cột); ngoài lúc sửa ô là chữ thường. Áp cho mọi danh mục nhập thẳng.
- L18 · v2: bấm (kể cả bấm thêm lần nữa) bên trong ô đang sửa **không** thoát chế độ sửa; bấm đúp khi đang sửa không làm gì.
- L19 · v2: ô đã đổi chỉ có **chấm** báo thay đổi, **không tô nền** ô. Nút Lưu (kèm số dòng) **hiện ngay khi bắt đầu gõ**, không đợi rời ô; Ctrl+S lưu được cả khi đang gõ.
- L20 · v2: F2 mở sửa và đặt con trỏ **ở cuối chữ**; Enter hoặc gõ phím ký tự thì thay nội dung.
- L21 · v2: chân mọi danh sách có **dòng chú thích phím tắt** theo loại (chứng từ, danh mục, chỉ xem), cách viền dưới khung ít nhất 8 px, không dính viền.
- L22 · v2: trang chỉ có **một** vùng danh sách (không có vùng thông tin chung) thì vùng đó cao tối đa theo màn hình như L3; nút Lọc trên điện thoại mở tấm lọc từ đáy.

### Khung trang và chi tiết
- K1 · Không đặt trần bề rộng nội dung; lề hai bên cố định.
- K2 · Đầu trang **dính** khi cuộn, nằm dưới thanh tab.
- K3 · Trang chi tiết **không chia tab**: các vùng xếp dọc. Tệp đính kèm, duyệt, trao đổi nằm trong menu ⋮.
- K4 · **Mọi hàng trường phủ đủ lưới 12 cột**, không để khoảng trống trong hàng trường hay hàng công cụ. Hàng thiếu thì chia đều 6/6 hoặc 4/4/4.
- K5 · Danh mục ít trường hoặc hồ sơ có ảnh mở **hộp chi tiết 80% màn hình đặt trên danh sách**, không mở trang mới. Thêm mới xong thì mở luôn hộp của bản ghi vừa tạo.
- K6 · Trang chi tiết **luôn ở chế độ nhập** (không có nút "Sửa"). Phiếu đã khoá thì ô khoá, không cần banner giải thích.
- K7 · Lưu xong báo bằng toast. Không hiện chữ "Đã lưu lúc…".
- K8 · Không để nhãn môi trường (DEMO, STAGING) chiếm chỗ trên màn hình làm việc. Nhãn chỉ xuất hiện ở bản in và tệp xuất.
- K9 · v2: **thanh đầu biểu mẫu dính**: ← · tiêu đề và số · trạng thái, cảnh báo, "Chưa lưu" · bên phải ⋮, Bỏ thay đổi, Lưu, Hoàn thành. Dưới tiêu đề là **dải Tình trạng** (các bước trạng thái của chứng từ).
- K10 · v2: biểu mẫu rộng hết vùng nội dung, tối đa 4 cột trường; **nhóm đầu luôn mở**, các nhóm sau thu gọn được (nhớ trạng thái) và khi thu gọn thì hiện tóm tắt.
- K11 · v2: lỗi nhập **chỉ báo khi bấm Lưu** (tóm tắt lỗi đầu biểu mẫu và câu lỗi dưới đúng ô), không báo lúc đang gõ.
- K12 · v2: bảng chỉ đọc nhỏ trong trang chi tiết (phiên bản, dòng theo lô, lịch sử, sổ cái) dùng **cùng vẻ với lưới danh sách**: tiêu đề chữ hoa nhỏ nền nhạt, kẻ ngang mảnh, số canh phải, bọc khung bo góc; trên điện thoại mỗi dòng thành thẻ. Không để bảng HTML trần.

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
- V1 · v2 `[MẶC ĐỊNH]`: nền trang ngả xanh nhạt; thẻ trắng bo 20 px, **không viền**, nổi bằng bóng thẻ rất nhẹ (cả máy tính và điện thoại); Sáng chói giữ nền trắng và thẻ có viền. Kiểu cũ (0.1.3): nền trắng, thẻ viền xám nhạt, không bóng.
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
- V12 · `[CHỐT]` **Một kiểu nút dùng chung**: nút trong trang (đầu trang, thanh công cụ danh sách, trong biểu mẫu) dùng chung một lớp nút (Tapetco: `lv2-btn`, `lv2-btn primary`), có icon bên trái nếu có. Không tự viết lớp nút riêng từng trang (`rounded-md bg-primary px-3…`). Ô nhập cũng dùng một chuẩn ô (cao token, viền input-edge, rê và focus viền màu chủ đạo). `[MẶC ĐỊNH]` kích thước: nút danh sách 36 px bo 10.
- V13 · `[MẶC ĐỊNH]` Nút phụ nhỏ ở trang chủ và trong ngăn kéo (Sửa, Tuỳ chỉnh, Đóng) dùng dạng **viên tròn** có icon và chữ; nút chính của ngăn là viên đặc màu chủ đạo.
- V14 · `[MẶC ĐỊNH]` Icon chức năng và icon thẻ KPI giữ **tông nhạt một màu** (nền nhạt, icon màu chủ đạo hoặc màu phân hệ nhạt). Đã thử tô mỗi icon một màu đặc và người dùng bỏ: trông rối, mất thứ bậc.

### Trang chủ, đăng nhập, tài khoản
- H1 · Thẻ KPI dùng một mẫu duy nhất, tối đa 4 thẻ trên một màn. v2: cả thẻ bấm được, mở danh sách nguồn **đã lọc đúng con số**, chân là chữ nhỏ "Chi tiết →"; KPI đổi theo phân hệ đang chọn.
- H2 · Bảng "Việc cần làm" cao bằng tiêu đề cột cộng 3 dòng, dư thì cuộn bên trong, và cao bằng thẻ đặt cạnh (từ 768 px).
- H3 · Đăng nhập trên điện thoại: thẻ đăng nhập là tấm trượt từ đáy (v2: dải hình minh hoạ nhỏ ở đầu), ô nhập 52 px, nút chính dạng viên thuốc.
- H4 · Tài khoản của tôi dùng thẻ mềm; ảnh đại diện tải lên là tự lưu (JPG, PNG, WebP ≤ 4 MB) và có nút Gỡ ảnh.
- H5 · Toast hiện ở góc trên trái vùng nội dung, tự tắt sau 4 giây (5 giây nếu có Hoàn tác, 6 giây nếu là lỗi), dừng đếm khi rê chuột hoặc focus.
- H6 · v2.1: số liệu **phân bố trạng thái** (cộng lại luôn 100%) vẽ thành **một thanh ngang chia đoạn**, mỗi đoạn có **mũi tên chú giải** (tên, số, tỉ lệ, giải thích); bấm đoạn mở danh sách lọc theo trạng thái đó. Không vẽ phân bố bằng nhiều cột. Đi kèm một **biểu đồ giá trị** (tiến độ theo giờ, việc quá hạn, lượt dùng…) để có thông tin hành động được. Có chế độ xem Bảng thay biểu đồ.
- H7 · v2.1 `[MẶC ĐỊNH]`: Chức năng thường dùng là thẻ riêng, **lưới ô biểu tượng nhiều hàng** (tối đa 16), có ô "Thêm" khi còn chỗ.
- H8 · v2.1: **Tuỳ chỉnh trang chủ** là ngăn kéo có **sơ đồ trang thu nhỏ** cập nhật ngay, danh sách khối có công tắc, **nút lên/xuống hiện sẵn** và kéo thả (điện thoại chỉ lên/xuống). **Thứ tự áp cho mọi khối**; khối ghim (KPI cạnh lời chào) có biểu tượng khoá, chỉ bật/tắt. Khối không có quyền ghi "chưa có quyền xem". Bố cục lưu trước khi có khối mới thì tự nối khối mới vào cuối.
- H9 · v2.1 `[MẶC ĐỊNH]`: **Bảng tin** công ty (khác thông báo hệ thống) là khối riêng: tin nổi bật + danh sách, chấm "Mới" theo từng người, "Xem tất cả" mở trang Bảng tin.

### Ngăn kéo và hộp thoại (v2)
- D1 · `[CHỐT]` Ngăn kéo chỉnh cấu hình (Tuỳ chỉnh, Sửa thường dùng…): đầu ngăn có tiêu đề và nút ✕; chân ngăn gồm **Khôi phục mặc định** (nút chữ, bên trái) · **Đóng** (viền) · **Xong** (nút chính đặc, có icon ✓, hiện "Đang lưu…" khi lưu). Điện thoại: chân dính đáy, tính safe-area.
- D2 · `[CHỐT]` Thay đổi trong ngăn **xem trước ngay** trên trang phía sau; **Đóng, ✕, Esc, bấm nền đều huỷ** và trả lại như cũ; chỉ Xong mới lưu.

### Cách làm việc (khi làm giao diện)
- W1 · Hỏi người dùng trước khi commit hay merge. Nêu cách mình hiểu rồi xin xác nhận; người dùng thích được hỏi tới khi đủ thông tin.
- W2 · Báo rõ phần nào đã thử trên trình duyệt, ở những cỡ màn hình nào.
- W3 · Xem trước bằng tệp HTML tự chứa đặt trong repo (mở được ở máy khác), hoặc chạy bản xem thử ở cổng riêng từ worktree thay vì merge sớm.
- W4 · Người dùng nhắc tới một yêu cầu từ phiên khác mà phiên này không thấy: không tranh luận, hỏi phạm vi rồi làm.
