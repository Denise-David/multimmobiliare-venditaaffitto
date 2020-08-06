import { select, put, call } from 'redux-saga/effects';
import {
  IDFormRisposte, numEtichetta, getOldPatientData, getNewPatientData,
} from '../slice/patientInfoPDFSlice';

import { getEtichettaData, getRisposteFormPazienti } from '../api';

export default function* initPDFPatientData(action : any) {
  try {
    const etichettaNum = yield select(numEtichetta);
    const IDForm = yield select(IDFormRisposte);

    const dataEtichetta = yield call(getEtichettaData, etichettaNum);
    const dataFormPaziente = yield call(getRisposteFormPazienti, IDForm);
    const { paziente = {} } = dataFormPaziente;

    yield put(getNewPatientData(paziente));

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

    yield put(getOldPatientData(patientInfo));
  } catch (error) {
    console.log(error);
  }
}
