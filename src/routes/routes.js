import config from '~/config';

// Layout
import { HeaderOnly } from '~/Layout';

// Page
import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';
import Live from '~/page/Live';

const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.following, component: Following },
   { path: config.routes.profile, component: Profile },
   { path: config.routes.live, component: Live },
   { path: config.routes.upload, component: Upload, layout: HeaderOnly },
   { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
