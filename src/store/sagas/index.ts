import {
  all, takeLatest, call, put, select, takeEvery,
} from 'redux-saga/effects';

import { domande, risultati } from '../slice/formSlice';

import { formID } from '../slice/repartoSlice';
import { setInitialStateAction, desetInitialStateAction } from '../slice/initialStateSlice';
import addFormulario, { addDomandaInArray } from './addFormSagas';
import { buttonSendCode } from '../slice/CodeSlice';
import getDataEtichetta, { sendDataPazienti } from './dialogFormPazienteSagas';
import { buttonSendForm } from '../slice/patientFormSlice';
import initPDFPatientData from './patientInfoPDFSagas';
import initPDFPatientAnswers from './patientAnswersPDFSagas';
import setDataRisposteFormPaziente from './summaryDialogSagas';
import { buttonSendConfirmClicked } from '../slice/summaryDialogSlice';
import { buttonSearchClicked } from '../slice/searchDoctorSlice';
import buttonSearch from './searchDoctorSagas';
import { getFormType } from '../slice/addFormSlice';
import initUserRightsAUTAN from './rightsUserSagas';
import confirmAddForm, { cancelAddForm } from './departmentChoiceEditorSagas';
import fetchFormStructureByID from '../api';

function* init(action : any) {
  try {
    const ID : string = yield select(formID);

    // controllo se è selezionato un reparto
    if (ID !== '0') {
      try {
        // prendo  i risultati, domande
        const selectedForm = yield call(fetchFormStructureByID, ID);
        const datiRisultati = selectedForm.Risultati;
        yield put(risultati(datiRisultati));

        const datiDomande = selectedForm.Domande;
        yield put(domande(datiDomande));
        yield put(getFormType(selectedForm.tipo));

        yield put(desetInitialStateAction());
      } catch (error) { console.log('errore', error); }
    } else {
      yield put(setInitialStateAction());
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* actionWatcher() {
  yield takeLatest('INIT', init);
  yield takeLatest('BUTTON_SAVE_FORM_CLICKED', addFormulario);
  yield takeLatest('BUTTON_SAVE_FORM_CLICKED', cancelAddForm);
  yield takeEvery(buttonSendCode.type, getDataEtichetta);
  yield takeLatest(buttonSendForm.type, sendDataPazienti);
  yield takeLatest('initPDFPatientData', initPDFPatientData);
  yield takeLatest('initPDFPatientAnswers', initPDFPatientAnswers);
  yield takeLatest(buttonSendConfirmClicked.type, setDataRisposteFormPaziente);
  yield takeLatest(buttonSearchClicked.type, buttonSearch);
  yield takeLatest('initUserRightsAUTAN', initUserRightsAUTAN);
  yield takeLatest('BUTTON_CONFIRM_CLICKED', confirmAddForm);
  yield takeLatest('BUTTON_CANCEL_CLICKED', cancelAddForm);
  yield takeLatest('ADD_DOMANDA_IN_ARRAY', addDomandaInArray);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
