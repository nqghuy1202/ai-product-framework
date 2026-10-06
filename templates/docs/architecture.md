---
title: Kiến trúc — {{TÊN}}
status: draft
updated: {{YYYY-MM-DD}}
altitude: hệ thống | epic
paradigm: "{{tên mẫu, ví dụ modular monolith}}"
sources: [docs/product/prd.md]
covers: []
---

# Kiến trúc — {{TÊN}}

> Trần 120–250 dòng. Chỉ ghi **quyết định giữ cho các phần build riêng không lệch nhau**.
> Phép thử cho mỗi dòng: *nếu hai người build hai phần độc lập, họ có thể chọn khác nhau và làm vỡ nhau không?* Có, không hiển nhiên, và là đánh đổi thật thì ghi vào đây; không thì để code tự quyết.

## Paradigm
Tên mẫu và bảng **tầng → thư mục → vai trò** (≤ 10 dòng).

| Tầng | Thư mục | Vai trò | Được gọi |
|---|---|---|---|
| … | … | … | … |

## Quyết định (AD)

### AD-1 — {{quyết định}} [CHỐT]
- **Ràng buộc**: module, FR hoặc thư mục nào phải theo.
- **Ngăn**: kiểu lệch nào sẽ xảy ra nếu không có luật này.
- **Luật**: một câu kiểm được, kèm cách kiểm (test kiến trúc, lint, dependency-cruiser, review).

## Quy ước
| Chủ đề | Quy ước |
|---|---|
| Đặt tên (file, bảng, cột, API) | … |
| ID, ngày giờ, tiền và số lượng | … |
| Lỗi và mã lỗi | … |
| Ghi dữ liệu, giao dịch, đồng thời | … |
| Auth và phân quyền | … |
| Log, cấu hình, biến môi trường | … |
| Test (đặt ở đâu, lớp nào) | … |

## Stack
| Thành phần | Phiên bản | Kiểm ngày |
|---|---|---|
| … | … | {{YYYY-MM-DD}} |

## Seed cấu trúc
Sơ đồ mermaid: hướng phụ thuộc; deploy và môi trường (dev, test, demo, production); ERD (chỉ tên bảng và quan hệ).
Cây thư mục tối thiểu. Mô hình dữ liệu chi tiết do schema và migration trong code làm chủ.

## FR → nơi đặt → AD
| FR / vùng | Nằm ở | AD chi phối |
|---|---|---|

## Hoãn
- … — vì sao chờ được — khi nào phải quyết

## Câu hỏi mở
- OQ-…

## Nhật ký quyết định
- {{YYYY-MM-DD}} — … — lý do — người chốt
