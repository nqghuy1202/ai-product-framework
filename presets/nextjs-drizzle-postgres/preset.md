# Preset nextjs-drizzle-postgres

Rút từ kiến trúc thật của Tapetco ERP (modular monolith), đã tổng quát hoá. Phiên bản ghi dưới đây là của 10/2026. `/apf:architecture` phải **kiểm lại phiên bản trên web** trước khi chốt.

## Stack [MẶC ĐỊNH]
| Thành phần | Gợi ý |
|---|---|
| Runtime | Node 24 LTS |
| Web | Next.js 16 (App Router, Server Components, Server Actions), React 19 |
| Kiểu | TypeScript (ghim bản dependency-cruiser và typescript-eslint còn hỗ trợ) |
| Giao diện | Tailwind CSS v4 (`@tailwindcss/postcss`), shadcn/ui trên Radix, icon lucide-react, font Inter tự lưu (`@fontsource-variable/inter`) |
| DB | PostgreSQL + Drizzle ORM + drizzle-kit (biến thể Supabase hoặc Neon) |
| Auth | Better Auth (Neon) hoặc Supabase Auth (Supabase) |
| Số và tiền | `decimal.js`; số lượng và tiền **không bao giờ** đi qua `Number` |
| Test | Vitest (project `unit` và `integration` với DB test riêng), Playwright cho e2e |
| Kiến trúc | dependency-cruiser cho hướng phụ thuộc, ESLint với luật riêng |

## Cấu trúc (modular monolith)
```
app/                       # Next.js: trang, Server Actions, Route Handlers — MỎNG, không chứa luật nghiệp vụ
src/
  ui/                      # khung + thành phần dùng chung (list, detail, grid, lookup, date, toast, page-state…)
                           # chỉ nhận props/Server Action từ app/; KHÔNG import modules/workflows/db
  kernel/                  # thuần: Result, mã lỗi, notImplemented, Qty/Decimal, clock, contracts
  modules/<tên>/
    schema/                # bảng Drizzle của module (mỗi bảng đúng một module chủ)
    domain/                # luật thuần (không import schema, db, next/*) — test unit dày nhất
    commands/  queries/    # ghi / đọc của module
    index.commands.ts  index.queries.ts   # cổng công khai — module khác chỉ được import index.queries
  workflows/               # mọi lệnh GHI liên module: mở giao dịch, gọi commands, ghi audit
  reporting/               # chỉ đọc, ghép nhiều module
tests/
  unit/  integration/  architecture/  ui/
e2e/
drizzle/                   # migration sinh bởi drizzle-kit
```
Hướng phụ thuộc: `app → workflows | reporting | ui`; `workflows → modules`; `reporting → modules (chỉ queries)`; module chỉ gọi module khác qua `index.queries`. Khoá bằng dependency-cruiser và test kiến trúc ngay từ story đầu tiên (tracer bullet).

## Quy ước [MẶC ĐỊNH]
| Chủ đề | Quy ước |
|---|---|
| Tên | Thư mục và file `kebab-case`; bảng `snake_case` số nhiều; mã và tên kỹ thuật tiếng Anh, giao diện tiếng Việt. Chứng từ có dòng: `*_headers` + `*_lines` |
| Khoá | UUID kỹ thuật cộng `code` (danh mục) hoặc `number` (chứng từ) đọc được |
| Lỗi | Lệnh trả `Result` với mã lỗi ổn định (`stale_version`, `not_found`, `forbidden`…); giao diện ánh xạ mã sang câu tiếng Việt |
| Ghi | Mọi form mang `requestId` (chống lưu đôi) và `rowVersion` (phát hiện xung đột); lưu và hoàn thành là hai lệnh khác nhau |
| Thời gian | ISO 8601 UTC khi truyền; một đồng hồ duy nhất inject được |
| Danh sách | Phân trang offset có giới hạn kèm đếm tổng; chỉ cho sắp xếp theo cột có index, luôn thêm khoá chính làm tiêu chí phụ |
| Phân quyền | Kiểm ở server theo menu/hành động; giao diện ẩn thứ không có quyền |
| Màu | Chỉ dùng token (`design-baseline/tokens.css`), có test cấm mã màu viết tay |
| Migration | Tuyến tính, mỗi lần một người chạy `drizzle-kit generate`; không sửa tay migration của người khác |

## Lệnh cần có trong package.json
```json
{
  "lint": "eslint .",
  "typecheck": "next typegen && tsc --noEmit",
  "test": "vitest run",
  "test:unit": "vitest run --project unit",
  "test:integration": "vitest run --project integration",
  "e2e": "playwright test",
  "db:generate": "drizzle-kit generate",
  "db:migrate": "drizzle-kit migrate"
}
```
`gate.commands` mặc định chạy `lint`, `typecheck`, `testFast` (unit, nhanh). **Không** đưa test integration đầy đủ vào pre-commit: chỉ chạy đúng file integration liên quan trong story, và bộ đầy đủ một lần trước khi gộp.

## Quy ước khung (cho planner)
- Helper `src/kernel/not-implemented.ts` (có trong `files/`): `throw notImplemented('orders.approve')`.
- Server Action khung: kiểu input là zod schema; gọi đúng một workflow; trả `Result`.
- Schema Drizzle và migration do planner viết đầy đủ ở khung. Migration là file (XANH); việc chạy migration lên DB dùng chung là ĐỎ.
- Test integration dùng `TEST_DATABASE_URL` riêng (Postgres Docker cục bộ hoặc branch Neon), có globalSetup chạy migration một lần, `fileParallelism: false`.
- Component khung: props có kiểu, dùng thành phần ở `src/ui`, gắn `data-testid` cho từng vùng. Test UI dùng Testing Library hoặc Playwright.

## Test canh giao diện có sẵn (chép từ `files/` khi dựng story nền)
| File | Kiểm |
|---|---|
| `tests/ui/design-tokens.test.ts` | Không có mã màu viết tay trong `src/ui` và `app/` |
| `tests/ui/focus-ring.test.ts` | Dùng `outline-none` thì phải có `focus-visible:` thay thế |
| `e2e/support/overflow.ts` | Hàm đo tràn ngang trên điện thoại (dùng trong `e2e/mobile-overflow.spec.ts` với các cỡ 390, 360, 320) |

## Bẫy riêng của stack
Xem `design-baseline/pitfalls.md`, cộng thêm:
- `next typegen` phải chạy trước `tsc` (route types).
- e2e dựng `next build` vào cùng thư mục `.next`, nên phải tắt `next dev` trước.
- Hàm không truyền qua props từ Server Component sang Client Component được.
