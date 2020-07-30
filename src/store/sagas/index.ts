import {
  all, takeLatest, call, put, select, take, takeEvery,
} from 'redux-saga/effects';
import { formulari } from '../slice/risultatiFormularioSlice';
import fetchForm, { fetchAllForm } from '../api/index';
import { getAllForm } from './getFormBase';
import { domande } from '../slice/formSlice';

import { formulariAction } from '../slice/formulariSlice';
import { formID } from '../slice/repartoSlice';
import { initializeDomande, initializeRisultati, repartoOnChange } from '../slice/editFormSlice';
import { setInitialStateAction, desetInitialStateAction } from '../slice/initialStateSlice';
import createRisultatiArray from './risultatiOnChange';
import { isLoadingLoaded } from '../slice/loadingSlice';

function* init(action : any) {
  yield put(isLoadingLoaded());

  const ID = yield select(formID);

  // metodo che converte un array in un object
  const arrayToObject = (array : any) => array.reduce((obj : any, item : any) => {
    // eslint-disable-next-line no-param-reassign
    obj[item.ID] = true;
    return obj;
  }, {});

  // controllo se è selezionato un reparto
  if (ID !== 0) {
    // prendo i risultati del form ID selezionato
    const ris = yield call(fetchForm, ID);
    const datiRisultati = ris.data.Risultati;
    yield put(domande(datiRisultati));

    // creo un array con indice ID Risultati e stato true
    const initialStateRisultati = datiRisultati.map(
      (risultato : any) => ({ ID: risultato.ID }),
    );
    const reduceRis = arrayToObject(initialStateRisultati);
    // invio l'array
    yield put(initializeRisultati(reduceRis));

    // prendo le domande del form ID selezionato
    const form = yield call(fetchForm, ID);
    const datiDomande = form.data.Domande;
    yield put(domande(datiDomande));
    // Creo un array con indice ID e stato true
    const initialStateDomande = datiDomande.map(
      (domanda : any) => ({ ID: domanda.ID }),
    );
    const reduce = arrayToObject(initialStateDomande);
    // invio l'array
    yield put(initializeDomande(reduce));

    // prendo il form ID selezionato
    const formulario = yield call(fetchForm, ID);
    const datiForm = formulario.data;
    yield put(formulari(datiForm));

    yield put(desetInitialStateAction());
    yield put(isLoadingLoaded());
  } else {
    yield put(setInitialStateAction());
  }

  // prendo tutti i formulari
  const allForm = yield call(fetchAllForm);
  const datiFormulari = allForm.data.formulari;
  yield put(formulariAction(datiFormulari));
}

function* actionWatcher() {
  // yield takeLatest(repartoOnChange.type, createRisultatiArray);
  yield takeEvery('INIT', init);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
