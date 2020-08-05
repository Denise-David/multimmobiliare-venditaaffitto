import {
  all, takeLatest, call, put, select, takeEvery,
} from 'redux-saga/effects';
import { getRisultati } from '../slice/risultatiFormularioSlice';
import fetchForm, { fetchAllForm, addRisposteFormPazienti } from '../api/index';

import { domande } from '../slice/formSlice';

import { formulariAction } from '../slice/formulariSlice';
import { formID } from '../slice/repartoSlice';
import {
  initializeDomande, initializeRisultati, confirmRepartoAction,
} from '../slice/editFormSlice';
import { setInitialStateAction, desetInitialStateAction } from '../slice/initialStateSlice';
import addReparto from './editFormSagas';
import { buttonSendCode } from '../slice/CodeSlice';
import getDataEtichetta, { sendDataPazienti } from './dialogFormPazienteSagas';
import { buttonSendForm } from '../slice/patientFormSlice';

function* init(action : any) {
  try {
    const ID : string = yield select(formID);

    // prendo tutti i formulari
    const allForm = yield call(fetchAllForm);
    const datiFormulari = allForm.data;

    yield put(formulariAction(datiFormulari));

    // metodo che converte un array in un object
    const arrayToObject = (array : any) => array.reduce((obj : any, item : any) => {
    // eslint-disable-next-line no-param-reassign
      obj[item.ID] = true;
      return obj;
    }, {});

    // controllo se è selezionato un reparto
    if (ID !== '0') {
      try {
        // prendo i risultati del form ID selezionato
        const ris = yield call(fetchForm, ID);
        const datiRisultati = ris.Risultati;
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
        const datiDomande = form.Domande;
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
        yield put(getRisultati(datiForm));

        yield put(desetInitialStateAction());
      } catch (error) { console.log('errore', error); }
    } else {
      yield put(setInitialStateAction());
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* actionWatcher() {
  yield takeLatest('INIT', init);
  yield takeLatest(confirmRepartoAction.type, addReparto);
  yield takeEvery(buttonSendCode.type, getDataEtichetta);
  yield takeLatest(buttonSendForm.type, sendDataPazienti);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
