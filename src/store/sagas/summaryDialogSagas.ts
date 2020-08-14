import { select, put, call } from 'redux-saga/effects';
import { oldPatientInfo, newPatientInfo } from '../slice/patientDataSlice';
import { addRisposteFormPazienti, getLastRisposteFormPazienti } from '../api';
import { risposte } from '../slice/patientFormSlice';
import { setLastRisposta } from '../slice/returnDeviceSlice';

export default function* setDataRisposteFormPaziente() {
  try {
    const answersData = yield select(risposte);
    const patientData = yield select(newPatientInfo);
    const oldPatient = yield select(oldPatientInfo);
    console.log('www', oldPatient);
    yield put(addRisposteFormPazienti(oldPatient, patientData, answersData));
    const lastRispostaFormPaziente = yield call(getLastRisposteFormPazienti);
    console.log('www', lastRispostaFormPaziente);
    yield put(setLastRisposta(lastRispostaFormPaziente));
  } catch (error) {
    console.log('errore', error);
  }
}
