/* eslint-disable no-underscore-dangle */
import { select, put, call } from 'redux-saga/effects';
import {
  formulariList, repartoGUID, formSelected, reparto,
} from '../slice/homePageLabelSlice';

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
    const IDSelectedForm = yield select(formSelected);
    const GUID = yield select(repartoGUID);
    const nomeRep = yield select(reparto);
    const listForm = yield select(formulariList);

    const form = resultForm.find((ID: any) => ID._id === formID);
    const nomeForm = listForm.find((ID:any) => ID._id === IDSelectedForm);

    const formulario = form ? form.formulario : nomeForm.formulario;
    const Reparto = form ? form.Reparto : nomeRep;
    const actualWardGUID = form ? form.actualWardGUID : GUID;

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
