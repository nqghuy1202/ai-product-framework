# Token và kích thước

Giá trị sẵn dùng nằm trong `tokens.css`. File này giải thích **vai trò** và **luật dùng** của từng nhóm token. Con số cụ thể là `[MẶC ĐỊNH]`; luật dùng là `[CHỐT]`.

## Màu: vai trò
| Token | Dùng cho |
|---|---|
| background, surface | nền trang, nền thẻ. v2 `[MẶC ĐỊNH]`: nền trang ngả xanh nhạt (`#EEF2F7`), thẻ trắng nổi lên; Sáng chói giữ nền trắng |
| bg-glow, shadow-card | v2: quầng nhạt góc trên phải của nền (tuỳ chọn); màu nét của bóng thẻ, chỉ dùng pha trong suốt |
| surface-muted | nền hover, ô bị khoá, ô nhập trên điện thoại |
| surface-sunken | skeleton, vùng lõm |
| border | viền trang trí (thẻ, đường kẻ bảng) |
| border-strong | viền điều khiển, tương phản ≥ 3:1 |
| input-edge | viền ô nhập (nhạt, là ngoại lệ đã được chấp nhận; bù bằng nhãn luôn hiện, viền đậm khi rê, viền màu chủ đạo kèm quầng khi nhập) |
| text, text-muted, text-disabled | chữ chính, chữ phụ, chữ vô hiệu (cố ý vẫn ≥ 4,5:1; trạng thái vô hiệu nhận bằng nền và lý do, không chỉ bằng độ mờ) |
| primary (+hover, on-, container) | **màu chủ đạo duy nhất**, chiếm dưới 10% diện tích màn hình |
| success / warning / danger / info (+container) | nghĩa cố định. Nền nhạt để gây chú ý; `danger-solid` cho nút phá huỷ và trạng thái dừng; `info` dùng cyan để khỏi lẫn với primary |
| grid-cell-edit | nền của dòng mới hoặc ô đang sửa trong lưới |
| chart-1..4 | chỉ dùng cho biểu đồ |

Luật màu:
- Chỉ một màu mang sắc là primary; màu trung tính là xám gần như không ánh màu.
- Quá 30% số hàng mang nền cảnh báo thì phải xem lại ngưỡng cảnh báo.
- Thêm màu nào thì phải có đủ 3 chế độ ngay lúc thêm.
- Độ trong suốt viết bằng `color-mix(in srgb, var(--token) N%, transparent)`.
- Có test cấm viết mã màu (`#`, `rgb(`, `hsl(`, `oklch(`) trong code giao diện.

## Chữ
| Vai trò | Máy tính | Chạm / điện thoại |
|---|---|---|
| Nội dung | 14 / 1,5 / 400 | 16 |
| Nhãn trường | 13 / 500 / text-muted, không dấu hai chấm | 15 |
| Chữ bảng | 13 / 1,25 | thẻ thay bảng |
| Tiêu đề cột | 13,5 / 400 / text-muted, nền trắng, cao 44 | — |
| Tiêu đề trang | 18 / 600 | 19; trang chi tiết 22 / 700 |
| Tiêu đề vùng | 15 / 600 | 15 |
| Chú thích | 12 (không nhỏ hơn) | 12 |
| Số KPI | 24 / 600, chữ số đều | 22–26 / 700 |

Chỉ dùng weight 400, 500, 600 (700 cho số KPI lớn và tiêu đề trên điện thoại). Số viết theo locale (vi-VN: `12.500,25`), đơn vị luôn hiện; ô trống trong bảng hiện `—`. Chỉ được cắt `…` tên dài trong bảng, kèm tooltip; tên trạng thái, lý do cảnh báo và tên hành động không bao giờ bị cắt.

## Khoảng cách
Thang 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Trong component dùng 4–8; trong cùng nhóm 12–16; giữa các thẻ 24–32; giữa các section lớn 48–64. Nguyên tắc **"nén trong widget, thoáng giữa widget"**: những thứ đọc cùng nhau cách nhau ≤ 8 px. Lưới trường 12 cột, khe 20 × 14 px.

