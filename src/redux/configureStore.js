import { configureStore } from '@reduxjs/toolkit';
import presaleReducer from './Presale/presale';

const store = configureStore({
  reducer: {
    Presale: presaleReducer,
  },
});

export default store;
