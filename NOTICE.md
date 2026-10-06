# Nguồn ý tưởng

ai-product-framework viết lại từ đầu. Framework chỉ lấy **ý tưởng** từ các nguồn dưới đây, không chép nguyên văn code hay văn bản, ngoại trừ phần ghi rõ ở cuối.

| Nguồn | Giấy phép | Ý tưởng đã dùng |
|---|---|---|
| BMAD Method (bmad-code-org) | MIT | Tư thế khai thác (đổ ý, mức độ quan trọng, Nhanh và Kèm cặp, một câu một lần), PRD có UJ nhân vật và FR kiểm được, phép thử của spine kiến trúc, UX tách DESIGN và EXPERIENCE, luật chia epic và story (tracer bullet, lane, "tách không thu nhỏ"), triage review (kiểm tại chỗ, reviewer không chấm mức độ), các lens edge-case và verification-gap, retro dựa trên bằng chứng, đổi hướng (correct course), danh mục kỹ thuật đào sâu |
| ai-simple-framework-for-coding (Long-Forfun) | MIT | Ngữ cảnh phân tầng, doc đi cùng code (`covers`, `last_verified`, SUSPECT), phân tầng rủi ro và trục quyền hạn tách riêng, kỷ luật khi code (thang 7 bậc, guardrail, marker nợ 2 vế), hook ép buộc có self-test, quét secret và chèn lệnh vào doc, review bảo mật khai báo phạm vi theo OWASP, runbook và các sổ vận hành, chạy song song bằng claim, worktree và hàng đợi gộp, học từ diff được chấp nhận, nhãn [INV]/[DEF]/[STACK] và ngoại lệ đã duyệt, chẩn đoán "xấu" 4 ca, phân loại lỗi bằng chuẩn đối chiếu. ai-simple ghi nhận các nguồn Ponytail (MIT), Hallmark (MIT), Impeccable (Apache-2.0) |
| Dự án Tapetco ERP (của chủ framework) | — | Bộ quy tắc thiết kế nền, preset Next.js, cách chia vai Opus lập kế hoạch và Sonnet viết code; `presets/nextjs-drizzle-postgres/files/e2e/support/overflow.ts` chép từ dự án này |
