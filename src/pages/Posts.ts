import { Page } from "../router/types";

const Main = () => {
  const container = document.createElement('div');
  container.className = 'container mx-auto px-6 pt-4';

  return container;
};

const Posts: Page = {
  main: Main,
};

export default Posts;
