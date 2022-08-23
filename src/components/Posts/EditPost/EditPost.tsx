import React, { useContext } from 'react';
import PostsContext from '../../../store/posts-context';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './EditPost.module.css';

interface Props {}

const EditPost: React.FC<Props> = () => {
  const postsCtx = useContext(PostsContext);
  // Form submit
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.edit}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            id="title"
            // value={enteredEmail}
            // onChange={emailChangeHandler}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <input
            required
            type="text"
            id="text"
            // value={enteredPassword}
            // onChange={passwordChangeHandler}
          />
        </div>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} onClick={submitHandler}>
            Edit
          </Button>
          <Button className={classes.btn} onClick={postsCtx.closeEditPost}>
            Go Back
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default EditPost;
