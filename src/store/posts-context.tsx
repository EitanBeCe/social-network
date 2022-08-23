import React, { useState } from 'react';
import { DUMMY_POSTS } from '../components/helpers/dummyPosts';
import { Id } from '../components/models/idType';
import { Post } from '../components/models/postType';

const PostsContext = React.createContext({
  posts: DUMMY_POSTS,
  deletePostHandler: (id: Id) => {},
  modalOpen: false,
  onOpenModal: () => {},
  onCloseModal: () => {},
  updatePosts: (id: Id, updatedPost: Post) => {},
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
  const onOpenModal = () => setModalOpen(true);

  const onCloseModal = () => setModalOpen(false);

  // ******* EDIT post *********
  const updatePosts = (id: Id, updatedPost: Post) => {
    setPosts(posts.map((p) => (p.id === id ? updatedPost : p)));
  };

  return (
    <PostsContext.Provider
      value={{
        deletePostHandler: deletePostHandler,
        posts: posts,
        modalOpen: modalOpen,
        onOpenModal: onOpenModal,
        onCloseModal: onCloseModal,
        updatePosts: updatePosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
