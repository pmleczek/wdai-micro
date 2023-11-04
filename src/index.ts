import { setupRouter } from './router';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Settings from './pages/Settings';
import New from './pages/New';
import Post from './pages/Post';

setupRouter([
  {
    label: 'Home',
    pathname: '/wdai-micro/',
    component: Home,
    title: 'Blog',
  },
  {
    label: 'Posts',
    pathname: '/wdai-micro/posts',
    component: Posts,
  },
  {
    label: 'New post',
    pathname: '/wdai-micro/new',
    component: New,
    className: 'md:none',
  },
  {
    label: 'Settings',
    pathname: '/wdai-micro/settings',
    component: Settings,
  },
  {
    label: 'Post',
    pathname: '/wdai-micro/post',
    component: Post,
    className: 'none',
  },
]);
