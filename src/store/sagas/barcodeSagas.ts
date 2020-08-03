import { call, select, put } from 'redux-saga/effects';
import { ValueCode } from '../slice/CodeSlice';

import { getEtichettaData } from '../api';
import { getAllDataEtichetta } from '../slice/datiPazienteSlice';
import { showPatientFormDialog } from '../slice/dialogSlice';

export default function* getDataEtichetta() {
  try {
    const label : string = yield select(ValueCode);
    const dataEtichetta = yield call(getEtichettaData, label);

    yield put(getAllDataEtichetta(dataEtichetta));
    yield put(showPatientFormDialog());
  } catch (error) {
    console.log('errore', error);
  }
}
