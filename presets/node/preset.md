# Preset node (API, worker, bot, CLI)

## Stack gợi ý [MẶC ĐỊNH]
Node 24 LTS · TypeScript (chạy bằng `node --experimental-strip-types` hoặc `tsx`) · test bằng `node:test` hoặc Vitest · log JSON có cấu trúc · cấu hình qua biến môi trường được validate lúc khởi động.

## Cấu trúc
```
src/
  index.ts          # điểm vào: đọc cấu hình, ghép phụ thuộc, khởi động
  config.ts         # đọc + validate env (zod), không đọc process.env ở chỗ khác
  domain/           # luật thuần, không I/O — test unit dày nhất ở đây
  services/         # I/O: DB, HTTP ngoài, hàng đợi (một file một dịch vụ ngoài)
  jobs/ | routes/   # cron/worker hoặc HTTP handler — mỏng, chỉ gọi domain + services
  kernel/           # Result, lỗi có mã, notImplemented, clock
tests/
  unit/  integration/
```

## Quy ước khung
- Hàm trả `Result<T, E>` với mã lỗi ổn định; không ném lỗi nghiệp vụ dạng chuỗi tự do.
- Thân để lại: `throw notImplemented('<module>.<fn>')` cùng dòng `// APF:IMPLEMENT — …`.
- Tiến trình chạy nền nào cũng có runbook (bật `features.ops`), job có `idempotency key`, có timeout và retry có giới hạn.
- Đồng hồ inject được (`clock.now()`), không gọi `Date.now()` rải rác, để test được logic theo thời gian.

## Rủi ro thêm
`risk.thoroughPaths` gợi ý thêm: `src/jobs/**` (chạy lặp, khó hoàn tác), `src/services/payment*`.
