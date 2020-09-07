import { select, put, call } from 'redux-saga/effects';
import { oldPatientInfo, newPatientInfo } from '../slice/patientDataSlice';
import { addRisposteFormPazienti } from '../api';
import { risposte } from '../slice/patientFormSlice';
import { setLastRisposta } from '../slice/returnDeviceSlice';
import { objectToArray } from '../../util';

export default function* setDataRisposteFormPaziente() {
  try {
    const ansData = yield select(risposte);
    const patientData = yield select(newPatientInfo);
    const oldPatient = yield select(oldPatientInfo);

    const risData = objectToArray(ansData);
    const answersData = risData.map((risposta : any) => {
      console.log('xxRes', risposta);
      const {
        idDomanda, domanda, testoRisposta, idRisposta, valore,
      } = risposta;
      if (risposta.date) {
        const date = objectToArray(risposta.date);
        return {
          idDomanda, domanda, testoRisposta, idRisposta, date, valore,
        };
      } return {
        idDomanda, domanda, testoRisposta, idRisposta, valore,
      };
    });

    const res = yield call(addRisposteFormPazienti, oldPatient, patientData, answersData);
    yield put(setLastRisposta(res));
  } catch (error) {
    console.log('errore', error);
  }
}
