import { call, select, put } from 'redux-saga/effects';
import {
  repartoDomande, showPatientFormDialog, getDomandeReparto,
  risposte, getBooleanAnswers, openSnackbar,
} from '../slice/patientFormSlice';
import { newPatientInfo, getNewPatientInfo, getOldPatientInfo } from '../slice/patientDataSlice';

import { ValueCode, openSnackbarBarcode } from '../slice/CodeSlice';

import fetchFormStructureByID, {
  getEtichettaDataByLabel, fetchRepartoFormByGUID,
} from '../api';
import { setSummaryDialogOpen, setPatientData, setAnswersData } from '../slice/summaryDialogSlice';
import { getRepartoInfo } from '../slice/patientFormPDFSlice';
import { formSelected, formulariList } from '../slice/homePageLabelSlice';

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
      yield put(getDomandeReparto(datiDomande));

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

    yield put(showPatientFormDialog());
  } catch (error) {
    console.log('errore', error);
    yield put(openSnackbarBarcode());
  }
}

export function* sendDataPazienti() {
  try {
    const domande = yield select(repartoDomande);
    const numDomande : number = domande.length;
    const answersData = yield select(risposte);
    const arrayAnswersData = Object.keys(answersData);
    const numRisposte : number = arrayAnswersData.length;
    const patientData = yield select(newPatientInfo);
    const etichettaNum = yield select(ValueCode);
    const dataEtichetta = yield call(getEtichettaDataByLabel, etichettaNum);

    const { data = {} } = dataEtichetta;
    const { hcase = {} } = data;
    const { actualWardGUID = '' } = hcase;
    const dataReparto = yield call(fetchRepartoFormByGUID, actualWardGUID);

    const datiReparto = dataReparto.data;
    const {
      Reparto = '', Risposte = {}, tipo = '', Risultati = {},
    } = datiReparto[0];
    const { risposta1 = '' } = Risposte;

    const infoReparto = {
      Risultati,
      Reparto,
      tipo,
      risposta1,
    };

    // Se le risposte ricevute dal paziente sono uguali al numero di domande tot
    if (numDomande <= numRisposte) {
      yield put(setSummaryDialogOpen());
      yield put(setPatientData(patientData));
      yield put(setAnswersData(answersData));
      yield put(getRepartoInfo(infoReparto));

      // yield put(addRisposteFormPazienti(patientData, answersData));
    } else {
      yield put(openSnackbar());
    }
  } catch (error) {
    console.log('errore', error);
  }
}
