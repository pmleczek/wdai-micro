import { faker } from '@faker-js/faker';
import { PostsLocation } from '../../data/utils';
import { createPost } from '../../data/posts';
import { showBanner } from '../Banner';

const SectionItem = (
  title: string,
  label: string,
  buttonLabel: string,
  onClick: () => void,
  variant: 'negative' | 'primary' = 'negative',
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
  button.className = `font-medium px-4 py-2 rounded-2 border ${
    variant === 'negative'
      ? 'border-negative text-negative'
      : 'border-primary text-primary'
  } pointer hover:opacity text-3.5`;
  button.addEventListener('click', onClick);
  container.appendChild(button);

  return container;
};

const onEraseContent = () => {
  localStorage.removeItem(PostsLocation);
  showBanner('Data erased successfully.', 5000);
};

const onGenerate = async () => {
  for (let i = 0; i < 10; i++) {
    const includeImage = faker.number.float() <= 0.75;
    let image = undefined;

    if (includeImage) {
      const response = await fetch(
        faker.image.urlLoremFlickr({ category: 'cats' }),
      );
      const blob = await response.blob();
      const file = new File([blob], `${faker.string.uuid()}`);
      image = file;
    }

    await createPost({
      title: faker.lorem.words({ min: 3, max: 5 }),
      content: faker.lorem.paragraphs({ min: 10, max: 20 }),
      image,
    });
  }

  showBanner('Posts created successfully.', 5000, 'primary');
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

  container.appendChild(
    SectionItem(
      'Generate random posts',
      'This will generate 10 random posts',
      'Generate',
      onGenerate,
      'primary',
    ),
  );

  return container;
};

export default DataSection;
