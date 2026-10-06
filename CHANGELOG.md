# Thay đổi

## 0.1.0 — 2026-10-06
Bản đầu tiên.
- 16 skill: help, init, prd, architecture, ux, stories, build, review, fix, elicit, retro, security, ops, parallel, learn, audit.
- 4 agent: planner (Opus), coder (Sonnet), reviewer (Sonnet), reviewer-deep (Opus).
- `scripts/apf.mjs`: init/update, gate (cổng commit), docs (VERIFIED/SUSPECT/BROKEN), contract snapshot/check (hợp đồng khung), board, story set, risk (bảng điểm), parallel (plan/claim/extend/release/status/worktree/merge), doctor, status, hook; 38 ca self-test.
- Hook plugin: trạng thái đầu phiên; chặn lệnh git phá việc chưa commit.
- Bộ thiết kế nền từ Tapetco: 55 quy tắc đã chốt, token 3 chế độ, 3 cỡ màn hình, ma trận trạng thái, 7 mẫu màn hình, 20 bẫy kỹ thuật, checklist.
- Preset: core, nextjs-drizzle-postgres (+ supabase, neon), node.
