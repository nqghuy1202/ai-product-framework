---
title: Luồng nghiệp vụ theo menu — CRM Quản lý khách hàng (CRM)
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# CRM · Quản lý khách hàng (CRM)

**Khối:** Kinh doanh mở rộng · **Số menu:** 42 nhãn (46 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Khách tiềm năng, cơ hội, báo giá, chăm sóc và khiếu nại, trao đổi với khách.

## Luồng

- **CRM-1** Khách tiềm năng đến đơn hàng: Phễu bán hàng.
- **CRM-2** Chăm sóc khách hàng, khiếu nại: Chương trình chăm sóc và xử lý khiếu nại.
- **CRM-3** Trao đổi với khách, bộ CRM gọn: Kênh trao đổi và bộ trang CRM rút gọn (nhóm 10).

### CRM-1 · Khách tiềm năng đến đơn hàng

Phễu bán hàng.

```text
Khách tiềm năng ─▶ Hoạt động kinh doanh ─▶ Cơ hội ─▶ Báo giá ─▶ Đơn hàng (BAN-1)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Khách | Khách hàng tiềm năng `210401102`<br>Khai báo khách hàng - CRM `210202102, 210405102`<br>Thông Tin Khách Hàng `102060301, 210203102`<br>Danh Sách Người Liên Hệ `210205102`<br>Thêm Người Liên Hệ `210206102` | Kinh doanh | Khách đủ hồ sơ thì sang danh mục đối tác (DM-2) |
| 2 | Cơ hội | Hoạt động kinh doanh `210403102`<br>Cơ hội bán hàng `210402102`<br>Quản lý cơ hội kinh doanh `210210102` | Kinh doanh |  |
| 3 | Báo giá, đơn | Báo giá `210404102`<br>Lập đơn hàng - CRM `210407102`<br>Lập đơn hàng bán - CRM `210201102`<br>Khai báo Đơn hàng `210211102`<br>Thông Tin Đơn Hàng `106030401, 210204102` | Kinh doanh | Sang BAN-1 |
| 4 | Báo cáo | BC quản trị khách hàng `300119202`<br>Top 10 KH có DS cao nhất `990101308`<br>Số lượng khách hàng mới `202150101, 990101306` | Quản lý kinh doanh |  |

### CRM-2 · Chăm sóc khách hàng, khiếu nại

Chương trình chăm sóc và xử lý khiếu nại.

```text
Chương trình chăm sóc ─▶ Hoạt động chăm sóc ─▶ Đánh giá chương trình
Khiếu nại ─▶ ghi nhận ─▶ xử lý (BT-1 nếu là bảo hành)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Chăm sóc | Quản Lý Chương Trình Chăm Sóc Khách Hàng `210208102`<br>Quản Lý Chăm Sóc Khách Hàng `210207102`<br>BC tình hình chăm sóc khách hàng `300110202` | Chăm sóc khách hàng |  |
| 2 | Khiếu nại | Ghi Nhận Thông Tin Khiếu Nại `210209102` | Chăm sóc khách hàng |  |
| 3 | Đánh giá | Lập phiếu đánh giá chương trình chăm sóc `180207102`<br>Duyệt đánh giá KPI theo chương trình chăm sóc `180208102`<br>\*\*Lập phiếu đánh giá khách hàng `180203102`<br>\*\*Duyệt đánh giá KPI theo khách hàng `180204102` | Quản lý |  |

### CRM-3 · Trao đổi với khách, bộ CRM gọn

Kênh trao đổi và bộ trang CRM rút gọn (nhóm 10).

```text
Khách ⇄ nhân viên: Messenger, trao đổi, bình luận trên đơn
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Trao đổi | Messenger `210408102`<br>Trao Đổi Khách Hàng `112010101`<br>Thêm Comment Vào Đơn Hàng `106030501` | Kinh doanh |  |
| 2 | Bộ CRM gọn | Danh Sách Khách Hàng `102060201`<br>Quản Lý Đơn Hàng `106030101`<br>Khai Báo Đơn Hàng Bán `106030201`<br>Quản Lý Người Dùng `101020601` | Kinh doanh | Phiên bản rút gọn, dùng khi khách chỉ cần CRM |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### CRM-1 · Khách tiềm năng đến đơn hàng (25)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai Báo Đơn Hàng Bán | `106030201` | Khai báo |  |
| Khai báo Đơn hàng | `210211102` | Khai báo | Ẩn |
| Khai báo khách hàng - CRM | `210202102, 210405102` | Khai báo | ×2; biến thể |
| Danh Sách Khách Hàng | `102060201` | Lập |  |
| Thông Tin Khách Hàng | `102060301, 210203102` | Lập | ×2 |
| Danh Sách Người Liên Hệ Của Khách Hàng | `102120201` | Lập |  |
| Thêm Người Liên Hệ Khách Hàng | `102120301` | Lập |  |
| Quản Lý Đơn Hàng | `106030101` | Lập |  |
| Thêm Sản Phẩm Vào Đơn Hàng | `106030301` | Lập |  |
| Thông Tin Đơn Hàng | `106030401, 210204102` | Lập | ×2 |
| Thêm Công Việc Thuộc Đơn Hàng | `106030601` | Lập |  |
| Thêm Sản Phẩm Vào ĐH | `110406101` | Lập | Ẩn |
| Lập đơn hàng bán - CRM | `210201102` | Lập | biến thể |
| Danh Sách Người Liên Hệ | `210205102` | Lập | Ẩn |
| Thêm Người Liên Hệ | `210206102` | Lập | Ẩn |
| Quản lý cơ hội kinh doanh | `210210102` | Lập |  |
| Khách hàng tiềm năng | `210401102` | Lập |  |
| Cơ hội bán hàng | `210402102` | Lập |  |
| Hoạt động kinh doanh | `210403102` | Lập |  |
| Báo giá | `210404102` | Lập |  |
| Lập đơn hàng - CRM | `210407102` | Lập | biến thể |
| Số lượng khách hàng mới | `202150101, 990101306` | Báo cáo | ×2 |
| BC quản trị khách hàng | `300119202` | Báo cáo |  |
| BCQT Quản lý khách hàng | `981502202` | Báo cáo |  |
| Top 10 KH có DS cao nhất | `990101308` | Báo cáo | Ẩn |

### CRM-2 · Chăm sóc khách hàng, khiếu nại (8)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| \*\*Lập phiếu đánh giá khách hàng | `180203102` | Lập | Ẩn |
| \*\*Duyệt đánh giá KPI theo khách hàng | `180204102` | Lập | Ẩn |
| Lập phiếu đánh giá chương trình chăm sóc | `180207102` | Lập | Ẩn |
| Quản Lý Chăm Sóc Khách Hàng | `210207102` | Lập |  |
| Quản Lý Chương Trình Chăm Sóc Khách Hàng | `210208102` | Lập |  |
| Ghi Nhận Thông Tin Khiếu Nại | `210209102` | Lập |  |
| Duyệt đánh giá KPI theo chương trình chăm sóc | `180208102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| BC tình hình chăm sóc khách hàng | `300110202` | Báo cáo |  |

### CRM-3 · Trao đổi với khách, bộ CRM gọn (9)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai Báo Nhân Viên\_1 | `101020501` | Khai báo |  |
| Khai báo nhân viên - CRM | `210406102` | Khai báo | biến thể |
| Quản lý Nhân Viên | `101020401` | Lập |  |
| Quản Lý Người Dùng | `101020601` | Lập |  |
| Danh Sách User | `102120401` | Lập |  |
| Danh Sách File\_Upload | `102120501` | Lập |  |
| Thêm Comment Vào Đơn Hàng | `106030501` | Lập |  |
| Trao Đổi Khách Hàng | `112010101` | Lập |  |
| Messenger | `210408102` | Lập |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
