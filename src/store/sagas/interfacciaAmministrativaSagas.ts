import { put, call, select } from 'redux-saga/effects';
import { actionAnsType } from '../slice/risposteAddFormSlice';
import {
  filtro,
  IDFormSelected, label, resetLabel, resetPatientLabel,
  setFormNoLabel, setFormWithLabel, setPatientLabel,
} from '../slice/interfacciaAmmSlice';

import {
  addLabelToRispostePaziente, deleteAnswersForm, fetchFormNoLabel,
  fetchFormWithLabel,
  getEtichettaDataByLabel, getRisposteFormPazientiByID,
} from '../api';
import { closeDialogLabel, closeDialogLabelManager } from '../slice/dialogSlice';

import { openSnackbarEtichettaInesistente } from '../slice/snackbarSlice';

/**
 * Inizializzazione interfaccia amministrativa
 */
export default function* initInterfaccia():Generator {
  try {
    const formNoLabel:any = yield call(fetchFormNoLabel);
    yield put(setFormNoLabel(formNoLabel.data));
  } catch (error) {
    console.error('errore', error);
  }
}

/**
 * Aggiiunta dell'etichetta al formulario
 */
export function* aggiungiEtichetta():Generator {
  try {
    // Prendo i dati del paziente dall'etichetta
    const etichetta = yield select(label);
    const dataEtichetta:any = yield call(getEtichettaDataByLabel, etichetta);
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
    const insuranceCoversName = insuranceCovers[0] ? insuranceCovers[0].guarantName : '';

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
    // Controllo se l'etichetta esiste
    if (dataEtichetta.data.errorType === 'ERROR_TYPE_INVALID') {
      yield put(openSnackbarEtichettaInesistente());
    } else {
      // Metto i dati del paziente nel formulario nel DB
      const resPatient = yield call(getRisposteFormPazientiByID, ID);
      yield call(addLabelToRispostePaziente, ID, resPatient, etichetta, patientInfo);
      yield put({ type: 'INIT_INTERFACCIA' });
      yield put({ type: 'CLOSE_AND_FILTER_DIALOG' });
      yield put(closeDialogLabel());
      yield put(closeDialogLabelManager());
      yield put(resetLabel());
    }
  } catch (error) {
    console.error('errore', error);
    yield put(openSnackbarEtichettaInesistente());
  }
}

/**
 * Filtrazione formulari da vedere
 */
export function* filter():Generator {
  try {
    const filterForm = yield select(filtro);
    if (filterForm === 'Con etichetta' || filterForm === 'Tutti') {
      // Prendo i formulari che hanno un etichetta
      const formWithLabel:any = yield call(fetchFormWithLabel);
      yield put(setFormWithLabel(formWithLabel.data));
    }
  } catch (error) {
    console.error('errore', error);
  }
}

/**
 * Eliminazione formulario
 */
export function* deleteFormAns(action:actionAnsType):Generator {
  try {
    const IDForm = action.payload;
    yield call(deleteAnswersForm, IDForm);
  } catch (error) {
    console.error('errore', error);
  }
}

/**
 * Prende dei dati nome e cognome dall'etichetta
 */
export function* getNomeCognomePaziente():Generator {
  const etichetta : any = yield select(label);
  const dataEtichetta:any = yield call(getEtichettaDataByLabel, etichetta);
  const { data = {} } = dataEtichetta;
  const { patient = {} } = data;
  const { familyname = '', givenname = '' } = patient;
  yield put(setPatientLabel({ givenname, familyname }));
}

/**
 * Toglie i dati del paziente e l'etichetta dal formulario
 */
export function* slegaEtichetta():Generator {
  try {
    const ID = yield select(IDFormSelected);
    const etichetta = '';
    const patientInfo = {};
    const resPatient = yield call(getRisposteFormPazientiByID, ID);
    yield call(addLabelToRispostePaziente, ID, resPatient, etichetta, patientInfo);
    yield put({ type: 'INIT_INTERFACCIA' });
    yield put({ type: 'CLOSE_AND_FILTER_DIALOG' });
    yield put(closeDialogLabel());
    yield put(closeDialogLabelManager());
    yield put(resetLabel());
    yield put(resetPatientLabel());
  } catch (error) {
    console.error('errore', error);
    yield put(openSnackbarEtichettaInesistente());
  }
}
