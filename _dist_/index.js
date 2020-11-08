import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import App2 from "./components/App.js";
import UIkit from "../web_modules/uikit.js";
import Icons from "../web_modules/uikit/dist/js/uikit-icons.js";
UIkit.use(Icons);
const app = new App2({
  target: document.body
});
export default app;
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
