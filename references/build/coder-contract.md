# Hợp đồng giữa planner (Opus) và coder (Sonnet)

## Coder được làm
- Viết thân các chỗ có `APF:IMPLEMENT` trong phạm vi lượt được giao. Xoá dòng `throw notImplemented(...)` và dòng `APF:IMPLEMENT` khi đã viết xong.
- Thêm hàm, kiểu, hằng **không export** trong cùng file; thêm file mới trong vùng `allow`.
- Thêm test riêng (file mới) để tự kiểm, nhưng không sửa test đã khoá.
- Gặp chỗ mơ hồ nhỏ thì chọn cách hiểu an toàn nhất và ghi giả định `S<n>` vào mục Ghi chú code.
- Chạy các lệnh trong mục Kiểm của story.

## Coder không được làm
- Đổi chữ ký export, kiểu, schema, migration, mã lỗi, route, menu, registry; đổi tên hay di chuyển symbol khung.
- Sửa, xoá, `skip`, `only`, nới kỳ vọng hay tăng timeout của test đã khoá.
- Sửa file ngoài `allow`; thêm thư viện; đổi cấu hình lint, tsconfig hay test.
- Chạy migration hay ghi dữ liệu lên database dùng chung (dev, demo, production); commit, push, đổi nhánh, stash, reset.
- Sang lượt sau khi lượt hiện tại chưa xanh; tự sửa lỗi ngoài phạm vi dù có nhìn thấy. Thấy thì ghi vào báo cáo.

## Khi buộc phải lệch: dừng phần đó, làm tiếp phần khác, ghi phiếu
```
DV-1 | loại: SIG | TEST | SCOPE | SPEC | ENV
vị trí: file:dòng hoặc ID test
quan sát: điều thấy được (lỗi, output, dòng code) — là bằng chứng, không phải suy đoán
vì sao chặn: …
đề xuất: thay đổi cụ thể (chữ ký mới, kỳ vọng mới, file cần thêm)
tình trạng: blocked (phần X để trống, test Y còn đỏ) | proceeded-with S2
```
- `SIG` (chữ ký sai hay thiếu), `TEST` (test có vẻ sai), `SCOPE` (cần sửa file ngoài phạm vi): **luôn blocked**, không tự làm.
- `SPEC` (story mơ hồ): được làm tiếp với một giả định ghi rõ, nếu cả hai cách hiểu đều qua test.
- `ENV` (Docker, database, mạng, công cụ): dừng và báo.

## Báo cáo của coder (≤ 250 từ)
Lượt đã làm · file đã sửa (mỗi file một dòng) · bảng test đỏ → xanh · lệnh kiểm và kết quả · giả định S-n · phiếu DV-n · việc ngoài phạm vi đã thấy.
