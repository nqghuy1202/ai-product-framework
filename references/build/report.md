# Mẫu báo cáo trước commit (mốc duyệt 4)

```
## Báo cáo — {id} {tên story}
Tóm tắt: 2–3 câu, người dùng sẽ thấy gì khác.
Thay đổi: N file (+a / −b), nhóm theo lớp: schema/migration · nghiệp vụ · giao diện · test. Liệt kê file nếu ≤ 10.
Kiểm chứng:
  - Test chấp nhận: x/x đỏ → xanh (nêu tên test nếu còn đỏ)
  - Lệnh kiểm: lint ✓ · typecheck ✓ · test ✓  (đường nền test đỏ sẵn: khớp | lệch)
  - Hợp đồng khung: test khoá ✓ · chữ ký ✓ · phạm vi file ✓
  - Chưa kiểm: … (lý do, ví dụ cần trình duyệt hoặc database thật)
Review: mức … (điểm, yếu tố); n phát hiện → fix a · reskeleton b · defer c · reject d
Giả định cần bạn xác nhận:
  | ID | Giả định | Ai đặt | Ở đâu trong code | Đổi thế nào | Rủi ro nếu sai |
Lệch hợp đồng: DV-n → accept | reject | escalate
Hoãn: k mục (trỏ DEFERRED.md)
Việc bạn cần làm: chạy migration trên database dùng chung, kiểm tay màn …, duyệt commit
Đề xuất commit: `<type>(<scope>): <mô tả tiếng Việt>`
```
Mục Giả định là bắt buộc. Không có giả định nào thì ghi "Không có giả định ngoài các Quyết định". Báo cáo cũng được ghi vào mục Báo cáo của file story.
