// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".home.svelte-bnehzi{width:80%;max-width:1440px;margin:auto}.home__content.svelte-bnehzi{display:block}.home__content.svelte-bnehzi:not(:first-child){margin-top:3rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}