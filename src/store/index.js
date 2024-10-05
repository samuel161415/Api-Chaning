import { configureStore } from '@reduxjs/toolkit';
import usersReducer from 'features/user/userSlice';
import postsReducer from 'features/posts/postSlice';
import commentsReducer from 'features/comments/commentSlice';
export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});
