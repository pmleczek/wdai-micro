import { setupRouter } from './router';

import Home from './pages/Home';
import Settings from './pages/Settings';
import New from './pages/New';

setupRouter([
  {
    label: 'Home',
    pathname: '/',
    component: Home,
    title: 'Blog',
  },
  {
    label: 'Posts',
    pathname: '/posts',
    component: '<h1>Posts</h1>',
  },
  {
    label: 'Settings',
    pathname: '/settings',
    component: Settings,
  },
  {
    label: 'New post',
    pathname: '/new',
    component: New,
    className: 'md:none',
  },
]);
