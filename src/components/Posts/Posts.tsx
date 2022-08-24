import { useContext } from 'react';
import PostsContext from '../../store/posts-context';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Posts.module.css';
import SinglePost from './SinglePost';

const Posts: React.FC = () => {
  const { posts, openAddMode } = useContext(PostsContext);

  return (
    <>
      <Card className={classes.posts}>
        <div className={classes['post-head']}>
          <h1>Posts</h1>
          <Button onClick={openAddMode} className={classes.btn}>
            Add Post
          </Button>
        </div>

        {posts.map((p) => (
          <SinglePost key={p.id} id={p.id} post={p} />
        ))}
      </Card>
    </>
  );
};

export default Posts;
