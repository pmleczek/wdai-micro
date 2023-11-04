const ErrorMessage = (id: string) => {
  const errorMessage = document.createElement('span');
  errorMessage.setAttribute('id', id);
  errorMessage.className = 'text-3.5 font-medium text-negative';

  return errorMessage;
};

export default ErrorMessage;
