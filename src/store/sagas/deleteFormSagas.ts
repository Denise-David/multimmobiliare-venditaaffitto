import { put, select, call } from 'redux-saga/effects';

import { resetRisultati } from '../slice/risultatiFormularioSlice';
import { alertConfirmDelete, enableAll } from '../slice/risultatiAddFormSlice';
import { resetIDReparto, IDForm, resetIDForm } from '../slice/repartoDDLSlice';
import { deleteForm } from '../api';

export default function* confirmDelForm() {
  try {
    const selectedForm = yield select(IDForm);
    yield put(resetRisultati());
    yield put(alertConfirmDelete());
    yield put(enableAll());
    yield call(deleteForm, selectedForm);
    yield put(resetIDReparto());
    yield put(resetIDForm());
  } catch (error) {
    console.log('errore', error);
  }
}
