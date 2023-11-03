import '../scripts/home';
import { LatestPosts } from '../components';
import { Page } from '../router/types';

const Main = () => {
  const container = document.createElement('div');
  container.className = 'container mx-auto px-6';

  container.appendChild(LatestPosts());

  return container;
};

const Home: Page = {
  main: Main(),
};

export default Home;
