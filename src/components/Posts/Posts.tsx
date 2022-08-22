import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Posts.module.css';
import SinglePost from './SinglePost';

const DUMMY_POSTS = [
  {
    title: 'Post 1',
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum ipsam doloremque incidunt architecto repellendus, sit reprehenderit fuga nam. Voluptate amet quasi repudiandae nisi sapiente dolore veniam consequatur, iusto expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum ipsam doloremque incidunt architecto repellendus, sit reprehenderit fuga nam. Voluptate amet quasi repudiandae nisi sapiente dolore veniam consequatur, iusto expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum ipsam doloremque incidunt architecto repellendus, sit reprehenderit fuga nam. Voluptate amet quasi repudiandae nisi sapiente dolore veniam consequatur, iusto expedita.',
  },
  {
    title: 'Post 2',
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum ipsam doloremque incidunt architecto repellendus, sit reprehenderit fuga nam. Voluptate amet quasi repudiandae nisi sapiente dolore veniam consequatur, iusto expedita.',
  },
];

const Posts: React.FC = () => {
  const dummy = () => {};
  return (
    <Card className={classes.posts}>
      <div className={classes['post-head']}>
        <h1>Posts</h1>
        <Button onClick={dummy} className={classes.btn}>
          Add Post
        </Button>
      </div>

      {DUMMY_POSTS.map((p, i) => (
        <SinglePost key={i} title={p.title} text={p.text} />
      ))}
    </Card>
  );
};

export default Posts;
