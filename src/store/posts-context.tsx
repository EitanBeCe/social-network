import React, { useEffect, useState } from 'react';

const PostsContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // for showing it in options when you print it
  onLogin: (email: string, password: string) => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <PostsContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
