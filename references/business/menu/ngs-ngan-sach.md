---
title: Luồng nghiệp vụ theo menu — NGS Ngân sách, dự toán
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# NGS · Ngân sách, dự toán

**Khối:** Dự án và ngân sách · **Số menu:** 37 nhãn (37 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Ngân sách phòng ban, ngân sách toàn công ty (doanh thu, nhân sự, khấu hao), dự toán và thực hiện.

## Luồng

- **NGS-0** Khai báo ngân sách: Cấu trúc và mã kế hoạch.
- **NGS-1** Ngân sách phòng ban: Lập, duyệt, điều chỉnh ngân sách từng phòng ban.
- **NGS-2** Ngân sách toàn công ty: Doanh thu, nhân sự, khấu hao, tổng hợp.
- **NGS-3** Dự toán và thực hiện: Dự toán chi cho hoạt động cụ thể.

### NGS-0 · Khai báo ngân sách

Cấu trúc và mã kế hoạch.

```text
Định nghĩa ngân sách ─▶ Cấu trúc ngân sách phòng ban, dự toán ─▶ Mã kế hoạch ─▶ Quy tắc tổng hợp mã báo cáo
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Cấu trúc | Định nghĩa ngân sách `110805102`<br>Khai báo cấu trúc ngân sách phòng ban `110806102`<br>Khai báo cấu trúc ngân sách phòng ban - TN `110808102`<br>Khai báo cấu trúc dự toán `110807102`<br>Khai báo mã kế hoạch `110801102`<br>Khai báo quy tắc tổng hợp mã báo cáo `110802101`<br>Khai báo các chỉ số kế hoạch `110028202` | Tài chính |  |

### NGS-1 · Ngân sách phòng ban

Lập, duyệt, điều chỉnh ngân sách từng phòng ban.

```text
Lập ngân sách phòng ban ─▶ (duyệt) ─▶ Y ─▶ điều chỉnh: biên bản điều chỉnh (bản mới) ─▶ theo dõi thực hiện
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập | Lập ngân sách phòng ban `190110102`<br>Lập ngân sách phòng ban - TN `190123102`<br>Lập ngân sách theo phòng ban (V1) `190106102`<br>Lập bảng ngân sách cập nhật (V1) `190103102`<br>Đổ chi tiết ngân sách từ excel (V1) `190108101`<br>\*\* QL KHNS Hoạt động chính `190101101`<br>\*\* QL KHNS Chi phí HĐ `190102101` | Trưởng phòng ban |  |
| 2 | Duyệt | Duyệt ngân sách (V1) `190109102`<br>Duyệt ngân sách phòng ban - TN `190125102` | Tài chính, lãnh đạo |  |
| 3 | Điều chỉnh | Điều chỉnh ngân sách phòng ban `190111102`<br>Điều chỉnh ngân sách phòng ban - TN `190124102`<br>Lập biên bản điều chỉnh ngân sách (V1) `190107102` | Trưởng phòng ban | Điều chỉnh tạo bản mới (L-35) |
| 4 | Theo dõi | BC thực hiện NS `981605202`<br>BC tình hình thực hiện ngân sách `981605202`<br>BC biến động NS theo thời gian `801103202` | Tài chính |  |

### NGS-2 · Ngân sách toàn công ty

Doanh thu, nhân sự, khấu hao, tổng hợp.

```text
NS doanh thu + NS nhân sự + NS khấu hao + NS phòng ban ─▶ Tổng hợp ngân sách toàn công ty
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lập | Lập ngân sách doanh thu dự án hiện hữu `190112102`<br>Lập Ngân sách nhân sự `190113102`<br>Lập ngân sách khấu hao `190114102`<br>Ngân sách A0 TID `190126102`<br>Ngân sách A1 TID `190128102` | Tài chính |  |
| 2 | Điều chỉnh | Điều chỉnh ngân sách doanh thu `190116102`<br>Điều chỉnh ngân sách nhân sự `190117102`<br>Điều chỉnh ngân sách khấu hao `190118102`<br>Điều chỉnh ngân sách A0 TID `190127102`<br>Điều chỉnh ngân sách A1 TID `190129102` | Tài chính |  |
| 3 | Tổng hợp | Tổng hợp ngân sách toàn công ty `190115102`<br>Ngân sách tổng toàn công ty `19011010200` | Tài chính, lãnh đạo |  |

### NGS-3 · Dự toán và thực hiện

Dự toán chi cho hoạt động cụ thể.

```text
Lập dự toán ─▶ (duyệt) ─▶ Đề nghị tạm ứng theo dự toán (KT-3) ─▶ Điều chỉnh thực hiện dự toán
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Dự toán | Lập dự toán `190119102`<br>Duyệt dự toán `190121102`<br>Điều chỉnh dự toán `190120102` | Bộ phận thực hiện |  |
| 2 | Thực hiện | Lập đề nghị tạm ứng theo dự toán `120114102`<br>Điều chỉnh thực hiện dự toán `190122102`<br>Báo cáo tổng hợp dự toán trường `301102102` | Bộ phận thực hiện, kế toán |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### NGS-0 · Khai báo ngân sách (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo mã kế hoạch | `110801102` | Khai báo |  |
| Khai báo quy tắc tổng hợp mã báo cáo | `110802101` | Khai báo | Ẩn |
| Định nghĩa ngân sách | `110805102` | Khai báo |  |
| Khai báo cấu trúc ngân sách phòng ban | `110806102` | Khai báo |  |
| Khai báo cấu trúc dự toán | `110807102` | Khai báo |  |
| Khai báo cấu trúc ngân sách phòng ban - TN | `110808102` | Khai báo | biến thể |
| Khai báo các chỉ số kế hoạch | `110028202` | Báo cáo |  |

### NGS-1 · Ngân sách phòng ban (13)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| \*\* QL KHNS Hoạt động chính | `190101101` | Lập | Ẩn |
| \*\* QL KHNS Chi phí HĐ | `190102101` | Lập | Ẩn |
| Lập bảng ngân sách cập nhật (V1) | `190103102` | Lập | Ẩn |
| Lập ngân sách theo phòng ban (V1) | `190106102` | Lập | Ẩn |
| Lập biên bản điều chỉnh ngân sách (V1) | `190107102` | Lập | Ẩn; Theo lõi: Nhân bản thành bản mới (L-35) |
| Lập ngân sách phòng ban | `190110102` | Lập |  |
| Điều chỉnh ngân sách phòng ban | `190111102` | Lập |  |
| Lập ngân sách phòng ban - TN | `190123102` | Lập | biến thể |
| Điều chỉnh ngân sách phòng ban - TN | `190124102` | Lập | biến thể |
| Duyệt ngân sách (V1) | `190109102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt ngân sách phòng ban - TN | `190125102` | Duyệt | biến thể; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Đổ chi tiết ngân sách từ excel (V1) | `190108101` | Xử lý | Ẩn; Nạp Excel, báo lỗi theo dòng (L-51) |
| BC biến động NS theo thời gian | `801103202` | Báo cáo | app |

### NGS-2 · Ngân sách toàn công ty (12)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Ngân sách tổng toàn công ty | `19011010200` | Lập | Ẩn |
| Lập ngân sách doanh thu dự án hiện hữu | `190112102` | Lập |  |
| Lập Ngân sách nhân sự | `190113102` | Lập |  |
| Lập ngân sách khấu hao | `190114102` | Lập |  |
| Điều chỉnh ngân sách doanh thu | `190116102` | Lập |  |
| Điều chỉnh ngân sách nhân sự | `190117102` | Lập |  |
| Điều chỉnh ngân sách khấu hao | `190118102` | Lập |  |
| Ngân sách A0 TID | `190126102` | Lập | biến thể |
| Điều chỉnh ngân sách A0 TID | `190127102` | Lập | biến thể |
| Ngân sách A1 TID | `190128102` | Lập | biến thể |
| Điều chỉnh ngân sách A1 TID | `190129102` | Lập | biến thể |
| Tổng hợp ngân sách toàn công ty | `190115102` | Báo cáo |  |

### NGS-3 · Dự toán và thực hiện (5)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập đề nghị tạm ứng theo dự toán | `120114102` | Lập | Ẩn |
| Lập dự toán | `190119102` | Lập |  |
| Điều chỉnh dự toán | `190120102` | Lập |  |
| Điều chỉnh thực hiện dự toán | `190122102` | Lập |  |
| Duyệt dự toán | `190121102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
