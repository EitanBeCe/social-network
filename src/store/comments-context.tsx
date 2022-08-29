import React, { useState } from 'react';
import { DUMMY_COMMENTS } from '../components/helpers/dummyComments';
import { Comment } from '../models/commentType';
import { Id } from '../models/idType';

const CommentsContext = React.createContext({
  comments: DUMMY_COMMENTS,
  commentMode: false,
  openCommentMode: () => {},
  closeCommentMode: () => {},

  deleteComment: (id: Id) => {},

  updateComments: (id: Id, updatedComment: Comment) => {},

  updateCommLikes: (id: Id, updatedLike: number) => {},

  addCommMode: false,
  openAddCommMode: () => {},
  closeAddCommMode: () => {},
  addCommentHandler: (id: Id, text: string) => {},
});

interface Props {
  children: React.ReactNode;
}

export const CommentsCtxProvider: React.FC<Props> = ({ children }) => {
  const [comments, setComments] = useState(DUMMY_COMMENTS); // List of all comments
  const [commentMode, setCommentMode] = useState(false);

  const openCommentMode = () => setCommentMode(true);

  const closeCommentMode = () => setCommentMode(false);

  // ********* MODAL for deleting comment ********** //

  const deleteComment = (id: Id) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  // ******** ADD Comment ********* //

  const [addCommMode, setAddCommMode] = useState(false);
  const openAddCommMode = () => setAddCommMode(true);
  const closeAddCommMode = () => setAddCommMode(false);

  const addCommentHandler = (id: Id, text: string) => {
    setComments((prev) => [{ id, text, likes: 0, isLiked: false }, ...prev]);
  };

  // ******* EDIT Comment ********* //

  const updateComments = (id: Id, updatedComment: Comment) => {
    setComments(comments.map((c) => (c.id === id ? updatedComment : c)));
  };

  // ******* LIKES change ********* //

  const updateCommLikes = (id: Id, updatedLike: number) => {
    setComments((prev) => prev.map((c) => (c.id === id ? { ...c, likes: updatedLike } : c)));
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        commentMode,
        openCommentMode,
        closeCommentMode,

        deleteComment,

        // modalOpen,
        // handleOpenModal,
        // handleCloseModal,

        updateComments,

        updateCommLikes,

        addCommMode,
        openAddCommMode,
        closeAddCommMode,
        addCommentHandler,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsContext;
