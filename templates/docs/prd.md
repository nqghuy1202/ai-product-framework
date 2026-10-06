---
title: PRD — {{TÊN_SẢN_PHẨM}}
status: draft
updated: {{YYYY-MM-DD}}
stakes: thử nghiệm | nội bộ | ra mắt | pháp lý
sources: []
---

# PRD — {{TÊN_SẢN_PHẨM}}

> Trần độ dài: nội bộ ≤ 400 dòng, ra mắt ≤ 800 dòng. Vượt trần thì tách `docs/product/features/<nhóm>.md` và để ở đây một dòng trỏ tới.
> Chỉ nói **cái gì** và **vì sao**; **làm thế nào** thuộc về kiến trúc và UX.

## 1. Vì sao
Nỗi đau hoặc cơ hội, ai đang chịu, hiện họ xoay xở ra sao, cái giá của hiện trạng, vì sao làm bây giờ. 1–2 đoạn.

## 2. Người dùng
- **Việc cần làm (JTBD)**: …
- **Chưa phục vụ ở bản này**: …

| Vai | Làm gì trong hệ thống | Tần suất | Thiết bị chính |
|---|---|---|---|
| … | … | hằng ngày | máy tính / tablet / điện thoại |

### UJ-1 — {{Nhân vật có tên}} {{làm việc gì}}
- **Bối cảnh**: …
- **Điểm vào**: …
- **Các bước**: 1. … 2. … 3. …
- **Cao trào**: khoảnh khắc người dùng nhận được giá trị và biết là đã nhận.
- **Kết**: …
- **Ngoại lệ**: …

## 3. Thuật ngữ
| Thuật ngữ | Định nghĩa | Quan hệ |
|---|---|---|
| … | … | 1 đơn hàng có nhiều dòng |

Đã chốt từ nào thì dùng **đúng từ đó** ở mọi tài liệu và trên giao diện.

## 4. Tính năng

### 4.1 {{Tên tính năng}} — phục vụ UJ-1
Mô tả hành vi trong 2–4 câu.

- **FR-1**: {{Ai}} {{làm được gì}} {{trong điều kiện nào}}.
  - Kiểm: {{hệ quả quan sát được 1}}; {{hệ quả 2}}.
  - Ngoài phạm vi: …
- **FR-2**: …

## 5. Ràng buộc và yêu cầu phi chức năng
Chỉ ghi yêu cầu có ngưỡng đo được, hoặc yêu cầu loại trừ được một phương án.
- **NFR-1**: … (ngưỡng: …)

## 6. Không làm và phạm vi MVP
- **Không làm**: …
- **Vào MVP**: FR-1, FR-2 …
- **Ra khỏi MVP** (kèm lý do, đánh dấu bản nào làm): …

## 7. Chỉ tiêu thành công
- **SM-1**: … (đo bằng … , gắn với FR-…)
- **SM-C1** (chỉ tiêu đối trọng, không được xấu đi): …

## 8. Giả định và câu hỏi mở
- [GIẢ ĐỊNH] A-1: …
- OQ-1 [CHẶN]: … — phương án nghiêng về: …

## Nhật ký quyết định
- {{YYYY-MM-DD}} — … — lý do … — người chốt
