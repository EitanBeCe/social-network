import { Id } from './idType';

export type Post = {
  id: Id;
  title: string;
  text: string;
  likes: number;
  isLiked: boolean;
};
