import DataSection from '../components/Settings/DataSection';
import { Page } from '../router/types';

const Header = () => {
  const container = document.createElement('div');
  container.className = 'container mx-auto px-6';

  const header = document.createElement('h1');
  header.innerText = 'Settings';
  header.className = 'text-6 font-semibold border-b border-b-dark-light py-4'
  container.appendChild(header);

  return container;
};

const Main = () => {
  const container = document.createElement('div');
  container.className = 'container mx-auto px-6';

  container.appendChild(DataSection());

  return container;
};

const Settings: Page = {
  header: Header(),
  main: Main(),
};

export default Settings
