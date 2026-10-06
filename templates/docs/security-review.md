---
title: Review bảo mật — {{phạm vi}}
date: {{YYYY-MM-DD}}
declared-coverage: "A=git-time (secret-scan, doc-injection, review code) | B=CI ({{công cụ SCA/SAST hoặc 'chưa có'}}) | C=NON-GOAL (pentest/DAST/red-team production)"
covers: []
---

# Review bảo mật — {{phạm vi}}

> Bản review này **không thay thế pentest** trên môi trường production. Không có kết luận "đã bảo mật ✓"; chỉ có phạm vi đã khai báo và các phát hiện.

## 1. Phạm vi đã rà
| Vùng | Có rà không | Cơ chế | Ghi chú |
|---|---|---|---|
| A — lúc commit | có | apf gate (secret, injection), review code | |
| B — CI | … | npm audit / … | |
| C — production | KHÔNG | ngoài phạm vi | |

## 2. Phát hiện
### F-1 — {{tiêu đề}}
- **Rủi ro cụ thể**: kẻ xấu làm được gì, mất gì.
- **OWASP**: LLM0x (LLM Top-10 2025) · A0x (Web Top-10 2021)
- **Vùng / cổng**: A | B | C
- **Tầng rủi ro**: XANH / VÀNG / ĐỎ
- **Trạng thái**: mở | đã vá tại `file:dòng` + test | không sửa, lý do …

## 3. Cổng máy đã chạy
Kết quả thật: số lần chặn secret, số lần chặn injection, kết quả kiểm dependency.

## 4. Ngoài phạm vi
Không pentest; không bảo đảm sạch lỗ hổng; các secret từng bị lộ đã được rotate chưa.
