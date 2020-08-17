import { select, put, call } from 'redux-saga/effects';
import {
  IDFormRisposte, getOldPatientData, getNewPatientData,
} from '../slice/patientFormPDFSlice';

import { getRisposteFormPazienti } from '../api';

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
