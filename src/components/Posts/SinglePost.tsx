import classes from './SinglePost.module.css';
import { useContext, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import PostsContext from '../../store/posts-context';
import EditPost from './EditPost/EditPost';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import { Post } from '../models/postType';
import { Id } from '../models/idType';

interface Props {
  // deletePost: () => void;
  // modalOpen: boolean;
  // onOpenModal: () => void;
  id: string;
  post: Post;
}

const SinglePost: React.FC<Props> = ({ id, post }) => {
  const {
    // handleOpenModal,
    // handleCloseModal,
    // modalOpen,
    deletePost,
    updateLikes,
  } = useContext(PostsContext);

  // ******** LIKES **********

  const [like, setLike] = useState(post.likes);
  const [likeActive, setLikeActive] = useState(false);

  const likeHandler = () => {
    if (likeActive) {
      setLikeActive(false);
      setLike((prev) => prev - 1);
    } else {
      setLikeActive(true);
      setLike((prev) => prev + 1);
    }
  };

  useEffect(() => {
    updateLikes(id, like);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [like]);

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const deletePostHandler = (id: Id) => {
    deletePost(id);
  };

  // ******* EDIT post ********

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
          <div className={classes.content}>
            <button
              className={
                likeActive
                  ? `${classes.heart} ${classes['heart-active']}`
                  : classes.heart
              }
              onClick={likeHandler.bind(null, id)}
            />
            <span className={classes['hearts-amount']}>{like}</span>
          </div>
          <Button onClick={openEditPost} className={classes.btn}>
            Edit
          </Button>
          <Button
            onClick={handleOpenModal} // deletePostHandler.bind(null, id)  or   deletePost    or     handleOpenModal
            className={classes.btn}
          >
            Delete
          </Button>
        </div>
      </Card>

      <ReactModal
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
            onClick={deletePostHandler.bind(null, id)}
            className={classes.btn}
          >
            Delete
          </Button>
          <Button onClick={handleCloseModal} className={classes.btn}>
            Close
          </Button>
        </div>
      </ReactModal>
    </>
  );
};

export default SinglePost;
