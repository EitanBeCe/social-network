import { useContext, useState } from 'react';
import PostsContext from '../../../store/posts-context';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './EditPost.module.css';

import { Post } from '../../../models/postType';

interface Props {
  closeEditPost: () => void;
  post: Post;
}

const EditPost: React.FC<Props> = ({ closeEditPost, post }) => {
  const { updatePosts } = useContext(PostsContext);
  const { id } = post;

  // States of user inputs of edidting post
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);

  const updatedPost = { id, title, text, likes: 0, isLiked: post.isLiked };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    updatePosts(id, updatedPost);
  };

  return (
    <Card className={classes.edit}>
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
          <Button type="submit" className={classes.btn} onClick={submitHandler}>
            Edit
          </Button>
          <Button className={classes.btn} onClick={closeEditPost}>
            Go Back
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default EditPost;
