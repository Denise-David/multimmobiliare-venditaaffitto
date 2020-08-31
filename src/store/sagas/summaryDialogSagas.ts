import { select, put, call } from 'redux-saga/effects';
import { oldPatientInfo, newPatientInfo } from '../slice/patientDataSlice';
import { addRisposteFormPazienti } from '../api';
import { risposte } from '../slice/patientFormSlice';
import { setLastRisposta } from '../slice/returnDeviceSlice';

export default function* setDataRisposteFormPaziente() {
  try {
    const answersData = yield select(risposte);
    const patientData = yield select(newPatientInfo);
    const oldPatient = yield select(oldPatientInfo);
    const res = yield call(addRisposteFormPazienti, oldPatient, patientData, answersData);
    yield put(setLastRisposta(res));
  } catch (error) {
    console.log('errore', error);
  }
}
