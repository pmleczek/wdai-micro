import { getPosts } from '../data/posts';

const LatestPosts = () => {
  const container = document.createElement('div');
  container.className = 'pt-4';

  const header = document.createElement('h2');
  header.innerText = 'Latest posts';
  header.className = 'font-semibold text-5 text-light-grey';
  container.appendChild(header);

  const postsContainer = document.createElement('div');
  postsContainer.className = 'flex items-center';
  container.appendChild(postsContainer);

  const posts = getPosts();
  console.log(posts);

  if (!posts.length) {
    const emptyLabel = document.createElement('span');
    emptyLabel.innerText = 'No posts were published yet';
    emptyLabel.className = 'text-3.5 font-semibold py-4 text-grey';

    postsContainer.classList.add('justify-center');
    postsContainer.appendChild(emptyLabel);

    return container;
  }

  return container;
};

export default LatestPosts;
