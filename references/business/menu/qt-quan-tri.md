---
title: Luồng nghiệp vụ theo menu — QT Báo cáo quản trị, dashboard, AI
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# QT · Báo cáo quản trị, dashboard, AI

**Khối:** Lõi ERP · **Số menu:** 31 nhãn (35 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Dashboard và báo cáo quản trị toàn công ty, chatbot AI. Báo cáo của từng phân hệ nằm trong phân hệ đó.

## Luồng

- **QT-1** Dashboard và báo cáo quản trị toàn công ty: Chỉ số cho lãnh đạo.
- **QT-2** Trợ lý AI: Hỏi đáp trên dữ liệu.

### QT-1 · Dashboard và báo cáo quản trị toàn công ty

Chỉ số cho lãnh đạo.

```text
Dữ liệu các phân hệ ─▶ chỉ số (doanh thu, công nợ, tồn kho, đơn trễ) ─▶ Dashboard ban giám đốc
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Dashboard | Dashboard ban giám đốc `241002302`<br>Dashboard QL Công ty `241005302`<br>Dashboard NV Công ty `241004302`<br>Dashboard nhân viên kinh doanh `241003302`<br>BC quản trị BGĐ `990101202`<br>BCQT Doanh thu công ty `990102402` | Lãnh đạo, quản lý | Web dùng được cả trên điện thoại (L-58) |
| 2 | Chỉ số đơn hàng | Số lượng đơn hàng `206030101`<br>Số lượng đơn hàng chưa được giao `206030201`<br>Số lượng đơn hàng trễ 7 ngày `206030401`<br>Số lượng đơn hàng quá hạn 14 ngày `206030601` | Lãnh đạo | Là Xem lọc sẵn trên danh sách đơn (L-55) |
| 3 | Chỉ số tài chính | Doanh thu kế hoạch và thực tế `203030101`<br>Thu tiền so với kế hoạch `203030301`<br>Công nợ phải thu `203020101, 990101309`<br>Công nợ phải trả `203010101, 990101307`<br>Tổng giá trị tồn kho `204040201, 990101315` | Lãnh đạo |  |

### QT-2 · Trợ lý AI

Hỏi đáp trên dữ liệu.

```text
Người dùng hỏi ─▶ AI đọc dữ liệu theo quyền ─▶ trả lời, dẫn nguồn
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Chatbot | AI chatbox `990101102`<br>Chat Bot `4`<br>Trợ lý ảo phân hệ sản xuất `200419102` | Mọi người dùng | Dữ liệu nhạy cảm thì chạy tại chỗ (E-A2) |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### QT-1 · Dashboard và báo cáo quản trị toàn công ty (28)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Công nợ phải trả | `203010101, 990101307` | Báo cáo | ×2; Ẩn |
| Công nợ phải thu | `203020101, 990101309` | Báo cáo | ×2 |
| Doanh thu kế hoạch và thực tế | `203030101` | Báo cáo |  |
| Thu tiền so với kế hoạch | `203030301` | Báo cáo |  |
| Tổng giá trị tồn kho | `204040201, 990101315` | Báo cáo | ×2 |
| Số lượng đơn hàng | `206030101` | Báo cáo | Ẩn |
| Số lượng đơn hàng chưa được giao | `206030201` | Báo cáo | Ẩn |
| Số lượng đơn hàng trễ 3 ngày | `206030301` | Báo cáo | Ẩn |
| Số lượng đơn hàng trễ 7 ngày | `206030401` | Báo cáo | Ẩn |
| Số lượng đơn hàng trễ 14 ngày | `206030501` | Báo cáo | Ẩn |
| Số lượng đơn hàng quá hạn 14 ngày | `206030601` | Báo cáo | Ẩn |
| Diện tích cho thuê | `207010101, 990101316` | Báo cáo | ×2; Ẩn |
| Dashboard ban giám đốc | `241002302` | Báo cáo |  |
| Dashboard nhân viên kinh doanh | `241003302` | Báo cáo |  |
| Dashboard NV Công ty | `241004302` | Báo cáo | Ẩn |
| Dashboard QL Công ty | `241005302` | Báo cáo | Ẩn |
| BC quản trị BGĐ | `990101202` | Báo cáo |  |
| Số lượng ĐH chưa được giao | `990101301` | Báo cáo | Ẩn |
| Số lượng DH trễ 7 ngày | `990101303` | Báo cáo | Ẩn |
| Số lượng ĐH trễ 14 ngày | `990101304` | Báo cáo | Ẩn |
| Số lượng ĐH quá hạn 14 ngày | `990101305` | Báo cáo | Ẩn |
| DT kế hoạch và thực tế | `990101310` | Báo cáo | Ẩn |
| Tổng TT so với kế hoạch | `990101311` | Báo cáo | Ẩn |
| Tổng thu tiền | `990101312` | Báo cáo | Ẩn |
| Chi tiết tuổi tồn kho | `990101314` | Báo cáo | Ẩn |
| Tổng doanh thu | `990101318` | Báo cáo | Ẩn |
| Tổng số lượng đơn hàng | `990101319` | Báo cáo | Ẩn |
| BCQT Doanh thu công ty | `990102402` | Báo cáo |  |

### QT-2 · Trợ lý AI (3)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Trợ lý ảo phân hệ sản xuất | `200419102` | Lập |  |
| Chat Bot | `4` | Lập |  |
| AI chatbox | `990101102` | Lập |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
