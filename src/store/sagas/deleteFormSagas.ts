import { put, select, call } from 'redux-saga/effects';

import startOfToday from 'date-fns/startOfToday';
import { user } from '../slice/rightsSlice';
import { resetIDReparto, IDForm, resetIDForm } from '../slice/ddlEditorFormAndRepartiSlice';
import fetchFormStructureByID, { deleteForm, setOldStructure } from '../api';
import { setBModifyDelAddReturnEnabled } from '../slice/disableEnableSlice';
import { openCloseSnackbarConfirmDelete } from '../slice/snackbarSlice';

export default function* confirmDelForm():Generator {
  try {
    const selectedForm = yield select(IDForm);
    const formulario = yield call(fetchFormStructureByID, selectedForm);
    const date = startOfToday();
    const utente = yield select(user);
    yield call(setOldStructure, formulario, utente, date);
    yield put(openCloseSnackbarConfirmDelete());
    yield put(setBModifyDelAddReturnEnabled());
    yield call(deleteForm, selectedForm);
    yield put(resetIDReparto());
    yield put(resetIDForm());
  } catch (error) {
    console.error('errore', error);
  }
}
