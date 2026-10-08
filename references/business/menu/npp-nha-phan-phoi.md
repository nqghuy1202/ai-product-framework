---
title: Luồng nghiệp vụ theo menu — NPP Nhà phân phối, DMS
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# NPP · Nhà phân phối, DMS

**Khối:** Kinh doanh mở rộng · **Số menu:** 23 nhãn (27 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Nhà phân phối đặt hàng, cổng thông tin nhà phân phối, nhân viên thị trường viếng thăm và giám sát.

## Luồng

- **NPP-1** Nhà phân phối đặt hàng: Đơn của nhà phân phối thành đơn bán.
- **NPP-2** Viếng thăm và giám sát (DMS): Nhân viên thị trường đi tuyến.
- **NPP-3** Cổng thông tin nhà phân phối: Nhà phân phối tự xem.

### NPP-1 · Nhà phân phối đặt hàng

Đơn của nhà phân phối thành đơn bán.

```text
NPP xem giá, khuyến mãi (NPP-3) ─▶ Lập đơn hàng NPP (app/cổng) ─▶ Tạo đơn bán từ dữ liệu liên kết ─▶ BAN-1
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Khai báo | Khai báo thông tin nhà phân phối `110058102` | Kinh doanh kênh |  |
| 2 | Đặt hàng | Lập đơn hàng Nhà phân phối `240201102, 800506102`<br>Lập đơn hàng Nhà phân phối `240201102, 800506102`<br>Lập đơn hàng bán Nhà phân phối `802401102`<br>Thêm Sản phẩm vào ĐH NPP `240208102`<br>Khai báo Đơn hàng NPP `240202102` | Nhà phân phối, nhân viên thị trường |  |
| 3 | Chuyển thành đơn bán | Tạo đơn hàng bán NPP từ dữ liệu liên kết `150317102` | Kinh doanh kênh | Sang BAN-1, có liên kết |
| 4 | Báo cáo | BC bán hàng cho nhà phân phối `304702202`<br>BC mua hàng của nhà phân phối `241006301`<br>Chi tiết công nợ cho nhà phân phối `304706202` | Kinh doanh kênh |  |

### NPP-2 · Viếng thăm và giám sát (DMS)

Nhân viên thị trường đi tuyến.

```text
Cắm điểm NPP ─▶ Viếng thăm (app, toạ độ) ─▶ Lịch sử thăm ─▶ Giám sát nhân viên ─▶ KPI DMS
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Đi tuyến | Cắm điểm nhà phân phối `800902102`<br>Thăm nhà phân phối `800901102`<br>Lịch sử thăm nhà phân phối `800903102` | Nhân viên thị trường | Kênh app |
| 2 | Giám sát | Giám sát nhân viên `800904102`<br>Báo cáo theo dõi KPI DMS `981507202`<br>Báo cáo theo dõi viếng thăm KH `981506202` | Quản lý kênh |  |

### NPP-3 · Cổng thông tin nhà phân phối

Nhà phân phối tự xem.

```text
NPP đăng nhập ─▶ xem giá, khuyến mãi, cảnh báo, tồn ─▶ trao đổi
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Xem | Xem bảng giá bán nhà phân phối `240203102, 802403102`<br>Xem chương trình khuyến mãi nhà phân phối `240204102, 802404102`<br>Xem danh mục cảnh báo `240206102`<br>Xem thông tin cần biết `240207102`<br>Dashboard nhà phân phối `241001302`<br>Báo cáo theo dõi tồn kho tại NPP `300431202` | Nhà phân phối |  |
| 2 | Trao đổi | Trao đổi với nhà phân phối `240205102` | Nhà phân phối, kinh doanh |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### NPP-1 · Nhà phân phối đặt hàng (10)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo thông tin nhà phân phối | `110058102` | Khai báo | ×2 |
| Khai báo Đơn hàng NPP | `240202102` | Khai báo | Ẩn |
| Tạo đơn hàng bán NPP từ dữ liệu liên kết | `150317102` | Lập |  |
| Lập đơn hàng Nhà phân phối | `240201102, 800506102` | Lập | ×2; app |
| Thêm Sản phẩm vào ĐH NPP | `240208102` | Lập | Ẩn |
| Lập đơn hàng bán Nhà phân phối | `802401102` | Lập | app |
| BC mua hàng của nhà phân phối | `241006301` | Báo cáo |  |
| BC bán hàng cho NPP | `304701202` | Báo cáo |  |
| BC bán hàng cho nhà phân phối | `304702202` | Báo cáo | Ẩn |
| Chi tiết công nợ cho nhà phân phối | `304706202` | Báo cáo |  |

### NPP-2 · Viếng thăm và giám sát (DMS) (6)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Thăm nhà phân phối | `800901102` | Lập | app |
| Cắm điểm nhà phân phối | `800902102` | Lập | app |
| Lịch sử thăm nhà phân phối | `800903102` | Lập | app |
| Giám sát nhân viên | `800904102` | Lập | app |
| Báo cáo theo dõi viếng thăm KH | `981506202` | Báo cáo |  |
| Báo cáo theo dõi KPI DMS | `981507202` | Báo cáo |  |

### NPP-3 · Cổng thông tin nhà phân phối (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Trao đổi với nhà phân phối | `240205102` | Lập |  |
| Xem bảng giá bán nhà phân phối | `240203102, 802403102` | Tra cứu | ×2; app |
| Xem chương trình khuyến mãi nhà phân phối | `240204102, 802404102` | Tra cứu | ×2; app |
| Xem danh mục cảnh báo | `240206102` | Tra cứu |  |
| Xem thông tin cần biết | `240207102` | Tra cứu |  |
| Dashboard nhà phân phối | `241001302` | Báo cáo |  |
| Báo cáo theo dõi tồn kho tại NPP | `300431202` | Báo cáo |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
