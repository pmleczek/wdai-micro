import { Post } from '../data/types';
import { navigate } from '../router/utils';
import { None } from './icons';

const SmallCard = (post: Post) => {
  const container = document.createElement('div');
  container.className = 'pointer hover:opacity h-full flex flex-col';
  container.addEventListener('click', () => {
    navigate(`/post?id=${post.id}`);
  });

  if (post.thumbnail) {
    const img = document.createElement('img');
    img.setAttribute('src', post.thumbnail);
    img.className = 'rounded-top-2 fit-cover object-center w-full h-30 block';

    container.appendChild(img);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className =
      'rounded-top-2 h-30 w-full flex items-center justify-center font-semibold bg-dark-light';
    placeholder.innerHTML = None;

    container.appendChild(placeholder);
  }

  const infoContainer = document.createElement('div');
  infoContainer.className =
    'rounded-bottom-2 border border-dark-grey px-4 py-4 border-dark-light flex-1';

  const date = document.createElement('p');
  date.innerText = new Date(
    post.updatedAt ?? post.createdAt,
  ).toLocaleDateString();
  date.className = 'text-3.5 font-medium text-grey';
  infoContainer.appendChild(date);

  const title = document.createElement('h3');
  title.innerText = post.title;
  title.className = 'font-semibold pt-2';

  infoContainer.appendChild(title);

  container.appendChild(infoContainer);

  return container;
};

export default SmallCard;
