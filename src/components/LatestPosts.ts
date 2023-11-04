import { getPosts } from '../data/posts';
import SmallCard from './SmallCard';

const LatestPosts = () => {
  const container = document.createElement('div');
  container.className = 'pt-4';

  const header = document.createElement('h2');
  header.innerText = 'Latest posts';
  header.className = 'font-semibold text-5 text-light-grey mb-3';
  container.appendChild(header);

  const postsContainer = document.createElement('div');
  postsContainer.className = 'grid space-rows-4 md:space-cols-4';
  container.appendChild(postsContainer);

  const posts = getPosts(5);

  if (!posts.length) {
    const emptyLabel = document.createElement('span');
    emptyLabel.innerText = 'No posts were published yet';
    emptyLabel.className = 'text-3.5 font-semibold py-4 text-grey w-full text-center block';

    postsContainer.appendChild(emptyLabel);

    return container;
  }

  postsContainer.classList.add('md:cols-5');
  posts.forEach((post) => postsContainer.appendChild(SmallCard(post)));

  return container;
};

export default LatestPosts;
