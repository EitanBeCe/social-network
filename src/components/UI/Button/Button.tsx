import classes from './Button.module.css';

interface Props {
  type: 'submit' | 'button';
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  type,
  className,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
