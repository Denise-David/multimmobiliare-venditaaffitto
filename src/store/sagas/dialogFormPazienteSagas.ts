import {
  call, select, put,
} from 'redux-saga/effects';
import { domandaType } from '../slice/domandeAddFormSlice';
import {
  obligatoryFieldEmpty, textFieldDisabled, getNewPatientInfo, getOldPatientInfo,
} from '../slice/patientDataSlice';
import { setIsLoaded, setIsLoading } from '../slice/loadingSlice';
import {
  openDialogSummary, openDialogFormPatient,
} from '../slice/dialogSlice';
import {
  noFacoltative, getDomandeReparto,
  risposte, getBooleanAnswers, setIntestazioneMoreAns, setGruppi,
} from '../slice/patientFormSlice';

import { ValueCode } from '../slice/labelCodeSlice';
import fetchFormStructureByID, {
  getEtichettaDataByLabel, fetchRepartoFormByGUID,
} from '../api';
import { formSelected, formulariList } from '../slice/homePageLabelSlice';
import {
  openSnackbarDatiPersonali, openSnackbarFieldEmpty, openSnackbarLabelPage,
  openSnackbarPatientAnswers,
} from '../slice/snackbarSlice';

export default function* getDataEtichetta() {
  try {
    yield put(setIsLoading());
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
      const listDomande = datiDomande.map((domanda : domandaType) => {
        const question = { ...domanda, normalType: false };
        return question;
      });
      yield put(getDomandeReparto(listDomande));

      // prendo risposte booleane
      const booleanAnswers = dataForm.Risposte;
      yield put(getBooleanAnswers(booleanAnswers));
      yield put(setIntestazioneMoreAns(dataForm.intestazione));

      yield put(setGruppi(dataForm.gruppi));
    } else {
      // prendo il o i formulari del reparto GUID
      const allDataReparto = yield call(
        fetchRepartoFormByGUID, hcase.actualMedicalCategoryGUID || hcase.actualWardGUID,
      );
      const datiDomande = allDataReparto.data[0].Domande;
      yield put(getDomandeReparto(datiDomande));

      // prendo risposte per formulario booleano
      const booleanAnswers = allDataReparto.data[0].Risposte;
      yield put(getBooleanAnswers(booleanAnswers));

      yield put(setIntestazioneMoreAns(allDataReparto.data[0].intestazionePiuRisposte));
      yield put(setGruppi(allDataReparto.data[0].gruppi));
    }
    yield put(setIsLoaded());
    yield put(openDialogFormPatient());
  } catch (error) {
    console.log('errore', error);
    yield put(openSnackbarLabelPage());
  }
}

export function* sendDataPazienti() {
  try {
    const obbFieldEmpty = yield select(obligatoryFieldEmpty);
    const answersData = yield select(risposte);
    const checkOrCancelClicked = yield select(textFieldDisabled);
    const noFacol = yield select(noFacoltative);

    let risAll = true;
    const response = noFacol.map((idDomanda: string) => {
      if (answersData[idDomanda] === undefined && risAll === true) {
        risAll = false;
        return (risAll);
      } risAll = true;
      return risAll;
    });

    const answersAll = response.includes(false);
    // Se le risposte ricevute dal paziente sono uguali al numero di domande tot
    if (checkOrCancelClicked && !answersAll && !obbFieldEmpty) {
      yield put(openDialogSummary());
      // yield put(addRisposteFormPazienti(patientData, answersData));
    } else if (!checkOrCancelClicked) {
      yield put(openSnackbarDatiPersonali());
    } else if (answersAll) { yield put(openSnackbarPatientAnswers()); } else if (obbFieldEmpty) {
      yield put(openSnackbarFieldEmpty());
    }
  } catch (error) {
    console.log('errore', error);
  }
}
