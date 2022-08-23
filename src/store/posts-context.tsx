import React, { useState } from 'react';
import { DUMMY_POSTS } from '../components/helpers/dummyPosts';
import { Id } from '../components/models/idType';
import { Post } from '../components/models/postType';

const PostsContext = React.createContext({
  posts: DUMMY_POSTS,
  deletePostHandler: (id: Id) => {},
  modalOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  updatePosts: (id: Id, updatedPost: Post) => {},
  addMode: false,
  openAddMode: () => {},
  closeAddMode: () => {},
  addPostHandler: (id: Id, title: string, text: string) => {},
});

interface Props {
  children: React.ReactNode;
}

export const PostsCtxProvider: React.FC<Props> = ({ children }) => {
  // List of posts
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [modalOpen, setModalOpen] = useState(false); // Modal if user pressed 'Delete post'

  // ****** WHATS id type now after firebase?
  const deletePostHandler = (id: Id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
    console.log(id);

    setModalOpen(false);
  };

  // ********* MODAL **********

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => setModalOpen(false);

  // ******** ADD post *********

  const [addMode, setAddMode] = useState(false);
  const openAddMode = () => setAddMode(true);
  const closeAddMode = () => setAddMode(false);

  const addPostHandler = (id: Id, title: string, text: string) => {
    setPosts((prev) => [{ id, title, text }, ...prev]);
  };
  // {id: uuidv4(), title, text}

  // ******* EDIT post *********
  const updatePosts = (id: Id, updatedPost: Post) => {
    setPosts(posts.map((p) => (p.id === id ? updatedPost : p)));
  };

  return (
    <PostsContext.Provider
      value={{
        posts,

        deletePostHandler,

        modalOpen,
        handleOpenModal,
        handleCloseModal,

        updatePosts,

        addMode,
        openAddMode,
        closeAddMode,
        addPostHandler,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
