# Thay đổi

## 0.1.4 — 2026-10-09
- Giao diện nền lên **v2**, đúc kết Tapetco giao diện v2 (08–09/10/2026). Theo thoả thuận: cách làm là `[CHỐT]`, bản sắc là `[MẶC ĐỊNH]`; quy tắc đổi ở v2 có ghi kiểu cũ để dự án cũ giữ được (ghi Ngoại lệ đã duyệt).
- `tokens.css`: nền trang ngả xanh nhạt (`--ds-color-background`, `--ds-color-bg-glow`), thẻ bo 20, bóng thẻ `--elevation-card` (+ `--shadow-card` cho Tailwind) cho Sáng, Tối; Sáng chói nền trắng, thẻ viền, không bóng; lớp `.ui-card`.
- `principles.md`: viết lại V1, L2, L4, L14, H1, H3; thêm L17–L22 (lưới nhập v2: khung ô chỉ khi sửa, bấm trong ô không thoát, ô đổi chỉ chấm, Lưu hiện ngay, F2 con trỏ cuối, chú thích phím tắt, vùng danh sách duy nhất cao tối đa), K9–K12 (thanh đầu dính, dải Tình trạng, nhóm thu gọn, lỗi khi Lưu, bảng tĩnh), V12–V14 (một kiểu nút và ô chung, nút viên tròn, icon một tông), H6–H9 (thanh trạng thái có chú giải thay biểu đồ cột phân bố, biểu đồ giá trị, thường dùng nhiều hàng, Tuỳ chỉnh có sơ đồ thu nhỏ, Bảng tin), D1–D2 (ngăn kéo).
- `patterns/` list, detail, home, auth, components; `responsive.md`, `tokens.md` theo v2. `pitfalls.md` thêm 8 bẫy (21–28). `checklist.md` thêm mục v2 và mục rà soát toàn hệ thống.
- Mới: `design-baseline/mockups-v2/` — 5 bản thử v2 đã duyệt (danh sách, biểu mẫu, trang chủ v2 và v2.1, đăng nhập) làm tham chiếu `[VÍ DỤ]`.

## 0.1.3 — 2026-10-08
- Mới: bộ nghiệp vụ dùng lại `references/business/`, rút từ Tapetco: `loi-chung-tu.md` (5 trạng thái, duyệt khai báo, cảnh báo thay cờ, ghi sổ khi Y, liên kết chứng từ, nhật ký, tổ chức và phân quyền, Nạp Excel, rủi ro đã chấp nhận, câu hỏi làm rõ, gợi ý kiến trúc), `erp.md` (kho, chất lượng, bán, mua, tài chính, nhân sự, báo cáo, chuyển đổi, bảo trì, AI; phần bổ sung chưa kiểm chứng gắn `[BỔ SUNG]`), `phu-luc-nhien-lieu-hang-khong.md`.
- Mới: bản đồ menu ERP `references/business/menu/`: 1.485 menu GreenSys xếp vào 18 phân hệ, 101 luồng (sơ đồ + bảng bước có mã trang, vai chủ, kết quả theo luật lõi), danh mục đủ menu và báo cáo theo luồng, 6 chuỗi xuyên phân hệ, cách hiểu menu xung đột với luật lõi, 10 menu [MỚI], danh sách 134 menu đã loại.
- Mới: khoá `project.domain` (`erp` | `business`), cờ `init --domain`. Skill `prd`, `architecture`, `stories`, `elicit` đọc bộ nghiệp vụ khi khoá được đặt.

## 0.1.2 — 2026-10-06
- Sửa: `apf risk` chỉ quét từ khoá nhạy cảm trong file code, không quét tài liệu (`CLAUDE.md` nhắc `decimal.js` từng bị chấm nhầm thorough).

## 0.1.1 — 2026-10-06
- Sửa: `apf.mjs` sạch lỗi ESLint phổ biến (`no-unused-expressions`, `no-useless-assignment`), để dự án lint cả thư mục không chặn commit (phát hiện khi cài vào Tapetco).
- Sửa: file của framework (`.apf/`, `.githooks/`) không còn bị tính vào chấm rủi ro, cảnh báo thiếu test, export trùng, marker nợ.
- Sửa: `contract check` chỉ xét thay đổi sau khi khung được duyệt (file khung chưa commit không bị báo nhầm).

## 0.1.0 — 2026-10-06
Bản đầu tiên.
- 16 skill: help, init, prd, architecture, ux, stories, build, review, fix, elicit, retro, security, ops, parallel, learn, audit.
- 4 agent: planner (Opus), coder (Sonnet), reviewer (Sonnet), reviewer-deep (Opus).
- `scripts/apf.mjs`: init/update, gate (cổng commit), docs (VERIFIED/SUSPECT/BROKEN), contract snapshot/check (hợp đồng khung), board, story set, risk (bảng điểm), parallel (plan/claim/extend/release/status/worktree/merge), doctor, status, hook; 38 ca self-test.
- Hook plugin: trạng thái đầu phiên; chặn lệnh git phá việc chưa commit.
- Bộ thiết kế nền từ Tapetco: 55 quy tắc đã chốt, token 3 chế độ, 3 cỡ màn hình, ma trận trạng thái, 7 mẫu màn hình, 20 bẫy kỹ thuật, checklist.
- Preset: core, nextjs-drizzle-postgres (+ supabase, neon), node.
