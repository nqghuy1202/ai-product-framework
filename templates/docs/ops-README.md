# Vận hành

> Có sự cố ở bất kỳ tiến trình chạy nền nào: **mở runbook của nó trước, rồi mới sửa code.**

| File | Nội dung |
|---|---|
| `01-schedules.md` | Mọi job định kỳ: lịch, cơ chế, cách kiểm đã chạy |
| `02-state-registry.md` | Mọi trạng thái bền (bảng, file, khoá), ai ghi, cách reset |
| `03-external-services.md` | Mọi dịch vụ ngoài: dùng để làm gì, token ở đâu, khi nó chết thì sao |
| `runbook-<dịch-vụ>.md` | Mỗi dịch vụ hoặc job một runbook |

Luật: sửa xong một sự cố thì cập nhật runbook trong cùng commit. Lỗi gặp từ 2 lần trở lên phải có mục riêng trong runbook. Trạng thái nào không có trong registry thì coi như không tồn tại.
