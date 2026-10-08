---
title: Luồng nghiệp vụ theo menu — KT Kế toán, thu chi, tín dụng
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# KT · Kế toán, thu chi, tín dụng

**Khối:** Lõi ERP · **Số menu:** 162 nhãn (168 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Phải trả và chi, phải thu và thu, tạm ứng, kế hoạch thanh toán, giá vốn, tín dụng và vay, cấn trừ, quỹ tiền, tổng hợp và báo cáo tài chính.

## Luồng

- **KT-0** Khai báo kế toán: Hệ thống tài khoản và quy tắc định khoản tự động.
- **KT-1** Phải trả và chi tiền: Hoá đơn đầu vào → phải trả → đề nghị thanh toán → phiếu chi.
- **KT-2** Phải thu và thu tiền: Hoá đơn bán → phải thu → phiếu thu.
- **KT-3** Tạm ứng và hoàn ứng: Ứng tiền cho nhân viên, hoàn ứng bằng chứng từ chi.
- **KT-4** Kế hoạch thanh toán và dòng tiền: Lập kế hoạch thu chi rồi sinh lệnh.
- **KT-5** Giá vốn hàng tồn kho: Hạch toán phiếu nhập, xuất và tính giá.
- **KT-6** Tín dụng, vay, bảo lãnh: Hạn mức, hợp đồng tín dụng, khế ước vay, bảo lãnh, tiền gửi.
- **KT-7** Tổng hợp, đóng kỳ, báo cáo tài chính: Bút toán tổng hợp, kết chuyển, báo cáo tài chính và thuế.
- **KT-8** Cấn trừ và chuyển công nợ: Bù trừ phải thu với phải trả, chuyển công nợ giữa đối tượng.
- **KT-9** Quỹ tiền và ngân hàng: Theo dõi tồn quỹ và tiền gửi.

### KT-0 · Khai báo kế toán

Hệ thống tài khoản và quy tắc định khoản tự động.

```text
Tài khoản ─▶ Loại tiền, tỷ giá ─▶ Quỹ, ngân hàng ─▶ Kỳ kế toán ─▶ Mã phân tích ─▶ Nghiệp vụ chuẩn ─▶ Quy tắc định khoản
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Tài khoản, tiền tệ | Khai báo tài khoản kế toán `110138102`<br>Khai báo loại tiền `110110102`<br>Khai báo tỷ giá `110135102`<br>Khai báo quỹ tiền mặt, ngân hàng `110136102` | Kế toán trưởng | Tỷ giá có thể nhập trên từng hoá đơn (E-T8) |
| 2 | Kỳ, mã phân tích | Khai báo kỳ kế toán `110111102`<br>Khai báo mã phân tích `110112102`<br>Định nghĩa mã phân tích `100119102` | Kế toán trưởng |  |
| 3 | Nghiệp vụ và định khoản | Khai báo nghiệp vụ `110109102`<br>Khai báo nghiệp vụ chuẩn `110119102`<br>Khai báo nghiệp vụ chuẩn - PJM `110152102`<br>Khai báo Quy tắc định khoản Kho `110105102`<br>Khai báo Quy tắc định khoản hóa đơn phải thu `110104102`<br>Khai báo quy tắc định khoản dự án `110103102` | Kế toán trưởng | Chứng từ Y tự sinh bút toán |
| 4 | Giá vốn, kết chuyển | Khai báo nhóm mặt hàng tính giá `110139102`<br>Khai báo nhóm kho tính giá `110140102`<br>Khai báo công thức kết chuyển phân bổ `110114102`<br>Khai báo lô công thức kết chuyển `110106102` | Kế toán tổng hợp |  |
| 5 | Điều khoản, nội dung chi | Khai báo điều khoản thanh toán `110108102`<br>Khai báo nội dung chi `110220102` | Kế toán |  |
| 6 | Số dư đầu kỳ | **[MỚI]** Số dư đầu kỳ công nợ và tài khoản | Kế toán | Chứng từ, Hoàn thành là ghi sổ (L-52) |

### KT-1 · Phải trả và chi tiền

Hoá đơn đầu vào → phải trả → đề nghị thanh toán → phiếu chi.

```text
KHO-2 / MUA-1 / DA-5 ─▶ Hoá đơn đầu vào ─▶ Chứng từ phải trả (Y: ghi công nợ) ─▶ Đề nghị thanh toán ─▶ Phiếu chi ─▶ Xác nhận chi (W) ─▶ Y
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Hoá đơn đầu vào | Thông tin hóa đơn đầu vào `120113102`<br>Hóa đơn đầu vào trích trước cần in BC thuế `120112102` | Kế toán công nợ |  |
| 2 | Ghi phải trả | Nhập chứng từ phải trả `120101102`<br>Chứng từ phải trả (Admin) `120112102`<br>Duyệt hóa đơn phải trả (MINH) `1002091020101, 100209102010101` | Kế toán công nợ | Y: ghi công nợ phải trả |
| 3 | Đề nghị thanh toán | Lập đề nghị thanh toán `120114102`<br>Đề nghị thanh toán `120109102` | Bộ phận đề nghị | Duyệt qua HT-2 nếu bật |
| 4 | Chi tiền | Lập phiếu chi ngân hàng qua chứng từ công nợ `120308102`<br>Lập phiếu chi tiền mặt qua chứng từ công nợ `120308102`<br>Lập phiếu chi ngân hàng trực tiếp `120307102`<br>Lập phiếu chi tiền mặt trực tiếp `120307102` | Kế toán thanh toán | Đối trừ theo từng chứng từ công nợ (E-M5) |
| 5 | Xác nhận chi | Xác nhận chi ngân hàng `120306102`<br>Xác nhận chi tiền mặt `120306102` | Thủ quỹ, kế toán ngân hàng | Bước W chuyên trách (L-20) |
| 6 | Đối chiếu | Bảng thống kê phiếu nhập và hóa đơn `300209202` | Kế toán | Đối chiếu nhập kho với hoá đơn (E-M4) |

### KT-2 · Phải thu và thu tiền

Hoá đơn bán → phải thu → phiếu thu.

```text
BAN-1 / DA-3 ─▶ Chứng từ phải thu (hoá đơn, Y) ─▶ Phiếu thu (qua công nợ / trực tiếp / đặt cọc) ─▶ Y
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Ghi phải thu | Nhập chứng từ phải thu `120201102`<br>Cập nhật doanh thu `120114102`<br>**[MỚI]** Phát hành hoá đơn điện tử<br>**[MỚI]** Hoá đơn điều chỉnh, thay thế | Kế toán công nợ | Thiếu mã thuế thì không phát hành được (E-T7) |
| 2 | Thu tiền | Lập phiếu thu ngân hàng qua chứng từ công nợ `120309102`<br>Lập phiếu thu tiền mặt qua chứng từ công nợ `120309102`<br>Lập phiếu thu ngân hàng nhiều đối tượng qua chứng từ công nợ `120310102`<br>Lập phiếu thu tiền mặt nhiều đối tượng qua chứng từ công nợ `120310102`<br>Lập phiếu thu ngân hàng trực tiếp `120314102`<br>Lập phiếu thu tiền mặt trực tiếp `120314102`<br>Lập phiếu thu đặt cọc khách hàng `120202102` | Kế toán thanh toán | Đối trừ theo từng hoá đơn (E-T11) |
| 3 | Theo dõi công nợ | Bảng tổng hợp công nợ `300201202`<br>Bảng tổng hợp công nợ theo nguyên tệ `300203202`<br>Bảng kê chi tiết công nợ `300208202`<br>Thẻ công nợ (chi tiết) `300206202`<br>BC tuổi nợ `300202202`<br>Bảng xác nhận công nợ `300204202`<br>BC tình hình cân đối công nợ `301002202`<br>BC quản trị công nợ phải thu `981204202` | Kế toán công nợ |  |

### KT-3 · Tạm ứng và hoàn ứng

Ứng tiền cho nhân viên, hoàn ứng bằng chứng từ chi.

```text
Đề nghị tạm ứng ─▶ (duyệt) ─▶ KT-1 Phiếu chi ─▶ Hoàn ứng: chứng từ chi phí đối trừ tạm ứng (KT-8)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Đề nghị tạm ứng | Lập Đề nghị tạm ứng `120110102, 800201102, 801112102`<br>Lập Đề nghị tạm ứng `120110102, 800201102, 801112102`<br>Đề nghị tạm ứng `800709102`<br>Lập đề nghị tạm ứng theo dự toán `120114102` | Nhân viên | Theo dự toán thì liên kết NGS-3 |
| 2 | Chi tạm ứng | → [KT-1 Phải trả và chi tiền](kt-ke-toan.md) | Kế toán thanh toán |  |
| 3 | Hoàn ứng | **[MỚI]** Quyết toán tạm ứng<br>Tổng hợp các khoản tạm ứng lương dài hạn `981214202` | Nhân viên, kế toán | Hỏi quy chế tạm ứng (E-T17) |

### KT-4 · Kế hoạch thanh toán và dòng tiền

Lập kế hoạch thu chi rồi sinh lệnh.

```text
Kế hoạch thanh toán (theo đơn hàng, hợp đồng) ─▶ Lệnh chi / Lệnh thu ─▶ Phiếu chi / Phiếu thu
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập kế hoạch | Phân bổ kế hoạch thanh toán đơn hàng `120319102`<br>Kế hoạch chi `300708202`<br>Kế hoạch thu `301124202` | Kế toán, tài chính |  |
| 2 | Sinh lệnh | Lập lệnh chi từ kế hoạch thanh toán `120316102`<br>Lập lệnh thu từ kế hoạch thanh toán `120317102` | Kế toán thanh toán | Lệnh sinh phiếu thu, chi; có liên kết |
| 3 | Dòng tiền | BC lệnh chuyển tiền `300705202`<br>BC dòng tiền doanh nghiệp `300824202`<br>BC dòng tiền công ty `981203202`<br>BC kế hoạch dòng tiền theo đơn hàng `981213202` | Tài chính |  |

### KT-5 · Giá vốn hàng tồn kho

Hạch toán phiếu nhập, xuất và tính giá.

```text
Phiếu nhập / xuất Y ─▶ Kế toán phiếu nhập / xuất ─▶ Tính giá (mặc định FIFO) ─▶ Giá vốn, lãi gộp
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Hạch toán kho | Kế toán phiếu nhập `120401102`<br>Kế toán phiếu xuất `120402102` | Kế toán kho | Bút toán theo quy tắc định khoản kho |
| 2 | Tính giá | Tính giá FIFO `120405102`<br>Tính giá BQGQ `120403102` | Kế toán kho | Mặc định FIFO (E-T12) |
| 3 | Báo cáo | Báo cáo biến động lãi gộp `300726202`<br>Sổ chi tiết tài khoản 632 theo mã phân tích `300826202`<br>BCQT Các chỉ số tài chính kho `981303202` | Kế toán |  |

### KT-6 · Tín dụng, vay, bảo lãnh

Hạn mức, hợp đồng tín dụng, khế ước vay, bảo lãnh, tiền gửi.

```text
Tổng hạn mức ─▶ Hợp đồng tín dụng ─▶ Khế ước vay ─▶ giải ngân (phiếu thu) ─▶ trả gốc lãi (phiếu chi)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Hạn mức, hợp đồng | Quản lý tổng hạn mức `120602102`<br>Lập hợp đồng tín dụng `120605102`<br>Duyệt hợp đồng tín dụng `120606102` | Kế toán ngân hàng |  |
| 2 | Khế ước vay | Quản lý khế ước vay `120603102`<br>Duyệt khế ước vay `120604102` | Kế toán ngân hàng | Giải ngân, trả nợ qua KT-1, KT-2 |
| 3 | Bảo lãnh, tiền gửi, bao thanh toán | Bảo lãnh hợp đồng `120601102`<br>Quản lý hợp đồng tiền gửi `120607102`<br>Ghi nhận bao thanh toán `120318102` | Kế toán ngân hàng |  |
| 4 | Báo cáo | Bảng kê số dư nợ vay `300714202`<br>Kế hoạch trả nợ vay `300715202, 301009202`<br>Báo cáo dư nợ vay đến hạn `300719202`<br>BC kế hoạch trả gốc và lãi `300207202`<br>BC hạn mức tín dụng các ngân hàng `301003202`<br>BCQT Tín dụng `981207202` | Tài chính |  |

### KT-7 · Tổng hợp, đóng kỳ, báo cáo tài chính

Bút toán tổng hợp, kết chuyển, báo cáo tài chính và thuế.

```text
Bút toán từ phân hệ + Phiếu hạch toán ─▶ Kết chuyển ─▶ Chuyển sổ ─▶ Báo cáo tài chính, báo cáo thuế
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Bút toán | Lập phiếu hạch toán `120801102`<br>Tra cứu bút toán `120812102`<br>Tìm kiếm/kết hợp Mã PT `120810102`<br>Tra cứu hóa đơn `120813102` | Kế toán tổng hợp |  |
| 2 | Kết chuyển, chuyển sổ | Chạy công thức kết chuyển `120802102`<br>Chuyển sổ `120803102`<br>Xóa chuyển sổ `120804102`<br>Chỉnh sửa số chứng từ `120807102`<br>Đánh lại số tăng tự động `110151102` | Kế toán tổng hợp | Theo lõi: sửa số liệu qua huỷ và lập lại (L-36) |
| 3 | Kỳ kế toán | Mở/ đóng kỳ kế toán `110134102` | Kế toán trưởng | Theo lõi: mặc định không khoá kỳ (E-T10) |
| 4 | Báo cáo tài chính | Định nghĩa báo cáo tài chính `120808102`<br>Bảng cân đối kế toán `300803202`<br>BC kết quả hoạt động kinh doanh `300802202`<br>BC lưu chuyển tiền tệ `300801202`<br>Bảng cân đối số phát sinh `300809202`<br>Sổ nhật ký chung `300811202`<br>Sổ chi tiết tài khoản `300804202`<br>Sổ tổng hợp tài khoản `300807202` | Kế toán tổng hợp |  |
| 5 | Thuế | Chuyển dữ liệu từ nội bộ sang thuế `110150102`<br>BC thuế Giá trị gia tăng `300805202` | Kế toán thuế |  |

### KT-8 · Cấn trừ và chuyển công nợ

Bù trừ phải thu với phải trả, chuyển công nợ giữa đối tượng.

```text
Phải thu A ⇄ Phải trả A ─▶ Phiếu cấn trừ ─▶ Y
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Cấn trừ | Cấn trừ công nợ `120111102`<br>Cấn Trừ `110018101`<br>Báo cáo khấu trừ chéo `300709202` | Kế toán công nợ |  |
| 2 | Chuyển công nợ | Lập phiếu chuyển công nợ phải thu `120203102`<br>Lập phiếu chuyển công nợ phải trả `120103102` | Kế toán công nợ |  |

### KT-9 · Quỹ tiền và ngân hàng

Theo dõi tồn quỹ và tiền gửi.

```text
Phiếu thu, chi Y ─▶ Sổ quỹ tiền mặt, sổ tiền gửi ─▶ Tồn quỹ
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Sổ và tồn quỹ | Sổ chi tiết tiền mặt `300706202`<br>Sổ chi tiết tiền gửi ngân hàng `300702202`<br>Tra cứu tổng hợp tồn quỹ `300707202`<br>Báo cáo tổng hợp tồn quỹ ngân hàng `300720202`<br>Bảng kê phiếu thu chi `300701202` | Thủ quỹ, kế toán |  |
| 2 | Quản trị tiền | BC quản trị tiền `300703202`<br>BC quản lý tiền `981212202`<br>BC thu chi `300704202`<br>Báo cáo thu, chi thực tế `300716202` | Tài chính |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### KT-0 · Khai báo kế toán (22)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Định nghĩa mã phân tích | `100119102` | Khai báo |  |
| Khai báo quy tắc định khoản dự án | `110103102` | Khai báo |  |
| Khai báo Quy tắc định khoản hóa đơn phải thu | `110104102` | Khai báo |  |
| Khai báo Quy tắc định khoản Kho | `110105102` | Khai báo |  |
| Khai báo lô công thức kết chuyển | `110106102` | Khai báo |  |
| Khai báo điều khoản thanh toán | `110108102` | Khai báo |  |
| Khai báo nghiệp vụ | `110109102` | Khai báo |  |
| Khai báo loại tiền | `110110102` | Khai báo |  |
| Khai báo kỳ kế toán | `110111102` | Khai báo |  |
| Khai báo mã phân tích | `110112102` | Khai báo |  |
| Khai báo công thức kết chuyển phân bổ | `110114102` | Khai báo |  |
| Khai báo nghiệp vụ chuẩn | `110119102` | Khai báo |  |
| Khai báo tỷ giá | `110135102` | Khai báo |  |
| Khai báo quỹ tiền mặt, ngân hàng | `110136102` | Khai báo |  |
| Khai báo tài khoản kế toán | `110138102` | Khai báo |  |
| Khai báo nhóm mặt hàng tính giá | `110139102` | Khai báo |  |
| Khai báo nhóm kho tính giá | `110140102` | Khai báo |  |
| Khai báo nghiệp vụ chuẩn - PJM | `110152102` | Khai báo | biến thể |
| Khai báo nội dung chi | `110220102` | Khai báo |  |
| Chuyển dữ liệu từ nội bộ sang thuế | `110150102` | Lập |  |
| Mở/ đóng kỳ kế toán | `110134102` | Xử lý | [XUNG ĐỘT E-T10] mặc định không khoá kỳ |
| Đánh lại số tăng tự động | `110151102` | Xử lý | [XUNG ĐỘT] số chứng từ đã cấp giữ nguyên |

### KT-1 · Phải trả và chi tiền (14)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập chứng từ phải trả | `120101102` | Lập |  |
| Đề nghị thanh toán | `120109102` | Lập |  |
| Hóa đơn đầu vào trích trước cần in BC thuế | `120112102` | Lập |  |
| Chứng từ phải trả (Admin) | `120112102` | Lập |  |
| Thông tin hóa đơn đầu vào | `120113102` | Lập |  |
| Lập đề nghị thanh toán | `120114102` | Lập |  |
| Lập phiếu chi ngân hàng trực tiếp | `120307102` | Lập |  |
| Lập phiếu chi tiền mặt trực tiếp | `120307102` | Lập |  |
| Lập phiếu chi ngân hàng qua chứng từ công nợ | `120308102` | Lập |  |
| Lập phiếu chi tiền mặt qua chứng từ công nợ | `120308102` | Lập |  |
| Duyệt hóa đơn phải trả (MINH) | `1002091020101, 100209102010101` | Duyệt | ×2; biến thể; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xác nhận chi ngân hàng | `120306102` | Xác nhận | Bước W chuyên trách, menu riêng (L-20) |
| Xác nhận chi tiền mặt | `120306102` | Xác nhận | Bước W chuyên trách, menu riêng (L-20) |
| Bảng thống kê phiếu nhập và hóa đơn | `300209202` | Báo cáo |  |

### KT-2 · Phải thu và thu tiền (24)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập chứng từ phải thu | `120201102` | Lập |  |
| Lập phiếu thu đặt cọc khách hàng | `120202102` | Lập |  |
| Lập phiếu thu ngân hàng qua chứng từ công nợ | `120309102` | Lập |  |
| Lập phiếu thu tiền mặt qua chứng từ công nợ | `120309102` | Lập |  |
| Lập phiếu thu ngân hàng nhiều đối tượng qua chứng từ công nợ | `120310102` | Lập |  |
| Lập phiếu thu tiền mặt nhiều đối tượng qua chứng từ công nợ | `120310102` | Lập |  |
| Lập phiếu thu ngân hàng trực tiếp | `120314102` | Lập |  |
| Lập phiếu thu tiền mặt trực tiếp | `120314102` | Lập |  |
| Cập nhật doanh thu | `120114102` | Xử lý |  |
| Bảng tổng hợp công nợ | `300201202` | Báo cáo |  |
| BC tuổi nợ | `300202202` | Báo cáo |  |
| Bảng tổng hợp công nợ theo nguyên tệ | `300203202` | Báo cáo | Ẩn |
| Bảng xác nhận công nợ | `300204202` | Báo cáo |  |
| Bảng kê chiết khấu thanh toán ngay | `300205202` | Báo cáo |  |
| Thẻ công nợ (chi tiết) | `300206202` | Báo cáo |  |
| Bảng kê chi tiết công nợ | `300208202` | Báo cáo |  |
| Báo cáo hợp đồng, doanh thu | `300712202` | Báo cáo |  |
| Bảng tách doanh thu gốm sứ xuất khẩu ( Phong Thạnh) | `300830202` | Báo cáo | biến thể |
| Sổ chi tiết thanh toán với người mua (người bán) | `300832202` | Báo cáo |  |
| BC tình hình cân đối công nợ | `301002202` | Báo cáo |  |
| BC tuổi nợ theo nhân viên | `304704202` | Báo cáo |  |
| BC tổng hợp tuổi nợ | `304707202` | Báo cáo |  |
| BC chi tiết công nợ | `304708202` | Báo cáo |  |
| BC quản trị công nợ phải thu | `981204202` | Báo cáo |  |

### KT-3 · Tạm ứng và hoàn ứng (3)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập Đề nghị tạm ứng | `120110102, 800201102, 801112102` | Lập | ×3; app |
| Đề nghị tạm ứng | `800709102` | Lập | app |
| Tổng hợp các khoản tạm ứng lương dài hạn | `981214202` | Báo cáo |  |

### KT-4 · Kế hoạch thanh toán và dòng tiền (9)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập lệnh chi từ kế hoạch thanh toán | `120316102` | Lập |  |
| Lập lệnh thu từ kế hoạch thanh toán | `120317102` | Lập |  |
| Phân bổ kế hoạch thanh toán đơn hàng | `120319102` | Xử lý |  |
| BC lệnh chuyển tiền | `300705202` | Báo cáo |  |
| Kế hoạch chi | `300708202` | Báo cáo |  |
| BC dòng tiền doanh nghiệp | `300824202` | Báo cáo |  |
| Kế hoạch thu | `301124202` | Báo cáo |  |
| BC dòng tiền công ty | `981203202` | Báo cáo |  |
| BC kế hoạch dòng tiền theo đơn hàng | `981213202` | Báo cáo |  |

### KT-5 · Giá vốn hàng tồn kho (6)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Kế toán phiếu nhập | `120401102` | Lập |  |
| Kế toán phiếu xuất | `120402102` | Lập |  |
| Tính giá BQGQ | `120403102` | Xử lý | Mặc định dùng FIFO (E-T12) |
| Tính giá FIFO | `120405102` | Xử lý |  |
| Báo cáo biến động lãi gộp | `300726202` | Báo cáo |  |
| Sổ chi tiết tài khoản 632 theo mã phân tích | `300826202` | Báo cáo |  |

### KT-6 · Tín dụng, vay, bảo lãnh (20)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Ghi nhận bao thanh toán | `120318102` | Lập | ×2 |
| Bảo lãnh hợp đồng | `120601102` | Lập |  |
| Quản lý tổng hạn mức | `120602102` | Lập |  |
| Quản lý khế ước vay | `120603102` | Lập |  |
| Lập hợp đồng tín dụng | `120605102` | Lập |  |
| Quản lý hợp đồng tiền gửi | `120607102` | Lập |  |
| Duyệt khế ước vay | `120604102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt hợp đồng tín dụng | `120606102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| BC kế hoạch trả gốc và lãi | `300207202` | Báo cáo |  |
| Bảng kê số dư nợ vay | `300714202` | Báo cáo |  |
| Kế hoạch trả nợ vay | `300715202, 301009202` | Báo cáo | ×2 |
| Báo cáo dư nợ vay đến hạn | `300719202` | Báo cáo |  |
| Bảng kê sử dụng vốn vay | `301001202` | Báo cáo |  |
| BC hạn mức tín dụng các ngân hàng | `301003202` | Báo cáo |  |
| BC bảo lãnh ngân hàng | `301004202` | Báo cáo |  |
| BC bao thanh toán | `301005202` | Báo cáo |  |
| BC hợp đồng tín dụng | `301006202` | Báo cáo |  |
| Tổng hợp nợ vay theo khế ước vay | `301007202` | Báo cáo |  |
| Bảng kê theo dõi khoản vay theo khế ước vay | `301008202` | Báo cáo |  |
| BCQT Tín dụng | `981207202` | Báo cáo |  |

### KT-7 · Tổng hợp, đóng kỳ, báo cáo tài chính (47)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Định nghĩa báo cáo tài chính | `120808102` | Khai báo |  |
| Lập phiếu hạch toán | `120801102` | Lập |  |
| Chạy công thức kết chuyển | `120802102` | Xử lý |  |
| Chuyển sổ | `120803102` | Xử lý |  |
| Xóa chuyển sổ | `120804102` | Xử lý | [XUNG ĐỘT L-36] sửa qua huỷ và lập lại |
| Chỉnh sửa số chứng từ | `120807102` | Xử lý | [XUNG ĐỘT L-36] sửa qua huỷ và lập lại |
| Tìm kiếm/kết hợp Mã PT | `120810102` | Tra cứu | Ẩn |
| Tra cứu bút toán | `120812102` | Tra cứu |  |
| Tra cứu hóa đơn | `120813102` | Tra cứu |  |
| BC chi phí | `203040101` | Báo cáo |  |
| BC lưu chuyển tiền tệ | `300801202` | Báo cáo |  |
| BC kết quả hoạt động kinh doanh | `300802202` | Báo cáo |  |
| Bảng cân đối kế toán | `300803202` | Báo cáo |  |
| Sổ chi tiết tài khoản | `300804202` | Báo cáo |  |
| BC thuế Giá trị gia tăng | `300805202` | Báo cáo |  |
| Sổ chi tiết tài khoản nguyên tệ | `300806202` | Báo cáo |  |
| Sổ tổng hợp tài khoản | `300807202` | Báo cáo |  |
| Bảng tài khoản chữ T | `300808202` | Báo cáo |  |
| Bảng cân đối số phát sinh | `300809202` | Báo cáo | ×2 |
| Bảng cân đối số phát sinh nhiều phân hệ | `300810202` | Báo cáo |  |
| Sổ nhật ký chung | `300811202` | Báo cáo |  |
| Sổ nhật ký tài khoản | `300812202` | Báo cáo |  |
| Bảng tổng hợp đối ứng | `300813202` | Báo cáo |  |
| Bảng kê tổng hợp phát sinh theo mã phân tích | `300814202` | Báo cáo |  |
| BC chi phí theo phòng ban, chi nhánh và hợp nhất | `300815202` | Báo cáo |  |
| Bảng tài khoản chữ T theo mã phân tích | `300816202` | Báo cáo |  |
| Sổ tổng hợp tài khoản theo mã phân tích | `300817202` | Báo cáo |  |
| Sổ chi tiết tài khoản theo mã phân tích | `300818202` | Báo cáo |  |
| Bảng cân đối kế toán theo mã phân tích | `300819202` | Báo cáo |  |
| Bảng cân đối kế toán hợp nhất | `300820202` | Báo cáo |  |
| BC hợp nhất theo mã phân tích | `300821202` | Báo cáo |  |
| BC lưu chuyển tiền tệ theo mã phân tích | `300822202` | Báo cáo |  |
| So sánh báo cáo tài chính theo tháng | `300823202` | Báo cáo |  |
| BC hoạt động doanh nghiệp | `300825202` | Báo cáo |  |
| Bảng kê chi tiết chứng từ | `300827202` | Báo cáo |  |
| BC hiệu quả công ty | `300828202` | Báo cáo |  |
| BC biến động chi phí | `300829202` | Báo cáo |  |
| BC tài chính tổng quan | `300831202` | Báo cáo |  |
| BCQT- Thương mại- Cty | `801101302` | Báo cáo | app |
| BCQT- Thương mại- Chi nhánh | `801102302` | Báo cáo | app |
| BCQT-Chi phí toàn công ty | `801105302` | Báo cáo | app |
| BCQT- Chi phí theo đơn vị | `801106302` | Báo cáo | app |
| BCQT- Chi phí TTCP | `801107302` | Báo cáo | app |
| BC theo dõi biến động chi phí | `981201202` | Báo cáo |  |
| BC theo dõi biến động chi phí 2 | `981202202` | Báo cáo |  |
| BCQT Tổng quan tình hình tài chính công ty | `981202202` | Báo cáo |  |
| Chi phí | `990101313` | Báo cáo | Ẩn |

### KT-8 · Cấn trừ và chuyển công nợ (5)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Cấn Trừ | `110018101` | Lập | Ẩn |
| Lập phiếu chuyển công nợ phải trả | `120103102` | Lập |  |
| Cấn trừ công nợ | `120111102` | Lập |  |
| Lập phiếu chuyển công nợ phải thu | `120203102` | Lập |  |
| Báo cáo khấu trừ chéo | `300709202` | Báo cáo |  |

### KT-9 · Quỹ tiền và ngân hàng (12)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Bảng kê phiếu thu chi | `300701202` | Báo cáo |  |
| Sổ chi tiết tiền gửi ngân hàng | `300702202` | Báo cáo |  |
| BC quản trị tiền | `300703202` | Báo cáo |  |
| BC thu chi | `300704202` | Báo cáo |  |
| Sổ chi tiết tiền mặt | `300706202` | Báo cáo |  |
| Tra cứu tổng hợp tồn quỹ | `300707202` | Báo cáo |  |
| Báo cáo thu, chi thực tế | `300716202` | Báo cáo |  |
| Báo cáo thu chi chi tiết (Mẫu 2) | `300717202` | Báo cáo |  |
| Báo cáo tổng hợp thu chi (Mẫu 3) | `300718202` | Báo cáo |  |
| Báo cáo tổng hợp tồn quỹ ngân hàng | `300720202` | Báo cáo |  |
| Báo cáo thu, chi thực tế - mã phân tích | `300728202` | Báo cáo |  |
| BC quản lý tiền | `981212202` | Báo cáo |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
