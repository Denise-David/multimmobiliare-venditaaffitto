import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import fetchForm, { fetchAllForm } from '../api/index';
import { getAllForm } from './getFormBase';
import { domande } from '../slice/formSlice';
import { formulari } from '../slice/risultatiFormularioSlice';
import { formulariAction } from '../slice/formulariSlice';
import { formID } from '../slice/repartoSlice';
import { initializeDomande, initializeRisposte } from '../slice/editFormSlice';

function* init(action : any) {
  const ID = yield select(formID);

  const arrayToObject = (array : any) => array.reduce((obj : any, item : any) => {
    // eslint-disable-next-line no-param-reassign
    obj[item.ID] = true;
    return obj;
  }, {});
  if (ID !== 0) {
    const form = yield call(fetchForm, ID);
    const datiDomande = form.data.Domande;
    yield put(domande(datiDomande));
    const initialStateDomande = datiDomande.map(
      (domanda : any) => ({ ID: domanda.ID }),
    );
    const reduce = arrayToObject(initialStateDomande);
    yield put(initializeDomande(reduce));

    // const initialStateRisposte = datiDomande.ID.Risposte.map(
    //   (risposta : any) => ({ ID: risposta.ID }),
    // );
    // const reduceR = arrayToObject(initialStateRisposte);
    // yield put(initializeRisposte(reduceR));

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
