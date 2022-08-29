import { useState } from 'react';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './EditComment.module.css';

import { Comment } from '../../../models/commentType';
import { Id } from '../../../models/idType';

interface Props {
  closeEditComm: () => void;
  comment: Comment;
  updateComments: (id: Id, updatedComment: Comment) => void;
}

const EditComment: React.FC<Props> = ({ closeEditComm, comment, updateComments }) => {
  const { id } = comment;

  // States of user inputs of edidting comment
  const [text, setText] = useState(comment.text);

  const updatedComment = { id, text, likes: 0, isLiked: comment.isLiked };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    updateComments(id, updatedComment);
  };

  return (
    <Card className={classes.edit}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          {/* <label htmlFor="commtext">Text</label> */}
          <textarea
            name="commtext"
            id="commtext"
            style={{
              width: 'auto',
              minHeight: '200px',
              maxHeight: '400px',
              maxWidth: '100%',
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} onClick={submitHandler}>
            Edit
          </Button>
          <Button className={classes.btn} onClick={closeEditComm}>
            Go Back
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default EditComment;