## Bo góc
Máy tính: ô nhập 6 · nút 8 (nút danh sách v2 bo 10) · hộp thoại 12 · **thẻ, khung danh sách, khối trang chủ 20** (v2, cũ 16) · viên trạng thái full. Điều khiển trên máy tính không bo từ 16 px trở lên, **trừ nút viên tròn** (`rounded-full`) dùng có chủ đích cho nút phụ nhỏ ở trang chủ và ngăn kéo (Sửa, Tuỳ chỉnh, Đóng, Xong) và nhóm chọn dạng viên. Điện thoại theo kiểu thẻ mềm: ô nhập 14 · nút 16 · thẻ dòng 18 · thẻ nội dung 20 · tấm trượt 24 · thẻ đăng nhập 28.

## Độ nổi
- **v2 `[MẶC ĐỊNH]`** — Máy tính và điện thoại, Sáng và Tối: thẻ **không viền**, nổi bằng `--elevation-card` (hai lớp rất nhẹ: 1 px 4% và 20 px 5% màu `shadow-card`; Tối 30% và 25%). Bảng 0.1.3 trở về trước dùng "thẻ viền 1 px, không bóng" — dự án nào muốn kiểu đó thì ghi vào Ngoại lệ đã duyệt.
- Lớp nổi (hộp thoại, ngăn kéo, menu, toast) có bóng lớn, không viền. Lớp nổi nhỏ (danh sách chọn, lịch, ô lọc cột, menu ⋮) có cả viền lẫn bóng.
- Điện thoại: thẻ không viền, bóng mềm nhuốm màu chủ đạo 15% (`--soft-shadow`) hoặc `--elevation-card`.
- Sáng chói: bỏ mọi bóng (`--elevation-card: none`), thẻ có viền 1,5 px.
- Không dùng glow hay bóng màu cho điều khiển. Ngoại lệ có chủ đích: nút chính trên điện thoại có bóng cùng màu. Gradient chỉ dùng cho **ảnh thay thế** (ảnh bìa chưa có ảnh thật, tô theo màu loại) và hình minh hoạ, không dùng cho nút, thẻ hay nền vùng làm việc `[MẶC ĐỊNH]`.
- Chuyển động chỉ dùng `transform` và `opacity`: 150–200 ms cho hover, 250 ms cho hộp thoại. Người dùng bật giảm chuyển động thì tắt hết.

## Chiều cao điều khiển
| Phần tử | Máy tính | Chạm / điện thoại |
|---|---|---|
| Nút thường | 32 | 44 |
| Nút chính | 32 | 48 (nút chính điện thoại bo 16, đậm 600) |
| Nút thanh công cụ lưới | 32, chữ 13 | — |
| Ô tìm danh sách | 34–38 | 48, bo 16, chữ 16 |
| Ô trường chi tiết | 36 | 48, bo 14, chữ 16, nền surface-muted, không viền |
| Ô nhập đăng nhập | 44 | 52 |
| Hàng danh sách / hàng lưới | 44 / 36 | lưới ≤ 1023 px: 44 |
| Vùng chạm tối thiểu | 24 × 24 | 44 × 44 |

Cấm nút từ 40 px trở lên trên máy tính, vì làm chật màn hình.

## Vỏ ứng dụng
Thanh đầu 52 · sidebar 240, thu gọn 64 (Ctrl+B) · rail tablet 72 · thanh tab module 48 · ngăn kéo phải 480 · hộp thoại 440, loại lớn 600 · hộp chi tiết 80vw × 80vh, bản thu gọn tối đa 860 (rộng 1120) · popover 288, bảng lọc 340 · lưới cố định 8 dòng.

## Thứ tự lớp (z-index)
Sắp từ thấp lên cao: thành phần trong ô và tiêu đề cột dính (1–10) · đầu trang dính (20) · thanh tab module (26, **phải cao hơn** đầu trang để danh sách thả xuống của tab không bị che) · thanh đầu, nút nổi, thanh Lưu cố định (30) · sidebar (35) · flyout, thanh dưới điện thoại (40) · kết quả tìm toàn cục (45) · hộp thoại, popover và lớp phủ (50) · khung cảnh báo (53) · toast (60). Lớp phủ ở z 50 thì menu thả xuống bên trong phải cao hơn 50.

## Focus
Một vòng focus cho toàn app: `outline: var(--focus-w) solid var(--ds-color-focus-ring); outline-offset: 2px`. Độ dày 2 px, ở Sáng chói 3 px. Có test kiểm: file nào dùng `outline-none` phải có `focus-visible:` thay thế.
