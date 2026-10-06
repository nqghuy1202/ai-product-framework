---
name: review
description: Review code thay đổi (diff đang làm, một nhánh, một commit, một PR) theo mức rủi ro — none/quick/thorough — bằng agent reviewer (Sonnet) và reviewer-deep (Opus), rồi triage từng phát hiện tại chỗ. Dùng khi người dùng nói "review code", "review nhánh này", "soi thay đổi này", "kiểm diff". Không tự kích hoạt cho code vừa viết trong /apf:build (build đã tự review).
argument-hint: "[nhánh | commit | base..head] [none|quick|thorough]"
---

# /apf:review

Thư mục gốc plugin là `../..`. Dùng `references/build/risk.md`, `review-quick.md`, `review-thorough.md`, `triage.md`.

1. **Xác định diff**: mặc định là thay đổi so với HEAD (cộng file chưa track). Có tham số thì dùng `git diff <base>...<head>`. Diff trên khoảng 3000 dòng thì đề nghị chia theo nhóm file.
2. **Lời khai** (để reviewer bác bỏ): file story nếu diff gắn với một story; nếu không thì dùng commit message hoặc mô tả PR.
3. **Mức review**: người dùng chỉ định thì theo người dùng; nếu không thì chạy `node .apf/bin/apf.mjs risk --base <base>` (có thể nâng mức). Báo một dòng: mức, điểm, các yếu tố.
4. **Chạy reviewer** theo mức (thorough thì chạy 2 lens **song song**). Diff đưa bằng lệnh hoặc đường dẫn, không dán.
5. **Triage** theo `triage.md`. Trình bảng phát hiện đã kiểm (bỏ các phát hiện `false`, nhưng ghi số lượng), mỗi phát hiện có đề xuất xử lý. Hỏi người dùng: sửa hết các mục `fix` · chọn từng mục · chỉ ghi lại.
6. Sửa thì làm bằng diff nhỏ nhất, chạy test liên quan, và **không commit** khi người dùng chưa đồng ý.
