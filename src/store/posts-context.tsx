import React, { useState } from 'react';
import { DUMMY_POSTS } from '../components/helpers/dummyPosts';

const PostsContext = React.createContext({
  posts: DUMMY_POSTS,
  deletePostHandler: (id: number | string) => {},
  modalOpen: false,
  onOpenModal: () => {},
  onCloseModal: () => {},
  edit: false,
  openEditPost: () => {},
  closeEditPost: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const PostsCtxProvider: React.FC<Props> = ({ children }) => {
  // List of posts
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [modalOpen, setModalOpen] = useState(false); // Modal if user pressed 'Delete post'

  // *************** WHATS id type now after firebase?
  const deletePostHandler = (id: number | string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
    console.log(id);

    setModalOpen(false);
  };

  // ********* MODAL

  const onOpenModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => {
    setModalOpen(false);
  };

  // ********* EDIT POST
  // Entering Edit mode
  const [edit, setEdit] = useState(false);
  const openEditPost = () => {
    setEdit(true);
  };
  const closeEditPost = () => {
    setEdit(false);
  };

  return (
    <PostsContext.Provider
      value={{
        deletePostHandler: deletePostHandler,
        posts: posts,
        modalOpen: modalOpen,
        onOpenModal: onOpenModal,
        onCloseModal: onCloseModal,
        edit: edit,
        openEditPost: openEditPost,
        closeEditPost: closeEditPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
