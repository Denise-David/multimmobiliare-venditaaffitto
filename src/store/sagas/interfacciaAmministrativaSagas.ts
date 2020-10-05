import { put, call, select } from 'redux-saga/effects';

import {
  addLabelToRispostePaziente, fetchFormNoLabel,
  getEtichettaDataByLabel, getRisposteFormPazientiByID,
} from '../api';
import { closeDialogLabel } from '../slice/dialogSlice';
import {
  IDFormSelected, label, resetLabel, setFormNoLabel,
} from '../slice/interfacciaAmmSlice';
import { openSnackbarEtichettaInesistente } from '../slice/snackbarSlice';

export default function* initInterfaccia() {
  try {
    const formNoLabel = yield call(fetchFormNoLabel);
    yield put(setFormNoLabel(formNoLabel.data));
  } catch (error) {
    console.log('errore', error);
  }
}

export function* aggiungiEtichetta() {
  try {
    const etichetta = yield select(label);
    const ID = yield select(IDFormSelected);
    const labelExist = yield call(getEtichettaDataByLabel, etichetta);
    if (labelExist.data.errorType === 'ERROR_TYPE_INVALID') {
      yield put(openSnackbarEtichettaInesistente());
    } else {
      const resPatient = yield call(getRisposteFormPazientiByID, ID);
      yield call(addLabelToRispostePaziente, ID, resPatient, etichetta);
      yield put({ type: 'INIT_INTERFACCIA' });
      yield put(closeDialogLabel());
      yield put(resetLabel());
    }
  } catch (error) {
    console.log('errore', error);
    yield put(openSnackbarEtichettaInesistente());
  }
}
