# ai-product-framework (`apf`)

Quy trình làm phần mềm với **Claude Code**. Framework giữ phần khai thác nghiệp vụ và lập kế hoạch kỹ lưỡng kiểu BMAD, nhưng làm pha code nhanh và rẻ hơn: **Opus dựng khung code kèm test đỏ, Sonnet chỉ điền thân hàm, review theo mức rủi ro.** Đi kèm là các nguyên tắc tổ chức dự án của ai-simple (ngữ cảnh phân tầng, doc đi cùng code, cổng commit, bảo mật, vận hành, chạy song song), bật theo cấu hình của từng dự án. Có sẵn bộ quy tắc thiết kế nền phủ máy tính, tablet và điện thoại.

Nội dung viết bằng tiếng Việt, tên kỹ thuật giữ tiếng Anh. Chỉ chạy trên Claude Code.

## Quy trình
```
ý tưởng ─► /apf:prd ──✅──► /apf:architecture + /apf:ux ──✅──► /apf:stories
                                                                    │
       ┌────────────────────────────────────────────────────────────┘
       ▼
/apf:build <story>
  phân loại S/M/L ── S: phiên chính tự làm ───────────────────────────────┐
       │ M/L                                                             │
  planner (Opus): kế hoạch + khung code + test đỏ ──✅ duyệt khung        │
  coder (Sonnet): điền APF:IMPLEMENT → test xanh                          │
  máy kiểm: contract check · lint · typecheck · test                      │
  review theo rủi ro: none | quick (Sonnet) | thorough (Opus + Sonnet) ◄──┘
  báo cáo kèm Giả định ──✅ duyệt commit ──► commit (cổng commit tự chạy)
```

## Cài đặt
Repo này vừa là plugin vừa là marketplace.

**Từ GitHub (repo riêng tư; máy cần có quyền truy cập git tới repo):**
```
/plugin marketplace add <owner>/ai-product-framework
/plugin install apf@ai-product-framework
```
**Từ thư mục trên máy (thử hoặc phát triển):**
```
/plugin marketplace add ~/Documents/ai-product-framework
/plugin install apf@ai-product-framework
```
Cập nhật: `/plugin marketplace update ai-product-framework`. Sau đó chạy `/apf:init update` trong từng dự án để làm mới bản sao script và hook.

Rồi trong một dự án: `/apf:init`.

## Các lệnh
| Lệnh | Việc |
|---|---|
| `/apf:help` | Đang ở đâu, nên làm gì tiếp |
| `/apf:init` | Cài vào dự án (preset, profile, CLAUDE.md, cổng commit); `update`; `doctor` |
| `/apf:prd` | Khai thác, thử lửa ý tưởng, viết PRD có tiêu chí kiểm được ✅ |
| `/apf:architecture` | Kiến trúc ngắn: các quyết định (AD) giữ cho các phần build không lệch nhau ✅ |
| `/apf:ux` | DESIGN.md và EXPERIENCE.md theo bộ thiết kế nền, bản thử HTML ✅ |
| `/apf:stories` | Chia epic và story (tracer bullet, lane), bảng việc |
| `/apf:build` | Vòng code: khung → code → kiểm → review → báo cáo ✅✅ |
| `/apf:review` · `/apf:fix` | Review một diff; sửa lỗi bằng cách tái hiện như người dùng thật |
| `/apf:elicit` · `/apf:retro` | Đào sâu, phản biện; retro epic, đổi hướng |
| `/apf:security` · `/apf:ops` · `/apf:parallel` | Bảo mật có khai báo phạm vi; runbook; chạy song song bằng worktree |
| `/apf:learn` · `/apf:audit` | Học luật từ chỗ người dùng sửa; kiểm sức khoẻ định kỳ |

Không cần nhớ lệnh: cứ nói tự nhiên ("làm story 02-03", "màn này lỗi trên điện thoại", "cron không chạy"), skill phù hợp sẽ tự kích hoạt.

## Thành phần
| Thư mục | Nội dung |
|---|---|
| `skills/` | 16 skill (`/apf:*`) |
| `agents/` | `planner` (Opus), `coder` (Sonnet), `reviewer` (Sonnet), `reviewer-deep` (Opus) |
| `hooks/hooks.json` | Đầu phiên in trạng thái dự án; chặn `git stash`, `reset --hard`, `checkout --`, `clean -f`, `push --force` |
| `scripts/apf.mjs` | CLI Node không phụ thuộc thư viện ngoài: init, gate, docs, contract, board, story, risk, parallel, doctor, self-test |
| `references/` | Quy ước chung; hướng dẫn dựng khung, hợp đồng coder, prompt review, triage, mẫu báo cáo |
| `templates/` | Mẫu tài liệu (PRD, kiến trúc, DESIGN, EXPERIENCE, epic, story, runbook, security review…) và mẫu cài vào dự án |
| `design-baseline/` | Bộ quy tắc thiết kế nền: nguyên tắc, token (`tokens.css`), 3 cỡ màn hình, trạng thái, mẫu màn hình, bẫy kỹ thuật, checklist |
| `presets/` | `core`, `nextjs-drizzle-postgres` (biến thể `supabase`, `neon`), `node` |
| `docs/` | Kiến trúc của framework, cấu hình, hướng dẫn chuyển từ BMAD |

## Cổng commit (git hook do `/apf:init` cài)
- **CHẶN**: lộ secret (key AWS, GitHub, Slack, OpenAI, Anthropic, Stripe, Google, JWT, URL có mật khẩu, gán secret) · commit file `.env` hay file khoá · còn dấu xung đột merge · câu chèn lệnh hoặc Unicode ẩn trong tài liệu mà AI đọc · đụng file đang được phiên song song khác nhận · lint, typecheck hay test nhanh bị lỗi.
- **CẢNH BÁO** (vẫn commit được): đổi code mà doc phụ trách vùng đó không được cập nhật · nhiều code nguồn mới mà không có test · export trùng tên · marker `nợ:` thiếu vế · `TODO` trần.

## Phát triển framework
```bash
npm test                      # self-test của apf.mjs + kiểm tính toàn vẹn của plugin
node scripts/apf.mjs help
```
Sửa `scripts/apf.mjs` thì thêm ca vào `cmdSelfTest`. Đổi phiên bản thì sửa cùng lúc `plugin.json`, `marketplace.json`, `package.json` và hằng `VERSION` (script validate sẽ kiểm). Thiết kế chi tiết: `docs/architecture.md`.
