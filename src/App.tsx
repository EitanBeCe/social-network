import React, { useContext, useEffect } from 'react';

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AddPost from './components/Posts/AddPost/AddPost';
import Posts from './components/Posts/Posts';

import AuthContext from './store/auth-context';
import PostsContext from './store/posts-context';

const App: React.FC = () => {
  const { isLoggedIn, onLogin } = useContext(AuthContext);
  const { addMode, closeAddMode, posts } = useContext(PostsContext);

  useEffect(() => {
    closeAddMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <>
      <MainHeader />
      <main>
        {addMode && <AddPost />}
        {/* Switch 2 next lines - for different options of how to render AddPost */}
        {/* {isLoggedIn && !addMode && <Posts />} */}
        {isLoggedIn && <Posts />}
        {!isLoggedIn && <Login onLogin={onLogin} />}
      </main>
    </>
  );
};

export default App;
