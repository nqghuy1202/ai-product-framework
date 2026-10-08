---
title: Luồng nghiệp vụ theo menu — BAN Bán hàng
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# BAN · Bán hàng

**Khối:** Lõi ERP · **Số menu:** 62 nhãn (65 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Báo giá, đơn bán, bảng giá bán, khuyến mãi, hợp đồng nguyên tắc, hàng bán trả lại, xuất khẩu, đơn đặc biệt.

## Luồng

- **BAN-1** Báo giá đến thu tiền: Chuỗi bán chuẩn.
- **BAN-2** Bảng giá bán: Giá bán theo khách, đổi bằng Nhân bản.
- **BAN-3** Khuyến mãi, chiết khấu: Chương trình khuyến mãi áp vào đơn bán.
- **BAN-4** Hợp đồng nguyên tắc bán: Hồ sơ dài hạn với khách.
- **BAN-5** Hàng bán trả lại: Nhận lại hàng đã bán.
- **BAN-6** Xuất khẩu: Bộ chứng từ xuất khẩu đi kèm đơn bán.
- **BAN-7** Đơn đặc biệt và nhập từ nguồn ngoài: Đơn tặng, thanh lý, mua bán ba bên, nạp đơn từ Excel.

### BAN-1 · Báo giá đến thu tiền

Chuỗi bán chuẩn.

```text
Yêu cầu báo giá ─▶ Xử lý báo giá ─▶ Đơn bán (giá BAN-2, khuyến mãi BAN-3) ─▶ (duyệt) ─▶ Y
                                                                                 │
          KT-2 Phiếu thu ◀── KT-2 Chứng từ phải thu (hoá đơn) ◀── KHO-3 Phiếu xuất bán ◀┘
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Báo giá | Lập yêu cầu báo giá - chiều phân tích `150110102`<br>Yêu cầu báo giá - định mức sản phẩm `150111102`<br>Lập yêu cầu báo giá (Phong Thạnh) `150105102`<br>Lập yêu cầu báo giá - sản phẩm (Phong Thạnh) `150108102`<br>Xử lý yêu cầu báo giá (Phong Thạnh) `150106102` | Kinh doanh | Báo giá Y sinh đơn bán |
| 2 | Đơn bán | Lập đơn hàng bán `150308102, 201006102, 800503102`<br>Lập đơn hàng bán - erp100 `150315102`<br>Thêm Sản Phẩm Vào Đơn Hàng `106030301, 150301102`<br>Duyệt đơn hàng bán 1 `150305102` | Kinh doanh | Đơn chụp giá từ bảng giá đang dùng (L-35) |
| 3 | Theo dõi đơn | Cập nhật tình trạng đơn hàng `150310102`<br>BC tình hình thực hiện đơn hàng `304713202`<br>BC thực hiện đơn hàng theo khách hàng `300108202`<br>Bảng kê kế hoạch xuất hàng `300109202`<br>Bảng kê kế hoạch xuất hàng theo lệnh xuất `300117202` | Kinh doanh | Tình trạng suy từ chứng từ sau, không sửa tay (L-6) |
| 4 | Giao hàng | → [KHO-3 Xuất kho](kho-kho-cung-ung.md) | Kho |  |
| 5 | Hoá đơn, thu tiền | → [KT-2 Phải thu và thu tiền](kt-ke-toan.md)<br>**[MỚI]** Phát hành hoá đơn điện tử | Kế toán | Hoá đơn gom chứng từ giao đã Y (E-T3) |
| 6 | Sau bán | Đánh giá đơn hàng bán `800505102`<br>BC rà soát Xuất Hàng - Hóa Đơn `300104202` | Kinh doanh, kế toán | Đối chiếu giao với hoá đơn |

### BAN-2 · Bảng giá bán

Giá bán theo khách, đổi bằng Nhân bản.

```text
Bảng giá bán N ─▶ (duyệt) ─▶ Y đang dùng ─▶ đổi giá: Nhân bản ─▶ bản mới Y, bản cũ tự ngừng
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập bảng giá | Nhập bảng giá bán `150101102, 800501102`<br>Nhập bảng giá bán - new `150112102`<br>Đổ bảng giá bán từ excel `150104102`<br>Duyệt bảng giá bán hàng `150102102` | Kinh doanh | Một bảng đang dùng mỗi khách tại điểm (E-B2) |
| 2 | Đổi giá | Nhập biên bản điều chỉnh giá bán `150103102` | Kinh doanh | Theo lõi: Nhân bản (L-35) |
| 3 | Tra cứu | Tra cứu giá bán `150109102`<br>Tra cứu giá bán ( Phong Thạnh) `150107102`<br>BCQT Bảng giá bán `981503202` | Kinh doanh |  |

### BAN-3 · Khuyến mãi, chiết khấu

Chương trình khuyến mãi áp vào đơn bán.

```text
Chương trình khuyến mãi ─▶ Tính khuyến mãi trên đơn ─▶ Bảng tính tiền hàng khuyến mãi
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Khai và tính | Nhập chương trình khuyến mãi `150201102`<br>Tính khuyến mãi chiết khấu `150202102`<br>Bảng tính tiền hàng khuyến mãi `300126202` | Kinh doanh | Dòng giảm trừ trên đơn hoặc hoá đơn (E-B12) |

### BAN-4 · Hợp đồng nguyên tắc bán

Hồ sơ dài hạn với khách.

```text
Hợp đồng ─▶ tham chiếu từ bảng giá bán và đơn bán
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập hợp đồng | Hợp đồng nguyên tắc bán `150313102`<br>Nhập hợp đồng nguyên tắc-(Theo BCO) `140403102, 150307102` | Kinh doanh | Điều khoản là khai báo (E-B1) |

### BAN-5 · Hàng bán trả lại

Nhận lại hàng đã bán.

```text
Đơn bán trả lại ─▶ Xử lý hàng trả lại ─▶ KHO-2 Phiếu nhập hàng bán bị trả lại ─▶ KT-2 giảm phải thu / hoá đơn điều chỉnh
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập đơn trả lại | Lập đơn hàng bán trả lại `150306102`<br>Tạo đơn hàng bán trả lại từ liên kết `150319102`<br>Duyệt đơn hàng bán trả lại `150309102` | Kinh doanh | Liên kết về đơn bán gốc (E-B13) |
| 2 | Xử lý | Xử lý hàng trả lại `150304102` | Kinh doanh, QC | Hàng về kho ở N chờ kiểm nếu cần (E-Q8) |
| 3 | Báo cáo | Báo cáo đơn hàng bán trả lại `300122202` | Kinh doanh |  |

### BAN-6 · Xuất khẩu

Bộ chứng từ xuất khẩu đi kèm đơn bán.

```text
Đơn bán ─▶ Chứng từ xuất khẩu ─▶ Phiếu xuất bán
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Chứng từ xuất khẩu | Lập chứng từ xuất khẩu `150314102`<br>BC hồ sơ xuất khẩu `304710202` | Kinh doanh xuất khẩu |  |

### BAN-7 · Đơn đặc biệt và nhập từ nguồn ngoài

Đơn tặng, thanh lý, mua bán ba bên, nạp đơn từ Excel.

```text
Excel / hệ thống ngoài ─▶ Đơn bán N (kiểm lỗi theo dòng) ─▶ luồng BAN-1
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Nạp đơn | Đổ đơn hàng bán từ Excel `150312102`<br>Đổ (nhiều) đơn hàng bán từ Excel `150318102` | Kinh doanh | Nạp Excel báo lỗi theo dòng (L-51) |
| 2 | Đơn đặc biệt | Tạo đơn hàng FOC `150320102`<br>Lập đơn hàng thanh lý `150308102`<br>Tình hình thực hiện đơn hàng bán (mua bán 3 bên) `300121202` | Kinh doanh | Thanh lý tài sản liên kết TS-2 |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### BAN-1 · Báo giá đến thu tiền (36)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập yêu cầu báo giá (Phong Thạnh) | `150105102` | Lập | biến thể |
| Lập yêu cầu báo giá - sản phẩm (Phong Thạnh) | `150108102` | Lập | biến thể |
| Lập yêu cầu báo giá - chiều phân tích | `150110102` | Lập |  |
| Yêu cầu báo giá - định mức sản phẩm | `150111102` | Lập |  |
| Thêm Sản phẩm vào Đơn hàng | `150301102` | Lập | Ẩn |
| Lập đơn hàng bán | `150308102, 800503102` | Lập | ×2; app |
| Lập đơn hàng bán - erp100 | `150315102` | Lập | biến thể |
| Đánh giá đơn hàng bán | `800505102` | Lập | app |
| Duyệt đơn hàng bán 1 | `150305102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xử lý yêu cầu báo giá (Phong Thạnh) | `150106102` | Xử lý | biến thể |
| Cập nhật tình trạng đơn hàng | `150310102` | Xử lý | [XUNG ĐỘT L-6] chỉ xem; trạng thái do luồng quyết |
| BC thực hiện đơn hàng SX (Phong Thạnh) | `300101202` | Báo cáo | biến thể |
| BC tiến độ đơn hàng (Phong Thạnh) | `300102202` | Báo cáo | biến thể |
| BC hiệu quả bán hàng | `300103202` | Báo cáo |  |
| BC rà soát Xuất Hàng - Hóa Đơn | `300104202` | Báo cáo |  |
| BC chi tiết tình hình xuất hàng theo đơn hàng | `300107202` | Báo cáo |  |
| BC thực hiện đơn hàng theo khách hàng | `300108202` | Báo cáo |  |
| Bảng kê kế hoạch xuất hàng | `300109202` | Báo cáo |  |
| BC chỉ số bán hàng hàng ngày | `300111202` | Báo cáo |  |
| BC tổng thể dịch vụ toàn công ty | `300112202` | Báo cáo |  |
| BC tổng thể dịch vụ theo năm | `300113202` | Báo cáo |  |
| BC tổng hợp thu tiền theo tour | `300114202` | Báo cáo |  |
| BC thưởng phạt thanh toán | `300115202` | Báo cáo |  |
| BC tổng thể tour theo năm | `300116202` | Báo cáo |  |
| Bảng kê kế hoạch xuất hàng theo lệnh xuất | `300117202` | Báo cáo |  |
| BC phân tích ma trận bán hàng | `300118202` | Báo cáo |  |
| BC thu chi theo đơn đặt hàng | `300120202` | Báo cáo | ×2 |
| BCQT Top phân hệ bán hàng | `300123202` | Báo cáo |  |
| Báo cáo theo dõi đơn hàng bán - công nợ | `300124202` | Báo cáo |  |
| Báo cáo bán hàng tạm tính | `300125202` | Báo cáo |  |
| BC doanh thu công ty (PQ quản lý) | `304703202` | Báo cáo |  |
| BC chi tiết bán hàng | `304705202` | Báo cáo |  |
| BC tình hình thực hiện đơn hàng | `304713202` | Báo cáo |  |
| BC doanh thu công ty | `304714202` | Báo cáo |  |
| BCQT Phân hệ bán hàng | `981501202` | Báo cáo |  |
| BCQT Hiệu quả bán hàng | `981504202` | Báo cáo |  |

### BAN-2 · Bảng giá bán (9)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập bảng giá bán | `150101102, 800501102` | Lập | ×2; app |
| Nhập biên bản điều chỉnh giá bán | `150103102` | Lập | Theo lõi: Nhân bản thành bản mới (L-35) |
| Nhập bảng giá bán - new | `150112102` | Lập |  |
| Duyệt bảng giá bán hàng | `150102102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Đổ bảng giá bán từ excel | `150104102` | Xử lý | Ẩn; Nạp Excel, báo lỗi theo dòng (L-51) |
| Tra cứu giá bán ( Phong Thạnh) | `150107102` | Tra cứu | biến thể |
| Tra cứu giá bán | `150109102` | Tra cứu |  |
| BC doanh số bán hàng theo bảng giá tiền mặt | `304709202` | Báo cáo |  |
| BCQT Bảng giá bán | `981503202` | Báo cáo |  |

### BAN-3 · Khuyến mãi, chiết khấu (3)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập chương trình khuyến mãi | `150201102` | Lập |  |
| Tính khuyến mãi chiết khấu | `150202102` | Xử lý |  |
| Bảng tính tiền hàng khuyến mãi | `300126202` | Báo cáo |  |

### BAN-4 · Hợp đồng nguyên tắc bán (2)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập hợp đồng nguyên tắc-(theo BCO) | `150307102` | Lập | Ẩn |
| Hợp đồng nguyên tắc bán | `150313102` | Lập |  |

### BAN-5 · Hàng bán trả lại (5)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập đơn hàng bán trả lại | `150306102` | Lập |  |
| Tạo đơn hàng bán trả lại từ liên kết | `150319102` | Lập |  |
| Duyệt đơn hàng bán trả lại | `150309102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xử lý hàng trả lại | `150304102` | Xử lý |  |
| Báo cáo đơn hàng bán trả lại | `300122202` | Báo cáo |  |

### BAN-6 · Xuất khẩu (2)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập chứng từ xuất khẩu | `150314102` | Lập |  |
| BC hồ sơ xuất khẩu | `304710202` | Báo cáo |  |

### BAN-7 · Đơn đặc biệt và nhập từ nguồn ngoài (5)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập đơn hàng thanh lý | `150308102` | Lập |  |
| Tạo đơn hàng FOC | `150320102` | Lập |  |
| Đổ đơn hàng bán từ Excel | `150312102` | Xử lý | Nạp Excel, báo lỗi theo dòng (L-51) |
| Đổ (nhiều) đơn hàng bán từ Excel | `150318102` | Xử lý | Nạp Excel, báo lỗi theo dòng (L-51) |
| Tình hình thực hiện đơn hàng bán (mua bán 3 bên) | `300121202` | Báo cáo |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
