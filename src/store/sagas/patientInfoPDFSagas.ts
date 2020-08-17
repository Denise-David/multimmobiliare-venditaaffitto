import { select, put, call } from 'redux-saga/effects';
import {
  IDFormRisposte, numEtichetta, getOldPatientData, getNewPatientData,
} from '../slice/patientFormPDFSlice';

import { getEtichettaData, getRisposteFormPazienti } from '../api';

export default function* initPDFPatientData(action : any) {
  try {
    const IDForm = yield select(IDFormRisposte);

    const dataFormPaziente = yield call(getRisposteFormPazienti, IDForm);
    const { paziente = {}, oldPaziente = {} } = dataFormPaziente;

    yield put(getNewPatientData(paziente));
    yield put(getOldPatientData(oldPaziente));
  } catch (error) {
    console.log(error);
  }
}
