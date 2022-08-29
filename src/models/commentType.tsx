import { Id } from './idType';

export type Comment = {
  id: Id;
  text: string;
  likes: number;
  isLiked: boolean;
};
