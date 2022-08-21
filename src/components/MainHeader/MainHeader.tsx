import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader: React.FC<{
  onLogout: () => void;
  isAuthenticated: boolean;
}> = ({ onLogout, isAuthenticated }) => {
  return (
    <header className={classes['main-header']}>
      <h1>Logo</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
