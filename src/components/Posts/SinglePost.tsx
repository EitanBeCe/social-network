import React from 'react';
import classes from './SinglePost.module.css';
import Card from '../UI/Card/Card';

interface Props {
  title: string;
  text: string;
}

const SinglePost: React.FC<Props> = ({ text, title }) => {
  return (
    <Card className={classes['single-post']}>
      <h2>{title}</h2>
      <div>{text}</div>
    </Card>
  );
};

export default SinglePost;
