import { configureStore } from '@reduxjs/toolkit';
import holidaysReducer from './features/holidays/holidaysSlice';

export default configureStore({
  reducer: {
    holidays: holidaysReducer,
  },
});
