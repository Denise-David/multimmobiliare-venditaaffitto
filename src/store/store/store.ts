import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import domande from '../slice/domandeSlice';
import rootSaga from '../sagas';
import loading from '../slice/loadingSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    domande,
    loading,
  },

  middleware: [sagaMiddleware, logger, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',

});
sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof store.getState>
export default store;
