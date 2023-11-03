import { PostsLocation } from '../../data/utils';

const SectionItem = (
  title: string,
  label: string,
  buttonLabel: string,
  onClick: () => void,
) => {
  const container = document.createElement('div');
  container.className = 'px-4 py-4 flex items-center justify-between';

  const textContainer = document.createElement('div');

  const titleText = document.createElement('h3');
  titleText.className = 'font-semibold py-2';
  titleText.innerText = title;
  textContainer.appendChild(titleText);

  const labelText = document.createElement('p');
  labelText.className = 'text-grey text-3.5 font-medium';
  labelText.innerText = label;
  textContainer.appendChild(labelText);

  container.appendChild(textContainer);

  const button = document.createElement('button');
  button.innerText = buttonLabel;
  button.className =
    'font-medium px-4 py-2 rounded-2 border border-negative pointer hover:opacity text-3.5 text-negative';
  button.addEventListener('click', onClick);
  container.appendChild(button);

  return container;
};

const onEraseContent = () => {
  localStorage.removeItem(PostsLocation);
};

const DataSection = () => {
  const container = document.createElement('section');
  container.className = 'py-4';

  const header = document.createElement('h2');
  header.innerText = 'Data';
  header.className = 'font-semibold text-5';
  container.appendChild(header);

  container.appendChild(
    SectionItem(
      'Erase content',
      'This will permanently erase all content',
      'Erase',
      onEraseContent,
    ),
  );

  return container;
};

export default DataSection;
