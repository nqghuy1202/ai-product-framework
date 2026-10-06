---
name: fix
description: Sửa lỗi của ứng dụng đang chạy — tái hiện như người dùng thật (trình duyệt, đúng cỡ màn hình), phân loại lỗi bằng cách đối chiếu spec (PRD/AC, DESIGN/EXPERIENCE), tìm gốc, sửa bằng diff nhỏ nhất kèm test chống tái phát, kiểm lại. Dùng khi người dùng báo "bấm nút này bị lỗi", "màn này sai", "hiển thị lệch trên điện thoại", gửi ảnh chụp kèm câu than, hoặc "nhìn xấu quá".
argument-hint: "[mô tả lỗi | ảnh chụp | đường dẫn màn hình]"
---

# /apf:fix

Thư mục gốc plugin là `../..`. Đọc `references/conventions.md`; lỗi giao diện thì đọc thêm `design-baseline/checklist.md` và `pitfalls.md`.

## 1. Phân loại theo "chuẩn đối chiếu" (oracle)
| Loại | Đối chiếu với | Nếu code đúng spec mà vẫn sai |
|---|---|---|
| Logic, luồng | AC của story, FR trong PRD | Spec sai hoặc thiếu → **không sửa code**, ghi dòng `HANDOFF | to=prd | spec=… | ca=spec-sai|nhu-cầu-thiếu|nhu-cầu-mới | bằng-chứng=… | đề-xuất=…` và hỏi người dùng |
| Giao diện | DESIGN, EXPERIENCE, bộ thiết kế nền | Ghi HANDOFF tới ux |
| Chữ, thuật ngữ | Thuật ngữ trong PRD, giọng văn trong EXPERIENCE | |
| Không có spec | — | Gắn cờ `[không-có-chuẩn, độ tin thấp]` và hỏi |

Người dùng chê "xấu" thì chẩn đoán 4 ca: **(A)** nghiệp vụ đúng nhưng giao diện rối → chạy checklist, sửa theo thứ tự căn hàng và khoảng cách → chữ → màu (phần lớn cảm giác rối đến từ khoảng cách lệch thang và lệch trục); **(B)** trông "như AI làm" (số liệu bịa, khung giả, gradient vô cớ, hero cộng 3 thẻ) → bỏ phần trang trí; **(C)** "xấu" vì **thiếu hành vi** mà spec cũng thiếu → HANDOFF về prd, không sửa giao diện; **(D)** ứng dụng lỗi chức năng → đi tiếp mục 2.

## 2. Tái hiện
- Ưu tiên tái hiện **như người dùng thật**: mở trình duyệt (browser pane), đúng cỡ màn hình (390/360/320, 768, 1280, 1440), đúng vai và quyền. Không seed database để đi tắt, trừ khi không có đường làm qua giao diện. Có e2e harness thì dùng.
- Chỉ dùng dữ liệu thử; dữ liệu thật là ĐỎ. Dữ liệu thử nào tạo ra thì ghi lại để dọn sau.
- Tái hiện được thì viết **test đỏ** bắt đúng lỗi trước khi sửa.

## 3. Sửa
- Sửa ở **gốc**: grep mọi nơi gọi tới, đặt guard ở hàm dùng chung, không vá từng chỗ gọi.
- Diff nhỏ nhất. Không tiện tay refactor thêm.
- Trước khi sửa, lưu một bản vá để có thể hoàn tác an toàn: `git diff > /tmp/apf-fix-<id>.patch`. Muốn hoàn tác thì `git apply -R` đúng bản vá đó; **không** dùng reset, checkout hay stash.
- Cỡ M trở lên, hoặc chạm vùng nhạy cảm, thì chuyển sang `/apf:build` (tạo story bug) để có khung và review.

## 4. Kiểm lại
- Test đỏ đã xanh; lint, typecheck và test liên quan xanh.
- Thử lại đúng thao tác trên trình duyệt, ở các cỡ bị ảnh hưởng. Báo rõ đã thử những gì và ở cỡ nào.
- Review theo rủi ro (thường là `quick`).
- Có runbook liên quan (sự cố hệ thống chạy nền) thì cập nhật runbook trong cùng commit.

## 5. ✅ Báo cáo và chờ duyệt commit
Báo cáo gồm: nguyên nhân gốc · đã sửa gì · test chống tái phát · đã thử những gì · giả định. Đề xuất commit `fix(<scope>): …` và chờ người dùng đồng ý.
