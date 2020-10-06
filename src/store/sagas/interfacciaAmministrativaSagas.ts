import { put, call, select } from 'redux-saga/effects';
import {
  filtro,
  IDFormSelected, label, resetLabel, setFormNoLabel, setFormWithLabel,
} from '../slice/interfacciaAmmSlice';

import {
  addLabelToRispostePaziente, deleteAnswersForm, fetchFormNoLabel,
  fetchFormWithLabel,
  getEtichettaDataByLabel, getRisposteFormPazientiByID,
} from '../api';
import { closeDialogFiltro, closeDialogLabel } from '../slice/dialogSlice';

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

export function* filter() {
  try {
    const filterForm = yield select(filtro);
    if (filterForm === 'Con etichetta' || filterForm === 'Tutti') {
      const formWithLabel = yield call(fetchFormWithLabel);
      yield put(setFormWithLabel(formWithLabel.data));
    }

    yield put(closeDialogFiltro());
  } catch (error) {
    console.log('errore', error);
  }
}

export function* deleteFormAns(action:any) {
  try {
    const IDForm = action.payload;
    yield call(deleteAnswersForm, IDForm);
  } catch (error) {
    console.log('errore', error);
  }
}
