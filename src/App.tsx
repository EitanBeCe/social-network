import React, { useContext, useEffect } from 'react';
import AddComment from './components/Comments/AddComment/AddComment';
import Comments from './components/Comments/Comments';

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AddPost from './components/Posts/AddPost/AddPost';
import Posts from './components/Posts/Posts';

import AuthContext from './store/auth-context';
import CommentsContext from './store/comments-context';
import PostsContext from './store/posts-context';

const App: React.FC = () => {
  const { isLoggedIn, onLogin } = useContext(AuthContext);
  const { addMode, closeAddMode, posts } = useContext(PostsContext);
  const { commentMode, addCommMode, closeAddCommMode, comments } = useContext(CommentsContext);

  useEffect(() => {
    closeAddMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);
  useEffect(() => {
    closeAddCommMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  return (
    <>
      <MainHeader />
      <main>
        {addMode && <AddPost />}
        {/* Switch 2 next lines - for different options of how to render AddPost */}
        {/* {isLoggedIn && !addMode && <Posts />} */}
        {/* <Comments /> */}
        {isLoggedIn && commentMode && addCommMode && <AddComment />}
        {isLoggedIn && commentMode && <Comments />}
        {isLoggedIn && !commentMode && <Posts />}
        {!isLoggedIn && <Login onLogin={onLogin} />}
      </main>
    </>
  );
};

export default App;
