import { Comment } from '../../models/commentType';
import { Id } from '../../models/idType';

import ButtonSmall from '../UI/ButtonSmall/ButtonSmall';

import classes from './Comments.module.css';
import SingleComment from './SingleComment';

interface Props {
  comments: Comment[];
  // closeCommentMode: () => void;
  openAddCommMode: () => void;
  updateComments: (id: Id, updatedComment: Comment) => void;
  deleteComment: (id: Id) => void;
}

const Comments: React.FC<Props> = ({
  comments,
  openAddCommMode,
  updateComments,
  deleteComment,
}) => {
  return (
    <>
      {/* <Card className={classes.comments}> */}
      <div className={classes['comment-head']}>
        {/* <h1>Comments</h1> */}
        {/* <Button onClick={closeCommentMode} className={classes.btn}>
          Back
        </Button> */}
        <ButtonSmall onClick={openAddCommMode} className={classes.btn}>
          Add
        </ButtonSmall>
      </div>

      {comments.map((c) => (
        <SingleComment
          key={c.id}
          id={c.id}
          comment={c}
          updateComments={updateComments}
          deleteComment={deleteComment}
        />
      ))}
      {/* </Card> */}
    </>
  );
};

export default Comments;
