import { call, select, put } from 'redux-saga/effects';
import { allDataEtichetta, getAllDataEtichetta } from '../slice/datiPazienteSlice';
import {
  showPatientFormDialog, getDomandeReparto,
} from '../slice/dialogSlice';
import { ValueCode } from '../slice/CodeSlice';

import { getEtichettaData, fetchRepartoFormByGUID } from '../api';

export default function* getDataEtichetta() {
  try {
    // prendo tutti i dati dell'etichetta selezionata
    const label : string = yield select(ValueCode);

    const dataEtichetta = yield call(getEtichettaData, label);
    yield put(getAllDataEtichetta(dataEtichetta));

    // Prendo il GUID reparto dell'etichetta delezionata
    const dataAllEtichetta = yield select(allDataEtichetta);
    const repartoGUID = dataAllEtichetta.data.hcase.actualWardGUID;

    // prendo le domande del reparto selezionato
    const allDataReparto = yield call(fetchRepartoFormByGUID, repartoGUID);
    const datiDomande = allDataReparto.data[0].Domande;
    yield put(getDomandeReparto(datiDomande));
  } catch (error) {
    console.log('errore', error);
  }

  // fai vedere il dialog
  yield put(showPatientFormDialog());
}
