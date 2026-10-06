# Kiến trúc ai-product-framework

> Tài liệu này mô tả framework được dựng thế nào và vì sao. Ai muốn sửa framework thì đọc file này trước.
> Người chỉ muốn dùng framework thì đọc `README.md` là đủ.

## 1. Mục tiêu

Một quy trình làm phần mềm với Claude Code, giữ được chất lượng khai thác nghiệp vụ và lập kế hoạch, nhưng phần viết code phải nhanh và rẻ hơn.

| Vấn đề cũ | Cách framework giải |
|---|---|
| Pha code chậm, tốn token. Review luôn chạy ở mức kỹ nhất, tệp kế hoạch dài, người code phải đọc lại toàn bộ ngữ cảnh | Review chọn theo mức rủi ro. Opus dựng khung code kèm test đỏ, nên Sonnet chỉ điền thân hàm và đọc ít |
| Sonnet code lệch khỏi cấu trúc dự án | Khung code, chữ ký hàm và test đã được khoá; script `contract` kiểm Sonnet có làm đúng hợp đồng không |
| Phiên mới phải đọc lại cả dự án | `CLAUDE.md` gọn, trỏ xuống tài liệu từng phần; có bản đồ tài liệu ghi doc nào phụ trách code nào |
| Tài liệu lệch so với code | Mỗi doc khai trường `covers`. Script đánh dấu doc SUSPECT khi code nó phụ trách đã đổi; hook cảnh báo khi commit |
| Hỏi xác nhận lặt vặt | Phân tầng rủi ro xanh/vàng/đỏ. Ngoài 4 mốc duyệt cố định, chỉ việc màu đỏ mới phải hỏi |

## 2. Nguồn ý tưởng

- **BMAD Method**: khai thác ý tưởng, PRD, kiến trúc, UX hai tài liệu (DESIGN, EXPERIENCE), chia epic/story, retro, đổi hướng giữa chừng, các kỹ thuật khai thác sâu.
- **ai-simple**: ngữ cảnh phân tầng, bản đồ tài liệu, phân tầng rủi ro, kỷ luật khi code, hook ép buộc, doc máy sinh và doc người viết, runbook vận hành, review bảo mật có khai báo phạm vi, chạy song song bằng worktree, học từ diff đã được chấp nhận.
- **Kinh nghiệm thật ở dự án Tapetco ERP**: bộ quy tắc thiết kế nền, preset Next.js, cách chia vai Opus lập kế hoạch và Sonnet viết code.

Framework chỉ lấy ý tưởng rồi viết lại, không chép nguyên văn. Xem `NOTICE.md`.

## 3. Thành phần

```
ai-product-framework/
├── .claude-plugin/        plugin.json (id plugin: apf) + marketplace.json
├── skills/                các skill gọi bằng /apf:<tên>
├── agents/                planner (opus), coder (sonnet), reviewer (sonnet), reviewer-deep (opus)
├── hooks/hooks.json       hook của Claude Code: chặn lệnh git phá việc chưa commit, in trạng thái đầu phiên
├── scripts/apf.mjs        CLI Node không phụ thuộc thư viện ngoài: init, gate, docs, contract, board, parallel, doctor, self-test
├── templates/             mẫu tài liệu và mẫu file cài vào dự án
├── design-baseline/       bộ quy tắc thiết kế nền (máy tính, tablet, điện thoại)
├── presets/               preset công nghệ: core, nextjs-drizzle-postgres (biến thể supabase, neon), node
└── docs/                  tài liệu của chính framework
```

### 3.1. Skill

