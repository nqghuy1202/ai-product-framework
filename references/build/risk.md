# Chọn mức review

Lệnh `node .apf/bin/apf.mjs risk --base <baseline>` đưa ra mức gợi ý. Phiên chính có thể **nâng** mức, không được hạ, trừ khi người dùng bảo.

| Mức | Khi nào | Làm gì |
|---|---|---|
| `none` | Chỉ đổi giao diện tĩnh, chữ, style, tài liệu, cấu hình không đổi hành vi | Chỉ kiểm máy: lint, typecheck, test, contract |
| `quick` | Logic nghiệp vụ thông thường | 1 reviewer (agent `reviewer`, Sonnet), dùng `review-quick.md` |
| `thorough` | Chạm **vùng nhạy cảm** (tiền, công nợ, hạn mức, tồn kho, giá, phân quyền và xác thực, migration hay schema, xoá dữ liệu, tích hợp ngoài, bảo mật) hoặc điểm ≥ 7 | 2 reviewer song song: `reviewer-deep` (Opus) chạy lens A, `reviewer` (Sonnet) chạy lens B, theo `review-thorough.md` |

Bảng điểm: vùng nhạy cảm +7 · code dùng chung (kernel, shared, ui) +2 · state machine hoặc workflow +2 · xoá hay thay trên 40 dòng code +2 · số dòng code mới (≥ 80 → +1, ≥ 400 → +2, ≥ 1200 → +3) · số vùng code (2 → +1, ≥ 3 → +2) · chỉ giao diện tĩnh hoặc tài liệu −2. Ngưỡng: 0–2 none, 3–6 quick, ≥ 7 thorough.

Thêm đường dẫn hoặc từ khoá riêng của dự án vào `risk.thoroughPaths` và `risk.thoroughKeywords` trong `.apf/config.json`. Ví dụ ERP: `**/fueling/**`, `hạn mức`.

Báo một dòng cho người dùng, ví dụ: `Review thorough — điểm 9 (migration, ghi sổ +7, 620 dòng +2)`.
