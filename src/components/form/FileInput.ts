const FileInput = (id: string) => {
  const input = document.createElement('input');
  input.setAttribute('id', id);
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');

  return input;
};

export default FileInput;
