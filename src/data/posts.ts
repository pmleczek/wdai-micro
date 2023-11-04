import { PostsLocation, toBase64, uuid } from './utils';
import { Post, PostInput } from './types';

export const getPosts = (latest?: number): Post[] => {
  const jsonString = localStorage.getItem(PostsLocation);

  if (!jsonString) {
    return [];
  }

  const array = JSON.parse(jsonString);

  if (latest) {
    return array.slice(0, latest);
  }

  return array;
};

export const createPost = async (input: PostInput) => {
  const posts = getPosts();

  const thumbnail = input.image
    ? ((await toBase64(input.image)) as string)
    : undefined;

  const newPost: Post = {
    id: uuid(),
    title: input.title,
    content: input.title,
    thumbnail,
    createdAt: new Date(),
    tags: input.tags ?? [],
  };

  posts.push(newPost);

  localStorage.setItem(PostsLocation, JSON.stringify(posts));
};
