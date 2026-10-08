---
title: Luồng nghiệp vụ theo menu — BL Bán lẻ, cửa hàng
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# BL · Bán lẻ, cửa hàng

**Khối:** Kinh doanh mở rộng · **Số menu:** 15 nhãn (16 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Ca làm việc, bán lẻ, nhà hàng, so khớp doanh thu bán lẻ với ERP.

## Luồng

- **BL-1** Ca bán lẻ: Mở ca, bán, đóng ca, so khớp.

### BL-1 · Ca bán lẻ

Mở ca, bán, đóng ca, so khớp.

```text
Mở ca ─▶ Bán lẻ (POS / bill nhà hàng) ─▶ Đóng ca ─▶ So khớp doanh thu bán lẻ với ERP
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Ca | Khai báo ca làm việc `110622102, 250102102`<br>Xem lịch sử đóng/mở ca `250103102` | Quản lý cửa hàng |  |
| 2 | Bán | Tra cứu bảng giá bán lẻ `240203102, 250101102`<br>Nhập đơn hàng bán lẻ `150302102`<br>Tạo đơn hàng bán từ dữ liệu liên kết Bill Nhà hàng `150316102` | Thu ngân | Đơn sinh phiếu xuất (KHO-3) |
| 3 | So khớp | Báo cáo so khớp bán lẻ và ERP `981505202` | Kế toán |  |
| 4 | Báo cáo | BC doanh thu `302105202`<br>BC doanh thu tại của hàng `302102202`<br>BC giờ cao điểm `302107202`<br>Dashboard quản lý cửa hàng `302103202`<br>Dashboard nhân viên cửa hàng `302104202` | Quản lý cửa hàng |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### BL-1 · Ca bán lẻ (15)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo ca làm việc | `250102102` | Khai báo |  |
| Nhập đơn hàng bán lẻ | `150302102` | Lập |  |
| Tạo đơn hàng bán từ dữ liệu liên kết Bill Nhà hàng | `150316102` | Lập |  |
| Tra cứu bảng giá bán lẻ | `240203102, 250101102` | Tra cứu | ×2 |
| Xem lịch sử đóng/mở ca | `250103102` | Tra cứu |  |
| BC giờ cao điểm khách đến | `302101202` | Báo cáo |  |
| BC doanh thu tại của hàng | `302102202` | Báo cáo |  |
| Dashboard quản lý cửa hàng | `302103202` | Báo cáo | Ẩn |
| Dashboard nhân viên cửa hàng | `302104202` | Báo cáo | Ẩn |
| BC doanh thu | `302105202` | Báo cáo |  |
| BC khách hàng | `302106202` | Báo cáo |  |
| BC giờ cao điểm | `302107202` | Báo cáo |  |
| BCQT- Nhà hàng - Cty | `801103302` | Báo cáo | app |
| BCQT- Bán hàng Nhà hàng | `801104302` | Báo cáo | app |
| Báo cáo so khớp bán lẻ và ERP | `981505202` | Báo cáo |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
