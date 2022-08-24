import { v4 as uuidv4 } from 'uuid';

export const DUMMY_POSTS = [
  {
    title: 'Post 1',
    id: uuidv4(),
    text: 'React is the best!!!!',
    likes: 16,
  },
  {
    title: 'Post 2',
    id: uuidv4(),
    text: 'TS and tsx are important',
    likes: 17,
  },
  {
    title: 'Post 3',
    id: uuidv4(),
    text: 'Hooks are nice',
    likes: 15,
  },
];
