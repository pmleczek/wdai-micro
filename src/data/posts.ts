import { faker } from '@faker-js/faker';
import { PostsLocation, toBase64 } from './utils';
import { Post, PostInput } from './types';

export const getPosts = (query: string, latest?: number): Post[] => {
  const jsonString = localStorage.getItem(PostsLocation);

  if (!jsonString) {
    return [];
  }

  const array = JSON.parse(jsonString) ?? [];

  const processedQuery = query.toLowerCase().trim();
  const filtered = (array as Post[]).filter(
    (item) =>
      item.title.toLowerCase().includes(processedQuery) ||
      item.content.toLowerCase().includes(processedQuery),
  );

  if (latest) {
    return filtered
      .sort((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf())
      .slice(0, latest);
  }

  return filtered;
};

export const getPost = (id: string): Post | undefined => {
  return getPosts('').find((post) => post.id === id);
};

export const createPost = async (input: PostInput) => {
  const posts = getPosts('');

  const thumbnail = input.image
    ? ((await toBase64(input.image)) as string)
    : undefined;

  const newPost: Post = {
    id: faker.string.uuid(),
    title: input.title,
    content: input.content,
    thumbnail,
    createdAt: new Date(),
    tags: input.tags ?? [],
  };

  posts.push(newPost);

  localStorage.setItem(PostsLocation, JSON.stringify(posts));
};
