import { getPost } from '../data/posts';
import { Page } from '../router/types';
import { navigate } from '../router/utils';

const Main = () => {
  const container = document.createElement('article');
  container.className = 'container mx-auto px-6 pt-4';

  const id = window.location.search.replace('?id=', '');
  const post = getPost(id);

  if (!post) {
    navigate('/posts');
    return container;
  }

  if (post.thumbnail) {
    const img = document.createElement('img');
    img.setAttribute('src', post.thumbnail);
    img.className = 'w-full rounded-2 fit-cover object-center h-120';

    container.appendChild(img);
  }

  const header = document.createElement('div');
  header.className = 'flex flex-col md:flex-row items-center justify-between py-4';

  const heading = document.createElement('h1');
  heading.innerText = post.title;
  heading.className = 'font-semibold text-6';

  const lastUpdate = document.createElement('p');
  lastUpdate.innerText = new Date(post.updatedAt ?? post.createdAt).toLocaleDateString();
  lastUpdate.className = 'font-semibold text-grey';

  header.appendChild(heading);
  header.appendChild(lastUpdate);

  container.appendChild(header);

  const content = document.createElement('p');
  content.innerText = post.content;
  content.className = 'text-light-grey font-medium'

  container.appendChild(content);

  return container;
};

const Post: Page = {
  main: Main,
};

export default Post;
