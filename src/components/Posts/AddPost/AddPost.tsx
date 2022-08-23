import { useContext, useState } from 'react';
import PostsContext from '../../../store/posts-context';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './AddPost.module.css';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  // closeEditPost: () => void;
  // post: Post;
}

const AddPost: React.FC<Props> = () => {
  const { closeAddMode, addPostHandler } = useContext(PostsContext);

  // States of user inputs of edidting post
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const id = uuidv4();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    addPostHandler(id, title, text);
  };

  return (
    <Card className={classes.add}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="posttext">Text</label>
          <textarea
            name="posttext"
            id="posttext"
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
            Add Post
          </Button>
          <Button className={classes.btn} onClick={closeAddMode}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddPost;
