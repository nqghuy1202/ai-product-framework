---
name: security
description: Review bảo mật có khai báo phạm vi (vùng A lúc commit, vùng B ở CI, vùng C production là ngoài phạm vi), mỗi phát hiện là rủi ro cụ thể đối chiếu OWASP Top-10 web và OWASP LLM Top-10, có vai phản biện bác bỏ phát hiện không khai thác được; không bao giờ kết luận "đã bảo mật". Dùng khi người dùng hỏi "có lỗ hổng không", "review bảo mật", "kiểm secret", "doc này có bị chèn lệnh không", hoặc trước khi ra mắt phần chạm auth, thanh toán, dữ liệu cá nhân.
argument-hint: "[phạm vi: module | nhánh | toàn repo]"
---

# /apf:security

Thư mục gốc plugin là `../..`. Mẫu: `templates/docs/security-review.md`. Đầu ra: `docs/security/<YYYY-MM-DD>-<phạm-vi>.md`.

1. **Sàng lọc**: câu hỏi hẹp (ví dụ "chỗ này có lộ token không") thì trả lời thẳng, kèm bằng chứng. Còn lại thì đi tiếp.
2. **Khai báo phạm vi**: A = lúc commit (cổng apf: secret, chèn lệnh vào doc; review code) · B = CI (công cụ SCA/SAST nào, hoặc "chưa có") · C = production (pentest, DAST, red-team) luôn là **ngoài phạm vi**.
3. **Soi theo hai khung song song**:
   - **Web**: A01 phân quyền (kiểm quyền ở server, IDOR, phạm vi theo đơn vị hoặc tenant) · A02 mật mã và secret · A03 injection (SQL thô, `sql.raw`, `dangerouslySetInnerHTML`, lệnh shell) · A04 thiết kế · A05 cấu hình (header, CORS, lỗi lộ stack) · A06 thư viện (`npm audit`) · A07 xác thực và phiên · A08 toàn vẹn (webhook có ký) · A09 log (không log secret hay PII) · A10 SSRF.
   - **LLM** (khi có AI trong sản phẩm hoặc trong quy trình): LLM01 chèn lệnh (gồm cả **tài liệu là đầu vào của AI**) · LLM02 lộ thông tin nhạy cảm · LLM05 xử lý output không an toàn · LLM06 trao quá nhiều quyền cho agent · LLM07 lộ system prompt...
   - Bề mặt lớn thì chia việc cho subagent theo nhóm: chèn lệnh · secret và mật mã · phân quyền và quyền của agent · thư viện.
4. **Mỗi phát hiện F-n**: rủi ro cụ thể (kẻ xấu làm được gì, mất gì) · mã OWASP · vùng · tầng rủi ro · trạng thái. Phát hiện chạm phân quyền hay dữ liệu thật thì tầng là ĐỎ.
5. **Phản biện**: một lượt (hoặc một subagent) chỉ làm một việc là bác bỏ: *"cách khai thác cụ thể là gì?"*. Không khai thác được thì hạ mức hoặc bỏ.
6. **Chạy cổng máy thật** và ghi kết quả thật: `node .apf/bin/apf.mjs gate --staged`, `npm audit --omit=dev` (nếu có). Không bịa số liệu.
7. Secret đã lộ trong lịch sử git: viết runbook **rotate** và hướng dẫn xoá khỏi lịch sử để **người dùng tự làm**. Skill không tự rotate, không tự viết lại lịch sử.
8. Viết báo cáo, ghi dòng "Không thay thế pentest production". Sửa thì đi qua `/apf:build` hoặc `/apf:fix`.

## Không được
- Viết "đã bảo mật ✓", "100%", "không có lỗ hổng".
- Chạy công cụ quét lên hệ thống thật hay hệ thống của bên khác.
