import App from './components/App.svelte'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

const app = new App({
  target: document.body,
});

export default app;

if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept();
  // @ts-ignore
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
