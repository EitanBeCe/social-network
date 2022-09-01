import React, { useState } from 'react';

const ColorContext = React.createContext({
  colors: true,
  colorToggle: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ColorContextProvider: React.FC<Props> = ({ children }) => {
  const [colors, setColors] = useState(true); // true ? pink : blue

  const colorToggle = () => setColors((prev) => !prev);

  return (
    <ColorContext.Provider
      value={{
        colors,
        colorToggle,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
