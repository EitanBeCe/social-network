import classes from './SinglePost.module.css';
// import ReactModal from 'react-modal';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { useContext } from 'react';
import ReactModal from 'react-modal';

import PostsContext from '../../store/posts-context';

interface Props {
  title: string;
  text: string;
  deletePost: () => void;
  // modalOpen: boolean;
  // onOpenModal: () => void;
  id: string;
}

const SinglePost: React.FC<Props> = ({ text, title, deletePost, id }) => {
  const postsCtx = useContext(PostsContext);

  return (
    <Card className={classes['single-post']}>
      <h2>{title}</h2>
      <div>{text}</div>
      <div className={classes['post-footer']}>
        <h5>LIKE</h5>
        <Button onClick={postsCtx.openEditPost} className={classes.btn}>
          Edit
        </Button>
        <Button
          onClick={postsCtx.deletePostHandler.bind(null, id)} // postsCtx.deletePostHandler.bind(null, id)  or   deletePost
          className={classes.btn}
        >
          Delete
        </Button>
      </div>

      {/* Deleting the wrong post, if doing it from modal */}
      <ReactModal
        closeTimeoutMS={500}
        isOpen={postsCtx.modalOpen}
        onRequestClose={postsCtx.onCloseModal} // To close on overlay
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
          <Button onClick={postsCtx.onCloseModal} className={classes.btn}>
            Close
          </Button>
        </div>
      </ReactModal>
    </Card>
  );
};

export default SinglePost;
