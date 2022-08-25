import React, { useContext } from 'react';
import logo from '../../img/react_ts.png';
import AuthContext from '../../store/auth-context';
import classes from './MainHeader.module.css';

import Navigation from './Navigation';

interface Props {}

const MainHeader: React.FC<Props> = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <header className={classes['main-header']}>
      <div className={classes['logo']}>
        <img src={logo} alt="logo" />
      </div>

      {!isLoggedIn && <h2>Here you are! Get in!</h2>}

      <Navigation />
    </header>
  );
};

export default MainHeader;
