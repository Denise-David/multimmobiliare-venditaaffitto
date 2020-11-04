import {
  call, select, put,
} from 'redux-saga/effects';
import { domandaType } from '../slice/domandeAddFormSlice';
import {
  obligatoryFieldEmpty, textFieldDisabled, getNewPatientInfo,
  getOldPatientInfo, newPatientInfo, birthdayDate,
} from '../slice/patientDataSlice';
import { setIsLoaded, setIsLoading } from '../slice/loadingSlice';
import {
  openDialogSummary, openDialogFormPatient,
} from '../slice/dialogSlice';
import {
  noFacoltative, getDomandeReparto,
  risposte, getBooleanAnswers, setIntestazioneMoreAns, setGruppi, setDomandaDimenticata,
} from '../slice/patientFormSlice';
import { ValueCode } from '../slice/labelCodeSlice';
import fetchFormStructureByID, {
  getEtichettaDataByLabel, fetchRepartoFormByGUID,
} from '../api';
import { formSelected, formulariList } from '../slice/homePageLabelSlice';
import {
  openSnackbarDatiPersonali, openSnackbarFieldEmpty, openSnackbarLabelPage,
  openSnackbarNoForm,
  openSnackbarNoNomeCognome,
  openSnackbarPatientAnswers,
} from '../slice/snackbarSlice';
import { formSelectedID } from '../slice/homepageNoLabelSlice';

/**
 * Prende i dati dell'etichetta
 */
export default function* getDataEtichetta():Generator {
  try {
    yield put(setIsLoading());
    // prendo tutti i dati dell'etichetta selezionata
    const label : any = yield select(ValueCode);

    const dataEtichetta:any = yield call(getEtichettaDataByLabel, label);
    if (dataEtichetta.data.errorCode === 'ERROR_CODE_LABELNUMBER_NOT_UNIQUE') {
      yield put(setIsLoaded());
      yield put(openSnackbarLabelPage());
    } else {
      const { data } = dataEtichetta;
      const { patient = {}, hcase = {} } = data;
      const { familyname = '', givenname = '', address = {} } = patient;
      const {
        street = '', cityName = '', mobile = '', zip = '',
      } = address;
      const indexSpace = street.lastIndexOf(' ');
      const streetNumber = street.substring(indexSpace, street.length);
      const streetName = street.substring(0, indexSpace);
      const { familyDoctor = {}, doctor = {}, insuranceCovers = [] } = hcase;
      const insuranceCoversName = insuranceCovers[0] ? insuranceCovers[0].guarantName : '';

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
      const form :any = yield select(formulariList);
      if (form.length > 1) {
        const IDForm = yield select(formSelected);
        if (IDForm === '-1') {
          yield put(setIsLoaded());
          yield put(openSnackbarNoForm());
        } else {
          const dataForm :any = yield call(fetchFormStructureByID, IDForm);

          // prendo le domande
          const datiDomande = dataForm.domande;
          const listDomande = datiDomande.map((domanda : domandaType) => {
            const question = { ...domanda, normalType: false };
            return question;
          });
          yield put(getDomandeReparto(listDomande));

          // prendo risposte booleane
          const booleanAnswers = dataForm.risposte;
          yield put(getBooleanAnswers(booleanAnswers));
          yield put(setIntestazioneMoreAns(dataForm.intestazione));

          yield put(setGruppi(dataForm.gruppi));
          yield put(setIsLoaded());
          yield put(openDialogFormPatient());
        }
      } else {
      // prendo il o i formulari del reparto GUID
        const allDataReparto :any = yield call(
          fetchRepartoFormByGUID, hcase.actualMedicalCategoryGUID || hcase.actualWardGUID,
        );
        const datiDomande = allDataReparto.data[0].domande;
        yield put(getDomandeReparto(datiDomande));

        // prendo risposte per formulario booleano
        const booleanAnswers = allDataReparto.data[0].risposte;
        yield put(getBooleanAnswers(booleanAnswers));

        yield put(setIntestazioneMoreAns(allDataReparto.data[0].intestazione));
        yield put(setGruppi(allDataReparto.data[0].gruppi));
        yield put(setIsLoaded());
        yield put(openDialogFormPatient());
      }
    }
  } catch (error) {
    console.error('errore', error);
  }
}

/**
 * Apertura formulario dell'autoanamnesi senza etichetta
 */
export function* sendOpenForm():Generator {
  yield put(setIsLoading());
  const IDForm = yield select(formSelectedID);
  const dataForm :any = yield call(fetchFormStructureByID, IDForm);
  // prendo le domande
  const datiDomande = dataForm.domande;
  const listDomande = datiDomande.map((domanda : any) => {
    const question = { ...domanda, normalType: false };
    return question;
  });
  yield put(getDomandeReparto(listDomande));

  // prendo risposte booleane
  const booleanAnswers = dataForm.risposte;
  yield put(getBooleanAnswers(booleanAnswers));
  yield put(setIntestazioneMoreAns(dataForm.intestazione));

  yield put(setGruppi(dataForm.gruppi));

  yield put(openDialogFormPatient());
  yield put(setIsLoaded());
}

/**
 * Invio dei dati del paziente e delle risposte del formulario
 */
export function* sendDataPazienti():Generator {
  try {
    const obbFieldEmpty = yield select(obligatoryFieldEmpty);
    const answersData:any = yield select(risposte);
    const checkOrCancelClicked = yield select(textFieldDisabled);
    const noFacol :any = yield select(noFacoltative);
    const datiPaziente:any = yield select(newPatientInfo);
    const birthday:any = yield select(birthdayDate);

    let risAll = true;
    const response = noFacol.map((idDomanda: string) => {
      risAll = !(answersData[idDomanda] === undefined);
      return (risAll);
    });

    yield put(setDomandaDimenticata(response));
    const answersAll = response.includes(false);
    let allPatientData = true;
    if (!datiPaziente.givenname
       || !datiPaziente.familyname
       || !birthday) { allPatientData = false; }

    // Controlli che sono stati immessi tutti i dati richiesti
    if (checkOrCancelClicked && !answersAll && !obbFieldEmpty && allPatientData) {
      yield put(openDialogSummary());
    } else if (!checkOrCancelClicked) {
      yield put(openSnackbarDatiPersonali());
    } else if (obbFieldEmpty) {
      yield put(openSnackbarFieldEmpty());
    } else if (!allPatientData) {
      yield put(openSnackbarNoNomeCognome());
    } else if (answersAll) {
      yield put(openSnackbarPatientAnswers());
    }
  } catch (error) {
    console.error('errore', error);
  }
}
