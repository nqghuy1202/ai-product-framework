---
name: stories
description: Chia dự án thành epic và story build được (tracer bullet trước, lane không đụng code nhau, mỗi story một phiên agent làm xong, AC kiểm được), quản bảng việc và trạng thái story. Dùng khi người dùng nói "chia story", "chia epic", "lập kế hoạch thực hiện", "tạo ticket", "việc gì sẵn sàng", "trạng thái story", "đánh dấu xong", "huỷ story", hoặc sau khi kiến trúc và UX được duyệt.
argument-hint: "[slice | epic <id> | story <mô tả> | board | set <id> <status>]"
---

# /apf:stories

Thư mục gốc plugin là `../..`. Đọc `references/conventions.md` một lần. Mẫu: `templates/docs/epic.md`, `templates/docs/story.md`. Đầu ra: `docs/stories/<NN>-<slug-epic>/epic.md` và `docs/stories/<NN>-<slug-epic>/<NN>-<MM>-<slug>.md`. Bảng việc: `node .apf/bin/apf.mjs board --write`.

## Định cỡ
Nói rõ đi đường nào và vì sao: **một story lẻ** (đặt vào epic sẵn có hoặc `00-adhoc`) · **epic nhỏ** (2–6 story) · **cả dự án** (initiative → epic → story; chỉ chia story cho các epic người dùng chọn làm trước).

## Các bước
1. **Đọc chuỗi cha** theo ID: PRD (FR), kiến trúc (AD), UX (màn hình). Đọc code để biết greenfield hay brownfield, ranh giới module, vùng các story sẽ chạm vào. Báo đã đọc những gì, hỏi còn thiếu gì. Gặp chỗ nguồn mâu thuẫn với code thì ghi dòng `Mâu thuẫn nguồn:` trong Ghi chú.
   - `project.domain` là `business` hoặc `erp`: epic nền tảng gồm cả lõi chứng từ (5 trạng thái, điểm gắn duyệt, liên kết chứng từ, nhật ký, Xem lịch sử, Nạp Excel trên danh sách). AC của story không được thêm cờ trên chứng từ hay họ trạng thái riêng; gặp chỗ cần thì nêu ra, dẫn mã luật. Với `erp`, mỗi luồng đã chọn trong PRD (ví dụ `KHO-2`) thường là một epic hoặc một nhóm story; story ghi mã luồng và mã trang menu gốc nó làm.
2. **Hỏi các câu quyết định cách chia** (gom vào 1–2 lượt AskUserQuestion, kèm phương án mình nghiêng về): cái gì đáng demo đầu tiên · cái gì kém chắc chắn nhất · mảnh đầu tiên sẽ dạy được gì cho phần còn lại · người dùng có sẵn cách chia trong đầu chưa.
3. **Chia epic**:
   - Một epic = một năng lực giao được tới tay người dùng, có một người chủ.
   - Gộp khi cùng chủ và cùng module. Module chỉ là thư mục code thì không phải ranh giới epic.
   - **Epic đầu tiên là nền tảng**: khung dự án, môi trường, test kiến trúc, cổng commit, deploy, các test canh giao diện của preset.
   - Quyết định mà từ 2 epic trở lên cùng phải dùng thì đưa lên kiến trúc (AD), hoặc làm thành một story ở epic nền tảng.
   - Mỗi epic có "Xong khi" gồm 3–6 điều kiện kiểm được.
4. **Chia story** trong epic được chọn:
   - **Story đầu là tracer bullet**: đường mỏng nhất đi xuyên mọi lớp, nói rõ "thấy gì chạy được".
   - Hợp đồng chung (kiểu, schema, mã lỗi) và stub làm sớm thành story riêng, để các lane mở song song được.
   - **Lane**: story cùng lane chạm code chung thì làm theo thứ tự; story khác lane **không bao giờ** chạm cùng một file.
   - Một story = một phiên agent lập kế hoạch và làm xong được (thường 200–800 dòng). Thường 8–12 story mỗi epic.
   - **Tách, không thu nhỏ**: các chữ "tạm", "placeholder", "nối sau" nghĩa là phải có một story thứ hai.
   - Sau tracer bullet là story kém chắc chắn nhất về phía người dùng.
   - Epic có trên 3 story thì có story cuối "Dọn dẹp" (chỉ dọn, phạm vi chốt từ ghi chú review và DEFERRED.md).
   - Test thuộc về từng story, không tách thành story riêng; ngoại lệ là một bộ e2e đóng epic.
5. **Viết story**: tạo file từ mẫu, điền Mô tả, **Tiêu chí chấp nhận** (3–8 AC; mỗi AC là một hành vi quan sát được, có `Test:` (loại test) và `Kiểm:` (điều đo được); nêu luật, không nêu ví dụ; gồm luồng đúng, ca biên và lỗi quan trọng), Ranh giới, Tham chiếu, `depends_on`, `covers`. Đủ AC thì đặt `status: ready`. Story UI thì trỏ tới màn hình trong EXPERIENCE.md và mẫu nền.
6. **Tự kiểm phụ thuộc** (4 câu): Cần gì trước (phải có gì trước khi bắt đầu, và trước khi chạy được) · Va chạm (hai story không có quan hệ phụ thuộc thì không chung file, config hay schema) · Setup chung có đúng một chủ (story sớm nhất) · Bàn giao (output của story này là input của story kia thì cả hai đều ghi rõ). Đối chiếu thêm: phủ hết FR của epic, gộp lại thì đạt "Xong khi". Mức độ cao thì giao một subagent kiểm độc lập.
7. Người dùng duyệt danh sách xong thì ghi file, chạy `board --write`, và ghi `Quyết định (ngày):` vào Ghi chú của epic (tracer là gì, thứ tự, phạm vi hoãn).

## Quản bảng việc
- "Việc gì sẵn sàng": `node .apf/bin/apf.mjs board` (story `ready` mà các phụ thuộc đã `done`).
- Đổi trạng thái: `node .apf/bin/apf.mjs story set <id> status <giá trị>`. Chỉ đặt `done` hoặc `cancelled` khi người dùng nói. Huỷ story thì ghi lý do vào Ghi chú.
- Vòng đời: `draft → ready → planned → approved → coding → review → done`, cộng `blocked` và `cancelled`.

## Không được
- Viết chi tiết cài đặt (đường dẫn file, đoạn code) vào story ở bước này. Việc đó là của planner khi build. Ngoại lệ: đoạn code chính là một quyết định đã chốt.
- Tạo story mà không có AC kiểm được.
