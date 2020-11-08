import Home2 from "../components/pages/Home.js";
import Profile2 from "../components/pages/Profile.js";
let routes = {};
const urlParams = new URLSearchParams(window.location.search);
if (!urlParams.has("routemap")) {
  routes = {
    "/": Home2,
    "/profile": Profile2
  };
}
export default routes;
