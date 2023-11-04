export const PostsLocation = 'posts';

export const toBase64 = async (file: File) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result && typeof event.target.result === 'string') {
        resolve(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  });
};

export const uuid = () => {
  const timestamp = new Date().getTime().toString(16);
  const randomPart = 'xxxxxxxx'.replace(/[x]/g, function () {
    return ((Math.random() * 16) | 0).toString(16);
  });

  return `${timestamp}-${randomPart}`;
};
