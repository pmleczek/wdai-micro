const Label = (htmlFor: string, label: string) => {
  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', htmlFor);
  labelElement.innerText = label;
  labelElement.className = 'font-medium pt-4 mb-3 block text-light-grey';

  return labelElement;
};

export default Label;
