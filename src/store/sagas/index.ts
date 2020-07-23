import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import fetchForm, { fetchAllForm } from '../api/index';
import { getDomandeAndID, getAllForm } from './getFormBase';
import { domande } from '../slice/domandeSlice';
import { formulari } from '../slice/risultatiFormularioSlice';
import { formulariAction } from '../slice/formulariSlice';

function* init(action : any) {
  yield console.log('xxx', action);
  const form = yield call(fetchForm, 1);
  const datiDomande = form.data.Domande;
  yield put(domande(datiDomande));

  const formulario = yield call(fetchForm, 1);
  const datiForm = formulario.data;
  yield put(formulari(datiForm));

  const allForm = yield call(fetchAllForm);
  const datiFormulari = allForm.data.formulari;
  yield put(formulariAction(datiFormulari));
}

function* actionWatcher() {
  yield takeLatest('INIT', init);
  yield takeLatest(domande.type, getDomandeAndID);
  yield takeLatest(formulari.type, getDomandeAndID); // per prenderne l'action
  yield takeLatest(formulariAction.type, getAllForm);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
