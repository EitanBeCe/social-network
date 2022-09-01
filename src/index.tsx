import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';
import { PostsCtxProvider } from './store/posts-context';
import { CommentsCtxProvider } from './store/comments-context';
import { ColorContextProvider } from './components/UI/ColorTheme/color-context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ColorContextProvider>
      <AuthContextProvider>
        <PostsCtxProvider>
          <CommentsCtxProvider>
            <App />
          </CommentsCtxProvider>
        </PostsCtxProvider>
      </AuthContextProvider>
    </ColorContextProvider>
  </React.StrictMode>
);
