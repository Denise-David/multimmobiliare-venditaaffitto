import { call, select, put } from 'redux-saga/effects';
import {
  repartoDomande, getDomandeReparto,
  risposte, getBooleanAnswers,
} from '../slice/patientFormSlice';
import { getNewPatientInfo, getOldPatientInfo } from '../slice/patientDataSlice';

import { ValueCode } from '../slice/labelCodeSlice';

import fetchFormStructureByID, {
  getEtichettaDataByLabel, fetchRepartoFormByGUID,
} from '../api';

import { formSelected, formulariList } from '../slice/homePageLabelSlice';
import { openDialogSummary, openDialogFormPatient } from '../slice/dialogSlice';
import { openSnackbarLabelPage, openSnackbarPatientAnswers } from '../slice/snackbarSlice';

export default function* getDataEtichetta() {
  try {
    // prendo tutti i dati dell'etichetta selezionata
    const label : string = yield select(ValueCode);

    const dataEtichetta = yield call(getEtichettaDataByLabel, label);
    const { data = {} } = dataEtichetta;
    const { patient = {}, hcase = {} } = data;
    const { familyname = '', givenname = '', address = {} } = patient;
    const {
      street = '', cityName = '', mobile = '', zip = '',
    } = address;
    const indexSpace = street.lastIndexOf(' ');
    const streetNumber = street.substring(indexSpace, street.length);
    const streetName = street.substring(0, indexSpace);
    const { familyDoctor = {}, doctor = {}, insuranceCovers = [] } = hcase;
    const insuranceCoversName = insuranceCovers[0].guarantName;

    const patientInfo = {
      familyname,
      givenname,
      cityName,
      zip,
      mobile,
      streetName,
      streetNumber,
      familyDoctor,
      doctor,
      insuranceCoversName,
    };
    yield put(getOldPatientInfo(patientInfo));
    yield put(getNewPatientInfo(patientInfo));

    // controllo se ha uno o più formulari
    const form = yield select(formulariList);
    if (form.length > 1) {
      const IDForm = yield select(formSelected);
      const dataForm = yield call(fetchFormStructureByID, IDForm);

      // prendo le domande
      const datiDomande = dataForm.Domande;
      const listDomande = datiDomande.map((domanda : any) => {
        const question = { ...domanda, normalType: false };
        return question;
      });
      yield put(getDomandeReparto(listDomande));

      // prendo risposte booleane
      const booleanAnswers = dataForm.Risposte;
      yield put(getBooleanAnswers(booleanAnswers));
    } else {
      // Prendo il GUID reparto dell'etichetta delezionata
      const repartoGUID = hcase.actualWardGUID;

      // prendo il o i formulari del reparto GUID
      const allDataReparto = yield call(fetchRepartoFormByGUID, repartoGUID);
      const datiDomande = allDataReparto.data[0].Domande;
      yield put(getDomandeReparto(datiDomande));

      // prendo risposte per formulario booleano
      const booleanAnswers = allDataReparto.data[0].Risposte;
      yield put(getBooleanAnswers(booleanAnswers));
    }

    yield put(openDialogFormPatient());
  } catch (error) {
    console.log('errore', error);
    yield put(openSnackbarLabelPage());
  }
}

export function* sendDataPazienti() {
  try {
    const domande = yield select(repartoDomande);
    const numDomande : number = domande.length;
    const answersData = yield select(risposte);
    const arrayAnswersData = Object.keys(answersData);
    const numRisposte : number = arrayAnswersData.length;

    // Se le risposte ricevute dal paziente sono uguali al numero di domande tot
    if (numDomande <= numRisposte) {
      yield put(openDialogSummary());

      // yield put(addRisposteFormPazienti(patientData, answersData));
    } else {
      yield put(openSnackbarPatientAnswers());
    }
  } catch (error) {
    console.log('errore', error);
  }
}
