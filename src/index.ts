import { setupRouter } from './router';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Settings from './pages/Settings';
import New from './pages/New';
import Post from './pages/Post';

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
    component: Posts,
  },
  {
    label: 'New post',
    pathname: '/new',
    component: New,
    className: 'md:none',
  },
  {
    label: 'Settings',
    pathname: '/settings',
    component: Settings,
  },
  {
    label: 'Post',
    pathname: '/post',
    component: Post,
    className: 'none',
  },
]);
