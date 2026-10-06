# .apf — ai-product-framework

| File | Nội dung | Sửa tay? |
|---|---|---|
| `config.json` | Preset, profile, tính năng bật/tắt, lệnh kiểm, mốc duyệt, luật rủi ro | Có |
| `rules.md` | Luật riêng của dự án học được qua `/apf:learn` | Có (qua duyệt) |
| `bin/apf.mjs` | Bản sao script của framework. Git hook gọi file này | Không (`/apf:init` hoặc `apf update` làm mới) |
| `contracts/*.json` | Ảnh chụp hợp đồng khung của từng story | Không |
| `lots.json` | Các phần việc chạy song song (khi bật `features.parallel`) | Có |

Lệnh hay dùng:
```bash
node .apf/bin/apf.mjs doctor          # kiểm cài đặt
node .apf/bin/apf.mjs board --write   # bảng việc
node .apf/bin/apf.mjs docs            # doc nào cần đối chiếu
node .apf/bin/apf.mjs gate --staged   # chạy cổng commit bằng tay
```
Muốn bỏ qua cổng commit một lần, người dùng tự chạy `APF_SKIP_GATE=1 git commit ...`. AI không được tự làm việc này.
