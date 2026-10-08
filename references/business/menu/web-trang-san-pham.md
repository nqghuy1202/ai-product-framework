---
title: Luồng nghiệp vụ theo menu — WEB Trang web sản phẩm, mã HS
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# WEB · Trang web sản phẩm, mã HS

**Khối:** Khác · **Số menu:** 9 nhãn (9 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Trang web công khai tra cứu sản phẩm theo mã HS, đăng ký và liên hệ của khách.

## Luồng

- **WEB-1** Trang web tra cứu sản phẩm theo mã HS: Trang công khai cho khách.

### WEB-1 · Trang web tra cứu sản phẩm theo mã HS

Trang công khai cho khách.

```text
Khách vào trang ─▶ tra cứu theo mã HS ─▶ đăng ký, liên hệ ─▶ thông tin khách (CRM-1)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Khai báo | Khai báo mã HS `710108102`<br>Định nghĩa chiều phân tích `111501102, 710101102` | Quản trị |  |
| 2 | Trang công khai | Home Page `710102102`<br>About Page `710103102`<br>Contact Page `710104102`<br>Product Finder (H.S. Code) `710107102`<br>Register Page `710106102`<br>Login Page `710105102`<br>Customer details `710109101` | Khách |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### WEB-1 · Trang web tra cứu sản phẩm theo mã HS (9)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Định nghĩa chiều phân tích | `710101102` | Khai báo |  |
| Khai báo mã HS | `710108102` | Khai báo |  |
| Home Page | `710102102` | Lập |  |
| About Page | `710103102` | Lập |  |
| Contact Page | `710104102` | Lập |  |
| Login Page | `710105102` | Lập |  |
| Register Page | `710106102` | Lập |  |
| Product Finder (H.S. Code) | `710107102` | Lập |  |
| Customer details | `710109101` | Lập |  |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
