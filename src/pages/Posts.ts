import PostRow from '../components/PostRow';
import { getPosts } from '../data/posts';
import { Page } from '../router/types';

const onChange = (event: Event) => {
  const posts = getPosts((event.target as HTMLInputElement).value);

  const postsList = document.querySelector('#posts-list');

  if (postsList) {
    postsList.innerHTML = '';

    posts.forEach((post) => postsList.appendChild(PostRow(post)));
  }
};

const Header = () => {
  const container = document.createElement('div');
  container.className =
    'container mx-auto px-6 pb-4 md:pb-0 md:flex-row flex flex-col md:items-center justify-between border-b border-b-dark-light';

  const header = document.createElement('h1');
  header.innerText = 'Posts';
  header.className = 'text-6 font-semibold py-4';
  container.appendChild(header);

  const input = document.createElement('input');
  input.setAttribute('type', 'search');
  input.setAttribute('placeholder', 'Search posts');
  input.className =
    'py-3 px-4 border border-dark-light rounded-2 text-3.5 placeholder:grey';
  input.addEventListener('input', onChange);

  container.appendChild(input);

  return container;
};

const Main = () => {
  const posts = getPosts('');

  if (!posts.length) {
    const emptyContainer = document.createElement('div');
    emptyContainer.className = 'flex-1 flex items-center justify-center';

    const content = document.createElement('span');
    content.innerText =
      'No posts found :( \n There are no posts or you used incorrect search query';
    content.className = 'font-medium text-6 text-grey text-center';
    emptyContainer.appendChild(content);

    return emptyContainer;
  }

  const container = document.createElement('div');
  container.className = 'container mx-auto px-6 pt-4 pb-6';

  const postsList = document.createElement('div');
  postsList.setAttribute('id', 'posts-list');
  postsList.className = 'flex flex-col gap-4';

  posts.forEach((post) => postsList.appendChild(PostRow(post)));

  container.appendChild(postsList);

  return container;
};

const Posts: Page = {
  header: Header,
  main: Main,
};

export default Posts;
