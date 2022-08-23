import React, { useContext } from 'react';

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import Posts from './components/Posts/Posts';
import AuthContext from './store/auth-context';
import { PostsCtxProvider } from './store/posts-context';

const App: React.FC = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <MainHeader isLoggedIn={authCtx.isLoggedIn} onLogout={authCtx.onLogout} />
      <main>
        {!authCtx.isLoggedIn && <Login onLogin={authCtx.onLogin} />}
        {authCtx.isLoggedIn && (
          <PostsCtxProvider>
            <Posts />
          </PostsCtxProvider>
        )}
      </main>
    </>
  );
};

export default App;
