---
title: Luồng nghiệp vụ theo menu — HT Hệ thống, người dùng và duyệt
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# HT · Hệ thống, người dùng và duyệt

**Khối:** Nền tảng · **Số menu:** 69 nhãn (72 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Người dùng, nhóm quyền, menu, luồng duyệt chung, thông báo, hướng dẫn sử dụng, quản trị kỹ thuật.

## Luồng

- **HT-1** Người dùng và phân quyền: Cấp quyền dùng đúng trang cho đúng người.
- **HT-2** Duyệt chứng từ (luồng chung): Mọi chứng từ có gắn quy trình duyệt đi chung một hàng đợi.
- **HT-3** Thông báo, trao đổi, tệp: Thông báo việc cần làm và trao đổi trên chứng từ.
- **HT-4** Hướng dẫn sử dụng: Viết, duyệt và phát hành bài hướng dẫn.
- **HT-5** Quản trị kỹ thuật và nhật ký: Theo dõi đăng nhập, lỗi, đồng bộ dữ liệu.
- **HT-6** Trang chủ và cá nhân hoá: Trang đầu và tuỳ chỉnh giao diện của từng người.

### HT-1 · Người dùng và phân quyền

Cấp quyền dùng đúng trang cho đúng người.

```text
Khai báo Menu ─▶ Nhóm quyền ─▶ Gán menu vào nhóm ─▶ Người sử dụng ─▶ Đăng nhập, chọn nhóm quyền
                                                      │
                                       BC phân quyền ◀┘ (rà soát định kỳ)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Khai báo trang và menu | Khai báo Menu `100101102`<br>Khai báo nghiệp vụ và Menu `100115102` | Quản trị hệ thống | Danh sách menu theo phân hệ |
| 2 | Lập nhóm quyền, gán menu | Khai báo nhóm quyền `100120102`<br>Khai báo nhóm quyền - GS `100120102`<br>Thêm Menu Vào Nhóm Quyền `100106101`<br>Gán chức năng `11001910101` | Quản trị hệ thống | Nhóm quyền có danh sách menu |
| 3 | Tạo người dùng | **[MỚI]** Yêu cầu cấp tài khoản<br>Khai báo người sử dụng `100206102`<br>Khai báo người sử dụng - APP `100107102`<br>Khai báo người sử dụng - GS `100121102`<br>Khai báo người dùng - Đối tác `100212102`<br>Quản lý người dùng - Khách hàng `100217102`<br>Quản lý tài khoản công ty `100218102`<br>Khai báo tài khoản `100118102` | Quản trị hệ thống | Tài khoản trỏ tới nhân viên hoặc đối tác (L-44, L-46) |
| 4 | Đăng nhập, chọn nhóm quyền | Login `100103101`<br>Login Phone `100113102`<br>Chọn Nhóm Quyền `100105101`<br>Thay Đổi Mật Khẩu `100104101` | Mọi người dùng | Phiên làm việc theo nhóm quyền đã chọn |
| 5 | Rà soát quyền và kiểm soát | BC phân quyền hệ thống `100215202`<br>**[MỚI]** Rà soát kiểm soát | Quản trị, kiểm soát nội bộ | Danh sách quyền, quy trình đang tắt duyệt, đang cho tự duyệt (L-4, L-25) |

### HT-2 · Duyệt chứng từ (luồng chung)

Mọi chứng từ có gắn quy trình duyệt đi chung một hàng đợi.

```text
Chứng từ N ──Hoàn thành──▶ (có quy trình) W ──Duyệt chứng từ──▶ duyệt hết ─▶ Y
                                           └──từ chối (lý do)─▶ R ─▶ người lập Hoàn tác ─▶ N
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Khai báo quy trình duyệt | → [DM-3 Tham số, quy tắc mã, quy trình duyệt](dm-danh-muc-chung.md) | Quản trị hệ thống | Quy trình gắn vào điểm Hoàn thành của loại chứng từ; mặc định tắt (L-15, L-16) |
| 2 | Duyệt hoặc từ chối | Duyệt chứng từ `100209102, 800005102, 801107102`<br>Duyệt chứng từ - mới `100221102`<br>Duyệt chứng từ - V3 `100223102`<br>Chi tiết duyệt chứng từ `10020910201` | Người duyệt từng bước | Y khi duyệt hết bước; R kèm lý do khi từ chối (L-8, L-19) |
| 3 | Theo dõi trạng thái | Cập nhật trạng thái chứng từ `100214102` | Người lập, quản trị | Chỉ xem; không đổi trạng thái tay (L-6) |
| 4 | Báo cáo duyệt | Báo cáo duyệt chứng từ `801105202`<br>BC duyệt chứng từ `990102202` | Quản lý | Thời gian chờ duyệt, số chứng từ trả lại |

Các menu "Duyệt <loại chứng từ>" ở phân hệ khác là **danh sách lọc sẵn** của hàng đợi này theo một loại chứng từ, chỉ có việc khi loại đó bật quy trình duyệt.

### HT-3 · Thông báo, trao đổi, tệp

Thông báo việc cần làm và trao đổi trên chứng từ.

```text
Sự kiện (gửi duyệt, trả lại, đến hạn) ─▶ Thông báo ─▶ người nhận mở chứng từ ─▶ trao đổi, đính kèm tệp
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Quản lý và hiển thị thông báo | Quản lý thông báo `100203102`<br>Hiển thị Thông báo `100202102, 800006102` | Hệ thống, quản trị | Việc cần làm của từng người |
| 2 | Trao đổi, tệp đính kèm | Chat hệ thống `100227102`<br>\*\*Quản lý tin nhắn và tập tin `100208102`<br>Quản lý Comment Trao Đổi `110016102`<br>Trao Đổi - Bình Luận `130416102`<br>Xem tập tin đính kèm `100205102`<br>Danh Sách File Upload `130415102` | Mọi người dùng | Bình luận và tệp gắn với chứng từ |
| 3 | Mẫu tệp, mẫu Excel | Quản lý tập tin mẫu `100123102`<br>Quản lý lưu trữ file excel mẫu `100213102`<br>Xem lịch sử gửi mail `100222102` | Quản trị | Mẫu cho nút Tải mẫu và Nạp Excel (L-51) |

### HT-4 · Hướng dẫn sử dụng

Viết, duyệt và phát hành bài hướng dẫn.

```text
Khai báo loại bài viết ─▶ Viết bài ─▶ Duyệt bài ─▶ Phân quyền đọc ─▶ Trợ giúp trong ứng dụng
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Viết bài | Khai báo bài viết (HDSD) `100116102`<br>Nhập tài liệu nghiệp vụ GreenSys `100225102` | Người viết hướng dẫn | Bài ở N |
| 2 | Duyệt, phân quyền đọc | Duyệt bài viết (HDSD) `100129102`<br>Quản lý nhóm quyền bài viết (HDSD) `100125102` | Người duyệt nội dung | Bài ở Y, hiện cho nhóm được đọc |
| 3 | Đọc | Trợ giúp `100210102`<br>Trợ giúp mobile `100215102`<br>Xem bài viết kỹ thuật `100126102`<br>Xem sơ đồ nghiệp vụ GreenSys `100224102`<br>Giới thiệu `100112102` | Mọi người dùng |  |

### HT-5 · Quản trị kỹ thuật và nhật ký

Theo dõi đăng nhập, lỗi, đồng bộ dữ liệu.

```text
Nhật ký đăng nhập ─┐
Lỗi hệ thống ──────┼─▶ Quản trị kỹ thuật xử lý
Đồng bộ dữ liệu ───┘
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Nhật ký đăng nhập và nhập liệu | Xem lịch sử đăng nhập `100220102`<br>BC lịch sử đăng nhập `100201202`<br>Xem tình hình nhập liệu `100202202`<br>Xem tổng quan người dùng `100212202`<br>**[MỚI]** Nhật ký kiểm toán | Quản trị | Tra cứu theo người, thời gian (L-37) |
| 2 | Lỗi và cấu hình | Thống kê lỗi hệ thống (Apex Log) `100132102`<br>Kiểm tra lỗi thiết lập `100135102`<br>Danh sách biến toàn cục `100110101`<br>QL Hệ thống 001 `100101902`<br>Xem nguồn dữ liệu `100127102` | Quản trị kỹ thuật |  |
| 3 | Đồng bộ, kết nối ngoài | Đồng bộ dữ liệu DEV GreenSys `100134102`<br>Đồng Bộ Dữ Liệu Google Sheet `100228102`<br>Xem lịch sử kết nối hợp đồng điện tử `100219102`<br>Quản lý thông tin đăng ký `100216102`<br>Hỗ trợ lập trình Apex `100226102` | Quản trị kỹ thuật |  |

### HT-6 · Trang chủ và cá nhân hoá

Trang đầu và tuỳ chỉnh giao diện của từng người.

```text
Đăng nhập ─▶ Trang chủ / Dashboard cá nhân ─▶ tuỳ chỉnh giao diện, giá trị mặc định
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Trang chủ, dashboard | Trang chủ `801101102`<br>Mở Dashboard `100111101`<br>Dashboard người dùng `100213202`<br>Dashboard nhân viên `110001302`<br>Dashboard nhân viên 2 `100229102`<br>Quản lý Dashboard `110019102` | Mọi người dùng |  |
| 2 | Tuỳ chỉnh | Tùy chỉnh giao diện người dùng `100130102`<br>Tùy chỉnh giá trị mặc định `100136102`<br>Chọn tông màu `100211102`<br>Quản lý danh sách hình icon `100128102` | Người dùng, quản trị |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### HT-1 · Người dùng và phân quyền (18)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo Menu | `100101102` | Khai báo |  |
| Khai báo người sử dụng - APP | `100107102` | Khai báo |  |
| Khai báo nghiệp vụ và Menu | `100115102` | Khai báo |  |
| Khai báo tài khoản | `100118102` | Khai báo |  |
| Khai báo nhóm quyền | `100120102` | Khai báo |  |
| Khai báo nhóm quyền - GS | `100120102` | Khai báo | biến thể |
| Khai báo người sử dụng - GS | `100121102` | Khai báo | biến thể |
| Khai báo người sử dụng | `100206102` | Khai báo |  |
| Khai báo người dùng - Đối tác | `100212102` | Khai báo |  |
| Login | `100103101` | Lập | Ẩn |
| Thay Đổi Mật Khẩu | `100104101` | Lập | Ẩn |
| Chọn Nhóm Quyền | `100105101` | Lập | Ẩn |
| Thêm Menu Vào Nhóm Quyền | `100106101` | Lập | Ẩn |
| Login Phone | `100113102` | Lập | Ẩn |
| Quản lý người dùng - Khách hàng | `100217102` | Lập |  |
| Quản lý tài khoản công ty | `100218102` | Lập |  |
| Gán chức năng | `11001910101` | Lập | Ẩn |
| BC phân quyền hệ thống | `100215202` | Báo cáo |  |

### HT-2 · Duyệt chứng từ (luồng chung) (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Chi tiết duyệt chứng từ | `10020910201` | Lập | Ẩn |
| Duyệt chứng từ | `100209102, 800005102, 801107102` | Duyệt | ×3; app; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt chứng từ - mới | `100221102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt chứng từ - V3 | `100223102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Cập nhật trạng thái chứng từ | `100214102` | Xử lý | [XUNG ĐỘT L-6] chỉ xem; trạng thái do luồng quyết |
| Báo cáo duyệt chứng từ | `801105202` | Báo cáo | app |
| BC duyệt chứng từ | `990102202` | Báo cáo |  |

### HT-3 · Thông báo, trao đổi, tệp (11)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Quản lý tập tin mẫu | `100123102` | Lập |  |
| Hiển thị Thông báo | `100202102, 800006102` | Lập | ×2; Ẩn; app |
| Quản lý thông báo | `100203102` | Lập |  |
| \*\*Quản lý tin nhắn và tập tin | `100208102` | Lập |  |
| Quản lý lưu trữ file excel mẫu | `100213102` | Lập |  |
| Chat hệ thống | `100227102` | Lập |  |
| Quản lý Comment Trao Đổi | `110016102` | Lập | Ẩn |
| Danh Sách File Upload | `130415102` | Lập | Ẩn |
| Trao Đổi - Bình Luận | `130416102` | Lập | Ẩn |
| Xem tập tin đính kèm | `100205102` | Tra cứu | Ẩn |
| Xem lịch sử gửi mail | `100222102` | Tra cứu |  |

### HT-4 · Hướng dẫn sử dụng (9)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo bài viết (HDSD) | `100116102` | Khai báo |  |
| Giới thiệu | `100112102` | Lập | Ẩn |
| Quản lý nhóm quyền bài viết (HDSD) | `100125102` | Lập |  |
| Trợ giúp | `100210102` | Lập | Ẩn |
| Trợ giúp mobile | `100215102` | Lập | Ẩn |
| Nhập tài liệu nghiệp vụ GreenSys | `100225102` | Lập |  |
| Duyệt bài viết (HDSD) | `100129102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xem bài viết kỹ thuật | `100126102` | Tra cứu |  |
| Xem sơ đồ nghiệp vụ GreenSys | `100224102` | Tra cứu |  |

### HT-5 · Quản trị kỹ thuật và nhật ký (14)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| QL Hệ thống 001 | `100101902` | Lập |  |
| Danh sách biến toàn cục | `100110101` | Lập | Ẩn |
| Thống kê lỗi hệ thống (Apex Log) | `100132102` | Lập |  |
| Đồng bộ dữ liệu DEV GreenSys | `100134102` | Lập |  |
| Kiểm tra lỗi thiết lập | `100135102` | Lập |  |
| Quản lý thông tin đăng ký | `100216102` | Lập |  |
| Hỗ trợ lập trình Apex | `100226102` | Lập |  |
| Đồng Bộ Dữ Liệu Google Sheet | `100228102` | Lập |  |
| Xem nguồn dữ liệu | `100127102` | Tra cứu | Ẩn |
| Xem lịch sử kết nối hợp đồng điện tử | `100219102` | Tra cứu |  |
| Xem lịch sử đăng nhập | `100220102` | Tra cứu |  |
| BC lịch sử đăng nhập | `100201202` | Báo cáo |  |
| Xem tình hình nhập liệu | `100202202` | Báo cáo |  |
| Xem tổng quan người dùng | `100212202` | Báo cáo |  |

### HT-6 · Trang chủ và cá nhân hoá (10)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Quản lý danh sách hình icon | `100128102` | Khai báo |  |
| Mở Dashboard | `100111101` | Lập | Ẩn |
| Tùy chỉnh giao diện người dùng | `100130102` | Lập |  |
| Tùy chỉnh giá trị mặc định | `100136102` | Lập |  |
| Chọn tông màu | `100211102` | Lập | Ẩn |
| Quản lý Dashboard | `110019102` | Lập | Ẩn |
| Trang chủ | `801101102` | Lập | Ẩn; app |
| Dashboard người dùng | `100213202` | Báo cáo |  |
| Dashboard nhân viên 2 | `100229102` | Báo cáo |  |
| Dashboard nhân viên | `110001302` | Báo cáo |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
