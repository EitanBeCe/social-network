import { useContext } from 'react';
import ColorContext from './color-context';
import classes from './ColorTheme.module.css';

interface Props {
  children: React.ReactNode;
}

const ColorTheme: React.FC<Props> = ({ children }) => {
  const { colors } = useContext(ColorContext); // true ? pink : blue

  return <div className={colors === true ? classes.colors1 : classes.colors2}>{children}</div>;
};

export default ColorTheme;
