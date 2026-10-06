# Chuyển một dự án từ BMAD sang ai-product-framework

Viết cho Tapetco ERP, nhưng áp dụng được cho mọi dự án BMAD. **Chỉ làm khi không có đợt nước rút nào đang chạy** (với Tapetco: sau demo).

## Nguyên tắc
- **Không xoá, không viết lại tài liệu BMAD.** `_bmad-output/` giữ nguyên làm kho lưu trữ chỉ đọc. Tài liệu mới chỉ **trỏ** tới đó theo ID.
- **Không đổi code.** Việc chuyển đổi chỉ thêm `.apf/`, `docs/`, hook và sửa `CLAUDE.md`.
- Làm trên một nhánh riêng (ví dụ `chore/apf`), mỗi bước một commit, người dùng duyệt từng bước.

## Bước 1 — Cài
`/apf:init`, chọn preset `nextjs-drizzle-postgres`, biến thể `neon`, profile `core` (hoặc `full` nếu muốn bật bản đồ tài liệu, bảo mật, vận hành). **Không** dùng `--with-files` với Tapetco, vì Tapetco đã có đủ các test canh giao diện tương đương.

Với Tapetco, khai `.apf/config.json` như sau:
```json
"commands": {
  "lint": "npm run lint",
  "typecheck": "npm run typecheck",
  "testFast": "npm run test:unit",
  "test": "npm run check",
  "e2e": "npm run e2e"
},
"gate": { "commands": ["lint", "typecheck"] },
"risk": { "thoroughPaths": ["src/modules/fueling/**", "src/modules/finance/**", "src/workflows/approval/**"], "thoroughKeywords": ["hạn mức", "công nợ", "giá vốn"] }
```
Không đưa `test:unit` vào `gate.commands` nếu nó chạy quá khoảng 1–2 phút. `npm run check` mất khoảng 28 phút nên chỉ chạy trước khi merge.

## Bước 2 — Tài liệu: tạo chỉ mục, không chép lại
| BMAD | ai-product-framework |
|---|---|
| `_bmad-output/<initiative>/prd-*/prd-*.md` | `docs/product/prd.md` gồm: tóm tắt ≤ 60 dòng (luận điểm, các UJ, nhóm FR, MVP) và câu "Nguồn đầy đủ: `_bmad-output/…/prd-….md` — FR-1…FR-n giữ nguyên ID" |
| `architecture-*/architecture-*.md` | `docs/architecture/architecture.md` trỏ tới bản spine, chép **danh sách AD-n một dòng mỗi AD** để grep được |
| `ux-*/DESIGN.md`, `EXPERIENCE.md` | Giữ nguyên chỗ cũ (Tapetco sinh token từ DESIGN.md bằng `npm run tokens`). `docs/ux/DESIGN.md` chỉ trỏ tới đó, và ghi các khác biệt so với `design-baseline` (đã đúc kết từ chính Tapetco nên gần như không có) |
| `deferred-work.md` | `docs/stories/DEFERRED.md`: gộp trùng rồi chuyển các mục còn mở theo dạng `- [ ] <id> | file:dòng | tóm tắt | bằng chứng` |
| `.memlog.md`, `addendum.md`, `validation-*` | Không chuyển; để nguyên trong kho lưu trữ |

Nếu bật `features.docSync`: khai `covers` cho các doc mới trỏ vào vùng code, rồi chạy `docs verify` sau khi đã đối chiếu.

## Bước 3 — Story
Với mỗi epic **còn việc**:
1. Tạo `docs/stories/<NN>-<slug>/epic.md` từ file epic BMAD: chép Outcome và "Done when" thành "Xong khi", dán Notes `Decision:` thành mục Ghi chú.
2. Mỗi entry trong `tickets.toml` thành một file story `<NN>-<MM>-<slug-khong-dau>.md`. `description` thành Mô tả; `verify` thành AC-1; `after` thành `depends_on`; `risk` giữ nguyên.
3. Trạng thái lấy từ plan BMAD tương ứng (`story-*-plan.md`):

| Plan BMAD | Story mới |
|---|---|
| không có plan | `ready` nếu đủ AC, ngược lại `draft` |
| `draft`, `ready-for-dev` | `ready` (planner sẽ dựng khung lại theo cách mới) |
| `in-progress`, `in-review` | Làm cho xong bằng BMAD trước khi chuyển, hoặc đặt `coding` và ghi trỏ tới plan cũ |
| `built`, `done` | `done` |

Epic đã xong hết thì chỉ cần một file `epic.md` có `status: done`, không cần tạo story.
Chạy `node .apf/bin/apf.mjs board --write`.

## Bước 4 — Agent và skill
- `.claude/agents/planner-opus.md` và `coder-sonnet.md` được thay bằng `apf:planner` và `apf:coder`. Giữ các quy tắc riêng của repo (ví dụ "không `db:migrate` lên DB dev", "test integration dùng Postgres Docker cổng 55432", eslint `no-wall-clock`) bằng cách **chuyển vào `CLAUDE.md` hoặc `.apf/rules.md`**, vì agent của framework đọc hai file đó.
- Skill BMAD: để nguyên cho tới khi quen quy trình mới, rồi mới gỡ (`_bmad/`, `.claude/skills/bmad-*`) trong một commit riêng, sau khi người dùng đồng ý.

## Bước 5 — `CLAUDE.md`
Tapetco chưa có `CLAUDE.md`. Dùng mẫu của framework, điền theo kiến trúc thật (modular monolith, hướng phụ thuộc, `requestId` và `rowVersion`, số lượng không đi qua `Number`, đồng hồ duy nhất, cách ly môi trường DEMO, các lệnh). Giữ dưới 150 dòng; chi tiết thì trỏ sang tài liệu kiến trúc.

## Kiểm sau khi chuyển
`node .apf/bin/apf.mjs doctor`, `board`, `docs`; chạy thử `/apf:build` cho một story nhỏ để kiểm cả vòng.
