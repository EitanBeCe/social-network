import { v4 as uuidv4 } from 'uuid';
import { Comment } from '../../models/commentType';

export const DUMMY_COMMENTS: Comment[] = [
  {
    id: uuidv4(),
    text: 'Comment 1',
    likes: 2,
    isLiked: false,
  },
  {
    id: uuidv4(),
    text: 'Comment 2',
    likes: 4,
    isLiked: false,
  },
  {
    id: uuidv4(),
    text: 'Comment 3',
    likes: 6,
    isLiked: false,
  },
];
