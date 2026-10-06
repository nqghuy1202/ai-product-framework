---
name: parallel
description: Chạy nhiều phiên Claude Code song song trên cùng repo mà không giẫm chân nhau — chia phần việc (lot) MECE theo vùng code, nhận lot có hạn (claim), mỗi lot một nhánh và một worktree, gộp lần lượt qua nhánh tích hợp có chạy kiểm. Dùng khi người dùng nói "làm song song", "chạy nhiều phiên", "chia cho nhiều agent", "worktree", "gộp các nhánh lot".
argument-hint: "[plan | start <lot> | status | merge <lot> | release <lot>]"
---

# /apf:parallel

Script: `node .apf/bin/apf.mjs parallel …`. Danh sách lot nằm ở `.apf/lots.json`; claim nằm trong thư mục chung của git (`.git/apf/claims/`, không commit). Chưa bật `features.parallel` thì đề nghị bật.

## Trước khi song song (cổng nhận)
- Phải có **ít nhất 2 lot độc lập**: tập file ghi **không giao nhau**, và hợp đồng chung (kiểu, schema, mã lỗi) đã được chốt và commit **trước**.
- Không đủ điều kiện thì làm tuần tự, vì chạy song song khi đó chỉ thêm rủi ro.
- Vùng dùng chung (`CLAUDE.md`, `.apf/`, migration, kernel, file cấu hình toàn cục, các file gom kiểu `index.ts`) **không thuộc lot nào**: chỉ sửa ở nhánh tích hợp.

## plan
1. Từ các story `ready`, gom thành lot theo vùng code và lane. Mỗi lot có `name`, `paths` (glob), `stories`, `dependsOn`.
2. Ghi `.apf/lots.json`, rồi chạy `parallel plan`. Báo CHỒNG LẤN thì sửa ranh giới cho tới khi sạch.
3. Trình người dùng: các lot, các đợt (lot nào chạy cùng lúc), và nhánh tích hợp.

## start <lot>
`parallel worktree <lot> [--base <nhánh tích hợp>]` tạo thư mục `../<repo>-<lot>`, nhánh `lot/<lot>`, và claim có hạn 4 giờ. Hướng dẫn người dùng mở một phiên Claude Code mới **ở thư mục đó** rồi chạy `/apf:build <story>`. Làm lâu thì gia hạn bằng `parallel extend <lot>`.

## status
`parallel status`, giải thích ACTIVE và STALE. Gặp STALE thì **không tự giành quyền**: kiểm worktree đó còn việc dở không (`git -C <wt> status`), rồi hỏi người dùng.

## merge <lot>
Đứng ở nhánh tích hợp, cây làm việc sạch: `parallel merge <lot>`. Script gộp với `--no-commit`, chạy typecheck và test, đạt thì commit, lỗi thì huỷ gộp; có khoá hàng đợi và nhật ký. Gặp xung đột thì rebase lot lên nhánh tích hợp ở **trong worktree của lot**, rồi gộp lại. Gộp lần lượt từng lot, không gộp song song.

## Không được
- Sửa file claim bằng tay; giành claim của phiên khác khi người dùng chưa đồng ý; xoá worktree còn việc dở; `git worktree remove --force`.
