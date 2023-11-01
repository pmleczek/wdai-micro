import { setupRouter } from './router';

setupRouter([
  {
    label: 'Home',
    pathname: '/',
    component: '<h1>Home</h1>',
    title: 'Blog',
  },
  {
    label: 'Posts',
    pathname: '/posts',
    component: '<h1>Posts</h1>',
  },
  {
    label: 'Test',
    pathname: '/test',
    component: '<h1>Test</h1>',
  },
  {
    label: 'New post',
    pathname: '/new',
    component: '<h1>New</h1>',
    className: 'md:none',
  },
]);
