import { Post } from '../data/types';
import { navigate } from '../router/utils';
import { ChevronRight, None } from './icons';

const LengthLimit = 120;

const truncate = (content: string) => {
  if (content.length <= LengthLimit) {
    return content;
  }

  return content.substring(0, LengthLimit) + '...';
};

const PostRow = (post: Post) => {
  const container = document.createElement('div');
  container.addEventListener('click', () =>
    navigate(`/wdai-micro/post?id=${post.id}`),
  );
  container.className =
    'hover:opacity gap-4 flex items-center justify-between pointer bg-dark-light rounded-2 w-full py-4 px-4 md:px-6';

  const leftContainer = document.createElement('div');
  leftContainer.className = 'flex flex-1 items-center gap-4 md:gap-8';

  if (post.thumbnail) {
    const img = document.createElement('img');
    img.setAttribute('src', post.thumbnail);
    img.className = 'rounded-2 fit-cover object-center w-24 h-24 block';

    leftContainer.appendChild(img);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className =
      'rounded-2 w-24 h-24 bg-dark-lighter flex items-center justify-center';
    placeholder.innerHTML = None;

    leftContainer.appendChild(placeholder);
  }

  const textContainer = document.createElement('div');
  textContainer.className = 'flex flex-1 flex-col gap-1';

  const title = document.createElement('h2');
  title.innerText = post.title;
  title.className = 'md:text-5 font-semibold text-light-grey';
  textContainer.appendChild(title);

  const contentPreview = document.createElement('p');
  contentPreview.innerText = truncate(post.content);
  contentPreview.className = 'text-3.5 text-grey md:max-w-3/5';
  textContainer.appendChild(contentPreview);

  leftContainer.appendChild(textContainer);
  container.appendChild(leftContainer);

  const icon = document.createElement('span');
  icon.innerHTML = ChevronRight;
  container.appendChild(icon);

  return container;
};

export default PostRow;
