// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".footer.svelte-dbh34q{padding:1rem 0;background:#e2e2e2}.footer__copyright.svelte-dbh34q{width:80%;max-width:1440px;margin:auto;text-align:center}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}