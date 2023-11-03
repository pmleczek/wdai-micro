import { setupRouter } from './router';

import Home from './pages/Home';
import Settings from './pages/Settings';

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
    label: 'Tags',
    pathname: '/tags',
    component: '<h1>tags</h1>',
  },
  {
    label: 'Settings',
    pathname: '/settings',
    component: Settings,
  },
  {
    label: 'New post',
    pathname: '/new',
    component: '<h1>New</h1>',
    className: 'md:none',
  },
]);
