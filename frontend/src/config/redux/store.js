// STEPS for State Mangaement
// Submit Action
// Handle Action in it's reducer
// Regsiter Here -> Reducer

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import postReducer from "./reducer/postReducer";

export const   store = configureStore({
  reducer: {
    // Register Reducers Here
    auth : authReducer,
    posts : postReducer
  }
});