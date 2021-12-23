import {
  all, takeLatest, call, put, select, takeEvery,
} from 'redux-saga/effects';
import fetchAll from '../api/prova';
import filterImmo, {
  countries,
  getClienti, setClient, setRic,
} from './ImmoSagas';

/**
 * inizializzazione reparti
 */

function* actionWatcher() {
  yield takeEvery('INIT', filterImmo);
  yield takeEvery('INIT_FORM', countries);
  yield takeEvery('SET_CLIENTE', setClient);
  yield takeEvery('SET_RICERCA', setRic);
  yield takeEvery('GET_CLIENTI', getClienti);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
