---
title: EXPERIENCE — {{TÊN}}
status: draft
updated: {{YYYY-MM-DD}}
baseline: ai-product-framework/design-baseline
sources: [docs/product/prd.md, docs/architecture/architecture.md]
covers: []
---

# EXPERIENCE — vận hành ra sao

> Trần ≤ 400 dòng. Mô tả chi tiết từng màn hình lớn thì tách vào `docs/ux/screens/<màn>.md`.
> Hành vi của danh sách, chi tiết, trạng thái và ba cỡ màn hình theo bộ nền; ở đây chỉ ghi phần riêng của dự án.

## Nền tảng
- Thiết bị theo vai: … (máy tính / tablet / điện thoại)
- UI system: {{ví dụ shadcn/ui trên Radix + Tailwind v4}}; thành phần dùng chung đặt ở `{{src/ui}}`.

## Kiến trúc thông tin
| Màn hình (surface) | Tới từ | Người dùng đến để làm gì | Bước tiếp theo | Nút chính | Mẫu nền |
|---|---|---|---|---|---|
| … | menu › … | … | … | … | list / detail / document-lines / home |

Kiểm "đóng bề mặt": mọi nhu cầu (UJ, FR) đều có màn hình phục vụ, và mọi màn hình đều có hành trình dẫn tới.

## Giọng văn
| Nên | Không nên |
|---|---|
| "Lưu đơn hàng" | "OK" |

Từ ngữ trên giao diện dùng đúng thuật ngữ trong PRD §3.

## Mẫu thành phần riêng
Hành vi của thành phần không có trong nền.

## Trạng thái riêng
Chỉ ghi trạng thái đặc thù (ví dụ "đang chờ duyệt bước 2"). Các trạng thái chung theo `design-baseline/states.md`.

## Luồng chính
### F-1 — theo UJ-1
1. …
Kết quả mong đợi sau mỗi hành động (tạo xong thấy gì, xoá xong thế nào).

## Ba cỡ màn hình
Chỉ ghi chỗ khác với `design-baseline/responsive.md`.

## Tiếp cận tối thiểu
Bàn phím, tương phản, vùng chạm, đọc màn hình: theo nền, cộng phần riêng của dự án nếu có.

## Câu hỏi mở
- OQ-…

## Nhật ký quyết định
- {{YYYY-MM-DD}} — D-… — … — lý do — người chốt
