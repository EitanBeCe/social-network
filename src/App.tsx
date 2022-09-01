import React, { useContext, useEffect } from 'react';
// import AddComment from './components/Comments/AddComment/AddComment';
// import Comments from './components/Comments/Comments';

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AddPost from './components/Posts/AddPost/AddPost';
import Posts from './components/Posts/Posts';
import ColorTheme from './components/UI/ColorTheme/ColorTheme';

import AuthContext from './store/auth-context';
// import CommentsContext from './store/comments-context';
import PostsContext from './store/posts-context';

const App: React.FC = () => {
  const { isLoggedIn, onLogin } = useContext(AuthContext);
  const { addMode, closeAddMode, posts } = useContext(PostsContext);
  // const { commentMode, addCommMode, closeAddCommMode, comments } = useContext(CommentsContext);

  useEffect(() => {
    closeAddMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <ColorTheme>
      <MainHeader />
      <main>
        {addMode && <AddPost />}
        {/* Switch 2 next lines - for different options of how to render AddPost */}
        {/* {isLoggedIn && !addMode && <Posts />} */}

        {/* {isLoggedIn && commentMode && addCommMode && <AddComment />}
        {isLoggedIn && commentMode && <Comments />} */}

        {isLoggedIn && <Posts />}
        {!isLoggedIn && <Login onLogin={onLogin} />}
      </main>
    </ColorTheme>
  );
};

export default App;
