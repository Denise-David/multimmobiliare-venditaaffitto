import { call, select } from 'redux-saga/effects';
import fetchForm, { fetchAllForm } from '../api/index';
import { formID } from '../slice/repartoSlice';
// eslint-disable-next-line import/no-cycle

export function* getDomandeAndID() {
  const ID = yield select(formID);
  const form = yield call(fetchForm, ID);
  console.log('idid', ID);
}

export function* getAllForm() {
  const allForm = yield call(fetchAllForm);
}
