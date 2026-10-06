# Ba cỡ màn hình

## Điểm ngắt [CHỐT]
| Vùng | Điều kiện |
|---|---|
| Điện thoại | `max-width: 767px` (CSS) và hook `useIsPhone()` ở JS dùng cùng ngưỡng |
| Tablet / laptop gọn | `768px – 1199px` |
| Máy tính | `min-width: 1200px` |
| Lưới hàng cao cho ngón tay | `max-width: 1023px` |
| Màn thấp | `max-height: 799px` thì ẩn breadcrumb |
| Kích thước chạm | `pointer: coarse`, **không** theo bề rộng |

Điểm ngắt mặc định của Tailwind (`lg` 1024, `xl` 1280) **không khớp** 1200. Khai thêm `--breakpoint-tablet: 768px` và `--breakpoint-desktop: 1200px` trong `@theme` (đã có trong `tokens.css`) rồi dùng `tablet:` / `desktop:`.

**Ma trận kiểm hiển thị**: 1440×900, 1920×1080, 1280×800, 1024×768 ngang, 768×1024 dọc, 390×844, 360×800, 320 px. Mỗi cỡ kiểm đủ 3 chế độ màu, kèm thu phóng 200%.

## Hành vi theo cỡ
| Chủ đề | Máy tính (≥ 1200) | Tablet (768–1199) | Điện thoại (< 768) |
|---|---|---|---|
| Điều hướng | Sidebar 240 px chỉ gồm tên module, có ô lọc menu, chia nhóm; thu gọn còn 64 px; mỗi module có thanh tab ngang 48 px | Rail 72 px, nhãn dưới icon; thanh tab như máy tính | Ẩn sidebar và thanh tab. Thanh đầu 52 px: nút menu 44, tên, chuông, avatar. Dải "module › tab" mở menu. Menu là tấm trượt cao 90% (ô tìm, Gần đây, Đã ghim, lưới module 3 cột). Thanh dưới là viên nổi 4 mục |
| Thanh đầu | Ô tìm toàn cục ≤ 460 px, các chip ngữ cảnh, nút đổi chế độ màu, chuông, thẻ người dùng | Ô tìm ≤ 320; thẻ người dùng chỉ còn avatar | Ẩn ô tìm và chip; menu nổi rộng bằng màn hình trừ 12 px mỗi bên |
| Lề trang | 14 / 24 / 32 (trên / ngang / dưới) | 16 | 12 / 16 / (thanh dưới + 24) |
| Đầu trang | Dính dưới thanh tab: breadcrumb, tiêu đề 18 px, các nút bên phải | như máy tính | Ẩn breadcrumb, tiêu đề 19 px. Trang chi tiết: đầu trang không dính, tiêu đề 22 px/700, nút quay lại tròn 44 px |
| Danh sách | **Tràn sát mép**, cao hết màn hình, bảng cuộn bên trong, phân trang ở đáy | Tràn mép, cao hết màn hình | Bảng thành **thẻ**: cột đầu đậm làm tiêu đề, dòng phụ, viên trạng thái, ≤ 3 cặp nhãn–giá trị. Thanh tìm trắng 48 px có nút lọc bên trong. Thẻ cách nhau 8 px, lề 16 px |
| Lưới nhập | Kiểu bảng tính, chữ 13, hàng 36, chỉ kẻ ngang, cao 8 dòng | Hàng 44 khi ≤ 1023 px | Thẻ; bấm thẻ mở **tấm sửa từ đáy** (mỗi cột một ô, nút Lưu dòng và Xoá); nút nổi ＋ 56 px |
| Bảng chỉ xem | Bảng | Bảng | Mỗi dòng một thẻ bo 16; mỗi ô là cặp nhãn bên trái (≤ 45%, text-muted) và giá trị bên phải |
| Biểu mẫu chi tiết | Lưới 12 cột; mỗi trường chiếm 2, 3, 4, 6 hoặc 12 cột | 2 trường một hàng | **Một trường một hàng** |
| Hộp thoại | Giữa màn hình, 440 px, bo 12; hộp chi tiết 80% màn hình | như máy tính | **Tấm trượt từ đáy**: bo góc trên 24, cao tối đa 92dvh, tay nắm 40×6, các nút ở chân xếp dọc và rộng hết tấm |
| Ngăn kéo | Bên phải, 480 px | Cao hết màn | Tấm trượt từ đáy |
| Nút chính | 32 px. Ở danh sách đặt góc phải đầu trang; ở trang chi tiết là nút cuối của đầu phiếu dính | 44 px khi chạm | **Nút nổi** góc dưới phải (nút Thêm là nút tròn 56 px chỉ có dấu +). Trang chi tiết có **thanh Lưu/Hoàn thành cố định** trên thanh dưới |
| Thẻ, KPI | Viền, không bóng, bo 16; KPI dùng `auto-fit minmax(180px,1fr)` | | Thẻ không viền, bo 20, bóng mềm; KPI 2 cột |
| Tràn | Ô bảng `nowrap`, cắt `…` ở 280 px | | Không cuộn ngang trang; mọi lưới thẻ `minmax(0,1fr)` + `min-w-0` |
| Mật độ | Tối đa 6 khối, 4 KPI mỗi màn | Giảm còn 4 khối | Mỗi thẻ: tiêu đề, dòng phụ, viên trạng thái, ≤ 3 cặp nhãn–giá trị |

## Phần tử cố định trên điện thoại
- Nút nổi nằm trên thanh dưới: `bottom: max(12px, env(safe-area-inset-bottom)) + 80px`. Nếu trang có thanh Lưu cố định thì đặt nút nổi cao thêm nữa.
- Trang có thanh cố định cần `padding-bottom` tương ứng để nội dung cuối không bị che.
- Luôn tính `env(safe-area-inset-bottom)`.
