import { useContext } from 'react';
import CommentsContext from '../../store/comments-context';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Comments.module.css';
import SingleComment from './SingleComment';

const Comments: React.FC = () => {
  const { comments, openAddCommMode, closeCommentMode } = useContext(CommentsContext);

  return (
    <>
      <Card className={classes.comments}>
        <div className={classes['comment-head']}>
          {/* <h1>Comments</h1> */}
          <Button onClick={closeCommentMode} className={classes.btn}>
            Back
          </Button>
          <Button onClick={openAddCommMode} className={classes.btn}>
            Add
          </Button>
        </div>

        {comments.map((c) => (
          <SingleComment key={c.id} id={c.id} comment={c} />
        ))}
      </Card>
    </>
  );
};

export default Comments;
