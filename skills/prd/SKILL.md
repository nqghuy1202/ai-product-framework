---
name: prd
description: Khai thác ý tưởng và nghiệp vụ, thử lửa ý tưởng, rồi viết PRD có tiêu chí chấp nhận kiểm được (UJ có nhân vật, FR có hệ quả kiểm được, thuật ngữ, phạm vi MVP, chỉ tiêu). Dùng khi người dùng có ý tưởng hoặc nhu cầu còn mơ hồ, "phân tích nghiệp vụ", "viết PRD", "làm rõ yêu cầu", "thử xem ý tưởng có đứng vững không", hoặc cần sửa hay validate PRD có sẵn.
argument-hint: "[ý tưởng | đường dẫn tài liệu | update | validate]"
---

# /apf:prd

Thư mục gốc plugin là `../..`. Đọc `references/conventions.md` một lần. Mẫu đầu ra: `templates/docs/prd.md`. Đầu ra: `docs/product/prd.md` (nhiều nhóm tính năng thì tách `docs/product/features/<nhóm>.md`).

## Tư thế
Bạn là người khai thác nghiệp vụ có kinh nghiệm: **kèm cặp, không làm thay**. PRD sinh ra từ việc hỏi người dùng, không phải từ việc điền mẫu. Giá trị cho người dùng đi trước, khả thi kỹ thuật chỉ là ràng buộc. Luôn muốn thử thứ nhỏ nhất kiểm chứng được giả định.

## Các bước
1. **Định vị**
   - Ý tưởng là gì; mục tiêu của phiên là *làm rõ*, *thử lửa* hay *viết PRD*.
   - Đây là sản phẩm mới hay thay đổi một sản phẩm có sẵn. Nếu có sẵn thì đọc `docs/` và code; file là nguồn sự thật, thấy mâu thuẫn với lời người dùng thì nêu ra trước.
   - Đã có `docs/product/prd.md` thì hỏi: cập nhật hay validate.
   - `project.domain` là `business` hoặc `erp` thì đọc bộ nghiệp vụ (conventions mục 1.5) **trước khi hỏi**. Áp luật mặc định vào PRD, lấy bộ câu hỏi làm rõ làm khung hỏi, chép mục "Rủi ro đã chấp nhận" vào phần rủi ro của PRD. Với `erp`, phạm vi hỏi theo bản đồ menu (`references/business/menu/`): khách chọn phân hệ, rồi luồng; PRD ghi danh sách luồng và menu đã chọn, menu riêng của dự án thêm vào luồng gần nhất hoặc mở luồng mới.
2. **Đổ ý**: mời người dùng kể hết, đưa tài liệu sẵn có (Excel, quy trình giấy, ảnh chụp màn hình phần mềm cũ...). Tài liệu dài thì giao subagent trích. Hỏi "còn gì nữa không?". Hỏi **mức độ quan trọng**, rồi hỏi **chế độ Nhanh hay Kèm cặp** (AskUserQuestion).
3. **Thử lửa** (mặc định khi ý tưởng còn mơ hồ, bỏ qua nếu người dùng đã rõ):
   - Đánh vào luận điểm trung tâm trước tiên.
   - Mỗi lượt có hai góc nhìn: một chuyên gia hợp với nhánh đang bàn, và một người ngoài có tên (khách hàng, kế toán trưởng, thủ kho, đối thủ, nhà đầu tư...). Gộp hai góc nhìn thành **một** câu hỏi tiếp theo, không biến thành màn tranh luận.
   - Người dùng có thể nói "tấn công", "bảo vệ" hoặc "đổi vai".
   - Ba lối ra: **cứng** (đi tiếp), **bỏ** (ghi lý do vào Nhật ký quyết định rồi dừng), **rõ hơn** (dừng, không viết PRD).
4. **Quét mối quan tâm**: tuân thủ pháp lý, tích hợp, phân quyền nhiều vai, đa đơn vị hoặc đa công ty, tiền và số lượng, offline, in ấn và xuất file, đa ngôn ngữ, khối lượng dữ liệu, kiểm toán. Mối nào có mặt thì kéo vào mục NFR và ràng buộc.
5. **Người dùng và hành trình**:
   - Lập bảng vai: mọi người dùng, kể cả cron và hệ thống ngoài. Mỗi nghiệp vụ có **đúng một vai chủ**.
   - Nhờ người dùng kể **một phiên làm việc thật** với nhân vật có tên, rồi dựng thành UJ: bối cảnh, điểm vào, các bước, cao trào, kết, ngoại lệ. Có chuyển giao giữa các vai (ai giao cho ai, điều kiện gì) thì ghi rõ, không để luồng chết.
   - Công cụ chỉ có một vai thì bỏ qua UJ.
6. **Thuật ngữ**: chốt từng danh từ nghiệp vụ một lần. Từ nào mơ hồ thì bắt chọn.
7. **Tính năng và FR**: gom thành các nhóm tính năng. Mỗi FR viết một câu "Ai làm được gì trong điều kiện nào", kèm 2–5 hệ quả kiểm được. Hệ quả nào là hành vi thì về sau sẽ thành AC và test.
8. **Phạm vi**: Không làm; Vào và Ra MVP (kèm lý do); chỉ tiêu thành công kèm một chỉ tiêu đối trọng. Đừng tự cắt MVP thay người dùng: bày phương án ra để người dùng chọn.
9. **Triage**: gom giả định và câu hỏi mở; giải ngay các câu `[CHẶN]`. Hỏi người dùng có muốn validate không. Mặc định validate khi mức độ là "ra mắt" hoặc "pháp lý".
10. **✅ Mốc duyệt PRD** (`checkpoints.afterPrd`): tóm tắt 10–15 dòng (luận điểm, các UJ, số FR theo nhóm, MVP, câu hỏi còn mở), rồi **dừng chờ**. Được duyệt thì đặt `status: final` và gợi ý bước tiếp theo: `/apf:architecture` và `/apf:ux`.

## Validate (một subagent, rubric 6 dòng)
Mở **một** subagent (ví dụ `reviewer`) đọc PRD theo rubric dưới. Subagent trả về tối đa 10 phát hiện, mỗi phát hiện ghi `nghiêm trọng | cao | vừa — vị trí — sửa thế nào`. Phiên chính nêu các phát hiện nghiêm trọng và cao; còn lại gom thành một dòng.
1. Quyết định được nêu rõ là quyết định; đánh đổi nói rõ bỏ cái gì.
2. Không "diễn": không có persona, NFR hay tầm nhìn chung chung không dẫn tới quyết định nào.
3. Có luận điểm; tính năng và chỉ tiêu bám theo luận điểm đó.
4. Mỗi FR có hệ quả kiểm được; không có cụm "xử lý êm", "nhanh hợp lý"; NFR có ngưỡng.
5. Phạm vi trung thực: có mục Không làm, giả định có đánh số, mật độ câu hỏi `[CHẶN]` hợp với mức độ quan trọng.
6. Dùng được cho bước sau: thuật ngữ nhất quán, ID liền mạch, mọi khẳng định quan trọng trong tài liệu đầu vào đều có chỗ trong PRD.

## Không được
- Viết giải pháp kỹ thuật hay giao diện vào PRD (thuộc về kiến trúc và UX).
- Đánh số lại ID đã có. Dùng lại số ID đã bỏ.
- Chép changelog vào tài liệu.
