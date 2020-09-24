import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from '../sagas';
import ddlEditorFormAndReparti from '../slice/ddlEditorFormAndRepartiSlice';
import risultatiAddForm from '../slice/risultatiAddFormSlice';

import labelCode from '../slice/labelCodeSlice';
import patientData from '../slice/patientDataSlice';
import patientForm from '../slice/patientFormSlice';
import patientInfoPDF from '../slice/patientFormPDFSlice';
import searchDoctor from '../slice/searchDoctorSlice';
import addForm from '../slice/addFormSlice';
import rights from '../slice/rightsSlice';
import domandeAddForm from '../slice/domandeAddFormSlice';
import risposteAddForm from '../slice/risposteAddFormSlice';
import homePage from '../slice/homePageLabelSlice';
import disableEnable from '../slice/disableEnableSlice';
import dialog from '../slice/dialogSlice';
import snackbar from '../slice/snackbarSlice';
import menuDomandeERisposte from '../slice/menuDomandeERisposteSlice';
import menuDomande from '../slice/menuDomandeSlice';
import group from '../slice/groupSlice';
import loading from '../slice/loadingSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {

    ddlEditorFormAndReparti,
    labelCode,
    patientData,
    patientForm,
    patientInfoPDF,
    searchDoctor,
    addForm,
    rights,
    domandeAddForm,
    risposteAddForm,
    homePage,
    disableEnable,
    risultatiAddForm,
    dialog,
    snackbar,
    menuDomandeERisposte,
    menuDomande,
    group,
    loading,
  },

  middleware: [sagaMiddleware, logger, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',

});
sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof store.getState>
export default store;
