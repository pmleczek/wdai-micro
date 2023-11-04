import { FileInput, Input, Label, TextArea } from '../components/form';
import { createPost } from '../data/posts';
import { Page } from '../router/types';
import { navigate } from '../router/utils';

const onSubmit = async (event: SubmitEvent) => {
  event.preventDefault();

  const titleInput = document.querySelector('#new-post-title');
  const title = (titleInput as HTMLInputElement).value ?? '';

  const contentInput = document.querySelector(
    '#new-post-content',
  ) as HTMLInputElement;
  const content = contentInput.value ?? '';

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
  container.className = 'container mx-auto px-6';

  container.appendChild(Label('new-post-title', 'Title'));
  container.appendChild(Input('new-post-title', 'Title'));

  container.appendChild(Label('new-post-content', 'Content'));
  container.appendChild(TextArea('new-post-content', 'Post content'));

  container.appendChild(Label('new-post-thumbnail', 'Thumbnail'));
  container.appendChild(FileInput('new-post-thumbnail'));

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.className =
    'font-semibold bg-primary w-full py-3 text-center rounded-2 pointer hover:opacity mt-6';
  submitButton.innerText = 'Create';
  container.appendChild(submitButton);

  container.addEventListener('submit', onSubmit);

  return container;
};

const New: Page = {
  header: Header,
  main: Main,
};

export default New;
