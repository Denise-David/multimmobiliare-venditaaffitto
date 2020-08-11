import { call, select, put } from 'redux-saga/effects';
import { addRisposteFormPazienti } from '../api';
import { risposte } from '../slice/patientFormSlice';
import { newPatientInfo } from '../slice/patientDataSlice';

export default function* setDataRisposteFormPaziente() {
  try {
    const answersData = yield select(risposte);
    const patientData = yield select(newPatientInfo);
    yield put(addRisposteFormPazienti(patientData, answersData));
  } catch (error) {
    console.log('errore', error);
  }
}
