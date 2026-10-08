---
title: Luồng nghiệp vụ theo menu — VP Văn phòng và cộng tác
status: final
updated: 2026-10-08
sources:
  - tapetco-erp/menu/DANH SÁCH MENU.xlsx (menu GreenSys, 1.485 dòng)
  - references/business/loi-chung-tu.md, erp.md
---

# VP · Văn phòng và cộng tác

**Khối:** Kinh doanh mở rộng · **Số menu:** 65 nhãn (74 dòng gốc) · Đọc [README](README.md) trước để biết quy ước.

Công văn, công việc, phòng họp và xe, công tác, tài liệu, issue log, lịch làm việc, bản tin nội bộ.

## Luồng

- **VP-1** Công văn đến, đi: Ghi nhận và xử lý công văn.
- **VP-2** Công việc: Giao và theo dõi công việc.
- **VP-3** Phòng họp và xe: Đăng ký dùng tài nguyên chung.
- **VP-4** Công tác và chi tiêu: Đăng ký công tác đến chi phí.
- **VP-5** Tài liệu: Lưu và tra cứu tài liệu.
- **VP-6** Issue log và thay đổi phần mềm: Theo dõi lỗi, yêu cầu thay đổi (thường dùng nội bộ đội phần mềm).
- **VP-7** Lịch làm việc: Đăng ký lịch làm việc cá nhân.
- **VP-8** Bản tin nội bộ: Đăng tin cho nhân viên.

### VP-1 · Công văn đến, đi

Ghi nhận và xử lý công văn.

```text
Công văn đến ─▶ Ghi nhận ─▶ Xử lý ─▶ (công văn đi)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Ghi nhận | Lập công văn đến/đi `180102102`<br>Ghi nhận công văn đến `180103102, 800805102`<br>Ghi nhận công văn đi từ P/B `180108102`<br>Ghi nhận công văn đi từ DA `180108102`<br>Ghi nhận công văn đi từ DA\_MB `180108102`<br>Ghi nhận công văn đi từ PB/DA `800807102` | Văn thư |  |
| 2 | Xử lý | Xử lý công văn `180104102, 800804102` | Người được giao |  |

### VP-2 · Công việc

Giao và theo dõi công việc.

```text
Công việc mẫu ─▶ Tạo công việc, checklist ─▶ thực hiện ─▶ Duyệt công việc ─▶ điểm
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Mẫu | Khai báo công việc mẫu `180315102`<br>Định nghĩa công việc mẫu `180321102`<br>Lập nhóm công việc `180303102`<br>Khai báo KPI `110704102` | Quản lý |  |
| 2 | Giao việc | Tạo Công Việc Mới `180304102`<br>Lập danh sách công việc `180316102`<br>Lập quản lý công việc `180320102`<br>Quản lý công việc `180317102`<br>Danh sách Công việc `180301102`<br>DS CheckList Thuộc CV `180307101`<br>POPUP\_ Mô Tả Công Việc `180306101` | Quản lý, nhân viên |  |
| 3 | Duyệt, chấm điểm | Duyệt công việc `180319102`<br>Thay Đổi Điểm Của Công Việc `180308101`<br>BC điểm `180901201`<br>BC tiến độ công việc `180902201`<br>BC công việc hoành thành `180903201`<br>BC thực hiện công việc `301802202` | Quản lý |  |

### VP-3 · Phòng họp và xe

Đăng ký dùng tài nguyên chung.

```text
Đăng ký (phòng họp / xe) ─▶ (duyệt) ─▶ sử dụng ─▶ đánh giá, chi phí
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Khai báo | Khai báo phòng họp `110701102`<br>Khai báo xe `110702102` | Hành chính |  |
| 2 | Phòng họp | Lập đăng ký sử dụng phòng họp `180309102, 800801102`<br>Duyệt đăng ký sử dụng phòng họp `180310102`<br>Đánh giá tình trạng sử dụng phòng họp `180311102`<br>Đăng ký lịch họp `180322102`<br>Lập đăng ký lịch họp `9701143` | Nhân viên, hành chính |  |
| 3 | Xe | Lập đăng ký sử dụng xe `180312102, 800802102`<br>Duyệt đăng ký sử dụng xe `180313102, 800013102`<br>Danh sách đánh giá sử dụng xe `180314102`<br>Cập nhật tiêu hao nhiên liệu xe `180318102`<br>BC tổng hợp chi phí xe `301801202` | Nhân viên, hành chính |  |

### VP-4 · Công tác và chi tiêu

Đăng ký công tác đến chi phí.

```text
Đăng ký công tác ─▶ (duyệt) ─▶ Đặt vé ─▶ Chi phí hành trình ─▶ KT-3 tạm ứng / hoàn ứng
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Công tác | Đăng ký đi công tác `180701102, 800806102`<br>Duyệt đăng ký đi công tác `180704102, 800012102`<br>Nhập thông tin đặt vé `180702102`<br>Thống kê chi phí hành trình `180703102` | Nhân viên, hành chính |  |
| 2 | Chi tiêu | Chi tiêu cá nhân `180801102` | Nhân viên |  |

