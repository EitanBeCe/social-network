import { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Posts.module.css';
import SinglePost from './SinglePost';

const DUMMY_POSTS = [
  {
    title: 'Post 1',
    id: 'p1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum ipsam doloremque incidunt architecto repellendus, sit reprehenderit fuga nam. Voluptate amet quasi repudiandae nisi sapiente dolore veniam consequatur, iusto expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum ipsam doloremque incidunt architecto repellendus, sit reprehenderit fuga nam. Voluptate amet quasi repudiandae nisi sapiente dolore veniam consequatur, iusto expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum ipsam doloremque incidunt architecto repellendus, sit reprehenderit fuga nam. Voluptate amet quasi repudiandae nisi sapiente dolore veniam consequatur, iusto expedita.',
  },
  {
    title: 'Post 2',
    id: 'p2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum ipsam doloremque incidunt architecto repellendus, sit reprehenderit fuga nam. Voluptate amet quasi repudiandae nisi sapiente dolore veniam consequatur, iusto expedita.',
  },
  {
    title: 'Post 3',
    id: 'p3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum ipsam doloremque incidunt architecto repellendus, sit reprehenderit fuga nam. Voluptate amet quasi repudiandae nisi sapiente dolore veniam consequatur, iusto expedita.',
  },
];

const Posts: React.FC = () => {
  // List of posts
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [modalOpen, setModalOpen] = useState(false); // Modal if user pressed 'Delete post'

  // *************** https://stackoverflow.com/questions/32658604/react-deleting-from-middle-of-list-removes-last-element-instead

  // *************** WHATS id type now after firebase?
  const deletePostHandler = (id: number | string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));

    setModalOpen(false);
  };

  const dummy = () => {};
  return (
    <Card className={classes.posts}>
      <div className={classes['post-head']}>
        <h1>Posts</h1>
        <Button onClick={dummy} className={classes.btn}>
          Add Post
        </Button>
      </div>

      {posts.map((p) => (
        <SinglePost
          key={p.id}
          id={p.id}
          title={p.title}
          text={p.text}
          deletePost={deletePostHandler.bind(null, p.id)}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      ))}
    </Card>
  );
};

export default Posts;
