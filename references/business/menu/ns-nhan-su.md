---
title: Luồng nghiệp vụ theo menu — NS Nhân sự, tiền lương, đào tạo
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# NS · Nhân sự, tiền lương, đào tạo

**Khối:** Lõi ERP · **Số menu:** 219 nhãn (234 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Định biên, tuyển dụng, hồ sơ và hợp đồng lao động, điều động, khen thưởng kỷ luật, nghỉ việc, chấm công, lương, đào tạo, đánh giá, cổng nhân viên.

## Luồng

- **NS-0** Khai báo nhân sự, lương: Tham số trước khi chấm công, tính lương.
- **NS-1** Định biên và kế hoạch nhân sự: Số người cần theo phòng ban, dự án.
- **NS-2** Tuyển dụng: Yêu cầu bổ sung nhân sự đến nhận việc.
- **NS-3** Hồ sơ nhân viên, hợp đồng lao động: Một hồ sơ nhân viên, có hoặc không có tài khoản.
- **NS-4** Điều động, bổ nhiệm, uỷ quyền: Thay đổi vị trí công việc.
- **NS-5** Khen thưởng, kỷ luật: Quyết định thưởng phạt đi vào lương.
- **NS-6** Nghỉ việc và bàn giao: Đơn thôi việc đến khoá tài khoản.
- **NS-7** Chấm công, nghỉ phép, làm thêm: Dữ liệu công cho tính lương.
- **NS-8** Tiền lương, thuế, bảo hiểm: Tính lương và chuyển sang kế toán.
- **NS-9** Đào tạo: Yêu cầu đến đánh giá khoá học.
- **NS-10** Đánh giá nhân viên, KPI: Đánh giá định kỳ theo cấp.
- **NS-11** Cổng nhân viên: Nhân viên tự phục vụ, phần lớn trên app.

### NS-0 · Khai báo nhân sự, lương

Tham số trước khi chấm công, tính lương.

```text
Chức danh ─▶ Loại hợp đồng, phụ cấp ─▶ Ca, loại ngày công, kỳ chấm công ─▶ Thang bảng lương, công thức lương, thuế và bảo hiểm
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Tổ chức nhân sự | Khai báo chức danh `110602102`<br>Cơ cấu tổ chức - Phòng nhân sự `110060102`<br>Khai báo loại HĐ/PC/Hỗ trợ `110606102`<br>Khai báo phụ cấp theo đơn vị `170225102` | Nhân sự |  |
| 2 | Chấm công, nghỉ phép | Khai báo ca làm việc `110622102, 250102102`<br>Khai báo loại ngày công `110610102`<br>Khai báo tổng hợp ngày công `110608102`<br>Khai báo kỳ chấm công tính lương `110605102`<br>Khai báo kế hoạch ngày công `170221102`<br>Khai báo thông tin chấm công phòng ban `110618102`<br>Khai báo số ngày nghỉ theo loại hợp đồng `110617102`<br>Khai báo nhóm nghỉ phép theo cấp bậc `170222102`<br>Chi tiết ngày nghỉ phép theo tháng `110621102` | Nhân sự |  |
| 3 | Lương, thưởng | Khai báo thang bảng lương `110612102`<br>Khai báo các cột tính lương `110609102`<br>Khai báo công thức tính lương `110607102`<br>Khai báo công thức tính thưởng `110615102`<br>Tham số thiết lập tính lương `110623102`<br>Khai báo thuế TNCN/BHXH/Khung quy định chung `110611102`<br>Khai báo quy tắc định khoản lương `110153102` | Nhân sự, kế toán | Thuế, bảo hiểm là tham số theo năm (E-H6) |
| 4 | Khác | Khai báo nội dung thưởng phạt `110620102`<br>Khai báo nơi đào tạo `110619102`<br>Khai báo KPI ứng viên `110706102` | Nhân sự |  |

### NS-1 · Định biên và kế hoạch nhân sự

Số người cần theo phòng ban, dự án.

```text
Định biên ─▶ Dự báo nhân sự ─▶ Cân đối nguồn lực ─┬─ thiếu ─▶ NS-2 Tuyển dụng / NS-4 Điều động
                                                └─ thừa ─▶ Kế hoạch trả nhân sự ─▶ NS-6
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Định biên | Lập định biên phòng ban/dự án `110604102`<br>Lập điều chỉnh định biên `170211102`<br>Tra cứu định biên nhân viên `110613102`<br>Theo dõi NS theo định biên `170212102` | Nhân sự, trưởng bộ phận |  |
| 2 | Dự báo, cân đối | Lập dự báo nhân sự toàn công ty `170206102`<br>Điều chỉnh dự báo nhân sự `170210102`<br>Cân đối nguồn lực `170208102` | Nhân sự |  |
| 3 | Trả nhân sự | Lập kế hoạch trả nhân sự `170207102`<br>Đánh giá trả nhân sự `180211102`<br>Duyệt đánh giá trả nhân sự `180212102`<br>Xử lý kế hoạch trả nhân sự `170219102` | Nhân sự, dự án |  |
| 4 | Báo cáo | Kế hoạch nhân sự theo định biên `304836202`<br>BC kế hoạch NS theo cấp bậc `304844202`<br>Nguồn nhân lực `981702202`<br>Phổ nhân sự `801101202, 981704202`<br>BC biến động nhân sự theo thời gian `981703202` | Lãnh đạo |  |

### NS-2 · Tuyển dụng

Yêu cầu bổ sung nhân sự đến nhận việc.

```text
Yêu cầu bổ sung nhân sự ─▶ (duyệt) ─▶ Hồ sơ ứng viên ─▶ Sàng lọc ─▶ Phỏng vấn ─▶ Xử lý kết quả ─▶ Đóng yêu cầu ─▶ NS-3 Khai báo nhân viên
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Yêu cầu | Lập yêu cầu bổ sung nhân sự `170101102`<br>Duyệt yêu cầu bổ sung nhân sự `170108102`<br>Điều chỉnh yêu cầu bổ sung nhân sự `170107102`<br>Duyệt yêu cầu tuyển dụng (Central không sử dụng) `170102102` | Trưởng bộ phận |  |
| 2 | Ứng viên | Cổng thông tin ứng viên `260301102`<br>Bổ sung hồ sơ xin việc `260112102`<br>Hồ sơ ứng viên `170103102`<br>Sàng lọc hồ sơ ứng viên `170104102` | Nhân sự, ứng viên |  |
| 3 | Phỏng vấn | Kết quả phỏng vấn `170105102`<br>Đánh giá KPI theo ứng viên `180209102`<br>Xử lý kết quả phỏng vấn `170109102`<br>Nhập lương ứng viên `170110102` | Hội đồng tuyển dụng |  |
| 4 | Đóng | Đóng yêu cầu tuyển dụng `170106102` | Nhân sự | Sinh hồ sơ nhân viên (liên kết) |
| 5 | Báo cáo | BC Quản lý hoạt động tuyển dụng `304834202`<br>BC tổng hợp kết quả tuyển dụng `305703202`<br>BC tình hình nhân sự thử việc `304821202` | Nhân sự |  |

### NS-3 · Hồ sơ nhân viên, hợp đồng lao động

Một hồ sơ nhân viên, có hoặc không có tài khoản.

```text
Khai báo nhân viên ─▶ Yêu cầu tạo email (HT-1 tài khoản) ─▶ Hợp đồng lao động ─▶ nhân viên tự cập nhật (NS-11) ─▶ duyệt cập nhật
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Hồ sơ | Khai báo nhân viên `170204102, 800706102`<br>Khai báo nhân viên - ERP100 `110616102`<br>Khai báo nhân viên - USSH `170233102` | Nhân sự | Chứng chỉ là lưới trong chi tiết (E-H2); dữ liệu cá nhân theo L-47 |
| 2 | Tài khoản, email | Lập yêu cầu tạo Email cho nhân viên mới `170229102` | Nhân sự | Sang HT-1 |
| 3 | Hợp đồng lao động | Khai báo HĐLĐ `170202102`<br>Quản lý HĐLĐ `170214102` | Nhân sự |  |
| 4 | Cập nhật từ nhân viên | Duyệt thông tin nhân viên cập nhật `110010102` | Nhân sự |  |
| 5 | Báo cáo | BC Danh sách nhân viên `304831202`<br>BC danh sách hồ sơ nhân viên `304811202`<br>BC thống kê tình trạng HĐLĐ `304838202`<br>BC danh sách cán bộ công nhân viên hết hạn hợp đồng lao động `304808202`<br>BC cơ cấu lao động `304810202` | Nhân sự |  |

### NS-4 · Điều động, bổ nhiệm, uỷ quyền

Thay đổi vị trí công việc.

```text
Quyết định điều động / bổ nhiệm ─▶ xác nhận ─▶ cập nhật vị trí công việc ─▶ (gia hạn)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Điều động | Quyết định điều động nội bộ `170209102`<br>Xác nhận điều động nhân sự (Thư ký) `170223102`<br>Gia hạn điều động nội bộ `170224102` | Nhân sự |  |
| 2 | Bổ nhiệm | Lập quyết định bổ nhiệm `170228102`<br>Lập quyết định bổ nhiệm - USSH `170327102` | Nhân sự |  |
| 3 | Cập nhật vị trí, uỷ quyền | PNS-Cập nhật vị trí công việc `170209102`<br>Khai báo giấy uỷ quyền `170220102` | Nhân sự | Đổi đơn vị gốc thì đổi phạm vi dữ liệu (L-43) |
| 4 | Báo cáo | BC Tổng hợp các loại quyết định `304830202` | Nhân sự |  |

### NS-5 · Khen thưởng, kỷ luật

Quyết định thưởng phạt đi vào lương.

```text
Lập quyết định ─▶ (duyệt) ─▶ Xử lý ─▶ NS-8 khoản thưởng / phạt
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Quyết định | Lập quyết định khen thưởng, kỷ luật `170201102`<br>Lập quyết định kỷ luật `170230102`<br>Trưởng ban lập quyết định xử phạt `170231102`<br>Lập quyết định xử phạt `170231102` | Trưởng bộ phận, nhân sự |  |
| 2 | Xử lý | Xử lý quyết định xử phạt `170232102` | Nhân sự |  |
| 3 | Báo cáo | Tổng hợp khen thưởng, kỷ luật `304824202`<br>Báo cáo chi tiết quyết định xử phạt `304839202` | Nhân sự |  |

### NS-6 · Nghỉ việc và bàn giao

Đơn thôi việc đến khoá tài khoản.

```text
Đơn xin thôi việc ─▶ Bàn giao ─▶ Xác nhận nhận bàn giao ─▶ Khảo sát nghỉ việc ─▶ HT-1 khoá tài khoản
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Đơn thôi việc | Nhập đơn xin thôi việc `170205102` | Nhân viên |  |
| 2 | Bàn giao | Khai báo xác nhận bàn giao nghỉ việc `170217102`<br>Nhập bàn giao nghỉ việc `170213102`<br>Xác nhận nhận bàn giao `170227102` | Nhân viên, người nhận |  |
| 3 | Khảo sát | Quản lý khảo sát nghỉ việc `170218102`<br>Lý do nghỉ việc `981705202`<br>BC danh sách nhân viên nghỉ việc `304803202` | Nhân sự |  |

### NS-7 · Chấm công, nghỉ phép, làm thêm

Dữ liệu công cho tính lương.

```text
Chấm công (QR, toạ độ, máy chấm công) ─┐
Đơn nghỉ phép ─▶ (duyệt) ──────────────┼─▶ Tổng hợp công ─▶ Xác nhận ngày công ─▶ NS-8 Tính lương
Đăng ký làm thêm ─▶ (duyệt) ───────────┤
Bổ sung chấm công ─▶ (duyệt) ──────────┘
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Chấm công | Khai báo vị trí chấm công `800710102, 801109102`<br>Chấm công bằng QR `800702102`<br>Chấm công bằng tọa độ `800707102, 801108102`<br>Chấm công nhân viên `170301102, 800701102`<br>Chấm công phòng ban `170302102`<br>Bảng chấm công P/B/DA `170315102`<br>Kết chuyển dữ liệu từ máy chấm công `170309102`<br>Kết chuyển dữ liệu từ máy chấm công (Nhân viên) `170309102`<br>Lịch sử chấm công `800711102, 801110102`<br>Lịch sử chấm công bằng GPS `170321102` | Nhân viên, nhân sự | Kênh app ở nhóm 80 |
| 2 | Nghỉ phép | Lập đơn nghỉ phép `800703102, 801111102`<br>Lập đơn nghỉ phép® `170311102`<br>Lập đơn nghỉ phép theo ca `170322102, 801116102`<br>Duyệt đơn nghỉ phép `170314102, 800014102`<br>Xem đơn nghỉ phép `170311102`<br>Quản lý ngày nghỉ phép NV `170308102` | Nhân viên, quản lý |  |
| 3 | Làm thêm | Lập phiếu đăng ký làm thêm `170317102, 801121102`<br>Đăng ký tăng ca `260105102`<br>Lập phiếu tổng hợp đăng ký làm thêm `170318102`<br>Làm thêm giờ - USSH `170328102`<br>Phê duyệt nghỉ phép / tăng ca `260107102` | Nhân viên, quản lý |  |
| 4 | Bổ sung công | Yêu cầu bổ sung chấm công `260108102`<br>Phê duyệt yêu cầu bổ sung chấm công `260109102`<br>Lập phiếu bổ sung ngày công `170319102`<br>Tổng hợp phiếu bổ sung ngày công `170320102` | Nhân viên, quản lý |  |
| 5 | Chốt công | Tổng hợp chấm công `170310102`<br>Lập xác nhận ngày công `170313102`<br>Khóa bảng chấm công `170307102`<br>Đóng/Mở kỳ chấm công `170306102`<br>Tổng hợp công toàn công ty `170316102` | Nhân sự | Theo lõi: không khoá kỳ; xác nhận ngày công sang Y là chốt (L-10, E-T10) |

### NS-8 · Tiền lương, thuế, bảo hiểm

Tính lương và chuyển sang kế toán.

```text
Lương, phụ cấp + Người phụ thuộc + Thu nhập khác + Công (NS-7) + Thưởng phạt (NS-5) ─▶ Tính lương ─▶ Thuế TNCN, bảo hiểm ─▶ Phiếu lương ─▶ KT (định khoản lương, chi lương)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Dữ liệu đầu vào | Khai báo lương và phụ cấp `170215102`<br>Đăng ký người phụ thuộc giảm trừ gia cảnh `170226102`<br>Xác nhận người phụ thuộc `170216102`<br>Các khoản thu nhập khác `170303102`<br>Các khoản thu nhập ngoài lương `170325102`<br>Truy lĩnh, truy thu `170329102` | Nhân sự |  |
| 2 | Tính | Tính lương `170304102, 800705102`<br>Tính lương - USSH `170324102`<br>Tính thưởng `170305102`<br>Tính thuế TNCN `170323102`<br>Bảng trích nộp bảo hiểm `170326102` | Nhân sự tiền lương | Bảng lương là chứng từ có dòng, đi 5 trạng thái (E-H6) |
| 3 | Phát hành | Phiếu lương `304819202`<br>Phiếu lương CT `304827202`<br>BTH Lương khối gián tiếp `304818202` | Nhân sự tiền lương | Nhân viên xem ở NS-11 |
| 4 | Báo cáo | BC Thuế thu nhập cá nhân `304823202`<br>Bảng trích BHXH-BHYT-BHTN `305706202`<br>BC thu nhập `981706202` | Nhân sự, kế toán |  |

### NS-9 · Đào tạo

Yêu cầu đến đánh giá khoá học.

```text
Yêu cầu đào tạo ─▶ Kế hoạch đào tạo ─▶ Lớp, học viên ─▶ Buổi học, điểm danh ─▶ Đánh giá kết quả
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Yêu cầu, kế hoạch | Lập yêu cầu đào tạo `170401102`<br>Lập yêu cầu đào tạo (LMS) `170415102`<br>Duyệt yêu cầu đào tạo `170402102`<br>Lập kế hoạch đào tạo `170403102`<br>Lập kế hoạch đào tạo (LMS) `170412102`<br>Duyệt kế hoạch đào tạo `170404102` | Trưởng bộ phận, nhân sự |  |
| 2 | Nội dung | Khai báo chuyên đề đào tạo `170410102`<br>Khai báo lộ trình đào tạo `170411102` | Nhân sự |  |
| 3 | Tổ chức lớp | Đăng ký khóa học theo đối tượng tham dự `170406102`<br>Lập DS học viên triển khai đào tạo `170407102`<br>Quản lý lớp đào tạo `170413102`<br>Khai báo buổi học và điểm danh `170409102`<br>Điểm danh lớp đào tạo `801117102` | Nhân sự, giảng viên |  |
| 4 | Đánh giá | Đánh giá kết quả đào tạo `170405102`<br>Lập phiếu đánh giá khóa học `180219102`<br>Đánh giá khóa học `180220102`<br>Học viên đánh giá `180221102`<br>Học viên đánh giá khóa đào tạo `801118102`<br>Giảng viên đánh giá khóa đào tạo `801119102` | Học viên, giảng viên |  |
| 5 | Theo dõi | Quản lý đào tạo chung toàn công ty `170411102`<br>Tổng quan học tập `170414102`<br>Tổng hợp nhu cầu đào tạo `304825202`<br>Số giờ đạo tạo của công ty `981707202` | Nhân sự |  |

### NS-10 · Đánh giá nhân viên, KPI

Đánh giá định kỳ theo cấp.

```text
Phiếu đánh giá ─▶ Đánh giá theo cấp ─▶ Duyệt ─▶ Kết luận ─▶ Duyệt kết quả
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Đánh giá | Lập phiếu đánh giá nhân viên `180201102`<br>Đánh giá cán bộ nhân viên theo cấp `180210102`<br>Đánh giá nhân viên theo cấp `800808102`<br>Đánh giá nhân sự `801115102`<br>Đánh giá KPI theo nhân viên `800008102`<br>\*\*Duyệt đánh giá KPI theo nhân viên `180202102` | Nhân viên, quản lý |  |
| 2 | Kết luận | Kết luận đánh giá KPI BCH `180217102`<br>Soát xét tài chính `180216102`<br>Duyệt kết quả đánh giá `180218102` | Ban chỉ huy, lãnh đạo |  |
| 3 | Báo cáo | BC tổng hợp kết quả đánh giá nhân viên `304826202` | Nhân sự |  |

### NS-11 · Cổng nhân viên

Nhân viên tự phục vụ, phần lớn trên app.

```text
Nhân viên ─▶ xem hồ sơ, phiếu lương ─▶ đề nghị sửa thông tin (NS-3 duyệt) ─▶ xác nhận công (NS-7)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Hồ sơ cá nhân | Xem hồ sơ cá nhân `260102102`<br>Chỉnh sửa thông tin cá nhân `260103102`<br>Điều chỉnh thông tin cá nhân `800704102` | Nhân viên | Sửa đi qua duyệt NS-3 |
| 2 | Công và lương | Xác nhận này công `260104102`<br>Xem phiếu lương `260106102`<br>Xem thông tin tiền lương `800715102` | Nhân viên |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### NS-0 · Khai báo nhân sự, lương (23)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo quy tắc định khoản lương | `110153102` | Khai báo |  |
| Khai báo chức danh | `110602102` | Khai báo |  |
| Khai báo kỳ chấm công tính lương | `110605102` | Khai báo |  |
| Khai báo loại HĐ/PC/Hỗ trợ | `110606102` | Khai báo |  |
| Khai báo công thức tính lương | `110607102` | Khai báo |  |
| Khai báo tổng hợp ngày công | `110608102` | Khai báo |  |
| Khai báo các cột tính lương | `110609102` | Khai báo |  |
| Khai báo loại ngày công | `110610102` | Khai báo |  |
| Khai báo thuế TNCN/BHXH/Khung quy định chung | `110611102` | Khai báo |  |
| Khai báo thang bảng lương | `110612102` | Khai báo |  |
| Khai báo công thức tính thưởng | `110615102` | Khai báo |  |
| Khai báo số ngày nghỉ theo loại hợp đồng | `110617102` | Khai báo |  |
| Khai báo thông tin chấm công phòng ban | `110618102` | Khai báo |  |
| Khai báo nơi đào tạo | `110619102` | Khai báo |  |
| Khai báo nội dung thưởng phạt | `110620102` | Khai báo |  |
| Khai báo ca làm việc | `110622102` | Khai báo |  |
| Tham số thiết lập tính lương | `110623102` | Khai báo |  |
| Khai báo KPI ứng viên | `110706102` | Khai báo |  |
| Khai báo kế hoạch ngày công | `170221102` | Khai báo |  |
| Khai báo nhóm nghỉ phép theo cấp bậc | `170222102` | Khai báo |  |
| Khai báo phụ cấp theo đơn vị | `170225102` | Khai báo |  |
| Cơ cấu tổ chức - Phòng nhân sự | `110060102` | Lập |  |
| Chi tiết ngày nghỉ phép theo tháng | `110621102` | Lập |  |

### NS-1 · Định biên và kế hoạch nhân sự (16)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập dự báo nhân sự toàn công ty | `170206102` | Lập |  |
| Lập kế hoạch trả nhân sự | `170207102` | Lập |  |
| Cân đối nguồn lực | `170208102` | Lập |  |
| Điều chỉnh dự báo nhân sự | `170210102` | Lập |  |
| Lập điều chỉnh định biên | `170211102` | Lập |  |
| Đánh giá trả nhân sự | `180211102` | Lập | Ẩn |
| Duyệt đánh giá trả nhân sự | `180212102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xử lý kế hoạch trả nhân sự | `170219102` | Xử lý |  |
| Tra cứu định biên nhân viên | `110613102` | Tra cứu |  |
| Theo dõi NS theo định biên | `170212102` | Tra cứu |  |
| Kế hoạch nhân sự theo định biên | `304836202` | Báo cáo |  |
| BC kế hoạch NS theo cấp bậc | `304844202` | Báo cáo |  |
| Phổ nhân sự | `801101202, 981704202` | Báo cáo | ×3; app |
| Nguồn nhân lực | `981702202` | Báo cáo | ×2 |
| BC biến động nhân sự theo thời gian | `981703202` | Báo cáo |  |
| BC biến động nhân viên | `981703202` | Báo cáo |  |

### NS-2 · Tuyển dụng (22)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập yêu cầu bổ sung nhân sự | `170101102` | Lập |  |
| Hồ sơ ứng viên | `170103102` | Lập |  |
| Sàng lọc hồ sơ ứng viên | `170104102` | Lập |  |
| Kết quả phỏng vấn | `170105102` | Lập |  |
| Điều chỉnh yêu cầu bổ sung nhân sự | `170107102` | Lập |  |
| Nhập lương ứng viên | `170110102` | Lập |  |
| Đánh giá KPI theo ứng viên | `180209102` | Lập | Ẩn |
| Bổ sung hồ sơ xin việc | `260112102` | Lập |  |
| Cổng thông tin ứng viên | `260301102` | Lập |  |
| Duyệt yêu cầu tuyển dụng (Central không sử dụng) | `170102102` | Duyệt | biến thể; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt yêu cầu bổ sung nhân sự | `170108102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Đóng yêu cầu tuyển dụng | `170106102` | Xử lý |  |
| Xử lý kết quả phỏng vấn | `170109102` | Xử lý |  |
| BC tổng hợp danh sách nhân viên hết hạn thử việc | `304801202` | Báo cáo |  |
| BC tình hình nhân sự thử việc | `304821202` | Báo cáo |  |
| BC Quản lý hoạt động tuyển dụng | `304834202` | Báo cáo |  |
| Báo cáo nhu cầu Bổ sung nhân sự từng tháng | `304840202` | Báo cáo |  |
| BC tổng hợp nhu cầu tuyển dụng theo vị trí | `305701202` | Báo cáo |  |
| BC tổng hợp danh sách đề nghị thử việc | `305702202` | Báo cáo |  |
| BC tổng hợp kết quả tuyển dụng | `305703202` | Báo cáo |  |
| BC danh sách nhân viên đề nghị tuyển dụng | `305704202` | Báo cáo |  |
| BC danh sách dự tuyển vòng 1 tại trụ sở chính | `305705202` | Báo cáo |  |

### NS-3 · Hồ sơ nhân viên, hợp đồng lao động (31)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo nhân viên - ERP100 | `110616102` | Khai báo | biến thể |
| Khai báo HĐLĐ | `170202102` | Khai báo |  |
| Khai báo nhân viên | `170204102, 800706102` | Khai báo | ×2; app |
| Khai báo nhân viên - USSH | `170233102` | Khai báo | biến thể |
| Quản lý HĐLĐ | `170214102` | Lập |  |
| Lập yêu cầu tạo Email cho nhân viên mới | `170229102` | Lập |  |
| Duyệt thông tin nhân viên cập nhật | `110010102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| BC danh sách nhân viên tổng hợp chung | `304802202` | Báo cáo |  |
| BC danh sách nhân viên theo hợp đồng lao động | `304804202` | Báo cáo |  |
| BC danh sách nhân viên theo thâm niên | `304805202` | Báo cáo |  |
| BC danh sách cán bộ công nhân viên hết hạn hợp đồng lao động | `304808202` | Báo cáo |  |
| BC số lượng và chất lượng lao động | `304809202` | Báo cáo |  |
| BC cơ cấu lao động | `304810202` | Báo cáo |  |
| BC danh sách hồ sơ nhân viên | `304811202` | Báo cáo |  |
| BC tổng hợp tình hình lao động | `304822202` | Báo cáo |  |
| BC Danh sách nhân viên | `304831202` | Báo cáo |  |
| BC SL nhân sự theo từng tháng | `304832202` | Báo cáo |  |
| BC Thông tin nhân thân | `304833202` | Báo cáo |  |
| BC thống kê tình trạng HĐLĐ | `304838202` | Báo cáo |  |
| BC Danh sách nhân viên mới | `304841202` | Báo cáo |  |
| BC Sinh nhật CBNV | `304842202` | Báo cáo |  |
| BC quản trị công nhân viên | `981701202` | Báo cáo |  |
| BC 1 | `981707202` | Báo cáo |  |
| BC 3 | `981709202` | Báo cáo |  |
| BC 4 | `981710202` | Báo cáo |  |
| BC 5 | `981711202` | Báo cáo |  |
| BC 6 | `981712202` | Báo cáo |  |
| BC 7 | `981713202` | Báo cáo |  |
| BC 8 | `981714202` | Báo cáo |  |
| BC 9 | `981715202` | Báo cáo |  |
| BC 10 | `981716202` | Báo cáo |  |

### NS-4 · Điều động, bổ nhiệm, uỷ quyền (8)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo giấy uỷ quyền | `170220102` | Khai báo |  |
| Quyết định điều động nội bộ | `170209102` | Lập |  |
| PNS-Cập nhật vị trí công việc | `170209102` | Lập |  |
| Gia hạn điều động nội bộ | `170224102` | Lập |  |
| Lập quyết định bổ nhiệm | `170228102` | Lập |  |
| Lập quyết định bổ nhiệm - USSH | `170327102` | Lập | biến thể |
| Xác nhận điều động nhân sự (Thư ký) | `170223102` | Xác nhận | Bước W chuyên trách, menu riêng (L-20) |
| BC Tổng hợp các loại quyết định | `304830202` | Báo cáo |  |

### NS-5 · Khen thưởng, kỷ luật (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập quyết định khen thưởng, kỷ luật | `170201102` | Lập |  |
| Lập quyết định kỷ luật | `170230102` | Lập |  |
| Trưởng ban lập quyết định xử phạt | `170231102` | Lập |  |
| Lập quyết định xử phạt | `170231102` | Lập |  |
| Xử lý quyết định xử phạt | `170232102` | Xử lý |  |
| Tổng hợp khen thưởng, kỷ luật | `304824202` | Báo cáo |  |
| Báo cáo chi tiết quyết định xử phạt | `304839202` | Báo cáo |  |

### NS-6 · Nghỉ việc và bàn giao (8)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo xác nhận bàn giao nghỉ việc | `170217102` | Khai báo |  |
| Nhập đơn xin thôi việc | `170205102` | Lập |  |
| Nhập bàn giao nghỉ việc | `170213102` | Lập |  |
| Quản lý khảo sát nghỉ việc | `170218102` | Lập |  |
| Xác nhận nhận bàn giao | `170227102` | Xác nhận | Bước W chuyên trách, menu riêng (L-20) |
| BC danh sách nhân viên nghỉ việc | `304803202` | Báo cáo |  |
| Lý do thôi việc | `801102202` | Báo cáo | app |
| Lý do nghỉ việc | `981705202` | Báo cáo | ×2 |

### NS-7 · Chấm công, nghỉ phép, làm thêm (35)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo vị trí chấm công | `800710102, 801109102` | Khai báo | ×2; app |
| Chấm công nhân viên | `170301102, 800701102` | Lập | ×2; app |
| Chấm công phòng ban | `170302102` | Lập |  |
| Quản lý ngày nghỉ phép NV | `170308102` | Lập |  |
| Lập đơn nghỉ phép® | `170311102` | Lập |  |
| Lập xác nhận ngày công | `170313102` | Lập |  |
| Bảng chấm công P/B/DA | `170315102` | Lập |  |
| Lập phiếu đăng ký làm thêm | `170317102, 801121102` | Lập | ×2; app |
| Lập phiếu tổng hợp đăng ký làm thêm | `170318102` | Lập |  |
| Lập phiếu bổ sung ngày công | `170319102` | Lập |  |
| Lịch sử chấm công bằng GPS | `170321102` | Lập |  |
| Lập đơn nghỉ phép theo ca | `170322102, 801116102` | Lập | ×2; app |
| Làm thêm giờ - USSH | `170328102` | Lập | biến thể |
| Đăng ký tăng ca | `260105102` | Lập |  |
| Yêu cầu bổ sung chấm công | `260108102` | Lập |  |
| Chấm công bằng QR | `800702102` | Lập | app |
| Chấm công bằng tọa độ | `800707102, 801108102` | Lập | ×2; app |
| Lịch sử chấm công | `800711102, 801110102` | Lập | ×2; app |
| Lập đơn nghỉ phép | `800703102, 801111102` | Lập | ×2; app |
| Duyệt đơn nghỉ phép | `170314102, 800014102` | Duyệt | ×2; app; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Phê duyệt nghỉ phép / tăng ca | `260107102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Phê duyệt yêu cầu bổ sung chấm công | `260109102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Đóng/Mở kỳ chấm công | `170306102` | Xử lý | [XUNG ĐỘT E-T10] mặc định không khoá kỳ |
| Khóa bảng chấm công | `170307102` | Xử lý | [XUNG ĐỘT E-T10] mặc định không khoá kỳ |
| Kết chuyển dữ liệu từ máy chấm công (Nhân viên) | `170309102` | Xử lý |  |
| Kết chuyển dữ liệu từ máy chấm công | `170309102` | Xử lý |  |
| Xem đơn nghỉ phép | `170311102` | Tra cứu |  |
| Tổng hợp chấm công | `170310102` | Báo cáo |  |
| Tổng hợp và theo dõi ngày phép năm | `170312102` | Báo cáo |  |
| Tổng hợp công toàn công ty | `170316102` | Báo cáo |  |
| Tổng hợp phiếu bổ sung ngày công | `170320102` | Báo cáo |  |
| Tổng hợp chấm công băng GPS | `300601102` | Báo cáo |  |
| Xem thông tin chấm công | `300601202` | Báo cáo |  |
| Báo cáo lịch sử chấm công bằng GPS | `300602102` | Báo cáo |  |
| BC Thống kê tình trạng nghỉ phép | `304837202` | Báo cáo |  |

### NS-8 · Tiền lương, thuế, bảo hiểm (27)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo lương và phụ cấp | `170215102` | Khai báo |  |
| Đăng ký người phụ thuộc giảm trừ gia cảnh | `170226102` | Lập |  |
| Các khoản thu nhập khác | `170303102` | Lập |  |
| Các khoản thu nhập ngoài lương | `170325102` | Lập |  |
| Bảng trích nộp bảo hiểm | `170326102` | Lập |  |
| Truy lĩnh, truy thu | `170329102` | Lập |  |
| Xác nhận người phụ thuộc | `170216102` | Xác nhận | Bước W chuyên trách, menu riêng (L-20) |
| Tính lương | `170304102, 800705102` | Xử lý | ×2; app |
| Tính thưởng | `170305102` | Xử lý |  |
| Tính thuế TNCN | `170323102` | Xử lý |  |
| Tính lương - USSH | `170324102` | Xử lý | biến thể |
| BC bậc lương bảo hiểm xã hội | `304807202` | Báo cáo |  |
| BC danh sách hồ sơ trích ngang về lương | `304812202` | Báo cáo |  |
| BC danh sách cán bộ công nhân viên và thẻ ATM | `304813202` | Báo cáo |  |
| BC danh sách cán bộ công nhân viên chưa đóng thẻ BHXH | `304814202` | Báo cáo |  |
| BC tổng thể Người phụ thuộc | `304815202` | Báo cáo |  |
| Mẫu BCCT DS ng.phụ thuộc | `304816202` | Báo cáo |  |
| BC Thông tin người ch.khoản | `304817202` | Báo cáo |  |
| BTH Lương khối gián tiếp | `304818202` | Báo cáo |  |
| Phiếu lương | `304819202` | Báo cáo |  |
| Bảng lương thợ in ( Phong Thạnh) | `304820202` | Báo cáo | biến thể |
| BC Thuế thu nhập cá nhân | `304823202` | Báo cáo |  |
| Phiếu lương CT | `304827202` | Báo cáo |  |
| Bảng trích BHXH-BHYT-BHTN | `305706202` | Báo cáo |  |
| BT BH XH-YT-TN & KPCĐ | `305707202` | Báo cáo |  |
| Báo cáo thu nhập | `801104202` | Báo cáo | app |
| BC thu nhập | `981706202` | Báo cáo | ×2 |

### NS-9 · Đào tạo (26)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo buổi học và điểm danh | `170409102` | Khai báo |  |
| Khai báo chuyên đề đào tạo | `170410102` | Khai báo |  |
| Khai báo lộ trình đào tạo | `170411102` | Khai báo |  |
| Lập yêu cầu đào tạo | `170401102` | Lập |  |
| Lập kế hoạch đào tạo | `170403102` | Lập |  |
| Đánh giá kết quả đào tạo | `170405102` | Lập |  |
| Đăng ký khóa học theo đối tượng tham dự | `170406102` | Lập |  |
| Lập DS học viên triển khai đào tạo | `170407102` | Lập |  |
| Quản lý đào tạo chung toàn công ty | `170411102` | Lập |  |
| Lập kế hoạch đào tạo (LMS) | `170412102` | Lập |  |
| Quản lý lớp đào tạo | `170413102` | Lập |  |
| Lập yêu cầu đào tạo (LMS) | `170415102` | Lập |  |
| Lập phiếu đánh giá khóa học | `180219102` | Lập |  |
| Đánh giá khóa học | `180220102` | Lập |  |
| Học viên đánh giá | `180221102` | Lập |  |
| Điểm danh lớp đào tạo | `801117102` | Lập | app |
| Học viên đánh giá khóa đào tạo | `801118102` | Lập | app |
| Giảng viên đánh giá khóa đào tạo | `801119102` | Lập | app |
| Duyệt yêu cầu đào tạo | `170402102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt kế hoạch đào tạo | `170404102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Tổng quan học tập | `170414102` | Báo cáo |  |
| BC danh sách nhân viên theo tiến độ đào tạo | `304806202` | Báo cáo |  |
| Tổng hợp nhu cầu đào tạo | `304825202` | Báo cáo |  |
| Tổng hợp hồ sơ trích ngang CBNV theo trình độ, bằng cấp, kinh nghiệm | `304828202` | Báo cáo |  |
| BC quản trị bằng cấp | `304829202` | Báo cáo |  |
| Số giờ đạo tạo của công ty | `981707202` | Báo cáo |  |

### NS-10 · Đánh giá nhân viên, KPI (10)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập phiếu đánh giá nhân viên | `180201102` | Lập | Ẩn |
| \*\*Duyệt đánh giá KPI theo nhân viên | `180202102` | Lập | Ẩn |
| Đánh giá cán bộ nhân viên theo cấp | `180210102` | Lập | Ẩn |
| Soát xét tài chính | `180216102` | Lập |  |
| Kết luận đánh giá KPI BCH | `180217102` | Lập | Ẩn |
| Đánh giá KPI theo nhân viên | `800008102` | Lập | app |
| Đánh giá nhân viên theo cấp | `800808102` | Lập | app |
| Đánh giá nhân sự | `801115102` | Lập | app |
| Duyệt kết quả đánh giá | `180218102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| BC tổng hợp kết quả đánh giá nhân viên | `304826202` | Báo cáo |  |

### NS-11 · Cổng nhân viên (6)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Điều chỉnh thông tin cá nhân | `800704102` | Lập | app |
| Xác nhận này công | `260104102` | Xác nhận | Bước W chuyên trách, menu riêng (L-20) |
| Chỉnh sửa thông tin cá nhân | `260103102` | Xử lý |  |
| Xem hồ sơ cá nhân | `260102102` | Tra cứu |  |
| Xem phiếu lương | `260106102` | Tra cứu |  |
| Xem thông tin tiền lương | `800715102` | Tra cứu | app |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
