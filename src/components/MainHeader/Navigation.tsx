import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import ColorContext from '../UI/ColorTheme/color-context';
import classes from './Navigation.module.css';

interface Props {}

const Navigation: React.FC<Props> = () => {
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  const { colorToggle } = useContext(ColorContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {/* Place for other menu links */}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
        <span className={classes['color-toggle']} onClick={colorToggle} />
      </ul>
    </nav>
  );
};

export default Navigation;
