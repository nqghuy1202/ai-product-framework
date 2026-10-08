---
title: Luồng nghiệp vụ theo menu ERP
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (1.485 menu của hệ thống GreenSys)
  - references/business/loi-chung-tu.md, erp.md
---

# Luồng nghiệp vụ theo menu ERP

Danh sách menu ERP chuẩn (lấy từ hệ thống GreenSys, 1.485 dòng) được xếp vào **18 phân hệ** và **101 luồng nghiệp vụ**. Mỗi luồng có sơ đồ và bảng bước nói rõ menu nào làm bước nào, ai làm, chứng từ sang Y thì sinh ra gì. 134 dòng thử nghiệm, đánh dấu bỏ hay bản sao được tách sang [loai-bo.md](loai-bo.md).

Đọc cùng [../loi-chung-tu.md](../loi-chung-tu.md) (mã `L-n`) và [../erp.md](../erp.md) (mã `E-…`). Menu giữ nguyên tên gốc; chỗ nào cách dùng gốc khác bộ luật lõi thì có ghi chú cách hiểu theo lõi.

## Cách dùng cho dự án mới

1. **Chọn phân hệ** theo bảng dưới. Dự án ERP thương mại thường lấy khối Nền tảng và Lõi ERP; thêm khối khác khi khách có nghiệp vụ đó.
2. **Chọn luồng** trong từng phân hệ. Mỗi luồng là một đơn vị phạm vi, có thể vào hoặc ra MVP.
3. **Chọn menu** trong luồng: bảng bước liệt kê menu chính, mục "Danh mục menu theo luồng" liệt kê đủ cả menu phụ và báo cáo. Bỏ biến thể không cần; thêm menu `[MỚI]` nếu bộ luật lõi yêu cầu.
4. **Thêm menu riêng** của dự án: đặt vào luồng hợp nhất, hoặc mở luồng mới với mã tiếp theo (ví dụ `KHO-9`). Nghiệp vụ ngành đặc thù thì ghi ở phụ lục ngành (như [../phu-luc-nhien-lieu-hang-khong.md](../phu-luc-nhien-lieu-hang-khong.md)).
5. Ghi danh sách phân hệ, luồng, menu đã chọn vào PRD; khi chia story, mỗi luồng thường là một epic hoặc một nhóm story.

Với AI: khi `project.domain` là `erp`, skill `prd` dùng bảng này để hỏi khách chọn phân hệ và luồng (một lượt hỏi cho mỗi khối), thay vì liệt kê tính năng từ đầu.

## Quy ước

- **Mã trang** 9 chữ số: 2 số đầu là nhóm gốc trong GreenSys, 2 số tiếp là nhóm con, đuôi `102` thường là trang chức năng, `202` là báo cáo. Một menu có nhiều mã khi nguồn có nhiều trang cùng nhãn (ví dụ bản web và bản app).
- **Kiểu**: Khai báo · Lập · Duyệt · Xác nhận · Xử lý · Tra cứu · Báo cáo. Suy từ nhãn, dùng để sắp xếp, không phải dữ liệu nguồn.
- **Ghi chú trong danh mục**: `×N` gộp N dòng cùng nhãn · `Ẩn` menu đang ẩn trong nguồn · `app` menu của ứng dụng điện thoại (nhóm 80) · `biến thể` trang làm riêng cho một khách hoặc bộ phận (Phong Thạnh, USSH, TID, Emanu, GS, CENTRAL, GAIN, ERP100…).
- **`[MỚI]`**: menu chưa có trong GreenSys mà bộ luật lõi cần (danh sách ở cuối file).
- **`[XUNG ĐỘT …]`**: menu gốc làm khác bộ luật lõi; giữ menu, dùng theo cách hiểu ghi kèm, hoặc dự án chọn làm khác và ghi vào Nhật ký quyết định.

## Bản đồ phân hệ

