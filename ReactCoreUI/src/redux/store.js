import { thunk } from 'redux-thunk';
import rootReducer from './reducers/index';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  duration: true,
});

const middleware = [thunk, logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
