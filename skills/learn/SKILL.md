---
name: learn
description: Học từ chỗ người dùng sửa lại hoặc nhắc lại cách làm của AI — rút thành luật kiểm được, có bằng chứng (SHA commit, câu người dùng nói), ghi vào .apf/rules.md (dùng chung cả dự án) hoặc trí nhớ người dùng, để lần sau không lặp lại lỗi và không hỏi lại. Dùng khi người dùng nói "nhớ điều này", "lần sau đừng…", "ghi lại luật", "học từ commit này", hoặc khi /apf:build gợi ý.
argument-hint: "[commit | mô tả luật]"
---

# /apf:learn

1. **Gom bằng chứng**: cặp "AI đã làm" và "người dùng đã sửa thành". Lấy từ diff giữa commit của AI và commit sau khi người dùng sửa (`git log`, `git diff`), hoặc từ câu người dùng nói, **trích nguyên văn**. Kiểm SHA tồn tại (`git cat-file -e`).
2. **Lọc**:
   - Người dùng sửa một **lỗi** (vi phạm spec, bug) thì đó không phải "sở thích", nên không sinh luật. Trường hợp này thì sửa test hoặc spec.
   - Các trường hợp trong cùng một buổi chỉ tính là 1 lần.
   - Luật phải là **câu kiểm được** (có thể chỉ ra vi phạm hay không), không viết kiểu "viết code đẹp hơn".
3. **Mức độ**:
   - Người dùng nói thẳng ("từ nay luôn…") → ghi ngay.
   - Gặp từ 2 lần độc lập trở lên → đề xuất ghi.
   - Mới gặp 1 lần → chỉ ghi nhận trong báo cáo, chưa ghi luật.
4. **Phạm vi nhỏ nhất**: chỉ đúng một vùng code thì ghi vào doc app-map của vùng đó (hoặc rules.md có cột phạm vi) · cả dự án thì ghi `.apf/rules.md` · sở thích cá nhân dùng chung mọi dự án thì ghi vào trí nhớ của Claude Code (memory) của người dùng.
5. Mỗi luật có: nội dung, nguồn (SHA hoặc ngày cộng câu nói), phạm vi, điều kiện bỏ luật (ví dụ người dùng sửa ngược lại 2 lần thì bỏ).
6. **Luật ép được bằng máy** (lint, test, cổng) thì đề xuất viết thành test hoặc lint ngay; luật chỉ nằm trên giấy lâu ngày sẽ mục.
7. Trình bày rồi chờ người dùng duyệt. Được duyệt thì ghi, và commit cùng việc đang làm (hoặc thành một commit `docs: ghi luật …`).