| Khối | Mã | Phân hệ | Luồng | Menu (nhãn / dòng gốc) | File |
|---|---|---|---|---|---|
| Nền tảng | HT | Hệ thống, người dùng và duyệt | 6 | 69 / 72 | [ht-he-thong.md](ht-he-thong.md) |
| Nền tảng | DM | Danh mục chung và tham số | 4 | 43 / 43 | [dm-danh-muc-chung.md](dm-danh-muc-chung.md) |
| Lõi ERP | KHO | Kho và cung ứng | 9 | 112 / 121 | [kho-kho-cung-ung.md](kho-kho-cung-ung.md) |
| Lõi ERP | MUA | Mua hàng | 6 | 62 / 63 | [mua-mua-hang.md](mua-mua-hang.md) |
| Lõi ERP | BAN | Bán hàng | 7 | 62 / 65 | [ban-ban-hang.md](ban-ban-hang.md) |
| Lõi ERP | KT | Kế toán, thu chi, tín dụng | 10 | 162 / 168 | [kt-ke-toan.md](kt-ke-toan.md) |
| Lõi ERP | TS | Tài sản, công cụ dụng cụ | 5 | 29 / 32 | [ts-tai-san.md](ts-tai-san.md) |
| Lõi ERP | BT | Bảo hành, bảo trì | 3 | 16 / 16 | [bt-bao-hanh-bao-tri.md](bt-bao-hanh-bao-tri.md) |
| Lõi ERP | NS | Nhân sự, tiền lương, đào tạo | 12 | 219 / 234 | [ns-nhan-su.md](ns-nhan-su.md) |
| Lõi ERP | QT | Báo cáo quản trị, dashboard, AI | 2 | 31 / 35 | [qt-quan-tri.md](qt-quan-tri.md) |
| Dự án và ngân sách | DA | Dự án, hợp đồng, đấu thầu (PJM) | 11 | 192 / 193 | [da-du-an.md](da-du-an.md) |
| Dự án và ngân sách | NGS | Ngân sách, dự toán | 4 | 37 / 37 | [ngs-ngan-sach.md](ngs-ngan-sach.md) |
| Sản xuất | SX | Sản xuất | 6 | 95 / 100 | [sx-san-xuat.md](sx-san-xuat.md) |
| Kinh doanh mở rộng | CRM | Quản lý khách hàng (CRM) | 3 | 42 / 46 | [crm-khach-hang.md](crm-khach-hang.md) |
| Kinh doanh mở rộng | NPP | Nhà phân phối, DMS | 3 | 23 / 27 | [npp-nha-phan-phoi.md](npp-nha-phan-phoi.md) |
| Kinh doanh mở rộng | BL | Bán lẻ, cửa hàng | 1 | 15 / 16 | [bl-ban-le.md](bl-ban-le.md) |
| Kinh doanh mở rộng | VP | Văn phòng và cộng tác | 8 | 65 / 74 | [vp-van-phong.md](vp-van-phong.md) |
| Khác | WEB | Trang web sản phẩm, mã HS | 1 | 9 / 9 | [web-trang-san-pham.md](web-trang-san-pham.md) |

## Luồng xuyên phân hệ

Sáu chuỗi chính nối các phân hệ. Mã như `KHO-2` trỏ tới luồng trong file của phân hệ đó.

### Mua đến trả tiền (procure-to-pay)

```text
KHO-1 Yêu cầu cung ứng ─▶ MUA-1 Đề nghị mua ─▶ So sánh giá ─▶ Đơn mua ─▶ KHO-2 Phiếu nhập (Y: cộng tồn)
     ─▶ KT-5 Kế toán phiếu nhập ─▶ KT-1 Hoá đơn đầu vào, phải trả ─▶ Đề nghị thanh toán ─▶ Phiếu chi ─▶ Xác nhận chi
```

### Bán đến thu tiền (order-to-cash)

