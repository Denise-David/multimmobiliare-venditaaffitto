import {
  all, takeLatest, call,
} from 'redux-saga/effects';
import fetchForm from '../api/index';
import { getDomande, getRisposte } from './getFormBase';

function* init(action : any) {
  yield console.log('xxx', action);
  const form = yield call(fetchForm);
  console.log(form.data.formulari[0].Reparto);
}

function* actionWatcher() {
  yield takeLatest('INIT', init);
  yield takeLatest('domande', getDomande);
  yield takeLatest('risposte', getRisposte);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
