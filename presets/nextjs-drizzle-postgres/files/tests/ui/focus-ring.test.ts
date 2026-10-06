import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

// Quy tắc nền V11: không bao giờ bỏ outline mà thiếu vòng focus thay thế.
const root = path.resolve(import.meta.dirname, '../..');

function tsx(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    return statSync(full).isDirectory() ? tsx(full) : full.endsWith('.tsx') ? [full] : [];
  });
}

describe('vòng focus', () => {
  it('outline-none / outline-hidden luôn đi cùng focus-visible:outline hoặc focus-visible:ring', () => {
    for (const file of tsx(path.join(root, 'src/ui'))) {
      const src = readFileSync(file, 'utf8');
      if (!/(?<![\w-])(?:[\w-]+:)*outline-(?:none|hidden)(?![\w-])/.test(src)) continue;
      expect(/focus-visible:(?:outline|ring)/.test(src), `${path.relative(root, file)} bỏ outline mà không có focus-visible thay thế`).toBe(true);
    }
  });
});