| Skill | Pha | Việc chính | Mốc duyệt |
|---|---|---|---|
| `help` | mọi lúc | Xem trạng thái dự án, gợi ý bước tiếp theo | |
| `init` | khởi tạo | Tạo `.apf/config.json` và `CLAUDE.md`, chọn preset, cài git hook, dựng cây thư mục `docs/` | |
| `prd` | 1 | Khai thác ý tưởng, rồi viết PRD có tiêu chí chấp nhận (AC) | ✅ |
| `architecture` | 2 | Viết kiến trúc ngắn: quyết định (AD), quy ước, cấu trúc, mô hình dữ liệu | ✅ (duyệt chung với ux) |
| `ux` | 2 | Viết DESIGN.md và EXPERIENCE.md từ bộ quy tắc nền, có thể kèm bản thử HTML | ✅ |
| `stories` | 3 | Chia epic thành story, quản bảng việc, đổi trạng thái | |
| `build` | 4–7 | Phân loại việc, lập kế hoạch và dựng khung, code, kiểm, review theo rủi ro, báo cáo | ✅ khung, ✅ commit |
| `review` | 6 | Review một diff hoặc một nhánh theo mức rủi ro (gọi riêng cũng được) | |
| `fix` | sửa lỗi | Tái hiện lỗi như người dùng thật, tìm gốc, sửa, có test chống tái phát | ✅ commit |
| `elicit` | mọi lúc | Khai thác sâu: phản biện, tiền-hậu-mortem, góc nhìn người dùng... | |
| `retro` | cuối epic | Retro dựa trên bằng chứng; hoặc làm đề xuất đổi hướng (correct course) | |
| `security` | khi cần | Review bảo mật có khai báo phạm vi, đối chiếu OWASP Top-10 web và OWASP LLM | |
| `ops` | khi cần | Viết runbook, sổ trạng thái, sổ lịch chạy, sổ dịch vụ ngoài; xử lý sự cố theo runbook trước code | |
| `parallel` | khi cần | Chia phần việc (lot), nhận việc, mở worktree, gộp lần lượt | |
| `learn` | sau commit | Học từ chỗ người dùng sửa lại code của AI, ghi thành luật dự án | |
| `audit` | định kỳ | Kiểm sức khoẻ: doc SUSPECT, nợ kỹ thuật, export trùng, đề xuất bật thêm tính năng | |

### 3.2. Agent

| Agent | Model | Được làm | Không được làm |
|---|---|---|---|
| `planner` | opus | Đọc story và kiến trúc. Viết mục Kế hoạch vào file story, dựng file khung, chữ ký hàm, schema, test đỏ | Viết thân hàm nghiệp vụ (trừ code nối dây thật sự trivial) |
| `coder` | sonnet | Điền thân hàm có dấu `APF:IMPLEMENT` cho test xanh, chạy lệnh kiểm | Đổi chữ ký, sửa test khung, sửa file ngoài danh sách cho phép, thêm thư viện. Gặp chỗ buộc phải lệch thì dừng và ghi mục `Lệch hợp đồng` |
| `reviewer` | sonnet | Review nhanh một lượt theo checklist | Sửa code |
| `reviewer-deep` | opus | Review kỹ: góc ca biên, góc khoảng trống kiểm chứng, góc đối kháng | Sửa code |

Phiên chính (người dùng tự chọn model, nên dùng Opus) đóng vai điều phối. Phiên chính nói chuyện với người dùng, giữ các mốc duyệt, phân loại rủi ro và triage kết quả review.

### 3.3. Script `apf.mjs`

Viết bằng Node ≥ 18, không phụ thuộc thư viện ngoài. Lý do: plugin chạy được ngay, không cần `npm install`. Khi `init`, script được chép vào dự án thành `.apf/bin/apf.mjs` để git hook và người không dùng Claude Code vẫn chạy được.

| Lệnh | Việc |
|---|---|
| `init` | Chép mẫu vào dự án (không ghi đè file đã có), tạo `.apf/config.json`, đặt `core.hooksPath` |
| `gate [--staged]` | Cổng trước commit: CHẶN lộ secret, tệp `.env`, chèn lệnh vào doc, trùng claim, lỗi lệnh kiểm; CẢNH BÁO quên doc, thiếu test, export trùng tên, nợ thiếu vế |
| `docs [--write]` | Tính trạng thái VERIFIED/SUSPECT/UNTRACKED của doc có `covers`; `--write` ghi ra `docs/_generated/doc-status.md` |
| `docs verify <file>` | Đánh dấu doc đã đối chiếu lại với code (cập nhật `last_verified`) |
| `contract snapshot <story>` / `contract check <story>` | Chụp lại khung sau khi được duyệt; sau khi Sonnet code thì kiểm lại hợp đồng |
| `board [--write]` | Đọc frontmatter các story, in bảng việc; `--write` ghi ra `docs/stories/BOARD.md` |
| `risk [--staged\|--base <ref>]` | Gợi ý mức review (none/quick/thorough) dựa trên các file đã đổi |
| `parallel ...` | `plan`, `claim`, `release`, `status`, `worktree`, `merge` |
| `doctor` | Kiểm cài đặt, cấu hình, gợi ý bật thêm tính năng |
| `self-test` | Chạy bộ test của chính script |

