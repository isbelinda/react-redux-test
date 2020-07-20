import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import candidatesReducer from '../features/candidates/candidateSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    candidates: candidatesReducer,
  },
});
