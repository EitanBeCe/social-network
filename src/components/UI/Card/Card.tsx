import classes from './Card.module.css';

interface Props {
  className: string;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ className, children }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
