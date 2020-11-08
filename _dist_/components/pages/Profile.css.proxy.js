// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".profile.svelte-11o1hlq{width:80%;max-width:1440px;margin:auto}.profile__body.svelte-11o1hlq{margin-top:5rem;display:flex;justify-content:space-between;flex-wrap:wrap}.profile-body__content.svelte-11o1hlq{flex-basis:40%}.profile-body__content.-icon.svelte-11o1hlq{text-align:center}.profile-body__content.-history.svelte-11o1hlq{display:none;margin-top:5rem;flex-basis:100%}.profile__icon.svelte-11o1hlq{width:50%;height:auto;border-radius:50%}.profile-content__list.-two-rows.svelte-11o1hlq{display:flex;justify-content:flex-start;flex-wrap:wrap}.profile-content-list__item.svelte-11o1hlq{flex-basis:50%}.profile-account__link.svelte-11o1hlq{color:#666}.profile-account__link.svelte-11o1hlq:link{color:#666}.profile-account__icon.-twitter.svelte-11o1hlq{color:#1da1f2}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}