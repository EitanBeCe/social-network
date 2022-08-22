import React from 'react';
import classes from './SinglePost.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

interface Props {
  title: string;
  text: string;
}

// **************** MUST ADD alert for deleting post

const SinglePost: React.FC<Props> = ({ text, title }) => {
  const dummy = () => {};
  return (
    <Card className={classes['single-post']}>
      <h2>{title}</h2>
      <div>{text}</div>
      <div className={classes['post-footer']}>
        <h5>like</h5>
        <Button onClick={dummy} className={classes.btn}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default SinglePost;
