const TextArea = (id: string, placeholder: string) => {
  const textArea = document.createElement('textarea');
  textArea.setAttribute('id', id);
  textArea.setAttribute('placeholder', placeholder);
  textArea.className =
    'border border-dark-light font-semibold px-4 py-3 rounded-2 flex-1 placeholder:grey w-full';

  return textArea;
};

export default TextArea;
