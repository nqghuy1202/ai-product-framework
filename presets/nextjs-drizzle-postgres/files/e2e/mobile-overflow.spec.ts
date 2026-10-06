import { expect, test } from '@playwright/test';
import { describeOverflow, measureOverflow } from './support/overflow.ts';

// Quy tắc nền P2: ở 390, 360, 320 px không trang nào cuộn ngang, không phần tử nào ra ngoài màn hình hay rộng hơn khung chứa.
// Thêm đăng nhập (loginAs) và danh sách route theo vai của dự án.
const WIDTHS = [390, 360, 320] as const;
const ROUTES: readonly string[] = ['/login'];

for (const width of WIDTHS) {
  test(`${width}px: các trang chính không tràn`, async ({ page }) => {
    test.setTimeout(120_000);
    await page.setViewportSize({ width, height: 844 });
    const problems: string[] = [];
    for (const route of ROUTES) {
      await page.goto(route);
      await page.waitForLoadState('networkidle');
      problems.push(...describeOverflow(route, await measureOverflow(page)));
    }
    expect(problems).toEqual([]);
  });
}
