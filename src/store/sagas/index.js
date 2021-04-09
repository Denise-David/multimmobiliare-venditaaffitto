import {
  all, takeLatest, call, put, select, takeEvery,
} from 'redux-saga/effects';
import fetchAll from '../api/prova';
import filterImmo, { countries } from './ImmoSagas';

/**
 * inizializzazione reparti
 */

function* actionWatcher() {
  yield takeEvery('INIT', filterImmo);
  yield takeEvery('INIT_FORM', countries);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
