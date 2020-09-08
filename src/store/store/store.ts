import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from '../sagas';
import loading from '../slice/loadingSlice';
import risultatiFormulario from '../slice/risultatiFormularioSlice';
import reparto from '../slice/repartoDDLSlice';
import risultatiAddForm from '../slice/risultatiAddFormSlice';

import initialState from '../slice/initialStateSlice';
import code from '../slice/CodeSlice';
import patientData from '../slice/patientDataSlice';
import patientForm from '../slice/patientFormSlice';
import patientInfoPDF from '../slice/patientFormPDFSlice';
import summaryDialog from '../slice/summaryDialogSlice';
import returnDevice from '../slice/returnDeviceSlice';
import searchDoctor from '../slice/searchDoctorSlice';
import addForm from '../slice/addFormSlice';
import rights from '../slice/rightsSlice';
import domandeAddForm from '../slice/domandeAddFormSlice';
import risposteAddForm from '../slice/risposteAddFormSlice';
import homePage from '../slice/homePageLabelSlice';
import disableEnable from '../slice/disableEnableSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {

    loading,
    risultatiFormulario,
    reparto,
    risultatiAddForm,
    initialState,
    code,
    patientData,
    patientForm,
    patientInfoPDF,
    summaryDialog,
    returnDevice,
    searchDoctor,
    addForm,
    rights,
    domandeAddForm,
    risposteAddForm,
    homePage,
    disableEnable,

  },

  middleware: [sagaMiddleware, logger, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',

});
sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof store.getState>
export default store;
