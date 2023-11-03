import { PostsLocation } from './utils';
import { Post } from './types';

export const getPosts = (latest?: number): Post[] => {
  const jsonString = localStorage.getItem(PostsLocation);

  if (!jsonString) {
    return [];
  }

  const array = JSON.parse(jsonString);

  if (latest) {
    return array.slice(latest);
  }

  return array;
};
