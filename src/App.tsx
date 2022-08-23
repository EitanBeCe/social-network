import React, { useContext } from 'react';

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import Posts from './components/Posts/Posts';
import AuthContext from './store/auth-context';

const App: React.FC = () => {
  const authCtx = useContext(AuthContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email: string, password: string) => {
  //   // Here can check email and password.
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  return (
    <>
      <MainHeader isLoggedIn={authCtx.isLoggedIn} onLogout={authCtx.onLogout} />
      <main>
        {!authCtx.isLoggedIn && <Login onLogin={authCtx.onLogin} />}
        {authCtx.isLoggedIn && <Posts />}
      </main>
    </>
  );
};

export default App;
