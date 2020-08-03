import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from '../sagas';
import loading from '../slice/loadingSlice';
import formulari from '../slice/formulariSlice';
import risForm from '../slice/risultatiFormularioSlice';
import reparto from '../slice/repartoSlice';
import editForm from '../slice/editFormSlice';
import form from '../slice/formSlice';
import initialState from '../slice/initialStateSlice';
import code from '../slice/CodeSlice';
import datiPaziente from '../slice/datiPazienteSlice';
import dialog from '../slice/dialogSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    form,
    loading,
    formulari,
    risForm,
    reparto,
    editForm,
    initialState,
    code,
    datiPaziente,
    dialog,

  },

  middleware: [sagaMiddleware, logger, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',

});
sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof store.getState>
export default store;
