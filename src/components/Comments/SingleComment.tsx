import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import Button from '../UI/Button/Button';
import classes from './SingleComment.module.css';

// import CommentsContext from '../../store/comments-context';
import EditComment from './EditComment/EditComment';
import Card from '../UI/Card/Card';

import { Id } from '../../models/idType';
import { Comment } from '../../models/commentType';

interface Props {
  id: string;
  comment: Comment;
  updateComments: (id: Id, updatedComment: Comment) => void;
  deleteComment: (id: Id) => void;
  updateCommLikes: (id: Id, updatedLike: number) => void;
}

const SingleComment: React.FC<Props> = ({
  id,
  comment,
  updateComments,
  deleteComment,
  updateCommLikes,
}) => {
  // const { updateCommLikes } = useContext(CommentsContext);

  // ******** LIKES **********

  const [like, setLike] = useState(comment.likes);
  const [likeActive, setLikeActive] = useState(comment.isLiked);

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
    updateCommLikes(id, like);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [like]);

  // ************ MODAL for deliting comment *************

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // ******* EDIT comment ********

  const [edit, setEdit] = useState(false);
  const openEditComm = () => setEdit(true);
  const closeEditComm = () => setEdit(false);

  useEffect(() => {
    closeEditComm();
  }, [comment]);

  if (edit)
    return (
      <EditComment
        closeEditComm={closeEditComm}
        comment={comment}
        updateComments={updateComments}
      />
    );

  return (
    <>
      <Card className={classes['single-comment']}>
        <div>{comment.text}</div>
        <div className={classes['comment-footer']}>
          <div className={classes.content}>
            <button
              className={
                likeActive
                  ? `${classes.heart} ${classes['heart-already-active']}` // I didnt figure it out with class 'heart-active'. It creates an animation, but it animates again on exit Editing post. Tryed with one more state, useffect, timeout and refs
                  : classes.heart
              }
              onClick={likeHandler.bind(null, id)}
            />
            <span className={classes['hearts-amount']}>{like}</span>
          </div>
          <Button onClick={openEditComm} className={classes.btn}>
            Edit
          </Button>
          <Button onClick={handleOpenModal} className={classes.btn}>
            Delete
          </Button>
        </div>
      </Card>

      <ReactModal
        closeTimeoutMS={500}
        isOpen={modalOpen}
        onRequestClose={handleCloseModal} // To close on overlay
        contentLabel="Modal"
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgb(0, 0, 0, 0.4)' },
          content: {
            padding: '1rem 1.2rem',
            margin: '1rem auto',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
            maxWidth: '40rem',
            borderRadius: '10px',
            textAlign: 'center',
            color: '#fff',
            background: '#372c31',
            bottom: 'auto',
            top: '20vh',
          },
        }}
      >
        <h2>Are you sure?</h2>
        <div className={classes['modal-footer']}>
          <Button onClick={deleteComment.bind(null, id)} className={classes.btn}>
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

export default SingleComment;