### 3.4. Hook của plugin (hooks.json)

- `SessionStart`: nếu dự án có `.apf/config.json`, in 3–6 dòng trạng thái (story đang làm, doc SUSPECT, claim đang giữ). Chi phí ngữ cảnh nhỏ, nhưng phiên mới biết ngay mình đang ở đâu.
- `PreToolUse` (Bash): chặn các lệnh git phá việc chưa commit của người dùng (`git stash`, `git reset --hard`, `git checkout -- .`, `git restore .`, `git clean -f`, `git push --force` lên main). Kiểm tra này luôn bật vì việc chưa commit của người dùng là bất khả xâm phạm.

Cổng trước commit nằm ở git hook (`.githooks/pre-commit`), không nằm ở hook của Claude Code, để commit bằng tay cũng bị kiểm.

## 4. Dữ liệu của dự án dùng framework

```
<dự án>/
├── CLAUDE.md                     < 150 dòng, trỏ xuống docs
├── .apf/
│   ├── config.json               cấu hình: preset, tính năng, lệnh kiểm, mốc duyệt, luật rủi ro
│   ├── rules.md                  luật riêng dự án học được (learn) — commit vào git
│   ├── bin/apf.mjs               bản sao script (init/update chép vào)
│   └── contracts/<story>.json    ảnh chụp hợp đồng khung (sinh tự động)
├── .githooks/pre-commit          gọi node .apf/bin/apf.mjs gate --staged
└── docs/
    ├── product/prd.md
    ├── architecture/architecture.md (+ adr/)
    ├── ux/DESIGN.md, EXPERIENCE.md, mockups/
    ├── app-map/                  (tính năng appMap) tài liệu theo phần, có covers
    ├── ops/                      (tính năng ops) runbook, sổ trạng thái, lịch chạy, dịch vụ ngoài
    ├── security/                 (tính năng security) các bản review bảo mật
    ├── stories/<NN-epic>/epic.md, <NN-story>.md, BOARD.md
    └── _generated/               máy sinh, không sửa tay
```

### 4.1. Một story là một file

Story, kế hoạch, hợp đồng khung và báo cáo kết quả nằm chung trong **một file**. Lý do: người code chỉ cần mở đúng một file, không phải ghép nhiều tệp kế hoạch và tệp giao việc. Các trường frontmatter:

```yaml
id: 02-03              # <epic>-<story>
title: ...
status: draft | ready | planned | approved | coding | review | done | blocked | cancelled
size: S | M | L        # do build tự chấm
risk: none | quick | thorough
depends_on: [02-01]
baseline: <sha>        # commit gốc khi bắt đầu build
```

Vòng đời: `draft → ready` (đủ AC) `→ planned` (đã có khung, chờ duyệt) `→ approved → coding → review → done`.

### 4.2. Cấu hình `.apf/config.json`

Có các khối: `profile`, `features` (bật/tắt: appMap, docSync, security, ops, parallel, learn), `commands` (typecheck, lint, testFast, test, e2e), `gate` (lệnh nào chạy trong pre-commit), `checkpoints` (4 mốc duyệt), `risk` (đường dẫn và từ khoá buộc review kỹ), `paths` (nơi đặt docs, code, test), `language`. Lược đồ đầy đủ xem `templates/project/config.json` và `docs/config.md`.

## 5. Vòng build (trái tim của framework)

```
yêu cầu / story
   │
   ▼
[1] Phân loại (phiên chính): cỡ S/M/L + mức rủi ro + đọc git state
   │ S (≤ ~80 dòng, ≤ 3 file, không thêm cấu trúc mới)
   ├──────────────► phiên chính tự code → kiểm → review theo rủi ro → [7]
   │ M / L
   ▼
[2] planner (opus): mục Kế hoạch + khung code + test đỏ
    kiểm: typecheck XANH, test mới ĐỎ đúng lý do
   ▼
[3] ✅ MỐC DUYỆT KHUNG: người dùng xem khung; apf contract snapshot
   ▼
[4] coder (sonnet): điền APF:IMPLEMENT → test xanh; gặp chỗ phải lệch thì dừng, ghi "Lệch hợp đồng"
   ▼
[5] apf contract check + lệnh kiểm (lint, typecheck, test)
    hỏng → trả coder tối đa 2 vòng; sau đó phiên chính tự xử lý
   ▼
[6] review theo rủi ro: none | quick (reviewer) | thorough (reviewer-deep + reviewer song song)
    phiên chính triage: sửa ngay / hoãn (ghi nợ) / bác bỏ; sai từ gốc kế hoạch → quay về [2]
   ▼
[7] Báo cáo (diff tóm tắt, kết quả kiểm, Giả định, Nợ) → ✅ MỐC DUYỆT COMMIT → commit
```

