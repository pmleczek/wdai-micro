const Banner = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'container mx-auto px-6 fixed bottom-4 x-0';

  const container = document.createElement('div');
  container.setAttribute('id', 'banner');
  container.className =
    'flex items-center justify-between px-6 py-4 bg-dark-light border none rounded-2';
  container.innerText = 'Form contains errors. Please revise.';

  wrapper.appendChild(container);

  return wrapper;
};

export const showBanner = async (
  message: string,
  timeMs: number,
  variant: 'negative' | 'primary' = 'negative',
) => {
  const banner = document.querySelector('#banner');

  if (banner) {
    (banner as HTMLDivElement).innerText = message;
    banner.classList.add(`border-${variant}`);
    banner.classList.remove('none');

    await new Promise((r) => setTimeout(r, timeMs));

    banner.classList.remove(`border-${variant}`);
    banner.classList.add('none');
  }
};

export default Banner;
