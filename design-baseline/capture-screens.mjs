#!/usr/bin/env node
// Chụp các màn tham chiếu ở 3 cỡ (máy tính 1440×900, tablet 1024×768, điện thoại 390×844) để lưu cùng bộ thiết kế nền.
// Chạy TỪ THƯ MỤC DỰ ÁN có cài @playwright/test (hoặc playwright), khi app đang chạy và trình duyệt đã đăng nhập được:
//   node <plugin>/design-baseline/capture-screens.mjs --base http://localhost:3001 --name tapetco \
//        --routes "/,/platform/uoms,/purchasing/orders,/purchasing/orders?id=<id>,/account" [--storage state.json]
// --storage: file storageState của Playwright (đăng nhập sẵn). Tạo bằng: npx playwright codegen --save-storage=state.json <base>/login
// Ảnh lưu vào design-baseline/screens/<name>/<route>--<cỡ>.png
import path from 'node:path';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, x, i, all) => (x.startsWith('--') ? [...a, [x.slice(2), all[i + 1]?.startsWith('--') ? true : all[i + 1]]] : a), []));
if (!args.base || !args.routes || !args.name) { console.error('cần --base, --routes, --name'); process.exit(1); }
const req = createRequire(path.join(process.cwd(), 'package.json'));
let chromium;
try { ({ chromium } = req('@playwright/test')); } catch { ({ chromium } = req('playwright')); }

const SIZES = [{ id: 'desktop', width: 1440, height: 900 }, { id: 'tablet', width: 1024, height: 768 }, { id: 'phone', width: 390, height: 844, isMobile: true, hasTouch: true }];
const out = path.join(path.dirname(fileURLToPath(import.meta.url)), 'screens', args.name);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
for (const size of SIZES) {
  const ctx = await browser.newContext({ viewport: { width: size.width, height: size.height }, isMobile: !!size.isMobile, hasTouch: !!size.hasTouch, storageState: args.storage || undefined, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  for (const route of String(args.routes).split(',').map((r) => r.trim()).filter(Boolean)) {
    await page.goto(new URL(route, args.base).toString());
    await page.waitForLoadState('networkidle').catch(() => {});
    const slug = route.replace(/^\//, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '') || 'home';
    const file = path.join(out, `${slug}--${size.id}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log('→', path.relative(process.cwd(), file));
  }
  await ctx.close();
}
await browser.close();