### VP-5 · Tài liệu

Lưu và tra cứu tài liệu.

```text
Nhóm tài liệu ─▶ Tải lên ─▶ Tra cứu
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Tài liệu | Khai báo nhóm tài liệu `180401102`<br>Tải tài liệu lên `180402102`<br>Tra cứu tài liệu `180403102`<br>Xem tài liệu `801104102`<br>Viết tài liệu kỹ thuật `180609102`<br>Xem tài liệu kỹ thuật `180610102` | Mọi người dùng |  |

### VP-6 · Issue log và thay đổi phần mềm

Theo dõi lỗi, yêu cầu thay đổi (thường dùng nội bộ đội phần mềm).

```text
Phát hành issue (nội bộ / khách) ─▶ (duyệt) ─▶ Xử lý ─▶ ghi chú thay đổi nghiệp vụ ─▶ xác nhận
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Issue | Phát hành Issue log - Nội bộ `180601102`<br>Phát hành issue log - Khách hàng `180604102`<br>Issue log - simple `180613102`<br>Duyệt Issue log `180602102`<br>Xử lý Issue `180603102`<br>Khai báo thời gian thực hiện Issue `110705102` | Đội phần mềm, khách |  |
| 2 | Thay đổi | Ghi chú thay đổi nghiệp vụ `180606102`<br>Xác nhận thay đổi logic nghiệp vụ `180607102`<br>Danh sách thay đổi database `180605102`<br>Lập yêu cầu đồng bộ App `180608102` | Đội phần mềm |  |
| 3 | Báo cáo | BC quản trị Issue log `302201302`<br>Báo cáo Issue Log - Support `302201102`<br>Báo cáo tình hình issue log - Dev `180601202` | Quản lý |  |

### VP-7 · Lịch làm việc

Đăng ký lịch làm việc cá nhân.

```text
Đăng ký lịch ─▶ (duyệt)
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Lịch | Đăng ký lịch làm việc `180611102, 801102102`<br>Duyệt đăng ký lịch làm việc `180612102, 801103102` | Nhân viên, quản lý |  |

### VP-8 · Bản tin nội bộ

Đăng tin cho nhân viên.

```text
Nhập bản tin ─▶ (duyệt) ─▶ hiện trên cổng nhân viên
```

| # | Bước | Menu `mã trang` | Vai chủ | Kết quả, luật lõi |
|---|---|---|---|---|
| 1 | Bản tin | Nhập bản tin `260110102`<br>Duyệt bảng tin `260111102`<br>Quản lý thông tin nội bộ `260101102` | Hành chính, truyền thông |  |

## Danh mục menu theo luồng

Mọi menu của phân hệ, kể cả menu không nằm trong bảng bước ở trên. Ghi chú: `×N` gộp N dòng cùng nhãn; `Ẩn` là menu đang ẩn trong nguồn; `app` là menu của ứng dụng điện thoại (nhóm 80); `biến thể` là trang làm riêng cho một khách hoặc một bộ phận.

### VP-1 · Công văn đến, đi (7)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Lập công văn đến/đi | `180102102` | Lập | Ẩn |
| Ghi nhận công văn đến | `180103102, 800805102` | Lập | ×2; app |
| Ghi nhận công văn đi từ DA\_MB | `180108102` | Lập | biến thể |
| Ghi nhận công văn đi từ DA | `180108102` | Lập |  |
| Ghi nhận công văn đi từ P/B | `180108102` | Lập |  |
| Ghi nhận công văn đi từ PB/DA | `800807102` | Lập | app |
| Xử lý công văn | `180104102, 800804102` | Xử lý | ×2; app |

### VP-2 · Công việc (17)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo KPI | `110704102` | Khai báo |  |
| Khai báo công việc mẫu | `180315102` | Khai báo |  |
| Định nghĩa công việc mẫu | `180321102` | Khai báo |  |
| Danh sách Công việc | `180301102` | Lập | Ẩn |
| Lập nhóm công việc | `180303102` | Lập |  |
| Tạo Công Việc Mới | `180304102` | Lập | Ẩn |
| POPUP\_ Mô Tả Công Việc | `180306101` | Lập | Ẩn |
| DS CheckList Thuộc CV | `180307101` | Lập | Ẩn |
| Thay Đổi Điểm Của Công Việc | `180308101` | Lập | Ẩn |
| Lập danh sách công việc | `180316102` | Lập |  |
| Quản lý công việc | `180317102` | Lập |  |
| Lập quản lý công việc | `180320102` | Lập |  |
| Duyệt công việc | `180319102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| BC điểm | `180901201` | Báo cáo |  |
| BC tiến độ công việc | `180902201` | Báo cáo |  |
| BC công việc hoành thành | `180903201` | Báo cáo |  |
| BC thực hiện công việc | `301802202` | Báo cáo |  |

