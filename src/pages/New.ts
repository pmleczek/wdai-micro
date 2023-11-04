import Banner, { showBanner } from '../components/Banner';
import {
  ErrorMessage,
  FileInput,
  Input,
  Label,
  TextArea,
} from '../components/form';
import { createPost } from '../data/posts';
import { Page } from '../router/types';
import { navigate } from '../router/utils';

const onSubmit = async (event: SubmitEvent) => {
  event.preventDefault();

  const titleLabel = document.querySelector('#label-new-post-title');
  const contentLabel = document.querySelector('#label-new-post-content');

  const titleError = document.querySelector(
    '#new-title-error',
  ) as HTMLSpanElement;
  const contentError = document.querySelector(
    '#new-content-error',
  ) as HTMLSpanElement;

  titleError.innerText = '';
  contentError.innerText = '';

  const titleInput = document.querySelector(
    '#new-post-title',
  ) as HTMLInputElement;
  titleInput.classList.remove('border-negative', 'text-negative');
  titleLabel?.classList.remove('text-negative');
  const title = titleInput.value.trim() ?? '';

  const contentInput = document.querySelector(
    '#new-post-content',
  ) as HTMLInputElement;
  contentInput.classList.remove('border-negative', 'text-negative');
  contentLabel?.classList.remove('text-negative');
  const content = contentInput.value.trim() ?? '';

  const fileInput = document.querySelector(
    '#new-post-thumbnail',
  ) as HTMLInputElement;
  const image = fileInput.files?.length ? fileInput.files[0] : undefined;

  if (title && content) {
    await createPost({
      title,
      content,
      image,
    });

    navigate('/posts');
  } else {
    showBanner('Form contains errors. Please revise.', 5000);

    if (!title) {
      titleInput.classList.add('border-negative');
      titleLabel?.classList.add('text-negative');
      titleError.innerText = 'Please provide a valid title';
    }

    if (!content) {
      contentInput.classList.add('border-negative');
      contentLabel?.classList.add('text-negative');
      contentError.innerText = 'Please provide valid content';
    }
  }
};

const Header = () => {
  const container = document.createElement('div');
  container.className = 'container mx-auto px-6';

  const header = document.createElement('h1');
  header.innerText = 'New Post';
  header.className = 'text-6 font-semibold border-b border-b-dark-light py-4';
  container.appendChild(header);

  return container;
};

const Main = () => {
  const container = document.createElement('form');
  container.className = 'container mx-auto px-6 pb-6 flex-1 flex flex-col';

  container.appendChild(Label('new-post-title', 'Title'));
  container.appendChild(Input('new-post-title', 'Title'));
  container.appendChild(ErrorMessage('new-title-error'));

  container.appendChild(Label('new-post-content', 'Content'));
  container.appendChild(TextArea('new-post-content', 'Post content'));
  container.appendChild(ErrorMessage('new-content-error'));

  container.appendChild(Label('new-post-thumbnail', 'Thumbnail'));
  container.appendChild(FileInput('new-post-thumbnail'));

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.className =
    'font-semibold bg-primary w-full py-3 text-center rounded-2 pointer hover:opacity mt-6';
  submitButton.innerText = 'Create';
  container.appendChild(submitButton);

  container.appendChild(Banner());

  container.addEventListener('submit', onSubmit);

  return container;
};

const New: Page = {
  header: Header,
  main: Main,
};

export default New;
