import { call, select, put } from 'redux-saga/effects';
import { newPatientInfo, getNewPatientInfo } from '../slice/patientDataSlice';

import {
  showPatientFormDialog, getDomandeReparto, repartoDomande, risposte,
} from '../slice/patientFormSlice';
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
  } catch (error) {
    console.log('errore', error);
  }

  // fai vedere il dialog
  yield put(showPatientFormDialog());
}

export function* sendDataPazienti() {
  try {
    const patientData = yield select(newPatientInfo);
    const answersData = yield select(risposte);
    console.log('xxrisposte', answersData);
    yield put(addRisposteFormPazienti(patientData, answersData));
  } catch (error) {
    console.log('errore', error);
  }
}
