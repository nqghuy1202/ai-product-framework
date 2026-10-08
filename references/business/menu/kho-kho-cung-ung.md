---
title: Luồng nghiệp vụ theo menu — KHO Kho và cung ứng
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# KHO · Kho và cung ứng

**Khối:** Lõi ERP · **Số menu:** 112 nhãn (121 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Vật tư hàng hoá, kho, lô; yêu cầu cung ứng; nhập, xuất, luân chuyển, kiểm kê; ký gửi; truy xuất; máy móc thiết bị cho thuê, mượn tại công trình.

## Luồng

- **KHO-0** Khai báo kho: Danh mục vật tư, kho, lô trước khi có dòng sổ đầu tiên.
- **KHO-1** Yêu cầu cung ứng: Bộ phận cần hàng → kho cấp nếu còn, thiếu thì chuyển mua.
- **KHO-2** Nhập kho: Mọi nguồn nhập đi qua một kiểu phiếu nhập; ghi sổ khi Y.
- **KHO-3** Xuất kho: Mọi nguồn xuất đi qua một kiểu phiếu xuất; kiểm âm tồn lúc Y.
- **KHO-4** Luân chuyển và đổi hàng: Chuyển hàng giữa kho, theo dõi hàng đi đường.
- **KHO-5** Tồn kho, kiểm kê, điều chỉnh: Tra cứu tồn và đối soát với thực tế.
- **KHO-6** Hàng ký gửi: Hàng của bên khác gửi tại kho, quyết toán theo kỳ.
- **KHO-7** Truy xuất nguồn gốc và số serial: Biết lô, serial nào đi đâu.
- **KHO-8** Máy móc thiết bị cho thuê, mượn tại công trình: Cấp và thu hồi máy móc thiết bị cho thầu phụ, công trình.

### KHO-0 · Khai báo kho

Danh mục vật tư, kho, lô trước khi có dòng sổ đầu tiên.

```text
Nhóm vật tư ─▶ Đơn vị tính quy đổi ─▶ Vật tư hàng hoá ─▶ Kho ─▶ Lô ─▶ Tồn tối thiểu ─▶ Số dư đầu kỳ
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Nhóm, đơn vị tính | Khai báo nhóm vật tư `110201102`<br>Khai báo đơn vị tính - đơn vị tính quy đổi `110204102`<br>Khai báo thương hiệu `110212102` | Kế toán kho | Đơn vị cơ sở khoá sau dòng sổ đầu (L-50) |
| 2 | Vật tư hàng hoá | Khai báo vật tư hàng hóa `110208102`<br>Khai báo vật tư hàng hóa card `110202102`<br>Chi tiết vật tư hàng hóa `110210102`<br>Khai báo vật tư hàng hóa theo chiều phân tích `110211102`<br>Khai báo mã vật tư theo KH/NCC `110209102`<br>Khai báo mã vật tư gốc `110217102`<br>Xem danh mục sản phẩm `110207102` | Kế toán kho | Ô theo lô, kiểm chất lượng, hạn dùng bật theo mặt hàng (E-K2) |
| 3 | Kho, lô, thiết bị | Khai báo kho `110205102`<br>Khai báo lô vật tư hàng hóa `110206102`<br>Khai báo nhóm thiết bị `110215102`<br>Khai báo thiết bị `110214102` | Kế toán kho |  |
| 4 | Mức tồn | Khai báo tồn kho tối thiểu `110213102`<br>Khai báo quy tắc tạo tồn kho an toàn `110216102` | Kế toán kho, mua hàng | Nguồn cho cảnh báo tồn thấp (E-K12) |
| 5 | Số dư đầu kỳ | **[MỚI]** Số dư đầu kỳ kho | Kế toán kho | Chứng từ có dòng, Hoàn thành là ghi sổ (L-52) |

### KHO-1 · Yêu cầu cung ứng

Bộ phận cần hàng → kho cấp nếu còn, thiếu thì chuyển mua.

```text
Lập yêu cầu cung ứng ─▶ (duyệt) ─▶ Xử lý yêu cầu ─┬─ còn tồn ─▶ KHO-3 Phiếu xuất kho sử dụng
                                               ├─ kho khác ─▶ KHO-4 Luân chuyển
                                               └─ thiếu ───▶ MUA-1 Đề nghị mua hàng
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập yêu cầu | Lập yêu cầu cung ứng `130101102, 800301102`<br>Lập yêu cầu cung ứng - TID `130116102`<br>Lập yêu cầu cung ứng qua kho `800302102`<br>Yêu cầu cấp vật tư `801113102`<br>Đổ yêu cầu sử dụng từ Excel (Đổ nhiều yêu cầu) `130109102` | Bộ phận sử dụng | Yêu cầu N → Y |
| 2 | Duyệt | Duyệt yêu cầu cung ứng `130102102`<br>Duyệt yêu cầu cung ứng (ràng buộc số lượng mua) `130115102` | Trưởng bộ phận | Bước W nếu bật quy trình |
| 3 | Xử lý | Xử lý yêu cầu cung ứng `130111102` | Kho, mua hàng | Sinh phiếu xuất, yêu cầu luân chuyển hoặc đề nghị mua; có liên kết (L-33) |
| 4 | Theo dõi | \*\*Theo dõi thực hiện yêu cầu cung ứng (Chưa thấy code) `130103101`<br>Báo cáo thực hiện yêu cầu cung ứng `300402102`<br>BC tình hình thực hiện YCCU `300425202`<br>BC chênh lệch thời gian cấp và thời gian yêu cầu `981306202`<br>BCQT Yêu cầu cung ứng `981301202` | Bộ phận sử dụng, kho |  |

### KHO-2 · Nhập kho

Mọi nguồn nhập đi qua một kiểu phiếu nhập; ghi sổ khi Y.

```text
Đơn mua (MUA-1) ─┐
Hàng bán trả lại ─┤
Sản xuất (SX-3) ─┼─▶ Phiếu nhập N ─▶ Kiểm chất lượng ─▶ Thủ kho xác nhận (W) ─▶ Y: cộng tồn ─▶ KT-5 Kế toán phiếu nhập
Nhập khác ───────┘
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập phiếu nhập theo nguồn | Nhập phiếu nhập mua hàng `130209102`<br>Nhập phiếu nhập hàng bán bị trả lại `130213102`<br>Nhập phiếu nhập kho từ sản xuất `130215102`<br>Nhập phiếu nhập kho sản xuất trực tiếp - gộp bộ `130214102`<br>Phiếu nhập khác `130201902`<br>Phiếu nhập kho mua hàng nội bộ - GAIN `130216102`<br>Nhập phiếu nhập hàng thừa từ dự án - CENTRAL `130207102` | Kho | Phiếu N, liên kết chứng từ nguồn; lệch so với chứng từ giao thì cảnh báo, bắt lý do (E-K6) |
| 2 | Kiểm chất lượng | Kiểm soát chất lượng phiếu nhập `130217102`<br>**[MỚI]** Phiếu QC | QC | Lô mới về N chờ release nếu mặt hàng bật kiểm chất lượng (E-Q2, E-Q3) |
| 3 | Duyệt, xác nhận | Duyệt phiếu nhập kho `130218102`<br>Xác nhận nhập kho `130201102, 800304102, 801105102` | Trưởng kho, thủ kho | Bước W; bước thủ kho bật sẵn cho phiếu nhập hàng (E-K7) |
| 4 | Ghi sổ | → [KT-5 Giá vốn hàng tồn kho](kt-ke-toan.md) | Hệ thống, kế toán kho | Y: cộng tồn; huỷ thì ghi đảo (L-29, L-31) |
| 5 | Báo cáo nhập | Bảng kê phiếu nhập theo nguồn nhập `304901202`<br>Bảng kê phiếu nhập theo tài khoản `300402202`<br>Bảng phân tích nhập hàng `304902202`<br>BC chi phí nhập hàng `304904202`<br>Bảng kê chi tiết chi phí nhập hàng `304903202`<br>BCQT Nhập kho `981304202` | Kế toán kho |  |

### KHO-3 · Xuất kho

Mọi nguồn xuất đi qua một kiểu phiếu xuất; kiểm âm tồn lúc Y.

```text
Đơn bán (BAN-1) ──────┐
Yêu cầu cung ứng ─────┤
Mua trả lại (MUA-4) ──┼─▶ Phiếu xuất N ─▶ Kiểm chất lượng ─▶ Thủ kho xác nhận (W) ─▶ Y: trừ tồn (khoá theo kho) ─▶ KT-5
Sản xuất (SX-3) ──────┘
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập phiếu xuất theo nguồn | Lập phiếu xuất bán `130301102`<br>Lập phiếu xuất kho sử dụng `130303102`<br>Lập phiếu xuất hàng mua trả lại `130313102`<br>Phiếu xuất kho sản xuất trực tiếp `130318102` | Kho | Phiếu N, liên kết chứng từ nguồn; lúc Lưu chỉ cảnh báo, không giữ chỗ (L-29) |
| 2 | Kiểm chất lượng | Kiểm soát chất lượng phiếu xuất `130317102` | QC | Kho, lô phải Y mới xuất (L-13) |
| 3 | Duyệt, xác nhận | Duyệt phiếu xuất kho `130320102`<br>Xác nhận xuất kho `130310102, 800305102, 801106102` | Trưởng kho, thủ kho | Bước W |
| 4 | Ghi sổ | → [KT-5 Giá vốn hàng tồn kho](kt-ke-toan.md) | Hệ thống | Y: trừ tồn; phiếu lập tay không cho âm (E-K5, L-30) |
| 5 | Báo cáo xuất | Bảng kê phiếu xuất theo nguồn xuất `305502202`<br>Bảng kê phiếu xuất theo tài khoản `305504202`<br>BC phân tích xuất hàng `305503202`<br>BC so sánh xuất hàng `300422202`<br>BCQT Xuất kho `981305202` | Kế toán kho |  |

### KHO-4 · Luân chuyển và đổi hàng

Chuyển hàng giữa kho, theo dõi hàng đi đường.

```text
Yêu cầu luân chuyển ─▶ Phiếu xuất luân chuyển (kho đi, Y) ─▶ [hàng đi đường] ─▶ Phiếu nhập luân chuyển (kho đến, Y, ghi chênh lệch)
Yêu cầu đổi hàng ─▶ Phiếu xuất đổi hàng + Phiếu nhập đổi hàng
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập yêu cầu | Lập yêu cầu luân chuyển `130106102`<br>Lập yêu cầu đổi hàng `130319102`<br>Điều phối hàng hóa theo đơn hàng `130414102` | Kho, điều phối |  |
| 2 | Xuất ở kho đi | Lập phiếu xuất luân chuyển `130312102`<br>Lập phiếu xuất đổi hàng `130314102` | Kho đi | Y: trừ tồn kho đi, cộng hàng đi đường (E-K8) |
| 3 | Nhập ở kho đến | Nhập phiếu nhập luân chuyển `130210102`<br>Nhập phiếu nhập đổi hàng - Đổi hàng đã bán (giống luân chuyển) `130211102` | Kho đến | Y: cộng tồn kho đến, ghi chênh lệch khi nhận |
| 4 | Báo cáo | BC luân chuyển kho `300408202` | Kế toán kho |  |

### KHO-5 · Tồn kho, kiểm kê, điều chỉnh

Tra cứu tồn và đối soát với thực tế.

```text
Tra cứu tồn ─▶ Biên bản kiểm kê (Y) ─┬─ thừa ─▶ Phiếu nhập hàng thừa từ kiểm kê
                                   └─ thiếu ─▶ Phiếu xuất hàng thiếu kiểm kê
Điều chỉnh giá trị tồn: phiếu điều chỉnh tăng / xuất giảm giá trị
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Tra cứu tồn | Tra cứu tồn kho `130411102, 800303102, 801114102` | Mọi bộ phận | Có Xem lọc sẵn "chứng từ chưa Hoàn thành theo kho" (L-32) |
| 2 | Kiểm kê | Lập biên bản kiểm kê `130410102` | Kho, kế toán | Y thì sinh phiếu điều chỉnh, liên kết về biên bản (E-K9) |
| 3 | Điều chỉnh số lượng | Nhập phiếu nhập hàng thừa từ kiểm kê `130208102`<br>Nhập phiếu xuất hàng thiếu kiểm kê `130311102` | Kho | Vượt ngưỡng thì cảnh báo, bắt lý do |
| 4 | Điều chỉnh giá trị | Lập phiếu điều chỉnh tăng giá trị hàng tồn `130412102`<br>\*\*Lập phiếu xuất giảm giá trị hàng tồn `130315102` | Kế toán kho |  |
| 5 | Báo cáo tồn | Bảng tổng hợp nhập xuất tồn `300404202`<br>Bảng tổng hợp nhập xuất tồn, số lượng `300405202`<br>Bảng tổng hợp nhập xuất tồn theo tài khoản `300407202`<br>Thẻ kho `300406202`<br>Bảng kê nhập xuất `305501202`<br>BC tuổi tồn kho `300401202`<br>BC tồn kho `981302202`<br>Báo cáo tổng quan tồn kho tối thiểu `300427202`<br>BC quản trị hàng tồn kho `981302202` | Kế toán kho, quản lý | Nhập xuất tồn bấm xuống thẻ kho (E-R1) |

### KHO-6 · Hàng ký gửi

Hàng của bên khác gửi tại kho, quyết toán theo kỳ.

```text
Nhập hàng ký gửi ─▶ Theo dõi tồn ký gửi ─▶ Quyết toán hàng ký gửi ─▶ phải trả / phải thu
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Theo dõi tồn ký gửi | Tra cứu tồn kho ký gửi `300424202`<br>BC hàng ký gửi `300409202`<br>Báo cáo thời gian ký gửi `300426202` | Kho |  |
| 2 | Quyết toán | Quyết toán hàng ký gửi `130105102` | Kho, kế toán | Sinh chứng từ công nợ (KT-1 hoặc KT-2) |

### KHO-7 · Truy xuất nguồn gốc và số serial

Biết lô, serial nào đi đâu.

```text
Lô / serial ─▶ lịch sử nhập xuất ─▶ chứng từ nguồn và khách nhận
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Truy xuất | Truy xuất nguồn gốc `130418102`<br>BC truy xuất nguồn gốc `300430202` | QC, kho | Hiện cả lô theo FIFO và tập lô thực có (E-K4) |
| 2 | Serial | Tra cứu lịch sử nhập xuất số serial `130417102`<br>Bảng tổng hợp nhập xuất tồn - số lượng theo serial `300423202`<br>Bảng kê phiếu nhập theo serial `304905202`<br>Bảng kê phiếu xuất theo serial `305505202` | Kho |  |

### KHO-8 · Máy móc thiết bị cho thuê, mượn tại công trình

Cấp và thu hồi máy móc thiết bị cho thầu phụ, công trình.

```text
Yêu cầu cấp MMTB cho NTP ─▶ KHO-3 xuất ─▶ [đang ở công trình, tính tiền thuê] ─▶ Yêu cầu NCC/NTP trả MMTB ─▶ KHO-2 nhập lại
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Cấp thiết bị | Lập yêu cầu cấp MMTB cho NTP thuê/ mượn `130113102`<br>Lập yêu cầu chuyển đổi `130110102`<br>Lập yêu cầu chuyển đổi thiết bị `130108102` | Phòng thiết bị |  |
| 2 | Theo dõi, tính tiền thuê | Lịch sử thuê theo công tác ngân sách `130112102`<br>Bảng tính tiền thuê vật tư / thiết bị `300411202`<br>Bảng giá cho thuê máy móc thiết bị `300413202`<br>Tình trạng MMTB tại các kho `300414202`<br>BC tổng số lượng thiết bị đang có tại công trường `300419202` | Phòng thiết bị, kế toán |  |
| 3 | Thu hồi | Lập yêu cầu NCC/NTP trả MMTB `130114102` | Phòng thiết bị | Sinh phiếu nhập lại |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### KHO-0 · Khai báo kho (18)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo nhóm vật tư | `110201102` | Khai báo |  |
| Khai báo vật tư hàng hóa card | `110202102` | Khai báo | Ẩn |
| Khai báo đơn vị tính - đơn vị tính quy đổi | `110204102` | Khai báo |  |
| Khai báo kho | `110205102` | Khai báo |  |
| Khai báo lô vật tư hàng hóa | `110206102` | Khai báo |  |
| Khai báo vật tư hàng hóa | `110208102` | Khai báo |  |
| Khai báo mã vật tư theo KH/NCC | `110209102` | Khai báo |  |
| Khai báo vật tư hàng hóa theo chiều phân tích | `110211102` | Khai báo |  |
| Khai báo thương hiệu | `110212102` | Khai báo |  |
| Khai báo tồn kho tối thiểu | `110213102` | Khai báo |  |
| Khai báo thiết bị | `110214102` | Khai báo |  |
| Khai báo nhóm thiết bị | `110215102` | Khai báo |  |
| Khai báo quy tắc tạo tồn kho an toàn | `110216102` | Khai báo |  |
| Khai báo mã vật tư gốc | `110217102` | Khai báo |  |
| Khai báo vật tư - TID | `110218102` | Khai báo | biến thể |
| Khai báo nhóm mã gốc - TID | `110219102` | Khai báo | biến thể |
| Chi tiết vật tư hàng hóa | `110210102` | Lập |  |
| Xem danh mục sản phẩm | `110207102` | Tra cứu |  |

### KHO-1 · Yêu cầu cung ứng (13)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập yêu cầu cung ứng | `130101102, 800301102` | Lập | ×2; app |
| \*\*Theo dõi thực hiện yêu cầu cung ứng (Chưa thấy code) | `130103101` | Lập | Ẩn |
| Lập yêu cầu cung ứng - TID | `130116102` | Lập | biến thể |
| Lập yêu cầu cung ứng qua kho | `800302102` | Lập | Ẩn; app |
| Yêu cầu cấp vật tư | `801113102` | Lập | app |
| Duyệt yêu cầu cung ứng | `130102102` | Duyệt | ×2; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt yêu cầu cung ứng (ràng buộc số lượng mua) | `130115102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Đổ yêu cầu sử dụng từ Excel (Đổ nhiều yêu cầu) | `130109102` | Xử lý | Nạp Excel, báo lỗi theo dòng (L-51) |
| Xử lý yêu cầu cung ứng | `130111102` | Xử lý |  |
| Báo cáo thực hiện yêu cầu cung ứng | `300402102` | Báo cáo |  |
| BC tình hình thực hiện YCCU | `300425202` | Báo cáo |  |
| BCQT Yêu cầu cung ứng | `981301202` | Báo cáo |  |
| BC chênh lệch thời gian cấp và thời gian yêu cầu | `981306202` | Báo cáo | ×2 |

### KHO-2 · Nhập kho (14)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Phiếu nhập khác | `130201902` | Lập |  |
| Nhập phiếu nhập hàng thừa từ dự án - CENTRAL | `130207102` | Lập | biến thể |
| Nhập phiếu nhập mua hàng | `130209102` | Lập |  |
| Nhập phiếu nhập hàng bán bị trả lại | `130213102` | Lập |  |
| Phiếu nhập kho mua hàng nội bộ - GAIN | `130216102` | Lập | biến thể |
| Kiểm soát chất lượng phiếu nhập | `130217102` | Lập |  |
| Duyệt phiếu nhập kho | `130218102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xác nhận nhập kho | `130201102, 800304102, 801105102` | Xác nhận | ×3; app; Bước W chuyên trách, menu riêng (L-20) |
| Bảng kê phiếu nhập theo tài khoản | `300402202` | Báo cáo |  |
| Bảng kê phiếu nhập theo nguồn nhập | `304901202` | Báo cáo |  |
| Bảng phân tích nhập hàng | `304902202` | Báo cáo |  |
| Bảng kê chi tiết chi phí nhập hàng | `304903202` | Báo cáo |  |
| BC chi phí nhập hàng | `304904202` | Báo cáo |  |
| BCQT Nhập kho | `981304202` | Báo cáo |  |

### KHO-3 · Xuất kho (11)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập phiếu xuất bán | `130301102` | Lập |  |
| Lập phiếu xuất kho sử dụng | `130303102` | Lập |  |
| Lập phiếu xuất hàng mua trả lại | `130313102` | Lập |  |
| Kiểm soát chất lượng phiếu xuất | `130317102` | Lập |  |
| Duyệt phiếu xuất kho | `130320102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xác nhận xuất kho | `130310102, 800305102, 801106102` | Xác nhận | ×3; app; Bước W chuyên trách, menu riêng (L-20) |
| BC so sánh xuất hàng | `300422202` | Báo cáo |  |
| Bảng kê phiếu xuất theo nguồn xuất | `305502202` | Báo cáo |  |
| BC phân tích xuất hàng | `305503202` | Báo cáo |  |
| Bảng kê phiếu xuất theo tài khoản | `305504202` | Báo cáo |  |
| BCQT Xuất kho | `981305202` | Báo cáo |  |

### KHO-4 · Luân chuyển và đổi hàng (8)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập yêu cầu luân chuyển | `130106102` | Lập |  |
| Nhập phiếu nhập luân chuyển | `130210102` | Lập |  |
| Nhập phiếu nhập đổi hàng - Đổi hàng đã bán (giống luân chuyển) | `130211102` | Lập |  |
| Lập phiếu xuất luân chuyển | `130312102` | Lập |  |
| Lập phiếu xuất đổi hàng | `130314102` | Lập |  |
| Lập yêu cầu đổi hàng | `130319102` | Lập |  |
| Điều phối hàng hóa theo đơn hàng | `130414102` | Xử lý |  |
| BC luân chuyển kho | `300408202` | Báo cáo |  |

### KHO-5 · Tồn kho, kiểm kê, điều chỉnh (18)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Nhập phiếu nhập hàng thừa từ kiểm kê | `130208102` | Lập |  |
| Nhập phiếu xuất hàng thiếu kiểm kê | `130311102` | Lập |  |
| \*\*Lập phiếu xuất giảm giá trị hàng tồn | `130315102` | Lập | Ẩn |
| Lập biên bản kiểm kê | `130410102` | Lập |  |
| Lập phiếu điều chỉnh tăng giá trị hàng tồn | `130412102` | Lập |  |
| Tra cứu tồn kho | `130411102, 800303102, 801114102` | Tra cứu | ×3; app |
| BC tổng hợp chi tiết vật liệu, dụng cụ, sản phẩm, hàng hóa | `300401102` | Báo cáo |  |
| BC tuổi tồn kho | `300401202` | Báo cáo |  |
| Bảng tổng hợp nhập xuất tồn | `300404202` | Báo cáo |  |
| Bảng tổng hợp nhập xuất tồn, số lượng | `300405202` | Báo cáo |  |
| Thẻ kho | `300406202` | Báo cáo |  |
| Bảng tổng hợp nhập xuất tồn theo tài khoản | `300407202` | Báo cáo |  |
| Báo cáo tổng quan tồn kho tối thiểu | `300427202` | Báo cáo |  |
| Báo cáo chênh lệch số lượng nhập/ xuất kho | `300428202` | Báo cáo |  |
| Bảng kê nhập xuất | `305501202` | Báo cáo |  |
| BC tồn kho | `981302202` | Báo cáo |  |
| BC quản trị hàng tồn kho | `981302202` | Báo cáo |  |
| BCQT Các chỉ số tài chính kho | `981303202` | Báo cáo |  |

### KHO-6 · Hàng ký gửi (4)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Quyết toán hàng ký gửi | `130105102` | Lập |  |
| BC hàng ký gửi | `300409202` | Báo cáo |  |
| Tra cứu tồn kho ký gửi | `300424202` | Báo cáo |  |
| Báo cáo thời gian ký gửi | `300426202` | Báo cáo |  |

### KHO-7 · Truy xuất nguồn gốc và số serial (6)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Truy xuất nguồn gốc | `130418102` | Lập |  |
| Tra cứu lịch sử nhập xuất số serial | `130417102` | Tra cứu |  |
| Bảng tổng hợp nhập xuất tồn - số lượng theo serial | `300423202` | Báo cáo |  |
| BC truy xuất nguồn gốc | `300430202` | Báo cáo |  |
| Bảng kê phiếu nhập theo serial | `304905202` | Báo cáo |  |
| Bảng kê phiếu xuất theo serial | `305505202` | Báo cáo |  |

### KHO-8 · Máy móc thiết bị cho thuê, mượn tại công trình (20)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập yêu cầu chuyển đổi thiết bị | `130108102` | Lập |  |
| Lập yêu cầu chuyển đổi | `130110102` | Lập |  |
| Lịch sử thuê theo công tác ngân sách | `130112102` | Lập |  |
| Lập yêu cầu cấp MMTB cho NTP thuê/ mượn | `130113102` | Lập |  |
| Lập yêu cầu NCC/NTP trả MMTB | `130114102` | Lập |  |
| Báo cáo tồn kho thiết bị theo nhóm kho | `300403102` | Báo cáo |  |
| Báo cáo thực thiện mua/ thuê thiết bị | `300404102` | Báo cáo |  |
| Bảng tính tiền thuê vật tư / thiết bị | `300411202` | Báo cáo |  |
| Bảng kê tổng hợp chi phí thiết bị | `300412202` | Báo cáo |  |
| Bảng giá cho thuê máy móc thiết bị | `300413202` | Báo cáo |  |
| Tình trạng MMTB tại các kho | `300414202` | Báo cáo |  |
| BC chi tiết tồn kho vật tư/thiết bị thuê ngoài | `300415202` | Báo cáo |  |
| BC phân bổ thiết bị theo khu vực - nhóm kho | `300416202` | Báo cáo |  |
| BC thiết bị theo vùng | `300417202` | Báo cáo |  |
| Bảng kê chi phí lắp dựng, bảo trì thiết bị | `300418202` | Báo cáo |  |
| BC tổng số lượng thiết bị đang có tại công trường | `300419202` | Báo cáo |  |
| BC hao hụt thiết bị | `300420202` | Báo cáo |  |
| BC tình hình cho thuê mượn vật tư tại công trường | `300429202` | Báo cáo |  |
| Bảng kê hiệu quả sử dụng thiết bị công ty | `981307202` | Báo cáo |  |
| Hiệu quả sử dụng thiết bị công ty | `981307202` | Báo cáo |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
