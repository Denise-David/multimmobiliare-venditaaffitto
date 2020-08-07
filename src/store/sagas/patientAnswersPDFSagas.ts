import { select, put, call } from 'redux-saga/effects';
import {
  IDFormRisposte, getPatientAnswer,
} from '../slice/patientFormPDFSlice';

import { getRisposteFormPazienti } from '../api';

export default function* initPDFPatientAnswers(action : any) {
  try {
    const IDForm = yield select(IDFormRisposte);

    const dataFormPaziente = yield call(getRisposteFormPazienti, IDForm);
    const { paziente = {}, risposte = {} } = dataFormPaziente;
    const { givenname = '', familyname = '' } = paziente;

    const PDFRisposte = {
      givenname,
      familyname,
      risposte,

    };

    yield put(getPatientAnswer(PDFRisposte));
  } catch (error) {
    console.log(error);
  }
}
