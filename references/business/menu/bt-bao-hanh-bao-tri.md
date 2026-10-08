---
title: Luồng nghiệp vụ theo menu — BT Bảo hành, bảo trì
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# BT · Bảo hành, bảo trì

**Khối:** Lõi ERP · **Số menu:** 16 nhãn (16 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Bảo hành sản phẩm cho khách, bảo trì thiết bị theo kế hoạch, báo hỏng và sửa chữa.

## Luồng

- **BT-1** Bảo hành sản phẩm cho khách: Tiếp nhận tới trả bảo hành.
- **BT-2** Bảo trì theo kế hoạch: Bảo trì định kỳ thiết bị.
- **BT-3** Báo hỏng và sửa chữa: Sự cố đột xuất.

### BT-1 · Bảo hành sản phẩm cho khách

Tiếp nhận tới trả bảo hành.

```text
Tiếp nhận từ khách ─▶ Ghi nhận bảo hành ─▶ Chuyển bộ phận xử lý ─▶ Sửa chữa ─▶ Đánh giá ─▶ Trả bảo hành
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Tiếp nhận | Tiếp nhận thông tin từ khách hàng `220204102`<br>Ghi nhận thông tin bảo hành, sửa chữa `220206102` | Chăm sóc khách hàng |  |
| 2 | Xử lý | Chuyển giao bộ phận xử lý `220202102`<br>Sửa chữa sản phẩm bảo hành `220201102`<br>Đánh giá sản phẩm `220203102` | Kỹ thuật |  |
| 3 | Trả | Trả bảo hành `220205102` | Chăm sóc khách hàng | Y |
| 4 | Chi phí | Báo cáo theo dõi chi phí bảo hành `306001202` | Quản lý |  |

### BT-2 · Bảo trì theo kế hoạch

Bảo trì định kỳ thiết bị.

```text
Kế hoạch bảo trì ─▶ Thực hiện (thiết bị Y → N "Bảo trì") ─▶ xong (N → Y) ─▶ Theo dõi
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập kế hoạch | Lập kế hoạch bảo hành - bảo trì `220207102` | Kỹ thuật | Chu kỳ kiểm tra, hiệu chuẩn (E-X3) |
| 2 | Thực hiện | Thực hiện bảo hành - bảo trì `220208102` | Kỹ thuật | Thiết bị đi ngược Y → N rồi về Y (L-12, E-X2) |
| 3 | Theo dõi | Theo dõi thực hiện bảo hành - bảo trì `220209102`<br>Báo cáo thực hiện bảo hành - bảo trì thiết bị - Nhân viên `306003202`<br>Dashboard Bảo hành - bảo trì thiết bị `306002202` | Quản lý |  |

### BT-3 · Báo hỏng và sửa chữa

Sự cố đột xuất.

```text
Báo hỏng (app) ─▶ Phiếu sửa chữa ─▶ Khối lượng sửa chữa ─▶ xong
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Báo hỏng | Báo hỏng thiết bị `801120102` | Người dùng thiết bị |  |
| 2 | Sửa chữa | Lập phiếu sửa chữa - bảo hành - bảo trì `160801102`<br>Quản lý khối lượng sửa chữa - bảo hành - bảo trì `160802102`<br>Bảng khối lượng bảo trì, sửa chữa thiết bị hư hỏng `300421202` | Kỹ thuật |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### BT-1 · Bảo hành sản phẩm cho khách (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Sửa chữa sản phẩm bảo hành | `220201102` | Lập |  |
| Chuyển giao bộ phận xử lý | `220202102` | Lập |  |
| Đánh giá sản phẩm | `220203102` | Lập |  |
| Tiếp nhận thông tin từ khách hàng | `220204102` | Lập |  |
| Trả bảo hành | `220205102` | Lập |  |
| Ghi nhận thông tin bảo hành, sửa chữa | `220206102` | Lập |  |
| Báo cáo theo dõi chi phí bảo hành | `306001202` | Báo cáo |  |

### BT-2 · Bảo trì theo kế hoạch (5)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập kế hoạch bảo hành - bảo trì | `220207102` | Lập |  |
| Thực hiện bảo hành - bảo trì | `220208102` | Lập |  |
| Theo dõi thực hiện bảo hành - bảo trì | `220209102` | Tra cứu |  |
| Dashboard Bảo hành - bảo trì thiết bị | `306002202` | Báo cáo |  |
| Báo cáo thực hiện bảo hành - bảo trì thiết bị - Nhân viên | `306003202` | Báo cáo |  |

### BT-3 · Báo hỏng và sửa chữa (4)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập phiếu sửa chữa - bảo hành - bảo trì | `160801102` | Lập |  |
| Quản lý khối lượng sửa chữa - bảo hành - bảo trì | `160802102` | Lập |  |
| Báo hỏng thiết bị | `801120102` | Lập | app |
| Bảng khối lượng bảo trì, sửa chữa thiết bị hư hỏng | `300421202` | Báo cáo |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
