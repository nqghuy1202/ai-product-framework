import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

// Quy tắc nền V10: màu chỉ đi qua token. File token là nơi duy nhất được chứa mã màu.
const root = path.resolve(import.meta.dirname, '../..');
const TOKEN_FILES = new Set(['app/tokens.css']); // sửa theo dự án
const DIRS = ['src/ui', 'app'];

function files(dir: string): string[] {
  const full = path.join(root, dir);
  try { statSync(full); } catch { return []; }
  return readdirSync(full).flatMap((name) => {
    const p = path.join(full, name);
    const rel = path.relative(root, p);
    return statSync(p).isDirectory() ? files(rel) : /\.(css|tsx?)$/.test(name) ? [rel] : [];
  });
}

describe('không có màu viết tay', () => {
  it('src/ui và app/ không chứa hex, rgb, hsl, oklch ngoài file token', () => {
    for (const rel of DIRS.flatMap(files).filter((f) => !TOKEN_FILES.has(f))) {
      const hits = readFileSync(path.join(root, rel), 'utf8').match(/#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|oklch|oklab|lab|lch)\(/g) ?? [];
      expect(hits, `${rel} có màu viết tay`).toEqual([]);
    }
  });
});
