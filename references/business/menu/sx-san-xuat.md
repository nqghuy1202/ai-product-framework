---
title: Luồng nghiệp vụ theo menu — SX Sản xuất
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# SX · Sản xuất

**Khối:** Sản xuất · **Số menu:** 95 nhãn (100 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Định mức, quy trình; dự báo và tính nhu cầu; kế hoạch, lệnh sản xuất, ghi nhận kết quả, mã vạch; giá thành; biến thể sản xuất nông nghiệp.

## Luồng

- **SX-0** Khai báo sản xuất: Định mức, quy trình, nguồn lực.
- **SX-1** Dự báo và tính nhu cầu: Tính hàng cần sản xuất từ dự báo hoặc đơn bán.
- **SX-2** Kế hoạch sản xuất: Kế hoạch sinh lệnh sản xuất.
- **SX-3** Lệnh sản xuất và ghi nhận kết quả: Xuất nguyên vật liệu, ghi công đoạn, nhập thành phẩm.
- **SX-4** Giá thành: Phân bổ chi phí và tính giá thành theo kỳ.
- **SX-5** Biến thể: sản xuất nông nghiệp: Vùng trồng, mùa vụ, sinh trưởng.

### SX-0 · Khai báo sản xuất

Định mức, quy trình, nguồn lực.

```text
Định mức sản phẩm ─▶ Quy trình sản xuất ─▶ Gắn quy trình cho sản phẩm ─▶ Nguồn lực ─▶ Kỳ sản xuất
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Định mức, quy trình | Khai báo định mức sản phẩm `110902102`<br>Quản lý quy trình sản xuất `110903102, 201002102`<br>Gắn qui trình sản xuất cho sản phẩm `110904102`<br>BC chi tiết định mức `305414202` | Kỹ thuật sản xuất |  |
| 2 | Nguồn lực, kỳ | Khai báo nguồn lực `110901102, 111605102`<br>Khai báo kỳ sản xuất `110908102` | Kế hoạch sản xuất |  |
| 3 | Khoán nhân công | \*\*Nhập bảng giá khoán nhân công `110906102`<br>Bảng tính tiền khoán nhân công `305413202` | Sản xuất, nhân sự |  |

### SX-1 · Dự báo và tính nhu cầu

Tính hàng cần sản xuất từ dự báo hoặc đơn bán.

```text
Dự báo nhu cầu ─┐
Đơn bán (BAN-1) ─┴─▶ Tính toán hàng cần sản xuất (trừ tồn) ─▶ SX-2 Kế hoạch sản xuất
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Dự báo | Dự báo nhu cầu hàng hóa `200201102`<br>Lập dự báo nhu cầu hàng hóa `201003102`<br>Điều chỉnh dự báo nhu cầu hàng hóa `200206102`<br>Lập điều chỉnh dự báo nhu cầu hàng hóa `201004102`<br>Tổng hợp dự báo `200202102` | Kinh doanh, kế hoạch |  |
| 2 | Tính nhu cầu | Tính toán hàng hóa cần sản xuất theo dự báo `200203102`<br>Tính toán hàng hóa cần sản xuất theo đơn hàng `200204102`<br>Tính toán hàng hóa cần sản xuất - Emanu `200205102`<br>Tính toán số lượng cần sản xuất `201005102`<br>BC kiểm tra tồn kho theo nhu cầu sản xuất `305420202` | Kế hoạch sản xuất |  |

### SX-2 · Kế hoạch sản xuất

Kế hoạch sinh lệnh sản xuất.

```text
Kế hoạch sản xuất N ─▶ (duyệt) ─▶ Y ─▶ mỗi dòng sinh lệnh sản xuất (SX-3)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập | Quản lý kế hoạch sản xuất `200301102, 201008102`<br>Nhập chi tiết kế hoạch sản xuất `200303102`<br>Lập kế hoạch sản xuất theo ngày `200414102`<br>Lập kế hoạch sản xuất - QT `200705102`<br>Lập kế hoạch sản xuất - Emanu `200305102` | Kế hoạch sản xuất | Mỗi dòng kế hoạch sinh một lệnh (L-34) |
| 2 | Duyệt, điều phối | Duyệt kế hoạch sản xuất `200302102`<br>Điều phối kế hoạch sản xuất `200304102`<br>Phân bổ vào nhật ký sản xuất theo kế hoạch `200413102` | Quản đốc |  |
| 3 | Theo dõi | BC kế hoạch sản xuất `305416202`<br>BC tình hình kế hoạch sản xuất `305419202`<br>Bảng kê đơn hàng dự kiến sản xuất `305424202`<br>BC quản trị đơn hàng sản xuất `305406202` | Quản lý |  |

### SX-3 · Lệnh sản xuất và ghi nhận kết quả

Xuất nguyên vật liệu, ghi công đoạn, nhập thành phẩm.

```text
Lệnh sản xuất ─▶ KHO-3 Xuất NVL ─▶ Quét mã vạch công đoạn ─▶ Ghi nhận kết quả, tiêu hao ─▶ In mã vạch ─▶ KHO-2 Nhập thành phẩm
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lệnh | Lập lệnh sản xuất `200402102`<br>Lập lệnh sản xuất - Emanu `200416102`<br>Quản lý lệnh sản xuất `201007102`<br>Quản lý lệnh sản xuất - QT `200701102`<br>Quản trị lệnh sản xuất `200408102`<br>Quản trị lệnh sản xuất - QT `200702102`<br>Chi tiết lệnh sản xuất `200406102`<br>Điều phối lệnh sản xuất `200409102` | Quản đốc |  |
| 2 | Cấp nguyên vật liệu | Phiếu xuất kho sản xuất trực tiếp `130318102`<br>BC tình hình cấp vật tư `305411202` | Kho |  |
| 3 | Ghi nhận | Quét mã vạch công đoạn sản xuất `200403102`<br>In mã vạch bán thành phẩm cho sản xuất `200411102`<br>Ghi nhận kết quả sản xuất `200405102`<br>Ghi nhận kết quả từ lệnh sản xuất - Emanu `200418102`<br>Ghi nhận kết quả từ kế hoạch sản xuất - Emanu `200415102`<br>Ghi nhận nguyên liệu tiêu hao, thành phẩm hoàn thành `200704102`<br>Quản lý nhật ký sản xuất `200401102`<br>Quản lý nhật ký sản xuất - Emanu `200417102` | Tổ sản xuất | Giờ sự kiện do người nhập khai (L-41) |
| 4 | Nhập thành phẩm | In mã vạch sản phẩm nhập kho `200410102`<br>Quét mã vạch công đoạn nhập kho `200407102`<br>Nhập phiếu nhập kho từ sản xuất `130215102`<br>Nhập phiếu nhập kho sản xuất trực tiếp - gộp bộ `130214102`<br>Quản lý nhập kho thành phẩm sản xuất `200703102` | Kho | Sang KHO-2 |
| 5 | Báo cáo | BC tình hình sản xuất `305427202`<br>BC tiến độ sản xuất `305405202`<br>BC tình hình sử dụng nguyên vật liệu sản xuất `305425202`<br>Báo cáo chất lượng sản phẩm `305432202` | Quản lý |  |

### SX-4 · Giá thành

Phân bổ chi phí và tính giá thành theo kỳ.

```text
Kỳ sản xuất ─▶ Phân bổ chi phí ─▶ Tính giá, áp giá ─▶ Giá thành ─▶ KT-5 giá vốn
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Tính giá thành | Bảng phân bổ chi phí sản xuất `305417202`<br>Tính giá - Áp giá sản xuất `120809102`<br>Bảng tính giá thành `305418202` | Kế toán giá thành |  |
| 2 | Báo cáo | BC diễn giải giá thành `305430202`<br>Báo cáo giá thành kế hoạch `305433202` | Kế toán giá thành |  |

### SX-5 · Biến thể: sản xuất nông nghiệp

Vùng trồng, mùa vụ, sinh trưởng.

```text
Vùng trồng, giống, mùa vụ ─▶ Phương thức, định mức, vật tư (phân bón, thuốc) ─▶ Giám sát, biểu đồ sinh trưởng
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Khai báo | Khai báo vùng trồng `111601102`<br>Khai báo giống cây trồng `111604102`<br>Khai báo mùa vụ `111603102`<br>Khai báo phương thức sản xuất `111606102`<br>Khai báo định mức `111607102`<br>Khai báo phân bón/Thuốc BVTV `111604102`<br>Khai báo bệnh thường gặp `111602102`<br>Khai báo tiêu chí kiểm soát chất lượng `111608102`<br>Khai báo MMTB giám sát `111609102` | Kỹ thuật nông nghiệp |  |
| 2 | Theo dõi | Biểu đồ sinh trưởng `201001102` | Kỹ thuật nông nghiệp |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### SX-0 · Khai báo sản xuất (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo định mức sản phẩm | `110902102` | Khai báo |  |
| Gắn qui trình sản xuất cho sản phẩm | `110904102` | Khai báo |  |
| Khai báo kỳ sản xuất | `110908102` | Khai báo |  |
| Quản lý quy trình sản xuất | `110903102, 201002102` | Lập | ×2 |
| \*\*Nhập bảng giá khoán nhân công | `110906102` | Lập |  |
| Bảng tính tiền khoán nhân công | `305413202` | Báo cáo |  |
| BC chi tiết định mức | `305414202` | Báo cáo |  |

### SX-1 · Dự báo và tính nhu cầu (10)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Dự báo nhu cầu hàng hóa | `200201102` | Lập |  |
| Điều chỉnh dự báo nhu cầu hàng hóa | `200206102` | Lập |  |
| Lập dự báo nhu cầu hàng hóa | `201003102` | Lập |  |
| Lập điều chỉnh dự báo nhu cầu hàng hóa | `201004102` | Lập |  |
| Tính toán hàng hóa cần sản xuất theo dự báo | `200203102` | Xử lý |  |
| Tính toán hàng hóa cần sản xuất theo đơn hàng | `200204102` | Xử lý |  |
| Tính toán hàng hóa cần sản xuất - Emanu | `200205102` | Xử lý | biến thể |
| Tính toán số lượng cần sản xuất | `201005102` | Xử lý |  |
| Tổng hợp dự báo | `200202102` | Báo cáo |  |
| BC kiểm tra tồn kho theo nhu cầu sản xuất | `305420202` | Báo cáo |  |

### SX-2 · Kế hoạch sản xuất (20)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập chi tiết kế hoạch sản xuất | `200303102` | Lập |  |
| Lập kế hoạch sản xuất - Emanu | `200305102` | Lập | biến thể |
| Lập kế hoạch sản xuất theo ngày | `200414102` | Lập |  |
| Lập kế hoạch sản xuất - QT | `200705102` | Lập | biến thể |
| Lập đơn hàng bán | `201006102` | Lập |  |
| Quản lý kế hoạch sản xuất | `200301102, 201008102` | Lập | ×2 |
| Duyệt kế hoạch sản xuất | `200302102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Điều phối kế hoạch sản xuất | `200304102` | Xử lý |  |
| Phân bổ vào nhật ký sản xuất theo kế hoạch | `200413102` | Xử lý |  |
| BCQL đơn hàng sản xuất | `300106202` | Báo cáo |  |
| \*\* Báo cáo nguyên vật liệu phục vụ cho đơn hàng | `305402202` | Báo cáo |  |
| \*\* Báo cáo tiến trình đơn hàng | `305403202` | Báo cáo |  |
| \*\* Báo cáo lãi lỗ theo đơn hàng | `305404202` | Báo cáo |  |
| BC quản trị đơn hàng sản xuất | `305406202` | Báo cáo |  |
| Bẩng theo dõi tiến độ sản xuất theo đơn hàng | `305407202` | Báo cáo |  |
| BC tổng hợp tình hình thực hiện đơn hàng | `305415202` | Báo cáo |  |
| BC kế hoạch sản xuất | `305416202` | Báo cáo |  |
| BC tình hình kế hoạch sản xuất | `305419202` | Báo cáo |  |
| Bảng kê đơn hàng dự kiến sản xuất | `305424202` | Báo cáo |  |
| In đơn hàng sản xuất ( Phong Thạnh) | `305429202` | Báo cáo | biến thể |

### SX-3 · Lệnh sản xuất và ghi nhận kết quả (41)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập phiếu nhập kho sản xuất trực tiếp - gộp bộ | `130214102` | Lập |  |
| Nhập phiếu nhập kho từ sản xuất | `130215102` | Lập |  |
| Phiếu xuất kho sản xuất trực tiếp | `130318102` | Lập |  |
| Quản lý nhật ký sản xuất | `200401102` | Lập |  |
| Lập lệnh sản xuất | `200402102` | Lập |  |
| Quét mã vạch công đoạn sản xuất | `200403102` | Lập |  |
| Ghi nhận kết quả sản xuất | `200405102` | Lập |  |
| Chi tiết lệnh sản xuất | `200406102` | Lập |  |
| Quét mã vạch công đoạn nhập kho | `200407102` | Lập |  |
| Quản trị lệnh sản xuất | `200408102` | Lập |  |
| In mã vạch sản phẩm nhập kho | `200410102` | Lập |  |
| In mã vạch bán thành phẩm cho sản xuất | `200411102` | Lập |  |
| Ghi nhận kết quả từ kế hoạch sản xuất - Emanu | `200415102` | Lập | biến thể |
| Lập lệnh sản xuất - Emanu | `200416102` | Lập | biến thể |
| Quản lý nhật ký sản xuất - Emanu | `200417102` | Lập | biến thể |
| Ghi nhận kết quả từ lệnh sản xuất - Emanu | `200418102` | Lập | biến thể |
| Quản lý lệnh sản xuất - QT | `200701102` | Lập | biến thể |
| Quản trị lệnh sản xuất - QT | `200702102` | Lập | biến thể |
| Quản lý nhập kho thành phẩm sản xuất | `200703102` | Lập |  |
| Ghi nhận nguyên liệu tiêu hao, thành phẩm hoàn thành | `200704102` | Lập | Ẩn |
| Quản lý lệnh sản xuất | `201007102` | Lập |  |
| Điều phối lệnh sản xuất | `200409102` | Xử lý |  |
| Tra cứu sản phẩm sản xuất | `200412102` | Tra cứu |  |
| Bảng kê NVL theo lệnh sản xuất trực tiếp | `300403202` | Báo cáo |  |
| BC tiến trình sản xuất | `304712202, 305412202` | Báo cáo | ×2 |
| BC tình hình sản xuất nguyên vật liệu theo lệnh sản xuất | `305401202` | Báo cáo |  |
| BC tiến độ sản xuất | `305405202` | Báo cáo |  |
| BC theo dõi tình hình thực hiện sản xuất | `305408202` | Báo cáo |  |
| Chi tiết tình hình thực hiện sản xuất | `305409202` | Báo cáo |  |
| Nhật ký sản xuất | `305410202` | Báo cáo |  |
| BC tình hình cấp vật tư | `305411202` | Báo cáo |  |
| BC phân tích sản xuất | `305421202` | Báo cáo |  |
| BC tình hình lệnh sản xuất | `305423202` | Báo cáo |  |
| BC tình hình sử dụng nguyên vật liệu sản xuất | `305425202` | Báo cáo |  |
| BC tổng hợp sử dụng nguồn lực | `305426202` | Báo cáo |  |
| BC tình hình sản xuất | `305427202` | Báo cáo |  |
| BC chi tiết nguyên vật liệu sản xuất | `305428202` | Báo cáo |  |
| In phiếu ghi nhận sản xuất (Phong Thạnh) | `305431202` | Báo cáo | biến thể |
| Báo cáo chất lượng sản phẩm | `305432202` | Báo cáo |  |
| BC tổng quan theo lệnh sản xuất | `305434202` | Báo cáo |  |
| BC chi tiết theo lệnh sản xuất | `305435202` | Báo cáo |  |

### SX-4 · Giá thành (6)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Tính giá - Áp giá sản xuất | `120809102` | Xử lý |  |
| Bảng phân bổ chi phí sản xuất | `305417202` | Báo cáo |  |
| Bảng tính giá thành | `305418202` | Báo cáo |  |
| BC diễn giải giá thành V2 | `305422202` | Báo cáo |  |
| BC diễn giải giá thành | `305430202` | Báo cáo |  |
| Báo cáo giá thành kế hoạch | `305433202` | Báo cáo |  |

### SX-5 · Biến thể: sản xuất nông nghiệp (11)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo vùng trồng | `111601102` | Khai báo |  |
| Khai báo bệnh thường gặp | `111602102` | Khai báo |  |
| Khai báo mùa vụ | `111603102` | Khai báo |  |
| Khai báo phân bón/Thuốc BVTV | `111604102` | Khai báo |  |
| Khai báo giống cây trồng | `111604102` | Khai báo |  |
| Khai báo nguồn lực | `110901102, 111605102` | Khai báo | ×3 |
| Khai báo phương thức sản xuất | `111606102` | Khai báo |  |
| Khai báo định mức | `111607102` | Khai báo |  |
| Khai báo tiêu chí kiểm soát chất lượng | `111608102` | Khai báo |  |
| Khai báo MMTB giám sát | `111609102` | Khai báo |  |
| Biểu đồ sinh trưởng | `201001102` | Lập |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
