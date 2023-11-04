import { toBase64 } from '../../data/utils';

const EmptyPreview =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

const onChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;

  const preview = document.querySelector(
    '#new-post-thumbnail-preview',
  ) as HTMLImageElement;

  if (preview && target.files?.length) {
    const base64 = (await toBase64(target.files[0])) as string;
    preview.setAttribute('src', base64);
  }

  const resetButton = document.querySelector('#reset-button');
  if (resetButton) {
    resetButton.classList.add(
      'border-negative',
      'text-negative',
      'pointer',
      'hover:opacity',
    );
  }
};

const onReset = () => {
  const input = document.querySelector('#new-post-thumbnail');
  if (input) {
    input.setAttribute('value', '');
  }

  const resetButton = document.querySelector('#reset-button');
  if (resetButton) {
    resetButton.classList.remove(
      'border-negative',
      'text-negative',
      'pointer',
      'hover:opacity',
    );
  }

  const preview = document.querySelector(
    '#new-post-thumbnail-preview',
  ) as HTMLImageElement;
  if (preview) {
    preview.setAttribute('src', EmptyPreview);
  }
};

const FileInput = (id: string) => {
  const container = document.createElement('div');

  const input = document.createElement('input');
  input.setAttribute('id', id);
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.setAttribute('hidden', 'true');
  input.addEventListener('change', onChange);

  container.appendChild(input);

  const preview = document.createElement('img');
  preview.setAttribute('id', 'new-post-thumbnail-preview');
  preview.className =
    'w-24 h-24 block border border-dark-light rounded-2 mb-3 fit-cover object-center bg-dark-light';
  preview.setAttribute(
    'src',
    'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
  );

  container.appendChild(preview);

  const buttonRow = document.createElement('div');
  buttonRow.className = 'flex gap-4';

  const button = document.createElement('button');
  button.innerText = 'Choose file';
  button.className =
    'px-4 py-2 rounded-2 text-3.5 border pointer font-medium hover:opacity';
  button.addEventListener('click', () => input.click());

  buttonRow.appendChild(button);

  const resetButton = document.createElement('button');
  resetButton.setAttribute('id', 'reset-button');
  resetButton.innerText = 'Reset';
  resetButton.setAttribute('disable', 'true');
  resetButton.className =
    'border rounded-2 px-4 py-2 text-3.5 font-medium border-grey text-grey';
  resetButton.addEventListener('click', onReset);

  buttonRow.appendChild(resetButton);

  container.appendChild(buttonRow);

  return container;
};

export default FileInput;
