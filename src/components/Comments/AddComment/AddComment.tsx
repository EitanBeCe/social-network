import { useState } from 'react';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './AddComment.module.css';
import { v4 as uuidv4 } from 'uuid';
import { Id } from '../../../models/idType';

interface Props {
  closeAddCommMode: () => void;
  addCommentHandler: (id: Id, text: string) => void;
}

const AddComment: React.FC<Props> = ({ closeAddCommMode, addCommentHandler }) => {
  // States of user inputs of edidting comment
  const [text, setText] = useState('');
  const id = uuidv4();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    addCommentHandler(id, text);
  };

  return (
    <Card className={classes.add}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="commtext">Your Comment</label>
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
          <Button type="submit" className={classes.btn}>
            Add
          </Button>
          <Button className={classes.btn} onClick={closeAddCommMode}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddComment;
