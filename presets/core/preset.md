# Preset core (không gắn công nghệ)

Dùng khi dự án không phải Next.js hay Node, hoặc chưa chọn stack.

`/apf:init` sẽ:
1. Dò lệnh kiểm có sẵn: `package.json` scripts, `Makefile`, `pyproject.toml`, `go.mod`, `Cargo.toml`… rồi ghi vào `commands` trong `.apf/config.json`.
2. Dò thư mục code và thư mục test để sửa `paths.src` và `paths.tests` nếu khác mặc định.
3. Không có lệnh test nào thì hỏi người dùng muốn dùng runner gì. Không tự cài.

Quy ước khung (cho planner):
- Helper "chưa cài đặt" theo ngôn ngữ: TypeScript `throw notImplemented('x')`, Python `raise NotImplementedError("APF:IMPLEMENT x")`, Go `panic("APF:IMPLEMENT x")`.
- Đánh dấu chỗ để lại cho coder bằng một dòng comment `APF:IMPLEMENT — <việc phải làm>`.