### VP-3 · Phòng họp và xe (12)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo phòng họp | `110701102` | Khai báo |  |
| Khai báo xe | `110702102` | Khai báo |  |
| Lập đăng ký sử dụng phòng họp | `180309102, 800801102` | Lập | ×2; app |
| Đánh giá tình trạng sử dụng phòng họp | `180311102` | Lập |  |
| Lập đăng ký sử dụng xe | `180312102, 800802102` | Lập | ×2; app |
| Danh sách đánh giá sử dụng xe | `180314102` | Lập |  |
| Đăng ký lịch họp | `180322102` | Lập |  |
| Lập đăng ký lịch họp | `9701143` | Lập |  |
| Duyệt đăng ký sử dụng phòng họp | `180310102` | Duyệt | Ẩn; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Duyệt đăng ký sử dụng xe | `180313102, 800013102` | Duyệt | ×2; app; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Cập nhật tiêu hao nhiên liệu xe | `180318102` | Xử lý |  |
| BC tổng hợp chi phí xe | `301801202` | Báo cáo |  |

### VP-4 · Công tác và chi tiêu (5)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Đăng ký đi công tác | `180701102, 800806102` | Lập | ×2; app |
| Nhập thông tin đặt vé | `180702102` | Lập |  |
| Thống kê chi phí hành trình | `180703102` | Lập |  |
| Chi tiêu cá nhân | `180801102` | Lập |  |
| Duyệt đăng ký đi công tác | `180704102, 800012102` | Duyệt | ×2; app; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |

### VP-5 · Tài liệu (6)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo nhóm tài liệu | `180401102` | Khai báo |  |
| Tải tài liệu lên | `180402102` | Lập |  |
| Viết tài liệu kỹ thuật | `180609102` | Lập |  |
| Tra cứu tài liệu | `180403102` | Tra cứu |  |
| Xem tài liệu kỹ thuật | `180610102` | Tra cứu |  |
| Xem tài liệu | `801104102` | Tra cứu | app |

### VP-6 · Issue log và thay đổi phần mềm (13)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Khai báo thời gian thực hiện Issue | `110705102` | Khai báo |  |
| Phát hành Issue log - Nội bộ | `180601102` | Lập |  |
| Phát hành issue log - Khách hàng | `180604102` | Lập |  |
| Danh sách thay đổi database | `180605102` | Lập |  |
| Ghi chú thay đổi nghiệp vụ | `180606102` | Lập |  |
| Lập yêu cầu đồng bộ App | `180608102` | Lập |  |
| Issue log - simple | `180613102` | Lập |  |
| Duyệt Issue log | `180602102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |
| Xác nhận thay đổi logic nghiệp vụ | `180607102` | Xác nhận | Bước W chuyên trách, menu riêng (L-20) |
| Xử lý Issue | `180603102` | Xử lý |  |
| Báo cáo tình hình issue log - Dev | `180601202` | Báo cáo |  |
| Báo cáo Issue Log - Support | `302201102` | Báo cáo |  |
| BC quản trị Issue log | `302201302` | Báo cáo |  |

### VP-7 · Lịch làm việc (2)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Đăng ký lịch làm việc | `180611102, 801102102` | Lập | ×2; app |
| Duyệt đăng ký lịch làm việc | `180612102, 801103102` | Duyệt | ×2; app; Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |

### VP-8 · Bản tin nội bộ (3)

| Menu | Mã trang | Kiểu | Ghi chú |
|---|---|---|---|
| Quản lý thông tin nội bộ | `260101102` | Lập |  |
| Nhập bản tin | `260110102` | Lập |  |
| Duyệt bảng tin | `260111102` | Duyệt | Bước W, chỉ có việc khi bật quy trình duyệt (L-16) |

## Nhật ký quyết định

- 2026-10-08 — Phân luồng menu GreenSys theo phân hệ, giữ menu gốc, ghi cách hiểu theo bộ luật lõi — người dùng chốt
