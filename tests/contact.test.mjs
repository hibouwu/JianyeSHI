import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const docs = fileURLToPath(new URL('../docs/', import.meta.url));
const email = 'shijianye201908@163.com';
const pages = ['index.html', 'en.html', 'contact.html', 'contact-en.html'];

for (const page of pages) {
  const html = fs.readFileSync(path.join(docs, page), 'utf8');
  assert.ok(!html.includes('cutlassNVFP4GEMM.md'), `${page}: third-party article reintroduced as personal work`);
  assert.ok(!/#writing|id="writing"|writing-list/.test(html), `${page}: documentation section removed by user was reintroduced`);
  for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (href.startsWith('mailto:')) {
      assert.equal(href, `mailto:${email}`, `${page}: incorrect email`);
      continue;
    }
    if (/^https?:/.test(href)) continue;
    const [file, fragment] = href.split('#');
    const target = path.join(docs, (file || page).split('?')[0]);
    assert.ok(fs.existsSync(target), `${page}: missing ${href}`);
    if (fragment) {
      assert.ok(fs.readFileSync(target, 'utf8').includes(`id="${fragment}"`), `${page}: missing anchor ${href}`);
    }
  }
  if (page.startsWith('contact')) {
    assert.ok(html.includes(`href="mailto:${email}">${email}</a>`));
    assert.ok(html.includes('id="copy-email"') && html.includes(' hidden '));
    assert.ok(!html.includes('<form'), 'Contact page must not imply a message submission service');
  }
}

const script = fs.readFileSync(path.join(docs, 'contact.js'), 'utf8');
for (const mode of ['success', 'denied', 'unavailable']) {
  let handler, copied, selected = false;
  const link = { textContent: email };
  const button = { hidden: true, disabled: false, dataset: { success: 'copied', failure: 'manual' }, addEventListener: (_, fn) => { handler = fn; } };
  const status = { textContent: '' };
  const document = {
    getElementById: id => ({ 'contact-email': link, 'copy-email': button, 'copy-status': status }[id]),
    createRange: () => ({ selectNodeContents: node => { assert.equal(node, link); selected = true; } }),
  };
  const clipboard = mode === 'unavailable' ? undefined : { writeText: async value => {
    if (mode === 'denied') throw new Error('Clipboard permission denied');
    copied = value;
  } };
  vm.runInNewContext(script, { document, navigator: { clipboard }, window: { getSelection: () => ({ removeAllRanges() {}, addRange() {} }) } });
  assert.equal(button.hidden, false);
  await handler();
  assert.equal(button.disabled, false);
  if (mode === 'success') {
    assert.equal(copied, email);
    assert.equal(status.textContent, 'copied');
  } else {
    assert.equal(status.textContent, 'manual');
    assert.equal(selected, true);
  }
}
console.log('PASS: local links, cross-page anchors, email, copy success and fallback.');
