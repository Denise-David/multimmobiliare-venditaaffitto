import {
  call, put, select,
} from 'redux-saga/effects';

import fetchForm from '../api/index';

import { domande } from '../slice/formSlice';

import { formID } from '../slice/repartoSlice';
import { initializeRisultati } from '../slice/editFormSlice';

export default function* createRisultatiArray() {
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
  }
}
