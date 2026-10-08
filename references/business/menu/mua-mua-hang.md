---
title: Luồng nghiệp vụ theo menu — MUA Mua hàng
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# MUA · Mua hàng

**Khối:** Lõi ERP · **Số menu:** 62 nhãn (63 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Kế hoạch và đề nghị mua, so sánh giá, đơn mua, bảng giá mua và chiết khấu nhà cung cấp, hợp đồng nguyên tắc, mua trả lại, thuê, đánh giá nhà cung cấp.

## Luồng

- **MUA-1** Đề nghị mua đến đơn mua: Từ nhu cầu tới đơn mua, hàng về kho, phải trả.
- **MUA-2** Bảng giá mua và chiết khấu nhà cung cấp: Giá mua theo nhà cung cấp, đổi bằng Nhân bản.
- **MUA-3** Hợp đồng nguyên tắc mua: Hồ sơ dài hạn với nhà cung cấp.
- **MUA-4** Mua trả lại: Trả hàng cho nhà cung cấp.
- **MUA-5** Thuê tài sản, thiết bị: Thuê ngoài theo đơn thuê.
- **MUA-6** Đánh giá nhà cung cấp, nhà thầu: Chấm điểm định kỳ.

### MUA-1 · Đề nghị mua đến đơn mua

Từ nhu cầu tới đơn mua, hàng về kho, phải trả.

```text
Kế hoạch mua ─▶ Đề nghị mua (từ KHO-1) ─▶ So sánh giá ─▶ Xử lý đề nghị ─▶ Đơn mua (giá từ MUA-2) ─▶ Xử lý đơn mua
                                                                                          │
                                       KT-1 Chứng từ phải trả ◀── KHO-2 Phiếu nhập mua hàng ◀┘ (mỗi đợt giao một phiếu)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Kế hoạch mua | Lập kế hoạch mua hàng `140110102`<br>Duyệt kế hoạch mua hàng `140111102` | Mua hàng | Tuỳ chọn |
| 2 | Đề nghị mua | Lập đề nghị mua hàng `140102102`<br>Duyệt đề nghị mua hàng `140101102` | Bộ phận cần hàng, mua hàng | Liên kết về yêu cầu cung ứng |
| 3 | So sánh giá, chọn nhà cung cấp | Bảng so sánh giá theo đề nghị mua hàng `140103102`<br>Xử lý đề nghị mua hàng `140112102` | Mua hàng | Sinh đơn mua |
| 4 | Đơn mua | Lập đơn hàng mua `140404102, 800404102`<br>Lập đơn mua hàng® `800403102`<br>ADMIN\_Đơn hàng mua `140407102`<br>Duyệt đơn hàng mua `140401102` | Mua hàng | Đơn chụp giá lúc lập (L-35) |
| 5 | Theo dõi giao hàng | Xử lý đơn hàng mua `140409102`<br>BC đơn hàng tồn đọng và kế hoạch hàng về `301601202`<br>BC kế hoạch nhận hàng `301602202`<br>Đơn hàng tồn đọng `981408202`<br>BC đơn hàng mua tồn đọng `981408202` | Mua hàng | Mỗi đợt giao sinh phiếu nhập (E-M1) |
| 6 | Nhập kho, phải trả | → [KHO-2 Nhập kho](kho-kho-cung-ung.md)<br>→ [KT-1 Phải trả và chi tiền](kt-ke-toan.md) | Kho, kế toán |  |

### MUA-2 · Bảng giá mua và chiết khấu nhà cung cấp

Giá mua theo nhà cung cấp, đổi bằng Nhân bản.

```text
Bảng giá mua N ─▶ (duyệt) ─▶ Y đang dùng ─▶ đổi giá: Nhân bản ─▶ bản mới Y, bản cũ tự ngừng
Chương trình chiết khấu NCC ─▶ Tính chiết khấu ─▶ Theo dõi thực hiện
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập bảng giá | Nhập bảng giá mua `140203102`<br>Nhập bảng giá mua - new `140209102`<br>Đổ bảng giá mua từ excel `140204102`<br>Duyệt bảng giá mua `140201102` | Mua hàng | Một bảng đang dùng mỗi NCC tại điểm (E-M2) |
| 2 | Đổi giá | Nhập biên bản điều chỉnh giá mua `140205102` | Mua hàng | Theo lõi: Nhân bản thành bảng mới (L-35) |
| 3 | Tra cứu | Tra cứu bảng giá mua `140202102`<br>Bảng thống kê đơn giá mua `301611202`<br>Bảng phân tích biến động giá trung bình cuối kỳ `301606202` | Mua hàng |  |
| 4 | Chiết khấu nhà cung cấp | Nhập chương trình chiết khấu NCC `140206102`<br>Tính chiết khấu mua hàng `140207102`<br>Theo dõi thực hiện chiết khấu `140208102`<br>BC tổng hợp thu hồi chiết khấu thương mại `301614202` | Mua hàng, kế toán |  |

### MUA-3 · Hợp đồng nguyên tắc mua

Hồ sơ dài hạn với nhà cung cấp.

```text
Hợp đồng nguyên tắc ─▶ tham chiếu từ bảng giá mua và đơn mua
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập hợp đồng | Nhập hợp đồng nguyên tắc mua `140406102`<br>Nhập hợp đồng nguyên tắc-(Theo BCO) `140403102, 150307102` | Mua hàng | Hiệu lực, điều khoản, tệp ký |
| 2 | Theo dõi | BC tổng hợp tình hình thực hiện hợp đồng/ đơn hàng mua `301603202` | Mua hàng |  |

### MUA-4 · Mua trả lại

Trả hàng cho nhà cung cấp.

```text
Đơn mua trả lại ─▶ KHO-3 Phiếu xuất hàng mua trả lại ─▶ KT-1 giảm phải trả
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập đơn trả lại | Lập đơn hàng mua trả lại `140402102`<br>Duyệt đơn hàng mua trả lại `140405102` | Mua hàng | Liên kết về đơn mua gốc |
| 2 | Xuất trả | Lập phiếu xuất hàng mua trả lại `130313102` | Kho |  |
| 3 | Báo cáo | Báo cáo đơn hàng mua trả lại `301618202` | Mua hàng |  |

### MUA-5 · Thuê tài sản, thiết bị

Thuê ngoài theo đơn thuê.

```text
Đơn hàng thuê ─▶ Bảng tính tiền thuê ─▶ KT-1 phải trả
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Thuê | Đơn hàng thuê `140410102`<br>Bảng tính tiền thuê `140408102` | Mua hàng, phòng thiết bị |  |

### MUA-6 · Đánh giá nhà cung cấp, nhà thầu

Chấm điểm định kỳ.

```text
Yêu cầu đánh giá ─▶ Phiếu đánh giá ─▶ (duyệt) ─▶ Bảng tổng hợp kết quả
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Đánh giá | \*\*Yêu cầu đánh giá KPI NCC/NTP `180213102`<br>Lập phiếu đánh giá NCC/NTP `180205102`<br>Lập phiếu đánh giá NCC/NTP theo kỳ (PQ) `180215102`<br>Lập phiếu đánh giá nhà thầu `180215102`<br>Đánh giá nhà thầu theo cấp `180214102`<br>Duyệt đánh giá KPI theo nhà cung cấp `180206102` | Mua hàng, dự án |  |
| 2 | Kết quả | Bảng tổng hợp kết quả đánh giá NCC/NTP `301803202`<br>Báo cáo tổng hợp đánh giá NTP/NCC 1 dự án/ 1 phòng ban `301612202`<br>BCQT Nhà cung cấp `981405202` | Mua hàng |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### MUA-1 · Đề nghị mua đến đơn mua (32)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập đề nghị mua hàng | `140102102` | Lập |  |
| Bảng so sánh giá theo đề nghị mua hàng | `140103102` | Lập |  |
| Lập kế hoạch mua hàng | `140110102` | Lập |  |
| Lập đơn hàng mua | `140404102, 800404102` | Lập | ×2; app |
| ADMIN\_Đơn hàng mua | `140407102` | Lập |  |
| Lập đơn mua hàng® | `800403102` | Lập | app |
| Duyệt đề nghị mua hàng | `140101102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt kế hoạch mua hàng | `140111102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt đơn hàng mua | `140401102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xử lý đề nghị mua hàng | `140112102` | Xử lý |  |
| Xử lý đơn hàng mua | `140409102` | Xử lý |  |
| Bảng tổng hợp số lượng đề nghị mua hàng theo tháng | `301121202` | Báo cáo |  |
| Bảng kê theo dõi tình tình đề nghị mua hàng theo vật tư/PB/tháng | `301127202` | Báo cáo |  |
| BC đơn hàng tồn đọng và kế hoạch hàng về | `301601202` | Báo cáo |  |
| BC kế hoạch nhận hàng | `301602202` | Báo cáo |  |
| BC tổng hợp tình hình thực hiện hợp đồng/ đơn hàng mua | `301603202` | Báo cáo |  |
| BC hàng hóa cần mua theo đơn hàng bán | `301604202` | Báo cáo |  |
| Bảng tổng hợp tình hình mua hàng của NCC | `301605202` | Báo cáo |  |
| BC tình hình thực hiện đơn hàng mua | `301607202` | Báo cáo |  |
| BC phân tích nhập mua hàng | `301608202` | Báo cáo |  |
| Báo cáo phân tích nhập mua hàng | `301610202` | Báo cáo |  |
| BC số lượng mua so với NS (cấu trúc) | `301616202` | Báo cáo |  |
| Báo cáo đơn hàng mua - công nợ | `301617202` | Báo cáo |  |
| Bảng kê đề nghị mua hàng | `302701202` | Báo cáo |  |
| BC tình hình thực hiện đề nghị mua hàng | `302702202` | Báo cáo |  |
| BC đơn hàng mua | `304711202` | Báo cáo |  |
| BCQT Đề nghị mua hàng | `981401202` | Báo cáo |  |
| BCQT Phân hệ mua hàng | `981404202` | Báo cáo |  |
| BCQT Kế hoạch mua hàng | `981406202` | Báo cáo |  |
| BCQT Đơn hàng | `981407202` | Báo cáo |  |
| Đơn hàng tồn đọng | `981408202` | Báo cáo |  |
| BC đơn hàng mua tồn đọng | `981408202` | Báo cáo |  |

### MUA-2 · Bảng giá mua và chiết khấu nhà cung cấp (13)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập bảng giá mua | `140203102` | Lập |  |
| Nhập biên bản điều chỉnh giá mua | `140205102` | Lập | Theo lõi: Nhân bản thành bản mới (L-35) |
| Nhập chương trình chiết khấu NCC | `140206102` | Lập |  |
| Nhập bảng giá mua - new | `140209102` | Lập |  |
| Duyệt bảng giá mua | `140201102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Đổ bảng giá mua từ excel | `140204102` | Xử lý | Ẩn; Nạp Excel, báo lỗi theo dòng (L-51) |
| Tính chiết khấu mua hàng | `140207102` | Xử lý |  |
| Tra cứu bảng giá mua | `140202102` | Tra cứu |  |
| Theo dõi thực hiện chiết khấu | `140208102` | Tra cứu |  |
| Bảng phân tích biến động giá trung bình cuối kỳ | `301606202` | Báo cáo |  |
| Bảng thống kê đơn giá mua | `301611202` | Báo cáo |  |
| BC tổng hợp thu hồi chiết khấu thương mại | `301614202` | Báo cáo |  |
| BCQT Bảng giá mua | `981503202` | Báo cáo |  |

### MUA-3 · Hợp đồng nguyên tắc mua (3)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập hợp đồng nguyên tắc-(Theo BCO) | `140403102` | Lập | Ẩn |
| Nhập hợp đồng nguyên tắc mua | `140406102` | Lập |  |
| BCQT Hợp đồng | `981402202` | Báo cáo |  |

### MUA-4 · Mua trả lại (3)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập đơn hàng mua trả lại | `140402102` | Lập |  |
| Duyệt đơn hàng mua trả lại | `140405102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Báo cáo đơn hàng mua trả lại | `301618202` | Báo cáo |  |

### MUA-5 · Thuê tài sản, thiết bị (2)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Đơn hàng thuê | `140410102` | Lập |  |
| Bảng tính tiền thuê | `140408102` | Báo cáo |  |

### MUA-6 · Đánh giá nhà cung cấp, nhà thầu (9)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập phiếu đánh giá NCC/NTP | `180205102` | Lập | Ẩn |
| \*\*Yêu cầu đánh giá KPI NCC/NTP | `180213102` | Lập | Ẩn |
| Đánh giá nhà thầu theo cấp | `180214102` | Lập |  |
| Lập phiếu đánh giá nhà thầu | `180215102` | Lập |  |
| Lập phiếu đánh giá NCC/NTP theo kỳ (PQ) | `180215102` | Lập | Ẩn; biến thể |
| Duyệt đánh giá KPI theo nhà cung cấp | `180206102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Báo cáo tổng hợp đánh giá NTP/NCC 1 dự án/ 1 phòng ban | `301612202` | Báo cáo |  |
| Bảng tổng hợp kết quả đánh giá NCC/NTP | `301803202` | Báo cáo |  |
| BCQT Nhà cung cấp | `981405202` | Báo cáo |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
