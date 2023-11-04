const Input = (id: string, placeholder: string) => {
  const input = document.createElement('input');
  input.setAttribute('id', id);
  input.setAttribute('placeholder', placeholder);
  input.setAttribute('type', 'text');
  input.className =
    'border border-dark-light font-semibold px-4 py-3 rounded-2 placeholder:grey w-full';

  return input;
};

export default Input;
