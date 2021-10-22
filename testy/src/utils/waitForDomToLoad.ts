import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export default function waitForDomToLoad() {
  return new Promise<JSDOM>((resolvePromise) => {
    const html = readFileSync(resolve(__dirname, `../../dist/index.html`), 'utf8');

    const dom = new JSDOM(html, {
      runScripts: 'dangerously',
      resources: 'usable',
      url: `file://${resolve(__dirname, '../../dist/')}/index.html`,
    });
    dom.window.document.addEventListener('DOMContentLoaded', () => {
      resolvePromise(dom);
    });
  });
}
