import React from 'react';
import logo from '../../img/consum_nobg.svg';
import classes from './MainHeader.module.css';

import Navigation from './Navigation';

interface Props {
  onLogout: () => void;
  isLoggedIn: boolean;
}

const MainHeader: React.FC<Props> = ({ onLogout, isLoggedIn }) => {
  return (
    <header className={classes['main-header']}>
      <img src={logo} alt="logo" />

      {!isLoggedIn && <h2>Here you are! Get in!</h2>}

      <Navigation isLoggedIn={isLoggedIn} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
