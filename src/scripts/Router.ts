import Home from './components/pages/Home.svelte'
import Profile from './components/pages/Profile.svelte'

let routes = {}

const urlParams = new URLSearchParams(window.location.search)
if (!urlParams.has('routemap')) {
    routes = {
        '/': Home,
        '/profile': Profile,
    }
}
export default routes
