#!/usr/bin/env node
// Kiểm tính toàn vẹn của plugin: manifest, frontmatter skill/agent, đường dẫn được nhắc tới có tồn tại, JSON hợp lệ.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let fail = 0, pass = 0;
const ok = (c, msg) => { if (c) pass++; else { fail++; console.log('  ✗ ' + msg); } };
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));
const fm = (text) => { const m = text.match(/^---\n([\s\S]*?)\n---/); if (!m) return null; const o = {}; for (const l of m[1].split('\n')) { const k = l.match(/^([\w-]+):\s*(.*)$/); if (k) o[k[1]] = k[2]; } return o; };

// 1. JSON
for (const f of ['.claude-plugin/plugin.json', '.claude-plugin/marketplace.json', 'hooks/hooks.json', ...fs.readdirSync(path.join(root, 'presets')).flatMap((p) => ['presets/' + p + '/preset.json'])]) {
  try { JSON.parse(read(f)); ok(true); } catch (e) { ok(false, `${f}: JSON lỗi ${e.message}`); }
}
const plugin = JSON.parse(read('.claude-plugin/plugin.json'));
const market = JSON.parse(read('.claude-plugin/marketplace.json'));
ok(market.plugins.some((p) => p.name === plugin.name && p.source === './'), 'marketplace phải trỏ plugin cùng tên với source "./"');
ok(market.plugins.every((p) => !p.version || p.version === plugin.version), 'version trong marketplace và plugin.json phải khớp');
const scriptVersion = (read('scripts/apf.mjs').match(/const VERSION = '([^']+)'/) || [])[1];
ok(scriptVersion === plugin.version, `VERSION trong apf.mjs (${scriptVersion}) ≠ plugin.json (${plugin.version})`);

// 2. Skill
const skills = fs.readdirSync(path.join(root, 'skills'));
for (const s of skills) {
  const f = `skills/${s}/SKILL.md`;
  if (!exists(f)) { ok(false, `${f} không tồn tại`); continue; }
  const text = read(f);
  const meta = fm(text);
  ok(meta && meta.name === s, `${f}: frontmatter name phải là "${s}"`);
  ok(meta && meta.description && meta.description.length > 40, `${f}: thiếu description đủ ý`);
  ok(text.split('\n').length <= 200, `${f}: dài quá 200 dòng (${text.split('\n').length})`);
  // Đường dẫn tương đối tới tài nguyên plugin được nhắc trong skill phải tồn tại.
  for (const m of text.matchAll(/`((?:references|templates|design-baseline|presets|scripts)\/[^`\s*<>{}]+|docs\/[\w-]+\.md)`/g)) {
    const p = m[1].replace(/[),.;:]+$/, '');
    if (p.includes('<') || /\*\*?$/.test(p)) continue;
    if (/^docs\/(product|architecture|ux|stories|ops|security|app-map|_generated)/.test(p) || /^docs\/(README)\.md$/.test(p)) continue; // đường dẫn trong dự án, không phải của plugin
    ok(exists(p), `${f}: nhắc tới ${p} nhưng không có`);
  }
}

// 3. Agent
for (const a of fs.readdirSync(path.join(root, 'agents'))) {
  const meta = fm(read('agents/' + a));
  ok(meta && meta.name === a.replace(/\.md$/, ''), `agents/${a}: name phải trùng tên file`);
  ok(meta && /^(opus|sonnet|haiku|inherit)$/.test(meta.model || ''), `agents/${a}: model phải là opus|sonnet|haiku|inherit`);
  ok(meta && meta.description, `agents/${a}: thiếu description`);
}
// Skill build gọi đúng các agent có thật
const build = read('skills/build/SKILL.md');
for (const a of ['planner', 'coder', 'reviewer', 'reviewer-deep']) ok(build.includes(a) && exists(`agents/${a}.md`), `build nhắc agent ${a} nhưng thiếu file`);

// 4. File mà init cần
for (const f of ['templates/project/CLAUDE.md', 'templates/project/rules.md', 'templates/project/apf-README.md', 'templates/project/docs-README.md', 'templates/docs/app-map-README.md', 'templates/docs/ops-README.md', 'design-baseline/tokens.css']) ok(exists(f), `init cần ${f}`);
// 5. Hook gọi lệnh có thật
const hooks = read('hooks/hooks.json');
for (const m of hooks.matchAll(/apf\.mjs\\?"? hook ([\w-]+)/g)) ok(/kind === '/.test(read('scripts/apf.mjs')) && read('scripts/apf.mjs').includes(`'${m[1]}'`), `hooks.json gọi "hook ${m[1]}" mà apf.mjs không xử lý`);
// 6. Không còn placeholder lạ trong tài liệu framework (ngoài templates)
for (const f of ['README.md', 'docs/architecture.md']) if (exists(f)) ok(!/\bTBD\b|lorem ipsum/i.test(read(f)), `${f} còn TBD/lorem`);

console.log(`validate-plugin: ${fail ? fail + ' hỏng, ' : ''}${pass} đạt`);
process.exitCode = fail ? 1 : 0;
