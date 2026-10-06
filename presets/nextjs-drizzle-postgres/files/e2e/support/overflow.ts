import type { Page } from '@playwright/test';

// Đo phần tử tràn khung ở điện thoại (quy tắc nền P2): trang không được cuộn ngang, không phần tử nào nằm ngoài màn hình, và không phần
// tử nào rộng hơn khung chứa nó. Bỏ qua: phần tử cố định (thanh dưới, hộp nổi), svg, vùng tự cuộn ngang (bảng, hàng tab cuộn), và khối
// "tràn sát hai mép" có lề âm theo quy ước danh sách (`margin-inline` âm) vì chúng cố ý rộng hơn vùng nội dung nhưng vẫn trong màn hình.
// Hàm chạy trong trình duyệt nên viết dạng chuỗi (trình biên dịch của Playwright không chèn được phần phụ trợ vào hàm truyền qua evaluate).

const MEASURE = `(() => {
  var vw = innerWidth, doc = document.documentElement;
  function scroller(el) { var p = el.parentElement; while (p && p !== document.body) { if (/(auto|scroll|hidden|clip)/.test(getComputedStyle(p).overflowX)) return p; p = p.parentElement; } return null; }
  function desc(el) { var c = (el.getAttribute('class') || '').toString().trim().split(/\\s+/).slice(0, 4).join('.'); var sl = el.getAttribute('data-slot') || el.getAttribute('data-testid') || ''; return el.tagName.toLowerCase() + (sl ? '[' + sl + ']' : '') + (c ? '.' + c : ''); }
  var off = [], wide = [];
  var all = document.querySelectorAll('body *');
  for (var i = 0; i < all.length; i++) {
    var el = all[i], s = getComputedStyle(el);
    if (s.display === 'none' || s.display === 'contents' || s.visibility === 'hidden' || s.position === 'fixed' || s.position === 'absolute') continue;
    if (el.closest('svg, [data-radix-popper-content-wrapper], [role="dialog"][data-state="closed"]')) continue;
    var r = el.getBoundingClientRect(); if (r.width === 0 || r.height === 0) continue;
    var bleed = parseFloat(s.marginLeft) < 0 || parseFloat(s.marginRight) < 0;
    var sa = scroller(el);
    if (!sa && !bleed && (r.right > vw + 1 || r.left < -1)) off.push(desc(el) + ' [' + Math.round(r.left) + '..' + Math.round(r.right) + ' trong màn ' + vw + ']');
    var par = el.parentElement;
    if (par && par !== document.body && !sa && !bleed) {
      var pr = par.getBoundingClientRect(), ps = getComputedStyle(par);
      if (ps.display !== 'contents' && pr.width > 0 && !/(auto|scroll|hidden|clip)/.test(ps.overflowX) && r.right > pr.right + 2) wide.push(desc(el) + ' [' + Math.round(r.right) + ' > khung ' + desc(par) + ' ' + Math.round(pr.right) + ']');
    }
  }
  return JSON.stringify({ pageOverflow: doc.scrollWidth > vw ? doc.scrollWidth + ' > ' + vw : null, off: off.slice(0, 5), wide: wide.slice(0, 5) });
})()`;

export type OverflowReport = { readonly pageOverflow: string | null; readonly off: readonly string[]; readonly wide: readonly string[] };

/** Báo cáo tràn của trang đang mở; rỗng (mọi trường rỗng) là đạt. */
export async function measureOverflow(page: Page): Promise<OverflowReport> {
  return JSON.parse(await page.evaluate(MEASURE)) as OverflowReport;
}

/** Dòng mô tả lỗi của một trang, rỗng nếu không tràn. */
export function describeOverflow(route: string, report: OverflowReport): string[] {
  const lines: string[] = [];
  if (report.pageOverflow) lines.push(`${route}: trang cuộn ngang (${report.pageOverflow})`);
  for (const item of report.off) lines.push(`${route}: ngoài màn hình: ${item}`);
  for (const item of report.wide) lines.push(`${route}: rộng hơn khung: ${item}`);
  return lines;
}