```text
CRM-1 Cơ hội ─▶ BAN-1 Báo giá ─▶ Đơn bán ─▶ KHO-3 Phiếu xuất bán (Y: trừ tồn) ─▶ KT-5 Kế toán phiếu xuất
     ─▶ KT-2 Hoá đơn, phải thu ─▶ Phiếu thu ─▶ (trả lại: BAN-5 ─▶ KHO-2 ─▶ hoá đơn điều chỉnh)
```

### Sản xuất theo đơn (make-to-order)

```text
BAN-1 Đơn bán ─▶ SX-1 Tính nhu cầu ─▶ SX-2 Kế hoạch ─▶ SX-3 Lệnh ─▶ KHO-3 Xuất NVL ─▶ Ghi nhận kết quả
     ─▶ KHO-2 Nhập thành phẩm ─▶ SX-4 Giá thành ─▶ KHO-3 Xuất bán
```

### Dự án xây dựng (project-to-profit)

```text
DA-1 Dự thầu ─▶ DA-2 Khởi tạo, ngân sách ─▶ DA-4 Giao thầu, mua sắm ─▶ DA-5 Thầu phụ, khối lượng ─▶ KT-1 Phải trả
            └─▶ DA-3 Nghiệm thu CĐT ─▶ Ghi nhận doanh thu ─▶ KT-2 Phải thu ─▶ DA-8 Lãi lỗ, đóng dự án
```

### Tuyển dụng đến trả lương (hire-to-pay)

```text
NS-1 Định biên ─▶ NS-2 Tuyển dụng ─▶ NS-3 Hồ sơ, HĐLĐ ─▶ HT-1 Tài khoản ─▶ NS-7 Chấm công ─▶ NS-8 Tính lương
     ─▶ KT (định khoản lương, phiếu chi) ─▶ NS-6 Nghỉ việc ─▶ HT-1 Khoá tài khoản
```

### Vòng đời tài sản (acquire-to-retire)

```text
MUA-1 Đơn mua ─▶ KHO-2 Nhập ─▶ TS-1 Ghi tăng ─▶ Khấu hao ─▶ BT-2 Bảo trì / BT-3 Sửa chữa ─▶ TS-2 Thanh lý ─▶ BAN-7 Đơn thanh lý
```

## Cách hiểu menu gốc theo bộ luật lõi

| Loại menu gốc | Ví dụ | Cách hiểu theo lõi |
|---|---|---|
| "Duyệt <chứng từ>" | Duyệt đơn hàng bán 1, Duyệt phiếu nhập kho | Danh sách lọc sẵn bước W của loại chứng từ đó trong hàng đợi duyệt chung (HT-2). Chỉ có việc khi loại chứng từ bật quy trình duyệt; mặc định tắt (L-15, L-16) |
| "Xác nhận <việc>" | Xác nhận nhập kho, Xác nhận chi tiền mặt | Bước W chuyên trách, menu riêng cho người làm (L-20). Riêng xác nhận nhập kho được bật sẵn (E-K7) |
| "Duyệt chứng từ" (mới, V3) | | Một hàng đợi duyệt chung; các bản mới/V3 là phiên bản giao diện, dự án chỉ chọn một |
| "Cập nhật tình trạng / trạng thái" | Cập nhật tình trạng đơn hàng | `[XUNG ĐỘT L-6]` Trạng thái do luồng quyết, không sửa tay. Giữ menu làm trang xem tiến độ (Xem lọc sẵn) |
| "Mở/đóng kỳ", "Khoá bảng chấm công" | Mở/ đóng kỳ kế toán | `[XUNG ĐỘT E-T10]` Mặc định không khoá kỳ; chốt số bằng chứng từ sang Y. Khách cần khoá kỳ thì ghi ngoại lệ |
| "Chỉnh sửa số chứng từ", "Xoá chuyển sổ", "Xoá bút toán" | | `[XUNG ĐỘT L-36]` Sửa qua huỷ (ghi đảo) và lập lại; giữ menu cho quản trị khi cần sửa dữ liệu kỹ thuật, có nhật ký |
| "Biên bản điều chỉnh giá / ngân sách", "Điều chỉnh bảng giá" | Nhập biên bản điều chỉnh giá bán | Nhân bản thành bản mới, bản cũ tự ngừng (L-35) |
| "Đổ … từ Excel", "Nạp … từ Excel" | Đổ bảng giá mua từ excel | Nút Nạp Excel báo lỗi theo dòng (L-51) |
| "Tính giá BQGQ" | | Mặc định giá vốn FIFO (E-T12); bình quân là lựa chọn của khách |
| Menu "- new", "(V1)", "- erp100" | Nhập bảng giá bán - new | Hai phiên bản cùng nghiệp vụ; dự án chỉ chọn một |

