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
import { closeDialogLabel } from '../slice/dialogSlice';

import { openSnackbarEtichettaInesistente } from '../slice/snackbarSlice';

export default function* initInterfaccia() {
  try {
    const formNoLabel = yield call(fetchFormNoLabel);
    yield put(setFormNoLabel(formNoLabel.data));
  } catch (error) {
    console.error('errore', error);
  }
}

export function* aggiungiEtichetta() {
  try {
    const etichetta = yield select(label);
    const dataEtichetta = yield call(getEtichettaDataByLabel, etichetta);
    const { data = {} } = dataEtichetta;
    const { patient = {}, hcase = {} } = data;
    const { familyname = '', givenname = '', address = {} } = patient;
    const {
      street = '', cityName = '', mobile = '', zip = '',
    } = address;
    const indexSpace = street.lastIndexOf(' ');
    const streetNumber = street.substring(indexSpace, street.length);
    const streetName = street.substring(0, indexSpace);
    const { familyDoctor = {}, doctor = {}, insuranceCovers = [] } = hcase;
    const insuranceCoversName = insuranceCovers[0].guarantName;

    const patientInfo = {
      familyname,
      givenname,
      cityName,
      zip,
      mobile,
      streetName,
      streetNumber,
      familyDoctor,
      doctor,
      insuranceCoversName,
    };

    const ID = yield select(IDFormSelected);
    const labelExist = yield call(getEtichettaDataByLabel, etichetta);
    if (labelExist.data.errorType === 'ERROR_TYPE_INVALID') {
      yield put(openSnackbarEtichettaInesistente());
    } else {
      const resPatient = yield call(getRisposteFormPazientiByID, ID);
      yield call(addLabelToRispostePaziente, ID, resPatient, etichetta, patientInfo);
      yield put({ type: 'INIT_INTERFACCIA' });
      yield put(closeDialogLabel());
      yield put(resetLabel());
    }
  } catch (error) {
    console.error('errore', error);
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
  } catch (error) {
    console.error('errore', error);
  }
}

export function* deleteFormAns(action:any) {
  try {
    const IDForm = action.payload;
    yield call(deleteAnswersForm, IDForm);
  } catch (error) {
    console.error('errore', error);
  }
}
