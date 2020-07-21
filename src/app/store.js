import { configureStore } from '@reduxjs/toolkit';
import candidatesReducer from '../features/candidates/candidateSlice';

export default configureStore({
  reducer: {
    candidates: candidatesReducer,
  },
});
