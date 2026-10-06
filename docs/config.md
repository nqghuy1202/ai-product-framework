# Cấu hình `.apf/config.json`

| Khoá | Mặc định | Ý nghĩa |
|---|---|---|
| `project.name`, `project.language` | tên thư mục, `vi` | Ngôn ngữ của tài liệu sinh ra |
| `preset`, `db` | `core`, `null` | Preset công nghệ, biến thể database |
| `profile` | `core` | `tiny` · `core` · `full` — bộ tính năng khởi đầu |
| `features.docSync` | true (core) | Cảnh báo khi đổi code mà doc có `covers` vùng đó không được cập nhật; trạng thái SUSPECT |
| `features.appMap` | false | Thư mục `docs/app-map/`: mỗi vùng code một doc |
| `features.security` | false | Skill `security`, thư mục `docs/security/` |
| `features.ops` | false | Skill `ops`, thư mục `docs/ops/` |
| `features.parallel` | false | `.apf/lots.json`, claim, cổng chặn commit đụng lot của phiên khác |
| `features.learn` | true | Gợi ý `/apf:learn` sau khi người dùng sửa code của AI |
| `paths.docs`, `paths.stories` | `docs`, `docs/stories` | |
| `paths.src`, `paths.tests` | glob | Dùng để nhận biết code nguồn và code test (cảnh báo thiếu test, chấm rủi ro) |
| `commands.lint/typecheck/testFast/test/e2e` | rỗng hoặc theo preset | Lệnh thật của dự án; để rỗng là bỏ qua |
| `gate.commands` | `["lint","typecheck","testFast"]` | Các lệnh chạy trong pre-commit; lỗi thì CHẶN commit. Commit chỉ đổi tài liệu thì bỏ qua (`skipCommandsForDocsOnly`) |
| `gate.testWarnMinLines` | 15 | Từ bao nhiêu dòng code nguồn mới mà không có test đổi thì cảnh báo |
| `gate.secretAllow` | `*.example`, `fixtures/**`, `*.md` | File được bỏ qua khi quét secret (file `.env*` thì không bao giờ được bỏ qua) |
| `checkpoints.afterPrd/afterArchitectureUx/afterSkeleton/beforeCommit` | true | 4 mốc duyệt |
| `build.smallMaxLines`, `build.smallMaxFiles` | 80, 3 | Ngưỡng việc cỡ S (phiên chính tự làm, không qua planner/coder) |
| `build.coderMaxRetries`, `build.reviewMaxLoops` | 2, 2 | Giới hạn số vòng sửa |
| `risk.thoroughPaths`, `risk.thoroughKeywords` | theo preset | Đường dẫn và từ khoá buộc review kỹ |
| `risk.nonePaths` | md, css, ảnh, docs | Chỉ đổi những file này thì không cần review |

**Biến môi trường** (người dùng tự đặt, AI không được tự đặt):
- `APF_SKIP_GATE=1 git commit …`: bỏ qua cổng commit một lần.
- `APF_GATE_NO_COMMANDS=1`: chạy cổng nhưng không chạy lệnh kiểm.
- `APF_GIT_GUARD=off` (trong `env` của `~/.claude/settings.json`): tắt hook chặn lệnh git phá việc chưa commit.
- `APF_OWNER`: tên phiên khi chạy song song (mặc định là đường dẫn worktree).
