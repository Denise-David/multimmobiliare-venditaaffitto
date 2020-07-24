import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import fetchForm, { fetchAllForm } from '../api/index';
import { getDomandeAndID, getAllForm } from './getFormBase';
import { domande } from '../slice/domandeSlice';
import { formulari } from '../slice/risultatiFormularioSlice';
import { formulariAction } from '../slice/formulariSlice';
import { formID } from '../slice/repartoSlice';

function* init(action : any) {
  const ID = yield select(formID);
  const form = yield call(fetchForm, ID);
  const datiDomande = form.data.Domande;
  yield put(domande(datiDomande));

  const formulario = yield call(fetchForm, ID);
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
