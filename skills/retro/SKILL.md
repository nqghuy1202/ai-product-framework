---
name: retro
description: Retro một epic dựa trên bằng chứng (story, diff, commit, test, chạy thử hành vi) với kết luận accepted / accepted-with-open-items / rejected; hoặc khi có thay đổi lớn giữa chừng thì làm đề xuất đổi hướng (phân tích ảnh hưởng lên PRD, kiến trúc, UX, story; 3 hướng đi; sửa CŨ → MỚI). Dùng khi người dùng nói "retro epic", "tổng kết epic", "đổi hướng", "yêu cầu thay đổi lớn", "correct course".
argument-hint: "[epic <id> | change <mô tả>]"
---

# /apf:retro

Thư mục gốc plugin là `../..`. Mẫu: `templates/docs/retro.md` (đặt ở `docs/stories/<epic>/retro.md`) và `templates/docs/change.md` (đặt ở `docs/product/changes/<slug>.md`).

## Retro epic
1. **Gom bằng chứng**: `epic.md`, mọi story (mục Kế hoạch, Review, Báo cáo), `git log --stat <baseline story đầu>..HEAD`, `docs/stories/DEFERRED.md`, retro trước đó. Ghi rõ cái gì không có, để phân biệt "đã kiểm và sạch" với "chưa kiểm".
2. **Phân tích** từ 3 góc:
   - **Nhìn gộp**: spec với code (từng điều "Xong khi", FR trong `covers`), file phình to, code trùng lặp (export trùng, logic chép), lệch quy ước, ranh giới giữa các story.
   - **Review diff toàn epic**: nhấn vào chỗ nối giữa các story. Dùng `/apf:review` mức quick, hoặc thorough nếu epic có vùng nhạy cảm.
   - **Thử hành vi**: chạy thật các luồng chính (test e2e, hoặc trình duyệt).
3. Mỗi phát hiện phải **có nguồn**, kèm hai cách xử lý: lần này (sửa ngay / hoãn / chấp nhận) và phòng lần sau (sửa spec / đổi cỡ story / thêm luật hoặc cổng / không). Luật mới thì đưa vào `.apf/rules.md` qua `/apf:learn`.
4. Theo dõi việc của retro trước: đã làm (kèm bằng chứng) hay "không thấy bằng chứng".
5. **Kết luận**: còn story dở dang thì `rejected`; người dùng có quyền ghi đè. Không ai quyết thì ghi "chưa chấp nhận", không bao giờ ngầm chấp nhận.
6. Trình bày rồi chờ người dùng duyệt. Được duyệt thì đặt `status: done` cho epic nếu người dùng đồng ý.

## Đổi hướng
1. Hỏi: vấn đề là gì, phát hiện ở story nào, bằng chứng gì. Phân loại: giới hạn kỹ thuật / yêu cầu mới / hiểu sai yêu cầu / đổi chiến lược / cách làm thất bại. Không có bằng chứng thì dừng.
2. **Tìm ảnh hưởng bằng grep theo ID** (FR, AD, màn hình, story), không nạp toàn bộ tài liệu.
3. Đánh giá 3 hướng (điều chỉnh trực tiếp / hoàn tác phần đã làm / xem lại MVP), mỗi hướng ghi công sức và rủi ro; chọn một hoặc kết hợp, kèm lý do.
4. Viết các sửa cụ thể dạng **CŨ → MỚI + lý do** theo từng tài liệu.
5. Xếp mức: nhỏ (làm thẳng) / vừa (sắp lại story) / lớn (chạy lại prd hoặc architecture). Người dùng duyệt xong thì áp bằng chính các skill tương ứng, mỗi tài liệu ghi Nhật ký quyết định.
