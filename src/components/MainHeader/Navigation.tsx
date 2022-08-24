import React from 'react';

import classes from './Navigation.module.css';

interface Props {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navigation: React.FC<Props> = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {/* For other menu links */}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
