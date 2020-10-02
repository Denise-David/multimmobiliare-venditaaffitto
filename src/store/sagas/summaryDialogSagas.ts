import { select, put, call } from 'redux-saga/effects';
import { listRisultati, formSelectedID } from '../slice/homepageNoLabelSlice';

import { oldPatientInfo, newPatientInfo } from '../slice/patientDataSlice';
import { addRisposteFormPazienti } from '../api';
import { risposte } from '../slice/patientFormSlice';

import { objectToArray } from '../../util';
import { setIDLastForm } from '../slice/patientFormPDFSlice';
import { ValueCode } from '../slice/labelCodeSlice';

export default function* setDataRisposteFormPaziente() {
  try {
    const ansData = yield select(risposte);
    const patientData = yield select(newPatientInfo);
    const oldPatient = yield select(oldPatientInfo);
    const etichetta = yield select(ValueCode);
    const resultForm = yield select(listRisultati);
    const formID = yield select(formSelectedID);

    // eslint-disable-next-line no-underscore-dangle
    const form = resultForm.find((ID: any) => ID._id === formID);

    const { formulario, Reparto, actualWardGUID } = form;

    const risData = objectToArray(ansData);

    const answersData = risData.map((risposta : any) => {
      const {
        idDomanda, domanda, testoRisposta, idRisposta, valore, testoLibero,
      } = risposta;
      if (risposta.date) {
        const date = objectToArray(risposta.date);
        return {
          idDomanda, domanda, testoRisposta, idRisposta, date, valore, testoLibero,
        };
      } return {
        idDomanda, domanda, testoRisposta, idRisposta, valore, testoLibero,
      };
    });

    const res = yield call(addRisposteFormPazienti, actualWardGUID, Reparto, formulario,
      etichetta, oldPatient, patientData, answersData);

    yield put(setIDLastForm(res));
  } catch (error) {
    console.log('errore', error);
  }
}
