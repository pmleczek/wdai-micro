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
