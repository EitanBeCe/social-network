import React from 'react';
import logo from '../../img/consum_nobg.svg';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

interface Props {
  onLogout: () => void;
  isAuthenticated: boolean;
}

const MainHeader: React.FC<Props> = ({ onLogout, isAuthenticated }) => {
  return (
    <header className={classes['main-header']}>
      <img src={logo} alt="logo" />

      <h1>Here you are! Get in!</h1>

      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
