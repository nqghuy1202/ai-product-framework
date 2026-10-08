---
title: Luồng nghiệp vụ theo menu — DA Dự án, hợp đồng, đấu thầu (PJM)
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# DA · Dự án, hợp đồng, đấu thầu (PJM)

**Khối:** Dự án và ngân sách · **Số menu:** 192 nhãn (193 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Dự thầu, khởi tạo dự án và ngân sách dự án, hợp đồng chủ đầu tư và doanh thu, giao thầu và mua sắm tại dự án, thầu phụ, tiến độ, NCR, chi phí dự án, hợp đồng thiết kế, ticket.

## Luồng

- **DA-0** Khai báo dự án: Cấu trúc dùng chung cho dự án.
- **DA-1** Dự thầu (công ty là nhà thầu): Lập giá dự thầu gửi chủ đầu tư.
- **DA-2** Khởi tạo dự án và ngân sách dự án: Từ chủ trương tới ngân sách được duyệt.
- **DA-3** Hợp đồng chủ đầu tư, nghiệm thu, doanh thu: Doanh thu theo nghiệm thu.
- **DA-4** Mua sắm và giao thầu tại dự án: Kế hoạch mua sắm, đấu thầu, hợp đồng thầu phụ, mua vật tư.
- **DA-5** Thầu phụ thực hiện và thanh toán: Khối lượng thầu phụ đến thanh toán.
- **DA-6** Tiến độ dự án: Kế hoạch triển khai, tiến độ, nhật ký.
- **DA-7** Sự không phù hợp (NCR): Phát hiện đến đóng NCR.
- **DA-8** Chi phí dự án và quyết toán: Định mức chi, phân bổ chi phí chung, lãi lỗ, đóng dự án.
- **DA-9** Hợp đồng thiết kế: Dự án thiết kế theo hợp đồng.
- **DA-10** Ticket hỗ trợ khách hàng: Yêu cầu hỗ trợ từ khách hoặc nội bộ.

### DA-0 · Khai báo dự án

Cấu trúc dùng chung cho dự án.

```text
Nhóm dự án, WBS ─▶ Cấu trúc dự toán, doanh thu, ngân sách thiết bị ─▶ Hình thức chọn thầu ─▶ Phương pháp triển khai
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Cấu trúc | Khai báo Nhóm dự án `110503102`<br>Khai báo nhóm WBS `110501102`<br>Khai báo cấu trúc dự toán dự án `110502102`<br>Khai báo cấu trúc doanh thu `110505102`<br>Khai báo cấu trúc ngân sách thiết bị `110510102`<br>Quy định thời gian Ngân sách `110509102` | Phòng dự án |  |
| 2 | Thầu, triển khai | Khai báo hình thức chọn thầu `110504102`<br>Khai báo thông tin mời thầu `161202102`<br>Khai báo phương pháp triển khai dự án `161101102`<br>Chuẩn triển khai `161109102`<br>Thiết lập nhanh thông tin dự án mới `110059102` | Phòng dự án |  |

### DA-1 · Dự thầu (công ty là nhà thầu)

Lập giá dự thầu gửi chủ đầu tư.

```text
Ngân sách dự thầu ─▶ Bảng giá dự thầu ─▶ (duyệt) ─▶ điều chỉnh giá dự thầu ─▶ trúng thầu ─▶ DA-2
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Ngân sách dự thầu | Ngân sách dự thầu `160313102`<br>Điều chỉnh ngân sách dự thầu `160314102` | Phòng dự thầu |  |
| 2 | Giá dự thầu | Lập bảng giá dự thầu `110509101`<br>Duyệt bảng giá dự thầu `110510101`<br>Lập biên bản điều chỉnh giá dự thầu `110511101` | Phòng dự thầu | Theo lõi: điều chỉnh bằng Nhân bản (L-35) |
| 3 | Kết quả | Tỷ lệ dự thầu - Trúng thầu `981602202` | Lãnh đạo |  |

### DA-2 · Khởi tạo dự án và ngân sách dự án

Từ chủ trương tới ngân sách được duyệt.

```text
Thông tin chủ trương ─▶ Thông tin chi tiết ─▶ Thư mục ─▶ BOQ ─▶ Ngân sách dự án ─▶ (duyệt) ─▶ điều chỉnh, theo dõi
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Thông tin dự án | Thông tin dự án chủ trương `161108102`<br>Thông tin dự án chi tiết `161110102`<br>Điều chỉnh thông tin chi tiết `161111102`<br>Nhập thông tin dự án `160307102`<br>Nhập thông tin dự án - PJM `161401102`<br>Nạp dự án từ Excel `160302101`<br>Nhập thư mục dự án `160312102` | Giám đốc dự án |  |
| 2 | BOQ | Điều chỉnh BOQ `160315102`<br>Kiểm soát thời gian BOQ `160317102` | QS |  |
| 3 | Ngân sách dự án | Lập ngân sách dự án `160310102`<br>Điều chỉnh ngân sách dự án `160311102`<br>Lập ngân sách - PJM `161402102`<br>Điều chỉnh ngân sách - PJM `161403102`<br>Lập ngân sách thiết bị `160322102`<br>Điều chỉnh ngân sách thiết bị `160323102`<br>Theo dõi thời gian ngân sách dự án `160316102` | Giám đốc dự án, tài chính | Điều chỉnh tạo bản mới, giữ bản cũ (L-35) |
| 4 | Theo dõi | Theo dõi thực hiện dự án `160305101`<br>Theo dõi trạng thái hợp đồng `160318102`<br>BC ngân sách dự án `301135202`<br>BC quản trị dự án tổng thể `981601202` | Lãnh đạo |  |

### DA-3 · Hợp đồng chủ đầu tư, nghiệm thu, doanh thu

Doanh thu theo nghiệm thu.

```text
Bảng giá CĐT ─▶ BOQ với CĐT ─▶ Biên bản nghiệm thu CĐT ─▶ Bill thanh toán ─▶ Ghi nhận doanh thu ─▶ KT-2 phải thu
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Giá và BOQ | Lập bảng giá chủ đầu tư `160101102`<br>Điều chỉnh bảng giá chủ đầu tư `160103102`<br>Duyệt bảng giá chủ đầu tư `160104102`<br>Nhập BOQ với chủ đầu tư (GĐDA, CHT) `160308102`<br>\*\* Nhập BOQ với chủ đầu tư (QS) `160312101`<br>Định nghịa ngân sách từ hợp đồng chủ đầu tư `160304102` | QS, giám đốc dự án |  |
| 2 | Nghiệm thu | Lập biên bản nghiệm thu chủ đầu tư `160701102`<br>Ghi nhận giai đoạn nghiệm thu `160703102` | Chỉ huy trưởng, QS | Y sinh bill thanh toán |
| 3 | Thanh toán, doanh thu | Lập bill thanh toán - PJM `120115102`<br>Ghi nhận doanh thu `161118102` | QS, kế toán | Sang KT-2 |
| 4 | Báo cáo | BC tình hình thực hiện HĐ CĐT `301103202`<br>Bảng chi tiết theo dõi Claim - IPC `301131202`<br>Bảng chi tiết theo dõi phát sinh `301130202`<br>Bảng chi tiết theo dõi EOT `301132202`<br>BCQT Thanh toán chủ đầu tư `981604202` | Lãnh đạo |  |

### DA-4 · Mua sắm và giao thầu tại dự án

Kế hoạch mua sắm, đấu thầu, hợp đồng thầu phụ, mua vật tư.

```text
KH mua sắm & giao thầu ─▶ Hồ sơ mời thầu ─▶ [NCC/NTP nộp thầu qua cổng] ─▶ So sánh, chọn thầu ─▶ Hợp đồng giao thầu ─▶ LOA
                     └─▶ Hợp đồng / Đơn mua tại dự án ─▶ KHO-2 nhập
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Kế hoạch | Lập KH mua sắm vật tư và giao thầu DA `160508102`<br>Lập KH mua sắm vật tư và giao thầu DA (CĐT) `161406102`<br>Lập KH mua sắm vật tư PB `160508102`<br>Kế hoạch giao thầu `160508102`<br>Kế hoạch ký kết hợp đồng `160509102`<br>Kế hoạch ký kết hợp đồng - PJM `161405102`<br>Tra cứu kế hoạch mua sắm vật tư và giao thầu `160514102` | Phòng mua sắm dự án |  |
| 2 | Mời thầu | Lập hồ sơ mời thầu `161201102`<br>Phân quyền nhân sự chấm thầu `161205102` | Phòng mua sắm dự án |  |
| 3 | Nộp thầu (cổng đối tác) | Đăng nhập đấu thầu `161302102`<br>Nộp thầu `161301102` | NCC, nhà thầu phụ | Đối tác có tài khoản (HT-1) |
| 4 | Chọn thầu | So sánh giá và chọn thầu `161203102`<br>Phân chia sản lượng giao thầu `161204102` | Hội đồng chấm thầu |  |
| 5 | Hợp đồng | Lập hợp đồng giao thầu `160401102`<br>Duyệt hợp đồng thầu phụ `160402102`<br>Phát hành LOA cho NCC/NTP `160403102`<br>Lập bảng giá nhà thầu `160201102`<br>Điều chỉnh bảng giá nhà thầu `160203102`<br>Duyệt bảng giá thầu phụ `160204102` | Phòng mua sắm dự án |  |
| 6 | Mua vật tư tại dự án | Hợp đồng mua tại dự án `160404102`<br>Đơn hàng mua tại dự án `160405102`<br>Lập bảng giá vật tư dự án `160205102`<br>Điều chỉnh bảng giá vật tư dự án `160206102` | Phòng mua sắm dự án | Đơn mua sinh phiếu nhập (KHO-2) |
| 7 | Báo cáo | (4A) Theo dõi HĐ NCC/NTP `301145202`<br>(4C) Tổng hợp HĐ NCC/NTP `301147202`<br>BC ký kết hợp đồng với NTP/NCC/ĐTC `301120202`<br>(1) BC TH tình trạng tham gia đấu thầu theo đối tác `301153202` | Lãnh đạo |  |

### DA-5 · Thầu phụ thực hiện và thanh toán

Khối lượng thầu phụ đến thanh toán.

```text
Điểm danh nhân sự ─▶ Ghi nhận khối lượng (app) ─▶ Xác nhận khối lượng ─▶ Nghiệm thu nhà thầu ─▶ KT-1 phải trả, tạm ứng
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Hiện trường | Điểm danh nhân sự thầu phụ `160502102`<br>Ghi nhận khối lượng thầu phụ `160506102`<br>Ghi nhận khối lượng thầu phụ (M) `800606102` | Giám sát công trình | Kênh app |
| 2 | Xác nhận, nghiệm thu | Xác nhận khối lượng thầu phụ `160513102`<br>Lập biên bản nghiệm thu nhà thầu `160702102` | Chỉ huy trưởng, QS | Y sinh chứng từ phải trả |
| 3 | Tạm ứng, thanh toán | Nhập phiếu tạm ứng thầu phụ `120110102`<br>→ [KT-1 Phải trả và chi tiền](kt-ke-toan.md) | Kế toán dự án |  |
| 4 | Báo cáo | Bảng chi tiết thanh toán theo NTP theo kỳ `301110202`<br>BCTH khối lượng thanh toán `301101202`<br>Bảng tổng theo dõi tình hình thực hiện với NTP `301111202` | QS, kế toán |  |

### DA-6 · Tiến độ dự án

Kế hoạch triển khai, tiến độ, nhật ký.

```text
Kế hoạch triển khai ─▶ Tiến độ ─▶ Ghi nhận thực tế, nhật ký ─▶ điều chỉnh ─▶ theo dõi
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Kế hoạch | Lập kế hoạch triển khai dự án `161102102`<br>Điều chỉnh kế hoạch triển khai dự án `161112102`<br>Lập tiến độ dự án `161104102`<br>Điều chỉnh tiến độ dự án `161105102` | Giám đốc dự án |  |
| 2 | Ghi nhận | Ghi nhận tiến độ dự án thực tế `161106102`<br>Ghi nhận tiến độ thực hiện `160005101`<br>Ghi nhận kết quả thực hiện `160704102`<br>Nhật ký dự án `161103102` | Chỉ huy trưởng | Giờ sự kiện do người nhập khai (L-41) |
| 3 | Theo dõi | Theo dõi tiến độ dự án `161113102`<br>Dashboard Tiến Độ Dự Án `301114202`<br>Dashboard Tổng tiến Độ Dự Án `301115202`<br>Báo cáo theo dõi tiến độ dự án toàn công ty `305601202` | Lãnh đạo |  |

### DA-7 · Sự không phù hợp (NCR)

Phát hiện đến đóng NCR.

```text
Phát hiện NCR (app) ─▶ Nguyên nhân, giải pháp ─▶ Duyệt biện pháp ─▶ Xử lý ─▶ Đóng (Y); mở lại khi có thông tin mới (Y → N)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Phát hiện | Phát Hiện Sự Không Phù Hợp `160504102`<br>Phát hiện NCR `800604102`<br>Ghi nhận NCR cho tiến độ `161107102` | Giám sát, QA/QC | Người dùng tự lập, hệ thống không tự mở (L-25) |
| 2 | Xử lý | Nguyên Nhân Và Giải Pháp Sự Không Phù Hợp `160507102`<br>Duyệt biện pháp xử lý `160512102`<br>Xử lý sự không phù hợp `160511102` | QA/QC, chỉ huy trưởng |  |
| 3 | Đóng | Đóng sự không phù hợp `160510102` | QA/QC | Chứng từ liên quan bị khoá tới khi NCR Y (L-28) |
| 4 | Báo cáo | BC Sự không phù hợp (NCR) `301105202`<br>BCQT Quản lý sự không phù hợp `981603202`<br>Báo cáo kiểm tra Audit định kỳ `301156202` | Lãnh đạo |  |

### DA-8 · Chi phí dự án và quyết toán

Định mức chi, phân bổ chi phí chung, lãi lỗ, đóng dự án.

```text
Định mức chi ─▶ chi phí thực tế (KT, KHO) ─▶ Phân bổ chi phí chung ─▶ Lãi lỗ dự án ─▶ Đóng / thanh lý dự án
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Định mức, hao hụt | Định mức chi `160324102`<br>Điều chỉnh định mức chi `160325102`<br>Nhập hao hụt `160321102` | Phòng dự án |  |
| 2 | Phân bổ chi phí chung | Định nghĩa phân bổ chi phí chung dự án `160319102`<br>Chạy phân bổ chi phí chung dự án `160320102` | Kế toán dự án |  |
| 3 | Đóng dự án | \*\*Đóng/ thanh lý dự án `160306101`<br>BC tổng hợp theo dõi thanh lý VT/TB `301161202` | Giám đốc dự án |  |
| 4 | Hiệu quả | Bảng tổng hợp lãi/lỗ dự án `301139202`<br>Bảng tổng hợp lãi gộp dự án `301163202`<br>BC hiệu quả dự án `981209202`<br>BC dòng tiền dự án `981211202`<br>BC chi phí cuối dự án `301159202` | Lãnh đạo |  |

### DA-9 · Hợp đồng thiết kế

Dự án thiết kế theo hợp đồng.

```text
Thông tin hợp đồng thiết kế ─▶ Quy trình ─▶ (duyệt) ─▶ Quản lý dự án thiết kế ─▶ theo dõi
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Hợp đồng | Lập thông tin hợp đồng thiết kế `160001101`<br>Lập quy trình hợp đồng thiết kế `160002101`<br>Duyệt hợp đồng thiết kế `160003101` | Phòng thiết kế |  |
| 2 | Thực hiện | Quản lý dự án thiết kế `160303101`<br>Theo dõi hợp đồng thiết kế `160004101` | Phòng thiết kế |  |

### DA-10 · Ticket hỗ trợ khách hàng

Yêu cầu hỗ trợ từ khách hoặc nội bộ.

```text
Phát hành ticket (khách / nội bộ) ─▶ (duyệt) ─▶ Xử lý ticket, checklist ─▶ Y
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Phát hành | Cổng thông tin khách hàng `161114102`<br>Phát hành Ticket - Khách hàng - GS `161116102`<br>Phát hành Ticket - Nội bộ `161121102`<br>Phát hành Ticket - Nội bộ - GS `161115102` | Khách hàng, nhân viên |  |
| 2 | Xử lý | Duyệt Ticket - GS `161119102`<br>Xử lý Ticket - GS `161117102`<br>Xử lý checklist - nhân viên `161120102` | Bộ phận hỗ trợ |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### DA-0 · Khai báo dự án (11)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Thiết lập nhanh thông tin dự án mới | `110059102` | Khai báo |  |
| Khai báo nhóm WBS | `110501102` | Khai báo |  |
| Khai báo cấu trúc dự toán dự án | `110502102` | Khai báo |  |
| Khai báo Nhóm dự án | `110503102` | Khai báo |  |
| Khai báo hình thức chọn thầu | `110504102` | Khai báo |  |
| Khai báo cấu trúc doanh thu | `110505102` | Khai báo |  |
| Quy định thời gian Ngân sách | `110509102` | Khai báo |  |
| Khai báo cấu trúc ngân sách thiết bị | `110510102` | Khai báo |  |
| Khai báo phương pháp triển khai dự án | `161101102` | Khai báo |  |
| Chuẩn triển khai | `161109102` | Khai báo |  |
| Khai báo thông tin mời thầu | `161202102` | Khai báo |  |

### DA-1 · Dự thầu (công ty là nhà thầu) (11)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập bảng giá dự thầu | `110509101` | Lập |  |
| Lập biên bản điều chỉnh giá dự thầu | `110511101` | Lập | Theo lõi: Nhân bản thành bản mới (L-35) |
| Ngân sách dự thầu | `160313102` | Lập |  |
| Điều chỉnh ngân sách dự thầu | `160314102` | Lập |  |
| Nộp thầu | `161301102` | Lập |  |
| Đăng nhập đấu thầu | `161302102` | Lập |  |
| Duyệt bảng giá dự thầu | `110510101` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| (1) BC TH tình trạng tham gia đấu thầu theo đối tác | `301153202` | Báo cáo |  |
| (2) BC TH gói thầu trực tuyến theo GDK/GDDH/GDDA | `301154202` | Báo cáo |  |
| (3) BC TH gói thầu trực tuyến theo dự án | `301155202` | Báo cáo |  |
| Tỷ lệ dự thầu - Trúng thầu | `981602202` | Báo cáo |  |

### DA-2 · Khởi tạo dự án và ngân sách dự án (29)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập định biên phòng ban/dự án | `110604102` | Lập |  |
| Nhập thông tin dự án | `160307102` | Lập |  |
| Lập ngân sách dự án | `160310102` | Lập |  |
| Điều chỉnh ngân sách dự án | `160311102` | Lập |  |
| Nhập thư mục dự án | `160312102` | Lập | Ẩn |
| Điều chỉnh BOQ | `160315102` | Lập |  |
| Kiểm soát thời gian BOQ | `160317102` | Lập |  |
| Thông tin dự án chủ trương | `161108102` | Lập |  |
| Thông tin dự án chi tiết | `161110102` | Lập |  |
| Điều chỉnh thông tin chi tiết | `161111102` | Lập |  |
| Nhập thông tin dự án - PJM | `161401102` | Lập | biến thể |
| Lập ngân sách - PJM | `161402102` | Lập | biến thể |
| Điều chỉnh ngân sách - PJM | `161403102` | Lập | biến thể |
| Nạp dự án từ Excel | `160302101` | Xử lý | Ẩn; Nạp Excel, báo lỗi theo dòng (L-51) |
| Theo dõi thực hiện dự án | `160305101` | Tra cứu | Ẩn |
| Theo dõi thời gian ngân sách dự án | `160316102` | Tra cứu |  |
| Theo dõi trạng thái hợp đồng | `160318102` | Tra cứu |  |
| Báo cáo tổng hợp dự toán trường | `301102102` | Báo cáo |  |
| Bảng tổng hợp thông tin hợp đồng | `301109202` | Báo cáo |  |
| BC tình hình thực hiện giá trị hợp đồng | `301113202` | Báo cáo |  |
| BC ngân sách dự án | `301135202` | Báo cáo |  |
| BC quản trị | `301136202` | Báo cáo |  |
| Bảng tổng hợp vật tư hoàn thiện | `301141202` | Báo cáo |  |
| BC Tổng hợp DS nhân sự của dự án | `304835202` | Báo cáo |  |
| BC quản trị dự án tổng thể | `981601202` | Báo cáo |  |
| BC thực hiện NS | `981605202` | Báo cáo |  |
| BC tình hình thực hiện ngân sách | `981605202` | Báo cáo |  |
| Các chỉ số quản trị dự án | `981606202` | Báo cáo |  |
| Năng suất lao động | `981607202` | Báo cáo |  |

### DA-3 · Hợp đồng chủ đầu tư, nghiệm thu, doanh thu (29)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập bill thanh toán - PJM | `120115102` | Lập | biến thể |
| Lập bảng giá chủ đầu tư | `160101102` | Lập |  |
| Điều chỉnh bảng giá chủ đầu tư | `160103102` | Lập | Theo lõi: Nhân bản thành bản mới (L-35) |
| Định nghịa ngân sách từ hợp đồng chủ đầu tư | `160304102` | Lập | Ẩn |
| Nhập BOQ với chủ đầu tư (GĐDA, CHT) | `160308102` | Lập | biến thể |
| \*\* Nhập BOQ với chủ đầu tư (QS) | `160312101` | Lập | Ẩn; biến thể |
| Lập biên bản nghiệm thu chủ đầu tư | `160701102` | Lập |  |
| Ghi nhận giai đoạn nghiệm thu | `160703102` | Lập | Ẩn |
| Ghi nhận doanh thu | `161118102` | Lập |  |
| Duyệt bảng giá chủ đầu tư | `160104102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Theo dõi thời gian ngân sách dự án (CĐT) | `161404102` | Tra cứu | Ẩn; biến thể |
| BC tình hình thực hiện HĐ CĐT | `301103202` | Báo cáo |  |
| BC doanh thu chi phí hiệu quả DA | `301104202` | Báo cáo |  |
| Theo dõi chi tiết công nợ theo dự án | `301108202` | Báo cáo |  |
| BOQ-Claim | `301116202` | Báo cáo |  |
| BC theo dõi HĐ/Claim/Công nợ DA | `301119202` | Báo cáo |  |
| BC thực hiện doanh thu, công nợ, ngân lưu DA | `301122202` | Báo cáo |  |
| BC theo dõi chi tiết công nợ theo dự án | `301122302` | Báo cáo |  |
| BC theo dõi thực hiện dự án & KH doanh thu theo năm (Chi tiết XD - MEP) | `301129202` | Báo cáo |  |
| Bảng chi tiết theo dõi phát sinh | `301130202` | Báo cáo |  |
| Bảng chi tiết theo dõi Claim - IPC | `301131202` | Báo cáo |  |
| Bảng chi tiết theo dõi EOT | `301132202` | Báo cáo |  |
| Bảng theo dõi kế hoạch sản lượng | `301133202` | Báo cáo |  |
| (5a) Bảng tổng hợp doanh thu theo chủ đầu tư | `301134202` | Báo cáo |  |
| BC sản lượng dự án theo năm | `301144202` | Báo cáo |  |
| (\*)BC tổng hợp kế hoạch thanh toán | `301150202` | Báo cáo | Ẩn |
| Bảng kê chi tiết khấu trừ với CĐT | `301162202` | Báo cáo |  |
| (\*)Kế hoạch thanh toán đầu dự án | `301613202` | Báo cáo |  |
| BCQT Thanh toán chủ đầu tư | `981604202` | Báo cáo |  |

### DA-4 · Mua sắm và giao thầu tại dự án (29)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập bảng giá nhà thầu | `160201102` | Lập |  |
| Điều chỉnh bảng giá nhà thầu | `160203102` | Lập | Theo lõi: Nhân bản thành bản mới (L-35) |
| Lập bảng giá vật tư dự án | `160205102` | Lập |  |
| Điều chỉnh bảng giá vật tư dự án | `160206102` | Lập | Theo lõi: Nhân bản thành bản mới (L-35) |
| Lập hợp đồng giao thầu | `160401102` | Lập |  |
| Phát hành LOA cho NCC/NTP | `160403102` | Lập |  |
| Hợp đồng mua tại dự án | `160404102` | Lập |  |
| Đơn hàng mua tại dự án | `160405102` | Lập |  |
| Kế hoạch giao thầu | `160508102` | Lập |  |
| Lập KH mua sắm vật tư PB | `160508102` | Lập |  |
| Lập KH mua sắm vật tư và giao thầu DA | `160508102` | Lập |  |
| Kế hoạch ký kết hợp đồng | `160509102` | Lập |  |
| Lập hồ sơ mời thầu | `161201102` | Lập |  |
| Phân chia sản lượng giao thầu | `161204102` | Lập |  |
| Phân quyền nhân sự chấm thầu | `161205102` | Lập |  |
| Kế hoạch ký kết hợp đồng - PJM | `161405102` | Lập | biến thể |
| Lập KH mua sắm vật tư và giao thầu DA (CĐT) | `161406102` | Lập | Ẩn; biến thể |
| Duyệt bảng giá thầu phụ | `160204102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt hợp đồng thầu phụ | `160402102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| So sánh giá và chọn thầu | `161203102` | Xử lý |  |
| Tra cứu kế hoạch mua sắm vật tư và giao thầu | `160514102` | Tra cứu |  |
| BC ký kết hợp đồng với NTP/NCC/ĐTC | `301120202` | Báo cáo |  |
| Bảng tổng hợp mua sắm vật tư tại dự án | `301128202` | Báo cáo |  |
| (4A) Theo dõi HĐ NCC/NTP | `301145202` | Báo cáo |  |
| (4B) Chi tiết HĐ NCC/NTP | `301146202` | Báo cáo |  |
| (4C) Tổng hợp HĐ NCC/NTP | `301147202` | Báo cáo |  |
| BC kế hoạch thanh toán sắt thép và bê tông | `301149202` | Báo cáo |  |
| (\*)BC chi tiết công nợ thép, bê tông | `301151202` | Báo cáo | Ẩn |
| (\*)Báo cáo thông tin NCC/NTP theo hạng mục/ theo dự án | `301615202` | Báo cáo |  |

### DA-5 · Thầu phụ thực hiện và thanh toán (14)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập phiếu tạm ứng thầu phụ | `120110102` | Lập |  |
| Điểm danh nhân sự thầu phụ | `160502102` | Lập |  |
| Ghi nhận khối lượng thầu phụ | `160506102` | Lập |  |
| Lập biên bản nghiệm thu nhà thầu | `160702102` | Lập |  |
| Ghi nhận khối lượng thầu phụ (M) | `800606102` | Lập | app; biến thể |
| Xác nhận khối lượng thầu phụ | `160513102` | Xác nhận | Bước W chuyên trách, menu riêng (L-20) |
| Bảng chi tiết thanh toán theo NTP theo kỳ - MPT | `301101102` | Báo cáo |  |
| BCTH khối lượng thanh toán | `301101202` | Báo cáo |  |
| Bảng chi tiết thanh toán theo NTP theo kỳ | `301110202` | Báo cáo |  |
| Bảng tổng theo dõi tình hình thực hiện với NTP | `301111202` | Báo cáo |  |
| Bảng tổng hợp thông tin nhà thầu phụ - DB | `301142202` | Báo cáo |  |
| BC tổng hợp nhà thầu phụ | `301143202` | Báo cáo |  |
| Báo cáo thống kê giá NTP-XD | `301152202` | Báo cáo |  |
| Bảng chi tiết khối lượng thanh toán | `800609202` | Báo cáo | app |

### DA-6 · Tiến độ dự án (14)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Ghi nhận tiến độ thực hiện | `160005101` | Lập |  |
| Ghi nhận kết quả thực hiện | `160704102` | Lập | Ẩn |
| Lập kế hoạch triển khai dự án | `161102102` | Lập |  |
| Nhật ký dự án | `161103102` | Lập |  |
| Lập tiến độ dự án | `161104102` | Lập | Ẩn |
| Điều chỉnh tiến độ dự án | `161105102` | Lập | Ẩn |
| Ghi nhận tiến độ dự án thực tế | `161106102` | Lập | Ẩn |
| Điều chỉnh kế hoạch triển khai dự án | `161112102` | Lập |  |
| Theo dõi tiến độ dự án | `161113102` | Tra cứu |  |
| Theo dõi tiến độ dự án - XD | `301107202` | Báo cáo |  |
| Dashboard Tiến Độ Dự Án | `301114202` | Báo cáo |  |
| Dashboard Tổng tiến Độ Dự Án | `301115202` | Báo cáo |  |
| BC Kế hoạch nhân sự theo định biên và tiến độ dự án | `304843202` | Báo cáo |  |
| Báo cáo theo dõi tiến độ dự án toàn công ty | `305601202` | Báo cáo |  |

### DA-7 · Sự không phù hợp (NCR) (10)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Phát Hiện Sự Không Phù Hợp | `160504102` | Lập |  |
| Nguyên Nhân Và Giải Pháp Sự Không Phù Hợp | `160507102` | Lập |  |
| Ghi nhận NCR cho tiến độ | `161107102` | Lập | Ẩn |
| Phát hiện NCR | `800604102` | Lập | app |
| Duyệt biện pháp xử lý | `160512102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Đóng sự không phù hợp | `160510102` | Xử lý |  |
| Xử lý sự không phù hợp | `160511102` | Xử lý |  |
| BC Sự không phù hợp (NCR) | `301105202` | Báo cáo |  |
| Báo cáo kiểm tra Audit định kỳ | `301156202` | Báo cáo |  |
| BCQT Quản lý sự không phù hợp | `981603202` | Báo cáo |  |

### DA-8 · Chi phí dự án và quyết toán (33)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Định nghĩa phân bổ chi phí chung dự án | `160319102` | Khai báo |  |
| \*\*Đóng/ thanh lý dự án | `160306101` | Lập | Ẩn |
| Nhập hao hụt | `160321102` | Lập |  |
| Lập ngân sách thiết bị | `160322102` | Lập |  |
| Điều chỉnh ngân sách thiết bị | `160323102` | Lập |  |
| Định mức chi | `160324102` | Lập |  |
| Điều chỉnh định mức chi | `160325102` | Lập |  |
| Chạy phân bổ chi phí chung dự án | `160320102` | Xử lý |  |
| Báo cáo chi tiết tài chính dự án | `300710202` | Báo cáo |  |
| Bảng tính tài chính dự án | `300713202` | Báo cáo |  |
| Báo cáo chi tiết tài chính dự án - ERP100 | `300727202` | Báo cáo | biến thể |
| BC hiệu quả công trình | `301102202` | Báo cáo |  |
| BC tổng hợp tài chính DA | `301106202` | Báo cáo |  |
| Bảng tổng hợp chi phí lũy kế (P. Thiết bị) | `301112202` | Báo cáo |  |
| Bảng tổng hợp chi phí thiết bị tại công trình | `301117202` | Báo cáo |  |
| Bảng chi phí cố định theo tháng | `301138202` | Báo cáo |  |
| Bảng tổng hợp lãi/lỗ dự án | `301139202` | Báo cáo |  |
| Bảng tổng hợp chi phí cố định | `301148202` | Báo cáo |  |
| BC chi phí thiết bị DA | `301157202` | Báo cáo |  |
| BC chi phí thiết bị tổng các DA | `301158202` | Báo cáo |  |
| BC chi phí cuối dự án | `301159202` | Báo cáo |  |
| Báo cáo hao hụt vật tư/ thiết bị | `301160202` | Báo cáo |  |
| BC tổng hợp theo dõi thanh lý VT/TB | `301161202` | Báo cáo |  |
| Bảng tổng hợp lãi gộp dự án | `301163202` | Báo cáo |  |
| BC hiệu quả dự án | `981209202` | Báo cáo |  |
| BC hiệu quả dự án 1 | `981209202` | Báo cáo |  |
| BC hiệu quả dự án 2 | `981210202` | Báo cáo |  |
| BC dòng tiền dự án | `981211202` | Báo cáo | ×2 |
| Dashboard quản trị phòng thiết bị | `981601102` | Báo cáo |  |
| Theo dõi phễu chi phí | `981601302` | Báo cáo |  |
| Theo dõi phễu chi phí 1 | `981601902` | Báo cáo |  |
| Dashboard quản trị thiết bị tại dự án | `981602102` | Báo cáo |  |
| Báo cáo chi phí thiết bị cuối dự án | `981603102` | Báo cáo |  |

### DA-9 · Hợp đồng thiết kế (5)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập thông tin hợp đồng thiết kế | `160001101` | Lập |  |
| Lập quy trình hợp đồng thiết kế | `160002101` | Lập |  |
| Quản lý dự án thiết kế | `160303101` | Lập | Ẩn |
| Duyệt hợp đồng thiết kế | `160003101` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Theo dõi hợp đồng thiết kế | `160004101` | Tra cứu |  |

### DA-10 · Ticket hỗ trợ khách hàng (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Cổng thông tin khách hàng | `161114102` | Lập |  |
| Phát hành Ticket - Nội bộ - GS | `161115102` | Lập | biến thể |
| Phát hành Ticket - Khách hàng - GS | `161116102` | Lập | biến thể |
| Phát hành Ticket - Nội bộ | `161121102` | Lập |  |
| Duyệt Ticket - GS | `161119102` | Duyệt | biến thể; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xử lý Ticket - GS | `161117102` | Xử lý | biến thể |
| Xử lý checklist - nhân viên | `161120102` | Xử lý |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
