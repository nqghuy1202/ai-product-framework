# Triage kết quả review (phiên chính làm)

1. Đợi **mọi** reviewer trả về. Bỏ qua mức độ reviewer tự gán, nếu có.
2. Với từng phát hiện: mở đúng file và dòng, đọc rộng ra (chỗ gọi, guard phía trên) đến khi trả lời được *lỗi có thật xảy ra không*. Câu hỏi là lỗi có thật hay không, chứ không phải cách sửa có hợp lý không. Code chủ động báo lỗi ở một trạng thái mà chưa ai chỉ ra được là chương trình đi tới được thì là hành vi đúng.
3. Cho đúng một kết luận: `high` (không chấp nhận được) · `med` (tạm chịu được) · `low` (không đáng kể) · `false` (đã kiểm và lỗi không xảy ra, ghi bằng chứng) · `unsure` (ghi cần kiểm thêm gì). Phân vân giữa hai mức thì chọn mức cao hơn.
4. Gộp các phát hiện cùng nguyên nhân gốc. Nhóm lấy kết luận cao nhất trong nhóm.
5. Chọn cách xử lý:
   - `fix`: cách sửa nhỏ nhất là tầm thường và không thêm bề mặt public. Gửi lại **đúng coder cũ** (SendMessage), mỗi mục một dòng `file — sai gì — bản sửa nhỏ nhất phải làm gì`. Tối đa `build.reviewMaxLoops` vòng. Việc rất nhỏ thì phiên chính tự sửa.
   - `reskeleton`: phải đổi chữ ký hay test. Phiên chính (hoặc planner) sửa khung, chụp lại hợp đồng, coder điền lại phần bị ảnh hưởng. Ghi rõ phần nào làm tốt phải giữ.
   - `ask`: đụng tới Ý định hay Quyết định. Đưa vào mốc duyệt trước commit.
   - `defer`: lỗi có từ trước, hoặc `unsure` nhưng nếu đúng thì nặng. Ghi vào `docs/stories/DEFERRED.md` dạng `- [ ] <id story> | file:dòng | tóm tắt | bằng chứng`, và tìm trùng trước khi ghi.
   - `reject`: `false`; hoặc `low` hiếm gặp mà sửa thì thêm phức tạp.
6. Mỗi phát hiện có một dòng trong mục Review của story. Số dòng phải khớp số phát hiện.
