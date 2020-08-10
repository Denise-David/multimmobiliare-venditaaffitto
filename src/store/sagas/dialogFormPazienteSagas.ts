import { call, select, put } from 'redux-saga/effects';
import {
  repartoDomande, showPatientFormDialog, getDomandeReparto, risposte,
  getTipoFormulario, getBooleanAnswers, openSnackbar, closeDialogForm,
} from '../slice/patientFormSlice';
import { newPatientInfo, getNewPatientInfo } from '../slice/patientDataSlice';

import { ValueCode } from '../slice/CodeSlice';

import { getEtichettaData, fetchRepartoFormByGUID, addRisposteFormPazienti } from '../api';

export default function* getDataEtichetta() {
  try {
    // prendo tutti i dati dell'etichetta selezionata
    const label : string = yield select(ValueCode);

    const dataEtichetta = yield call(getEtichettaData, label);
    const { data = {} } = dataEtichetta;
    const { patient = {}, hcase = {} } = data;
    const { familyname = '', givenname = '', address = {} } = patient;
    const { street = '', cityName = '', mobile = '' } = address;
    const indexSpace = street.lastIndexOf(' ');
    const streetNumber = street.substring(indexSpace, street.length);
    const streetName = street.substring(0, indexSpace);
    const { familyDoctor = {}, doctor = {}, insuranceCovers = [] } = hcase;
    const insuranceCoversName = insuranceCovers[0].guarantName;
    const nameFamilyDoctor = `${familyDoctor.familyname} ${familyDoctor.givenname}`;
    const nameDoctor = `${doctor.familyname} ${doctor.givenname}`;

    const patientInfo = {
      familyname,
      givenname,
      cityName,
      mobile,
      streetName,
      streetNumber,
      nameDoctor,
      nameFamilyDoctor,
      insuranceCoversName,
    };
    yield put(getNewPatientInfo(patientInfo));

    // Prendo il GUID reparto dell'etichetta delezionata
    const repartoGUID = hcase.actualWardGUID;

    // prendo le domande del reparto selezionato
    const allDataReparto = yield call(fetchRepartoFormByGUID, repartoGUID);
    const datiDomande = allDataReparto.data[0].Domande;
    yield put(getDomandeReparto(datiDomande));

    // prendo il tipo del formulario
    const formType = allDataReparto.data[0].tipo;
    yield put(getTipoFormulario(formType));

    // prendo risposte per formulario booleano
    const booleanAnswers = allDataReparto.data[0].Risposte;
    yield put(getBooleanAnswers(booleanAnswers));
  } catch (error) {
    console.log('errore', error);
  }

  // fai vedere il dialog
  yield put(showPatientFormDialog());
}

export function* sendDataPazienti() {
  try {
    const domande = yield select(repartoDomande);
    const numDomande : number = domande.length;
    const answersData = yield select(risposte);
    const arrayAnswersData = Object.keys(answersData);
    const numRisposte : number = arrayAnswersData.length;

    // Se le risposte ricevute dal paziente sono uguali al numero di domande tot
    if (numDomande === numRisposte) {
      yield put(closeDialogForm());
      const patientData = yield select(newPatientInfo);
      yield put(addRisposteFormPazienti(patientData, answersData));
    } else {
      yield put(openSnackbar());
    }
  } catch (error) {
    console.log('errore', error);
  }
}
