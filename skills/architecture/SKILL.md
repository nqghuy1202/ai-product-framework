---
name: architecture
description: Viết, cập nhật hoặc validate tài liệu kiến trúc ngắn chỉ ghi những quyết định giữ cho các phần build riêng không lệch nhau (paradigm, sở hữu dữ liệu, hướng phụ thuộc, cách ghi, lỗi, auth, môi trường), kèm quy ước, stack đã kiểm phiên bản, seed cấu trúc. Dùng khi người dùng nói "thiết kế kiến trúc", "chọn công nghệ", "cấu trúc dự án", hoặc sau khi PRD được duyệt.
argument-hint: "[update | validate | epic <id>]"
---

# /apf:architecture

Thư mục gốc plugin là `../..`. Đọc `references/conventions.md` một lần. Mẫu: `templates/docs/architecture.md`, `templates/docs/adr.md`. Preset của dự án: `presets/<preset>/preset.md` (cộng `variants/<db>.md` nếu có). Đầu ra: `docs/architecture/architecture.md`, cộng ADR ở `docs/architecture/adr/`.

## Tư thế
Ưu tiên công nghệ nhàm chán, đã chạy ổn định. Chỉ trừu tượng hoá khi đã thấy lặp lại 3 lần. Năng suất của người phát triển cũng là kiến trúc. Trả lời bằng đánh đổi, không phán quyết.

## Các bước
1. **Đọc**: PRD (theo ID và mục, không đọc toàn văn nếu dài) và preset. Với dự án đã có code (brownfield): đọc code để **phê chuẩn** quy ước đang có; không kể lại những gì code đã thể hiện rõ.
   - `project.domain` là `business` hoặc `erp` thì lấy mục "Gợi ý cho kiến trúc" của `references/business/loi-chung-tu.md` làm danh sách AD ứng viên (kiểu 5 trạng thái chung, điểm gắn duyệt, bảng liên kết chứng từ, nhật ký và bảng lý do vượt cảnh báo, ghi sổ lúc Y có khoá theo nguồn, test kiến trúc cấm cờ và họ trạng thái riêng).
2. **Hỏi mục đích và tầm**: tài liệu này để làm nền build (mặc định), để thảo luận, hay để báo cáo lãnh đạo? Tầm là cả hệ thống hay một epic? Kiến trúc cấp epic kế thừa các AD của tầng trên như ràng buộc chỉ đọc.
3. **Các quyết định lớn** (paradigm, stack hoặc starter, ranh giới module, nơi đặt dữ liệu): với mỗi quyết định, bày 2–3 phương án, nói mình nghiêng về phương án nào và vì sao, rồi để người dùng chọn. Lấy preset làm điểm khởi đầu. **Kiểm phiên bản công nghệ trên web** trước khi ghi, và ghi ngày kiểm.
4. **Phép thử cho từng điểm có thể lệch**: *hai người build hai phần độc lập có thể chọn khác nhau và làm vỡ nhau không?* Có, không hiển nhiên, và là đánh đổi thật → ghi một AD (Ràng buộc · Ngăn · Luật kiểm được, kèm công cụ kiểm). Không → để code tự quyết, hoặc đưa vào mục Hoãn.
5. **Quét đủ các chiều**, chiều nào hoàn toàn bỏ trống là lỗi: paradigm và lớp · sở hữu dữ liệu (mỗi bảng một module chủ) · hướng phụ thuộc · cách ghi và giao dịch · đồng thời và lặp lệnh · tiền và số lượng · lỗi và mã lỗi · auth và phân quyền · đồng hồ và múi giờ · **deploy và các môi trường** (dev, test, demo, production; cách ly dữ liệu) · log, cấu hình, secret · test (lớp nào, đặt ở đâu, database test riêng) · vận hành nền (cron, job).
6. **Luật nào ép được bằng máy thì ghi rõ công cụ**: dependency-cruiser, ESLint, test kiến trúc, cổng apf. Story đầu tiên (tracer bullet) sẽ dựng các công cụ ép đó.
7. **Tự phản biện**: dựng thử hai module tuân thủ mọi AD mà vẫn không ghép được với nhau. Mỗi cặp như vậy là một lỗ hổng cần thêm AD. Mức độ "ra mắt" trở lên thì giao một subagent làm việc này.
8. Bật `features.docSync` thì khai `covers` cho tài liệu kiến trúc (ví dụ `src/kernel/**`, `.dependency-cruiser.cjs`).
9. **✅ Mốc duyệt kiến trúc + UX** (`checkpoints.afterArchitectureUx`): nếu `/apf:ux` chưa chạy thì gợi ý chạy luôn để duyệt chung một lần. Khi trình duyệt: các AD, stack, những gì hoãn, câu hỏi mở.

## Không được
- Kể lại mô hình dữ liệu chi tiết. Trong tài liệu chỉ có ERD gồm tên bảng và quan hệ; chi tiết do schema và migration làm chủ.
- Ghi công nghệ mà chưa kiểm phiên bản.
- Vượt trần 250 dòng. Chi tiết thì tách thành ADR hoặc tài liệu đi kèm.
