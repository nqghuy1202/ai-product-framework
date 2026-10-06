---
name: help
description: Cho biết dự án đang ở đâu trong quy trình ai-product-framework và nên làm gì tiếp (đọc trạng thái từ docs/, story, cổng, doc SUSPECT), giải thích các lệnh /apf:*. Dùng khi người dùng hỏi "làm gì tiếp", "bắt đầu từ đâu", "framework này dùng thế nào", "đang tới đâu rồi", "apf help".
---

# /apf:help

Thư mục gốc plugin là `../..`.

1. Dự án chưa có `.apf/config.json` thì giới thiệu framework trong 5 dòng và đề nghị `/apf:init`.
2. Ngược lại, **suy trạng thái từ file** (không hỏi người dùng):
   - `docs/product/prd.md` có chưa, `status` là gì → nếu chưa có hoặc đang draft thì gợi ý `/apf:prd`.
   - `docs/architecture/architecture.md`, `docs/ux/DESIGN.md`, `docs/ux/EXPERIENCE.md` → `/apf:architecture`, `/apf:ux`.
   - `node .apf/bin/apf.mjs board` → còn story dở dang thì tiếp tục `/apf:build <id>`; có story sẵn sàng thì đề nghị làm story đó; chưa có story thì `/apf:stories`.
   - `node .apf/bin/apf.mjs docs` (nếu bật docSync) → doc SUSPECT nằm ở vùng sắp làm thì nhắc đối chiếu.
   - Epic đã xong hết story mà chưa retro thì gợi ý `/apf:retro`.
3. Trả lời trước bằng 3–6 dòng (đang ở đâu, việc nên làm tiếp và lý do), sau đó mới liệt kê lệnh nếu người dùng hỏi.

## Các lệnh
| Lệnh | Việc |
|---|---|
| `/apf:init` | Cài framework vào dự án; `update`, `doctor` |
| `/apf:prd` | Khai thác ý tưởng, nghiệp vụ, viết PRD (✅ duyệt) |
| `/apf:architecture` | Kiến trúc ngắn: AD, quy ước, stack (✅ duyệt chung với UX) |
| `/apf:ux` | DESIGN.md và EXPERIENCE.md theo bộ thiết kế nền, bản thử HTML |
| `/apf:stories` | Chia epic và story, bảng việc, trạng thái |
| `/apf:build <id>` | Phân loại → Opus dựng khung và test đỏ (✅) → Sonnet code → kiểm → review theo rủi ro → báo cáo (✅ commit) |
| `/apf:review` | Review một diff hoặc một nhánh theo mức rủi ro |
| `/apf:fix` | Sửa lỗi: tái hiện như người dùng thật, tìm gốc, test chống tái phát |
| `/apf:elicit` | Đào sâu, phản biện một tài liệu hoặc quyết định |
| `/apf:retro` | Retro epic dựa trên bằng chứng; hoặc đề xuất đổi hướng |
| `/apf:security` | Review bảo mật có khai báo phạm vi, đối chiếu OWASP |
| `/apf:ops` | Runbook và các sổ vận hành; xử lý sự cố theo runbook trước khi sửa code |
| `/apf:parallel` | Chia phần việc chạy song song, mở worktree, gộp lần lượt |
| `/apf:learn` | Ghi lại luật học được từ chỗ người dùng sửa code của AI |
| `/apf:audit` | Kiểm sức khoẻ định kỳ: doc, nợ kỹ thuật, cấu hình |

Người dùng không cần nhớ lệnh: cứ nói tự nhiên ("làm story 02-03", "màn này bị lỗi", "bot chết rồi"), skill phù hợp sẽ tự kích hoạt.