Vì sao cách này nhanh hơn bmad-build:
- Việc cỡ S không đi qua planner và subagent nào.
- Coder đọc một file story cùng các file khung, không phải đọc toàn bộ kiến trúc.
- Test đỏ là thước đo khách quan. Review không phải đi tìm "có làm đúng yêu cầu không", vì test đã trả lời câu đó.
- Review kỹ chỉ chạy cho vùng rủi ro cao. Vòng sửa lại bị giới hạn.

## 6. Phân tầng rủi ro và mức review

Có hai trục, chấm độc lập với nhau.

**Rủi ro thao tác** (quyết định có phải hỏi người dùng không):
- 🟢 XANH: hoàn tác được bằng git (code, doc, test, viết file migration). Cứ làm.
- 🟡 VÀNG: hoàn tác được nhưng phải có chủ đích (bảng mới, cột nullable mới, cron mới chưa bật). Tự làm theo cách an toàn nhất, có đường lùi, rồi ghi vào mục Giả định.
- 🔴 ĐỎ: không quay lại được hoặc nổ ở môi trường thật (DROP hoặc ALTER làm mất dữ liệu, sửa dữ liệu thật, nới phân quyền đang chạy, deploy, gửi tin ra ngoài). Phải dừng và hỏi đúng một câu gộp, kèm phương án khuyến nghị.

**Mức review** (quyết định review sâu tới đâu):
- `none`: chỉ đổi giao diện, chữ, style, doc, cấu hình không ảnh hưởng hành vi.
- `quick`: logic nghiệp vụ thông thường.
- `thorough`: tiền, công nợ, hạn mức, tồn kho, phân quyền và xác thực, migration có dữ liệu, xoá dữ liệu, xử lý đồng thời, state machine, tích hợp ngoài, bảo mật; cộng thêm những gì khai trong `risk.thoroughPaths` và `risk.thoroughKeywords` của config.

## 7. Bật theo cấu hình (profile)

| Profile | Tính năng bật |
|---|---|
| `tiny` | CLAUDE.md, phân tầng rủi ro, kỷ luật code, gate chặn secret |
| `core` (mặc định) | `tiny` + docSync (doc có covers, cảnh báo quên doc/test), learn |
| `full` | `core` + appMap, security, ops, parallel |

Bật hoặc tắt riêng từng tính năng trong `features`. Lệnh `apf doctor` gợi ý nên bật thêm khi dự án lớn lên: hơn 30 file code thì bật appMap; có thư mục cron, worker hay bot thì bật ops; có auth hoặc thanh toán thì bật security.

## 8. Các quyết định thiết kế

| # | Quyết định | Lý do |
|---|---|---|
| D1 | Id plugin là `apf`, tên đầy đủ là ai-product-framework | Lệnh ngắn: `/apf:build` |
| D2 | Script dùng Node, không phụ thuộc thư viện ngoài | Dự án đích nào cũng có Node; không cần cài gì |
| D3 | Cấu hình bằng JSON | Đọc được bằng Node thuần, không cần parser YAML |
| D4 | Một story là một file | Bớt số tệp phải đọc và ghép |
| D5 | Cổng commit nằm ở git hook, hook của Claude Code chỉ bảo vệ việc chưa commit | Commit bằng tay cũng bị kiểm |
| D6 | Việc cỡ S không qua planner/coder | Nguồn tốn token lớn nhất là giao việc cho việc nhỏ |
| D7 | Hợp đồng khung được kiểm bằng máy (băm test và chữ ký export) | Không dựa vào việc Sonnet tự giác |
| D8 | Quy tắc thiết kế chia nhãn [CHỐT] và [MẶC ĐỊNH] | Giữ quy tắc người dùng đã chốt mà vẫn không rập khuôn |
| D9 | Tài liệu tiếng Việt, tên kỹ thuật tiếng Anh | Theo yêu cầu người dùng |