## Menu [MỚI] theo bộ luật lõi

| Menu | Luồng | Luật | Ghi chú |
|---|---|---|---|
| Rà soát kiểm soát | HT-1 | L-4, L-25 | Báo cáo chỉ đọc: quy trình đang tắt duyệt, quy trình cho tự duyệt, quyền nhạy cảm |
| Yêu cầu cấp tài khoản | HT-1 | L-46 | Tuỳ chọn; gắn duyệt được |
| Nhật ký kiểm toán | HT-5 | L-37, L-38 | Tra cứu thay đổi dữ liệu và lý do vượt cảnh báo |
| Chế độ điều kiện kiểm soát | DM-3 | L-21…L-23 | Cảnh báo hoặc chặn theo loại điều kiện; ai được ghi đè |
| Số dư đầu kỳ kho | KHO-0 | L-52, E-C2 | Chứng từ có dòng, nạp Excel |
| Phiếu QC | KHO-2 | E-Q3 | Release / Hold / Thử mẫu; chỉ khi có hàng cần chứng nhận |
| Số dư đầu kỳ công nợ và tài khoản | KT-0 | L-52 | Chứng từ có dòng, nạp Excel |
| Phát hành hoá đơn điện tử | KT-2 | E-T2, E-T3, E-T7 | Qua cổng nhà cung cấp hoá đơn điện tử |
| Hoá đơn điều chỉnh, thay thế | KT-2 | E-T5, E-T6 | Liên kết hoá đơn gốc |
| Quyết toán tạm ứng | KT-3 | E-T17 | Đối trừ tạm ứng bằng chứng từ chi phí |

Ngoài các menu trên, bộ luật lõi cần ba thành phần dùng chung **không phải menu**: nút **Xem lịch sử** trên mọi chứng từ (L-37), hộp **nhập lý do** khi vượt cảnh báo, huỷ, từ chối (L-23), và **Xem lọc sẵn** trên danh sách (L-55).

## Thứ tự khai báo khi triển khai

```text
DM-1 Công ty, cơ cấu tổ chức ─▶ HT-1 Menu, nhóm quyền, người dùng ─▶ DM-3 Tham số, quy tắc mã, quy trình duyệt
   ─▶ DM-2 Đối tác ─▶ KT-0 Tài khoản, tiền tệ, kỳ, định khoản ─▶ KHO-0 Vật tư, kho, lô ─▶ NS-0 Chức danh, ca, lương
   ─▶ MUA-2 / BAN-2 Bảng giá ─▶ Số dư đầu kỳ (KHO-0, KT-0) ─▶ chạy luồng
```

## Nhật ký quyết định

- 2026-10-08 — Phân luồng toàn bộ menu GreenSys theo phân hệ; giữ menu gốc, chỉ loại thử nghiệm, đánh dấu bỏ, bản sao — người dùng chốt
- 2026-10-08 — Menu xung đột với bộ luật lõi: giữ menu, ghi cách hiểu theo lõi — người dùng chốt
- 2026-10-08 — Nhóm 80 là menu ứng dụng điện thoại; gắn vào luồng tương ứng với nhãn `app` — người dùng chốt
- 2026-10-08 — Gắn toàn bộ báo cáo (nhóm 30, 98, 99) vào phân hệ; giữ biến thể theo khách; thêm menu [MỚI]; ghi mã trang gốc — người dùng chốt
