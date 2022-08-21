import classes from './Button.module.css';

const Button: React.FC<{
  type: 'submit' | 'button';
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  children: React.ReactNode;
}> = ({ type, className, onClick, disabled, children }) => {
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
