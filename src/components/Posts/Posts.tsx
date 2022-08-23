import { useContext } from 'react';
import PostsContext from '../../store/posts-context';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import EditPost from './EditPost/EditPost';
import classes from './Posts.module.css';
import SinglePost from './SinglePost';

const Posts: React.FC = () => {
  const postsCtx = useContext(PostsContext);

  if (postsCtx.edit) return <EditPost />;

  const dummy = () => {};
  return (
    <Card className={classes.posts}>
      <div className={classes['post-head']}>
        <h1>Posts</h1>
        <Button onClick={dummy} className={classes.btn}>
          Add Post
        </Button>
      </div>

      {postsCtx.posts.map((p) => (
        <SinglePost
          key={p.id}
          title={p.title}
          text={p.text}
          deletePost={postsCtx.deletePostHandler.bind(null, p.id)}
          id={p.id}
        />
      ))}
    </Card>
  );
};

export default Posts;
