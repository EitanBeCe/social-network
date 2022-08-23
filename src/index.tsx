import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';
import { PostsCtxProvider } from './store/posts-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostsCtxProvider>
        <App />
      </PostsCtxProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
