---
title: Luồng nghiệp vụ theo menu — TS Tài sản, công cụ dụng cụ
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# TS · Tài sản, công cụ dụng cụ

**Khối:** Lõi ERP · **Số menu:** 29 nhãn (32 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Tài sản cố định và khấu hao, đề nghị sửa chữa, luân chuyển, thanh lý tài sản và công cụ dụng cụ, kiểm kê tài sản.

## Luồng

- **TS-0** Khai báo tài sản: Nhóm và vị trí tài sản.
- **TS-1** Tài sản cố định và khấu hao: Ghi tăng, biến động, khấu hao.
- **TS-2** Đề nghị sửa chữa, luân chuyển, thanh lý: Một kiểu đề nghị, ba loại.
- **TS-3** Kiểm kê tài sản: Đối chiếu sổ với thực tế.
- **TS-4** Máy móc thiết bị tại công trình: Gắn tài sản với máy móc thiết bị ở công trình.

### TS-0 · Khai báo tài sản

Nhóm và vị trí tài sản.

```text
Nhóm tài sản ─▶ Vị trí ─▶ Tài sản vật lý
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Nhóm, vị trí | Khai báo nhóm tài sản `111209102`<br>Khai báo nhóm tài sản vật lý `111203102`<br>Khai báo vị trí tài sản `111210102`<br>Khai báo vị trí tài sản vật lý `111204102`<br>Khai báo nhóm thiết bị, linh kiện `111211102`<br>Khai báo tài sản thế chấp `111208102` | Kế toán tài sản |  |
| 2 | Tài sản vật lý | \*\*Nhập tài sản vật lý `111205102` | Kế toán tài sản | Nạp đầu kỳ (L-52) |

### TS-1 · Tài sản cố định và khấu hao

Ghi tăng, biến động, khấu hao.

```text
Ghi tăng (mua mới, từ phân hệ khác) ─▶ Biến động ─▶ Tính khấu hao kỳ ─▶ Bút toán ─▶ phân bổ vào công trình
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Ghi tăng | Nhập tài sản cố định `120504102`<br>Nhập tài sản từ phân hệ khác `120505102` | Kế toán tài sản | Liên kết phiếu nhập hoặc đơn mua |
| 2 | Biến động | Quản lý biến động tài sản `120501102`<br>Tạo bút toán biến động TSCĐ `120503102` | Kế toán tài sản |  |
| 3 | Khấu hao | Tính khấu hao tài sản `120502102`<br>\*\*Tính khấu hao tài sản `111207102`<br>Phân bổ giá trị khấu hao vào công trình `120507102`<br>Xóa bút toán kho/Bút toán khấu hao `120806102` | Kế toán tài sản | Theo lõi: tính lại bằng huỷ và lập lại |
| 4 | Sổ | Sổ tài sản cố định `300905202`<br>BC chi tiết khấu hao tài sản cố định `300901202`<br>Danh sách tài sản cố định ,công cụ dụng cụ `300903202`<br>BCQT Tài sản `981206202` | Kế toán tài sản |  |

### TS-2 · Đề nghị sửa chữa, luân chuyển, thanh lý

Một kiểu đề nghị, ba loại.

```text
Đề nghị (sửa chữa / luân chuyển / thanh lý) ─▶ Xử lý đề nghị ─┬─ sửa chữa ─▶ BT-3
                                                          ├─ luân chuyển ─▶ đổi vị trí, người giữ
                                                          └─ thanh lý ─▶ TS-1 ghi giảm, BAN-7 đơn thanh lý
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập đề nghị | Lập đề nghị sửa chữa tài sản/ công cụ dụng cụ `230102102`<br>Lập đề nghị luân chuyển tài sản/ công cụ dụng cụ `230201102`<br>Lập đề nghị thanh lý tài sản/ công cụ dụng cụ `230202102` | Bộ phận giữ tài sản |  |
| 2 | Xử lý | Xử lý đề nghị tài sản/ công cụ dụng cụ `230203102` | Hành chính, kế toán tài sản | Sinh chứng từ sau, có liên kết |

### TS-3 · Kiểm kê tài sản

Đối chiếu sổ với thực tế.

```text
Tra cứu tài sản ─▶ Bảng kiểm kê ─▶ điều chỉnh qua TS-1
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Kiểm kê | Tra cứu tài sản/ công cụ dụng cụ vật lý `230101102`<br>Bảng kiểm kê tài sản `300904202` | Kế toán tài sản |  |

### TS-4 · Máy móc thiết bị tại công trình

Gắn tài sản với máy móc thiết bị ở công trình.

```text
Tài sản ─▶ quan hệ với MMTB tại công trình ─▶ chi phí thuê, khấu hao theo công trình
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Theo dõi | Quan hệ tài sản và MMTB tại công trình `120506102`<br>BC chi phí thuê MMTB `981208202` | Phòng thiết bị |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### TS-0 · Khai báo tài sản (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo nhóm tài sản vật lý | `111203102` | Khai báo |  |
| Khai báo vị trí tài sản vật lý | `111204102` | Khai báo |  |
| Khai báo tài sản thế chấp | `111208102` | Khai báo |  |
| Khai báo nhóm tài sản | `111209102` | Khai báo |  |
| Khai báo vị trí tài sản | `111210102` | Khai báo |  |
| Khai báo nhóm thiết bị, linh kiện | `111211102` | Khai báo |  |
| \*\*Nhập tài sản vật lý | `111205102` | Lập |  |

### TS-1 · Tài sản cố định và khấu hao (14)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| \*\*Tính khấu hao tài sản | `111207102` | Lập |  |
| Quản lý biến động tài sản | `120501102` | Lập |  |
| Tạo bút toán biến động TSCĐ | `120503102` | Lập |  |
| Nhập tài sản cố định | `120504102` | Lập |  |
| Nhập tài sản từ phân hệ khác | `120505102` | Lập |  |
| Tính khấu hao tài sản | `120502102` | Xử lý |  |
| Phân bổ giá trị khấu hao vào công trình | `120507102` | Xử lý |  |
| Xóa bút toán kho/Bút toán khấu hao | `120806102` | Xử lý | [XUNG ĐỘT L-36] sửa qua huỷ và lập lại |
| BC chi tiết khấu hao tài sản cố định | `300901202` | Báo cáo |  |
| Bảng phân tích khấu hao | `300902202` | Báo cáo |  |
| Danh sách tài sản cố định ,công cụ dụng cụ | `300903202` | Báo cáo |  |
| Sổ tài sản cố định | `300905202` | Báo cáo |  |
| Sổ chi tiết vật liệu, dụng cụ (sản phẩm, hàng hóa) | `300906202` | Báo cáo |  |
| BCQT Tài sản | `981206202` | Báo cáo |  |

### TS-2 · Đề nghị sửa chữa, luân chuyển, thanh lý (4)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập đề nghị sửa chữa tài sản/ công cụ dụng cụ | `230102102` | Lập |  |
| Lập đề nghị luân chuyển tài sản/ công cụ dụng cụ | `230201102` | Lập | ×3; Ẩn |
| Lập đề nghị thanh lý tài sản/ công cụ dụng cụ | `230202102` | Lập |  |
| Xử lý đề nghị tài sản/ công cụ dụng cụ | `230203102` | Xử lý |  |

### TS-3 · Kiểm kê tài sản (2)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Tra cứu tài sản/ công cụ dụng cụ vật lý | `230101102` | Tra cứu |  |
| Bảng kiểm kê tài sản | `300904202` | Báo cáo |  |

### TS-4 · Máy móc thiết bị tại công trình (2)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Quan hệ tài sản và MMTB tại công trình | `120506102` | Lập |  |
| BC chi phí thuê MMTB | `981208202` | Báo cáo | ×2 |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
