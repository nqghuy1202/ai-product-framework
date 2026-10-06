---
name: ops
description: Lớp vận hành cho hệ thống có tiến trình chạy nền (cron, worker, bot, job, edge function, pipeline) — viết runbook, sổ lịch chạy, sổ trạng thái, sổ dịch vụ ngoài; khi có sự cố thì đi theo runbook trước rồi mới sửa code. Dùng khi người dùng nói "bot chết", "cron không chạy", "job lỗi lúc 2h sáng", "viết runbook", "deploy xong không chạy", "hết hạn token".
argument-hint: "[runbook <dịch vụ> | sự cố <mô tả> | registry]"
---

# /apf:ops

Thư mục gốc plugin là `../..`. Mẫu: `templates/docs/ops-README.md`, `runbook.md`, `schedules.md`, `state-registry.md`, `external-services.md`. Đầu ra: `docs/ops/`. Chưa bật `features.ops` thì đề nghị bật (sửa `.apf/config.json`).

## Viết runbook hoặc sổ
1. Đọc code của dịch vụ, các cấu hình cron (`vercel.json`, crontab, workflow CI), biến môi trường (chỉ đọc **tên**, không đọc giá trị).
2. Điền runbook theo mẫu. Lệnh phải copy-paste được, kèm **output mong đợi**. Có mục "khi nào dừng lại và gọi người", và những việc tuyệt đối không tự làm.
3. Cập nhật 3 sổ: lịch chạy (múi giờ rõ ràng, job tắt ghi DISABLED), trạng thái (mỗi trạng thái đúng một bên ghi), dịch vụ ngoài (token **nằm ở đâu**, khi dịch vụ chết thì sao).
4. Khai `covers` cho runbook để khi code của dịch vụ đổi thì cổng commit nhắc cập nhật runbook.

## Xử lý sự cố
1. **Hỏi trước, làm sau**: đây là hỏi (tìm nguyên nhân) chứ chưa phải yêu cầu sửa. Mở runbook tương ứng **trước khi** đọc code.
2. Chạy các lệnh **chỉ đọc** trong runbook (kiểm sức khoẻ, xem log). Lệnh có tác dụng phụ (khởi động lại, chạy lại job, sửa dữ liệu, xoá trạng thái) là ĐỎ: hỏi một câu gộp kèm phương án khuyến nghị.
3. Tìm nguyên nhân gốc, đưa bằng chứng. Sửa code thì qua `/apf:fix`.
4. Xong thì cập nhật runbook **trong cùng commit**: thêm dòng vào "Lỗi thường gặp" (lỗi gặp từ lần thứ 2 trở đi bắt buộc phải có) và "Lịch sử sự cố".

## Không được
- Đọc hoặc in giá trị secret. Restart, deploy hay chạy lại job ghi dữ liệu khi người dùng chưa cho phép đúng lần đó.
