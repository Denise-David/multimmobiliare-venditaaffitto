import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import fetchForm from '../api/index';
import { getDomandeAndID, getRisposteByDomandaID } from './getFormBase';
import { domande } from '../slice/domandeSlice';

function* init(action : any) {
  yield console.log('xxx', action);
  const form = yield call(fetchForm, 1);
  const datiDomande = form.data.Domande;
  yield put(domande(datiDomande));
}

function* actionWatcher() {
  yield takeLatest('INIT', init);
  yield takeLatest('domande', getDomandeAndID);
  yield takeLatest('risposte', getRisposteByDomandaID);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
