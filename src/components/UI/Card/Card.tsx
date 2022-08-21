import React from 'react';

import classes from './Card.module.css';

const Card: React.FC<{ className: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
