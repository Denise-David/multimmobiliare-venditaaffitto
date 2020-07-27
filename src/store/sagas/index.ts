import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import fetchForm, { fetchAllForm } from '../api/index';
import { getDomandeAndID, getAllForm } from './getFormBase';
import { domande } from '../slice/formSlice';
import { formulari } from '../slice/risultatiFormularioSlice';
import { formulariAction } from '../slice/formulariSlice';
import { formID } from '../slice/repartoSlice';

function* init(action : any) {
  const ID = yield select(formID);
  if (ID !== 0) {
    const form = yield call(fetchForm, ID);
    const datiDomande = form.data.Domande;
    yield put(domande(datiDomande));

    const formulario = yield call(fetchForm, ID);
    const datiForm = formulario.data;
    yield put(formulari(datiForm));
  } else {
    yield put(domande(null));
    yield put(formulari(null));
  }

  const allForm = yield call(fetchAllForm);
  const datiFormulari = allForm.data.formulari;
  yield put(formulariAction(datiFormulari));
}

function* actionWatcher() {
  yield takeLatest('INIT', init);
  yield takeLatest(formulariAction.type, getAllForm);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
