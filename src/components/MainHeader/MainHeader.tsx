import React from 'react';
import logo from '../../img/consum_nobg.svg';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader: React.FC<{
  onLogout: () => void;
  isAuthenticated: boolean;
}> = ({ onLogout, isAuthenticated }) => {
  return (
    <header className={classes['main-header']}>
      <img
        // src={require('../../img/consumrz_logo.svg')}
        src={logo}
        alt="logo"
      />
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
