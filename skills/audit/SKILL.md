---
name: audit
description: Kiểm sức khoẻ định kỳ của dự án dùng ai-product-framework (chỉ đọc) — doc SUSPECT/BROKEN, nợ kỹ thuật (marker nợ thiếu vế, TODO trần), export trùng tên, DEFERRED.md tồn đọng, CLAUDE.md phình, lệnh kiểm còn đúng không, tính năng nên bật thêm; ra danh sách việc ưu tiên có lệnh đo. Dùng khi người dùng nói "audit", "kiểm sức khoẻ dự án", "dọn nợ", "docs còn đúng không", hoặc mỗi quý.
---

# /apf:audit

Chỉ đọc. Chỉ ghi khi người dùng đồng ý: `docs/_generated/doc-status.md`, `docs/stories/BOARD.md`, và một dòng vào `docs/_generated/audit-history.md`.

Đo bằng lệnh (con số đến từ lệnh, LLM chỉ diễn giải):
```bash
node .apf/bin/apf.mjs doctor
node .apf/bin/apf.mjs docs --write
node .apf/bin/apf.mjs board --write
git grep -nE "(//|#) *(nợ|debt):" -- ':!*.md'        # tổng số marker nợ
git grep -nE "(//|#) *(TODO|FIXME|HACK)\b" -- ':!*.md' # TODO trần
wc -l CLAUDE.md
```
1. **Doc**: liệt kê doc SUSPECT và BROKEN; chọn 3 doc ở vùng code đổi nhiều nhất (`git log --since=90.days --name-only`), đối chiếu **từng khẳng định** với code. Doc đúng thì `docs verify`, doc sai thì đề xuất sửa.
2. **Nợ**: đếm marker nợ, số thiếu vế điều kiện nâng cấp, số TODO trần; liệt kê 5 mục tồn lâu nhất (`git blame`).
3. **Trùng lặp**: export trùng tên giữa các file (`git grep -hoE "^export (async )?(function|const|class) \w+"` rồi đếm).
4. **Story**: DEFERRED.md có bao nhiêu mục, mục nào trùng nhau; story nào kẹt ở `coding` hoặc `review` quá 7 ngày.
5. **Cấu hình**: lệnh kiểm còn chạy được không; cổng commit mất bao lâu (`time node .apf/bin/apf.mjs gate --staged` với một thay đổi nhỏ); các gợi ý bật thêm tính năng từ `doctor`.
6. **Kết quả**: bảng `Việc | Loại (sửa doc / dọn nợ / gộp code / cấu hình) | Công sức | Bằng chứng (lệnh và số đo)`, xếp theo ưu tiên. Thêm một dòng vào audit-history: ngày, số doc SUSPECT, số nợ, số TODO trần, số dòng CLAUDE.md, để so lần sau. Chỉ kết luận "đang xấu đi" khi các con số đo được thật sự tăng.
