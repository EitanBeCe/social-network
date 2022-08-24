import React, { useState } from 'react';
import { DUMMY_POSTS } from '../components/helpers/dummyPosts';
import { Id } from '../components/models/idType';
import { Post } from '../components/models/postType';

const PostsContext = React.createContext({
  posts: DUMMY_POSTS,

  deletePost: (id: Id) => {},

  updatePosts: (id: Id, updatedPost: Post) => {},

  updateLikes: (id: Id, updatedLike: number) => {},

  addMode: false,
  openAddMode: () => {},
  closeAddMode: () => {},
  addPostHandler: (id: Id, title: string, text: string) => {},
});

interface Props {
  children: React.ReactNode;
}

export const PostsCtxProvider: React.FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState(DUMMY_POSTS); // List of all posts

  // ********* MODAL for deleting post ********** //

  const deletePost = (id: Id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  // ******** ADD post ********* //

  const [addMode, setAddMode] = useState(false);
  const openAddMode = () => setAddMode(true);
  const closeAddMode = () => setAddMode(false);

  const addPostHandler = (id: Id, title: string, text: string) => {
    setPosts((prev) => [{ id, title, text, likes: 0 }, ...prev]);
  };

  // ******* EDIT post ********* //

  const updatePosts = (id: Id, updatedPost: Post) => {
    setPosts(posts.map((p) => (p.id === id ? updatedPost : p)));
  };

  // ******* LIKES change ********* //

  const updateLikes = (id: Id, updatedLike: number) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: updatedLike } : p))
    );
  };

  return (
    <PostsContext.Provider
      value={{
        posts,

        deletePost,

        // modalOpen,
        // handleOpenModal,
        // handleCloseModal,

        updatePosts,

        updateLikes,

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
