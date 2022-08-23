import classes from './SinglePost.module.css';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { useContext, useEffect, useState } from 'react';
// import ReactModal from 'react-modal';

import PostsContext from '../../store/posts-context';
import EditPost from './EditPost/EditPost';

import { Post } from '../models/postType';

interface Props {
  deletePost: () => void;
  // modalOpen: boolean;
  // onOpenModal: () => void;
  id: string;
  post: Post;
}

const SinglePost: React.FC<Props> = ({ deletePost, id, post }) => {
  const { handleOpenModal, handleCloseModal, modalOpen, deletePostHandler } =
    useContext(PostsContext);

  // Entering Edit mode
  const [edit, setEdit] = useState(false);
  const openEditPost = () => setEdit(true);
  const closeEditPost = () => setEdit(false);

  useEffect(() => {
    closeEditPost();
  }, [post]);

  if (edit) return <EditPost closeEditPost={closeEditPost} post={post} />;

  return (
    <>
      <Card className={classes['single-post']}>
        <h2>{post.title}</h2>
        <div>{post.text}</div>
        <div className={classes['post-footer']}>
          <span className={classes.heart}></span>
          <span className={classes['hearts-amount']}></span>
          <Button onClick={openEditPost} className={classes.btn}>
            Edit
          </Button>
          <Button
            onClick={deletePostHandler.bind(null, id)} // deletePostHandler.bind(null, id)  or   deletePost    or     handleOpenModal
            className={classes.btn}
          >
            Delete
          </Button>
        </div>
      </Card>
    </>
  );
};

export default SinglePost;

// Deleting the wrong post, if doing it from modal
/* <ReactModal
        closeTimeoutMS={500}
        isOpen={modalOpen}
        onRequestClose={handleCloseModal} // To close on overlay
        // onAfterClose={postsCtx.deletePostHandler.bind(null, id)} // It removes all the posts
        contentLabel="Modal"
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgb(0, 0, 0, 0.4)' },
          content: {
            padding: '2rem 3rem',
            margin: '1rem auto',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
            maxWidth: '40rem',
            borderRadius: '10px',
            textAlign: 'start',
            color: '#fff',
            background: '#372c31',
            bottom: 'auto',
            top: '20vh',
          },
        }}
      >
        <h2>Are you sure you want to delete the post?</h2>

        <div className={classes['modal-footer']}>
          <Button
            onClick={deletePost}
            //  onClick={postsCtx.deletePostHandler.bind(null, id)}
            //   onClick={deletePost}
            className={classes.btn}
          >
            Delete
          </Button>
          <Button onClick={handleCloseModal} className={classes.btn}>
            Close
          </Button>
        </div>
      </ReactModal> */
