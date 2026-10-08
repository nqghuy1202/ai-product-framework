---
title: Luồng nghiệp vụ theo menu — DM Danh mục chung và tham số
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# DM · Danh mục chung và tham số

**Khối:** Nền tảng · **Số menu:** 43 nhãn (43 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Công ty, cơ cấu tổ chức, đối tác, tham số, quy tắc đặt mã, quy trình duyệt, chiều phân tích. Danh mục riêng của từng phân hệ nằm ở luồng "Khai báo" của phân hệ đó.

## Luồng

- **DM-1** Công ty và cơ cấu tổ chức: Dựng cây tổ chức để phân quyền và lọc dữ liệu.
- **DM-2** Đối tác: Một danh mục đối tác dùng chung cho mua, bán, dự án.
- **DM-3** Tham số, quy tắc mã, quy trình duyệt: Mọi thứ khai báo được, không viết cứng (L-1).
- **DM-4** Chiều phân tích và dữ liệu: Mã phân tích dùng chung và công cụ dữ liệu.

### DM-1 · Công ty và cơ cấu tổ chức

Dựng cây tổ chức để phân quyền và lọc dữ liệu.

```text
Công ty ─▶ Cơ cấu tổ chức (trụ sở, chi nhánh = điểm, phòng ban, dự án) ─▶ Lịch làm việc
         └▶ Danh mục địa lý (vị trí, đơn vị hành chính, tuyến đường)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Khai báo công ty | Khai báo công ty `110037102`<br>Danh mục theo công ty `110067102`<br>Danh sách giá trị theo công ty `110066102` | Quản trị | Một hoặc nhiều pháp nhân |
| 2 | Cơ cấu tổ chức | Khai Báo Cơ Cấu Tổ Chức `110052102`<br>Cơ cấu tổ chức - P/B/DA `110063102`<br>QL Cơcấu tổchức - GoolgeChart `110001102` | Quản trị, nhân sự | Cây tổ chức; đơn vị gốc của người dùng quyết phạm vi dữ liệu (L-42, L-43) |
| 3 | Lịch và địa lý | Khai báo lịch làm việc `110025102`<br>Khai báo vị trí địa lý `110007102`<br>Khai báo đơn vị hành chính `110603102`<br>Khai báo tuyến đường `110055102` | Quản trị |  |

### DM-2 · Đối tác

Một danh mục đối tác dùng chung cho mua, bán, dự án.

```text
Nhóm đối tác, kênh ─▶ Khách hàng / Nhà cung cấp / Chủ đầu tư / Thầu phụ (N: thiếu hồ sơ ─▶ Y: đủ hồ sơ)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Nhóm và kênh | Khai báo nhóm khách hàng `110005102`<br>Khai báo nhóm nhà cung cấp `110005102`<br>Khai báo kênh `110006102` | Kinh doanh, mua hàng |  |
| 2 | Khai báo đối tác | Khai báo khách hàng `110054102`<br>Khai báo nhà cung cấp `110054102`<br>Khai báo chủ đầu tư `110054102`<br>Khai báo Thầu phụ `110054102` | Kinh doanh, mua hàng | Đối tác N vẫn chọn được, kèm cảnh báo (L-14) |
| 3 | Liên kết ngoài | Khai báo domain `110028102`<br>Khai báo domain - khách hàng `110008102`<br>Tạo liên kết khách hàng (ERP) với hệ thống ngoài `110064102` | Quản trị |  |

### DM-3 · Tham số, quy tắc mã, quy trình duyệt

Mọi thứ khai báo được, không viết cứng (L-1).

```text
Tham số hệ thống ─▶ Quy tắc đặt mã ─▶ Quy trình duyệt (mặc định tắt) ─▶ Chế độ điều kiện kiểm soát (mặc định cảnh báo)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Tham số | Khai báo các tham số hệ thống `110033102`<br>QLý Tham số Hệ thống `110017102`<br>Khai báo tham số theo đơn vị `100117102`<br>Khai báo cột trung gian `110043102` | Quản trị | Tham số thay số viết cứng (L-53) |
| 2 | Quy tắc đặt mã | Khai báo quy tắc đặt mã gốc `110068102`<br>Khai báo quy tắc đặt mã `110044102` | Quản trị |  |
| 3 | Quy trình duyệt | Khai báo quy trình duyệt `110046102`<br>Khai báo quyền phê duyệt `110045102`<br>Định nghĩa thông tin duyệt `110062102`<br>Thông tin quy trình duyệt `110048102`<br>Khai báo luân chuyển chứng từ `110049102` | Quản trị | Gắn vào điểm Hoàn thành; mặc định tắt; cờ tự duyệt mặc định không (L-15…L-18) |
| 4 | Điều kiện kiểm soát | **[MỚI]** Chế độ điều kiện kiểm soát | Quản trị | Cảnh báo hoặc chặn theo loại điều kiện, ai được ghi đè (L-21…L-23) |
| 5 | Thông điệp, email, lưu trữ | Khai báo ngôn ngữ thông điệp `110029102`<br>Định nghĩa tham số của Email `110061102`<br>Quản lý mail mẫu `110011102`<br>Khai báo thư mục lưu trữ `110041102`<br>Khai báo loại bài viết `110047102` | Quản trị |  |

### DM-4 · Chiều phân tích và dữ liệu

Mã phân tích dùng chung và công cụ dữ liệu.

```text
Định nghĩa chiều phân tích ─▶ gắn vào chứng từ, báo cáo động
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Chiều phân tích, báo cáo động | Định nghĩa chiều phân tích `111501102, 710101102`<br>Định nghĩa báo cáo động `110065102`<br>Quản lý đối tượng tổng hợp từ dữ liệu `111503102` | Quản trị, kế toán |  |
| 2 | Nạp dữ liệu thô | Đổ dữ liệu thô từ excel `111502102` | Quản trị | Nạp Excel báo lỗi theo dòng (L-51) |
| 3 | Danh mục chuẩn ngoài | Khai báo HS code `110053102`<br>OmniClass code `100214202`<br>BC dữ liệu VTIC `110057102` | Quản trị |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### DM-1 · Công ty và cơ cấu tổ chức (10)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo vị trí địa lý | `110007102` | Khai báo |  |
| Khai báo lịch làm việc | `110025102` | Khai báo |  |
| Khai báo công ty | `110037102` | Khai báo |  |
| Khai Báo Cơ Cấu Tổ Chức | `110052102` | Khai báo |  |
| Khai báo tuyến đường | `110055102` | Khai báo |  |
| Danh sách giá trị theo công ty | `110066102` | Khai báo |  |
| Danh mục theo công ty | `110067102` | Khai báo |  |
| Khai báo đơn vị hành chính | `110603102` | Khai báo |  |
| QL Cơcấu tổchức - GoolgeChart | `110001102` | Lập | Ẩn |
| Cơ cấu tổ chức - P/B/DA | `110063102` | Lập |  |

### DM-2 · Đối tác (10)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo nhóm nhà cung cấp | `110005102` | Khai báo |  |
| Khai báo nhóm khách hàng | `110005102` | Khai báo |  |
| Khai báo kênh | `110006102` | Khai báo |  |
| Khai báo domain - khách hàng | `110008102` | Khai báo |  |
| Khai báo domain | `110028102` | Khai báo |  |
| Khai báo chủ đầu tư | `110054102` | Khai báo |  |
| Khai báo nhà cung cấp | `110054102` | Khai báo |  |
| Khai báo Thầu phụ | `110054102` | Khai báo |  |
| Khai báo khách hàng | `110054102` | Khai báo |  |
| Tạo liên kết khách hàng (ERP) với hệ thống ngoài | `110064102` | Lập |  |

### DM-3 · Tham số, quy tắc mã, quy trình duyệt (16)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo tham số theo đơn vị | `100117102` | Khai báo |  |
| Khai báo ngôn ngữ thông điệp | `110029102` | Khai báo |  |
| Khai báo các tham số hệ thống | `110033102` | Khai báo |  |
| Khai báo thư mục lưu trữ | `110041102` | Khai báo |  |
| Khai báo cột trung gian | `110043102` | Khai báo |  |
| Khai báo quy tắc đặt mã | `110044102` | Khai báo |  |
| Khai báo quyền phê duyệt | `110045102` | Khai báo |  |
| Khai báo quy trình duyệt | `110046102` | Khai báo |  |
| Khai báo loại bài viết | `110047102` | Khai báo |  |
| Khai báo luân chuyển chứng từ | `110049102` | Khai báo |  |
| Định nghĩa tham số của Email | `110061102` | Khai báo |  |
| Định nghĩa thông tin duyệt | `110062102` | Khai báo |  |
| Khai báo quy tắc đặt mã gốc | `110068102` | Khai báo |  |
| Quản lý mail mẫu | `110011102` | Lập |  |
| QLý Tham số Hệ thống | `110017102` | Lập | Ẩn |
| Thông tin quy trình duyệt | `110048102` | Lập | Ẩn |

### DM-4 · Chiều phân tích và dữ liệu (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo HS code | `110053102` | Khai báo |  |
| Định nghĩa báo cáo động | `110065102` | Khai báo |  |
| Định nghĩa chiều phân tích | `111501102` | Khai báo |  |
| Quản lý đối tượng tổng hợp từ dữ liệu | `111503102` | Lập |  |
| Đổ dữ liệu thô từ excel | `111502102` | Xử lý | Nạp Excel, báo lỗi theo dòng (L-51) |
| OmniClass code | `100214202` | Báo cáo |  |
| BC dữ liệu VTIC | `110057102` | Báo cáo | biến thể |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
