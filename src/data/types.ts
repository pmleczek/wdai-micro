export interface Post {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt?: Date;
  content: string;
  thumbnail?: string;
  tags: string[];
}

export interface PostInput {
  title: string;
  image?: File;
  content: string;
  tags?: string[];
}

export interface Tag {
  value: string;
}