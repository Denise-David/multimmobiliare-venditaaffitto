import { select, put, call } from 'redux-saga/effects';
import {
  IDFormRisposte, getOldPatientData, getNewPatientData,
} from '../slice/patientFormPDFSlice';

import { getRisposteFormPazientiByID } from '../api';

/**
 * inizializzazione PDF dati paziente
 */
export default function* initPDFPatientData():Generator {
  try {
    const IDForm = yield select(IDFormRisposte);

    const dataFormPaziente:any = yield call(getRisposteFormPazientiByID, IDForm);
    const { paziente = {}, oldPaziente = {} } = dataFormPaziente;

    yield put(getNewPatientData(paziente));
    yield put(getOldPatientData(oldPaziente));
  } catch (error) {
    console.error(error);
  }
}
