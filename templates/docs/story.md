---
id: {{NN}}-{{MM}}
title: {{Tên story}}
status: draft
size:
risk:
depends_on: []
covers: [FR-…]
baseline:
updated: {{YYYY-MM-DD}}
---

# {{NN}}-{{MM}} — {{Tên story}}

<!-- Phần 1 (do /apf:stories viết): story là gì. Ngắn. -->

## Mô tả
Một câu: ai làm được gì sau story này.

## Tiêu chí chấp nhận
<!-- Mỗi AC là một hành vi quan sát được, sai trước và đúng sau story này. Nêu luật, không nêu ví dụ. Thường có 3–8 AC. -->
- **AC-1** — {{tên}} · Test: unit | integration | e2e | thủ công
  - Cho {{trạng thái}} / Khi {{hành động}} / Thì {{kết quả}}
  - Kiểm: {{điều đo được, ví dụ: status = 'approved', tồn kho giảm đúng 5}}

## Ranh giới
- Không làm: …
- Không được đổi: …

## Tham chiếu
- prd — FR-… · architecture — AD-… · ux — mục …

<!-- Phần 2 (do planner viết khi /apf:build). Trần khoảng 1200 token cho phần chữ. Chữ ký, kiểu, schema, mã lỗi viết trong file khung, KHÔNG viết ở đây. -->

## Kế hoạch

### Ý định
Vấn đề (1–2 câu) · Kết quả nhìn từ người dùng (1–2 câu).

### Không làm
≤ 6 dòng: ngoài phạm vi, cách làm bị cấm.

### Quyết định
- D1 — … — nguồn (PRD FR-…, người dùng chốt ngày …)

### Giả định
- A1 — giả định — vì sao chọn — đổi ở một chỗ duy nhất: `{{file:hằng hoặc hàm luật}}` — rủi ro nếu sai

### Bản đồ khung
| File | Vai trò | Mới/Sửa | Symbol khung |
|---|---|---|---|

### Test đỏ
| ID | file › tên test | AC | Lớp |
|---|---|---|---|
| T1 | tests/… › … | AC-1 | unit |

Test đã đỏ sẵn trước story này (đường nền): không có | danh sách tên.

### Thứ tự lượt
1. Lượt 1 — lõi: T1, T2 phải xanh.
2. Lượt 2 — giao diện: T3 xanh.

### Gợi ý
≤ 10 dòng: chỗ tái dùng (`đường dẫn:symbol`), bẫy đã biết, ví dụ ≤ 5 dòng.

### Kiểm
- Lệnh: `{{lệnh kiểm nhanh}}` · `{{test liên quan}}`

```apf-contract
{
  "allow": ["src/…/**"],
  "locked": ["tests/…"],
  "signatures": ["src/…/file.ts"]
}
```

<!-- Phần 3 (coder và phiên chính ghi thêm trong lúc chạy). Chỉ ghi thêm, không sửa phần trên. -->

## Ghi chú code
- Lượt 1: … (giả định S1: …)

## Lệch hợp đồng
<!-- DV-n | loại: SIG | TEST | SCOPE | SPEC | ENV | vị trí | quan sát | vì sao chặn | đề xuất | tình trạng -->

## Review
<!-- mức: none | quick | thorough (điểm, yếu tố). Mỗi phát hiện một dòng: # | vị trí | phát hiện | kết luận (high/med/low/false/unsure) | xử lý (fix/reskeleton/ask/defer/reject) -->

## Báo cáo
<!-- Do phiên chính viết ở mốc duyệt trước commit — mẫu ở references/report.md -->
