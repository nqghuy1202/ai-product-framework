---
name: init
description: Cài ai-product-framework vào một dự án — chọn preset công nghệ (core, nextjs-drizzle-postgres với biến thể supabase hoặc neon, node), profile (tiny, core, full), tạo .apf/config.json, CLAUDE.md gọn, cây docs/, git hook cổng commit; điền CLAUDE.md theo dự án thật. Cũng dùng để cập nhật bản cài (update) hoặc kiểm sức khoẻ (doctor). Dùng khi người dùng nói "cài framework", "khởi tạo apf", "init", "dự án mới", "áp dụng framework cho repo này".
argument-hint: "[update | doctor]"
---

# /apf:init

Thư mục gốc plugin là `../..`. Script **của plugin**: `node <plugin>/scripts/apf.mjs`. Sau khi init, dự án có bản sao ở `.apf/bin/apf.mjs`.

## update / doctor
- `update`: `node <plugin>/scripts/apf.mjs update` (làm mới bản sao script và hook, bổ sung khoá cấu hình mới mà không đè giá trị cũ), sau đó chạy `doctor`.
- `doctor`: `node .apf/bin/apf.mjs doctor`, rồi giải thích các dòng ✗ và → cho người dùng.

## Cài mới
1. **Đọc hiện trạng**: `git status` (phải là git repo; nếu chưa thì hỏi người dùng có muốn `git init` không), `package.json`, cấu trúc thư mục, xem đã có `CLAUDE.md`, `AGENTS.md`, `.githooks`, `core.hooksPath` hay chưa. Repo đang có thay đổi chưa commit thì báo cho người dùng biết; init chỉ **thêm** file, không đè lên file nào.
2. **Hỏi (một lượt AskUserQuestion, tối đa 3 câu, kèm phương án đã đoán sẵn)**:
   - Preset: tự đoán từ package.json (có `next` và `drizzle-orm` thì là `nextjs-drizzle-postgres`; có `@supabase/*` thì biến thể `supabase`; có `@neondatabase/*` thì `neon`; Node thuần thì `node`; còn lại là `core`).
   - Profile: `core` (mặc định), `tiny` (thử nghiệm hoặc dưới 10 file), hay `full` (bật cả bản đồ tài liệu, bảo mật, vận hành, song song). Giải thích mỗi profile bằng một dòng.
   - Dự án mới và preset là Next.js thì hỏi có chép file mẫu không (`--with-files`: test canh giao diện, helper khung, `app/tokens.css`).
3. **Chạy**:
   ```bash
   node <plugin>/scripts/apf.mjs init --preset <p> [--db supabase|neon] --profile <pf> [--with-files]
   ```
4. **Điền `.apf/config.json`**: đối chiếu `commands` với các script có thật trong package.json (hoặc Makefile...). Script không tồn tại thì sửa thành lệnh đúng, hoặc để chuỗi rỗng và báo người dùng. **Không** để lệnh trỏ tới script không tồn tại, vì cổng commit sẽ chặn mọi commit. Sửa `paths.src` và `paths.tests` nếu cấu trúc khác mặc định. Lệnh `testFast` phải chạy được dưới khoảng 1–2 phút; bộ đầy đủ chậm hơn thì không đưa vào `gate.commands`.
5. **Điền `CLAUDE.md`** (giữ dưới 150 dòng): thay mọi `{{…}}` bằng thông tin thật đọc từ repo (stack và phiên bản, cây thư mục tối thiểu, lệnh). Nếu repo **đã có** `CLAUDE.md` thì init không đè; khi đó đề nghị **gộp** các mục của framework (cách làm việc với AI, quy tắc viết code, doc và test đi cùng code) vào file cũ, trình phần diff cho người dùng duyệt trước khi ghi. Đã có `AGENTS.md` thì thêm một dòng trỏ sang `CLAUDE.md` (hoặc ngược lại), không chép nội dung hai lần.
6. **Kiểm**: `node .apf/bin/apf.mjs doctor` và `node .apf/bin/apf.mjs gate --staged` (khi chưa stage gì thì in "không có file staged" là bình thường).
7. **✅ Trước khi commit**: trình danh sách file đã tạo và đã sửa, đề xuất commit `chore: cài ai-product-framework (preset …, profile …)`, rồi **chờ người dùng đồng ý** mới commit.
8. Gợi ý bước tiếp theo: dự án mới thì `/apf:prd`; dự án đã có tài liệu (ví dụ từ BMAD) thì xem mục "Chuyển từ BMAD" trong `docs/migrate-from-bmad.md` của plugin.

## Không được
- Đè lên file đã có (`CLAUDE.md`, hook, config) khi người dùng chưa đồng ý.
- Cài thư viện npm nào (đó là việc ĐỎ, cần người dùng cho phép).
- Tự đặt `APF_SKIP_GATE` hay `--no-verify`.
