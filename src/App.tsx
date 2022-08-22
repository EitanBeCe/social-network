import React, { useState } from 'react';

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import Posts from './components/Posts/Posts';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email: string, password: string) => {
    // Here can check email and password.
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Posts />}
      </main>
    </React.Fragment>
  );
};

export default App;
