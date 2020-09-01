import {
  all, takeLatest, call, put, select, takeEvery,
} from 'redux-saga/effects';

import { IDRepartoSelected, IDForm, setRepartoSelected } from '../slice/repartoDDLSlice';
import { setInitialStateAction, desetInitialStateAction } from '../slice/initialStateSlice';
import addFormulario, {
  addDomandaTwoResInArray, clickAddButton,
  clickDelOrSaveButton, addRes, deleteDomandaPiuRes, addResult, addDomandaMoreResInArray,
} from './addFormSagas';
import { buttonSendCode, ValueCode } from '../slice/CodeSlice';
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
import confirmAddForm, { changeRep, cancelAddForm } from './departmentChoiceEditorSagas';
import fetchFormStructureByID, { fetchRepartoFormByGUID, getEtichettaDataByLabel } from '../api';
import { setFormulari } from '../slice/rightsSlice';
import { setDomandeinObject } from '../slice/domandeAddFormSlice';
import { setRisposteOfDomandaInObject } from '../slice/risposteAddFormSlice';
import { setRisultatiInObject } from '../slice/risultatiAddFormSlice';
import { setRepartoGUID, setFormulariList } from '../slice/homePageLabelSlice';
import confirmDelForm from './deleteFormSagas';

function* init(action : any) {
  try {
    const ID = yield select(IDRepartoSelected);

    // cerco i nome  e id dei formulari del reparto selezionato
    const form = yield call(fetchRepartoFormByGUID, ID);
    // eslint-disable-next-line no-underscore-dangle
    const formulari = form.data.map((formu : any) => {
      const { formulario, _id } = formu;
      const res = { formulario, _id };

      return res;
    });
    yield put(setFormulari(formulari));

    const IDFormulario = yield select(IDForm);

    // controllo se è selezionato un reparto
    if (IDFormulario !== '0') {
      try {
        // prendo il formulario ID
        // eslint-disable-next-line no-underscore-dangle
        const selectedForm = yield call(fetchFormStructureByID, IDFormulario);

        const datiDomande = selectedForm.Domande;

        // genero un nuovo parametro stato
        const datiDomandeWithState = datiDomande.map((domandaObj : any) => {
          const domandaWithState = { [domandaObj.IDDomanda]: { ...domandaObj, stateText: true } };

          return domandaWithState;
        });
        const res = datiDomandeWithState.reduce((accumulator:any, currentValue:any) => {
          accumulator[Object.keys(currentValue)[0]] = currentValue[Object.keys(currentValue)[0]];
          return accumulator;
        }, {});

        yield put(setDomandeinObject(res));

        // genero un nuovo parametro stato per le risposte
        const datiRisposteDomandeWithState = datiDomande.map((domandaObj : any) => {
          const resWithState = domandaObj.risposte.map((risposta :any) => {
            const rispostaWithState = { [risposta.IDRisposta]: { ...risposta, stateText: true } };

            return (rispostaWithState);
          });
          const result = resWithState.reduce((accumulator:any, currentValue:any) => {
            accumulator[Object.keys(currentValue)[0]] = currentValue[Object.keys(currentValue)[0]];
            return accumulator;
          }, {});
          const domandaWithState = { [domandaObj.IDDomanda]: result };

          return domandaWithState;
        });

        const res2 = datiRisposteDomandeWithState.reduce((accumulator:any, currentValue:any) => {
          accumulator[Object.keys(currentValue)[0]] = currentValue[Object.keys(currentValue)[0]];
          return accumulator;
        }, {});

        yield put(setRisposteOfDomandaInObject(res2));

        // genero nuovo parametro risultati
        const datiResWithState = selectedForm.Risultati.map((risultato:any) => {
          const risultatoWithState = {
            [risultato.IDRisultato]:
             { ...risultato, stateModify: false },
          };
          return (risultatoWithState);
        });

        const res3 = datiResWithState.reduce((accumulator:any, currentValue:any) => {
          accumulator[Object.keys(currentValue)[0]] = currentValue[Object.keys(currentValue)[0]];
          return accumulator;
        }, {});

        yield put(setRisultatiInObject(res3));
        // setto il tipo di formulario
        yield put(getFormType(selectedForm.tipo));

        // prendo tutti i form del reparto ID

        yield put(desetInitialStateAction());
      } catch (error) { console.log('errore', error); }
    } else {
      yield put(setInitialStateAction());
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* initRep(action : any) {
  // prendo e setto il reparto dell'etichetta immessa
  const label : string = yield select(ValueCode);

  const dataEtichetta = yield call(getEtichettaDataByLabel, label);
  const { data = {} } = dataEtichetta;
  const { hcase = {} } = data;
  const repartoGUID = hcase.actualWardGUID;
  const { payload } = yield put(setRepartoGUID(repartoGUID));

  // prendo i formulari del reparto
  const form = yield call(fetchRepartoFormByGUID, payload);

  // eslint-disable-next-line no-underscore-dangle
  const formulari = form.data.map((formu : any) => {
    const { formulario, _id } = formu;
    const res = { formulario, _id };

    return res;
  });
  yield put(setFormulariList(formulari));
}

function* actionWatcher() {
  yield takeLatest('INIT', init);
  yield takeLatest('INIT_FORMULARI_REPARTO', initRep);
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
  yield takeLatest('ADD_DOMANDA_IN_ARRAY', addDomandaTwoResInArray);
  yield takeLatest('BUTTON_ADD_CLICKED', clickAddButton);
  yield takeLatest('BUTTON_DELETE_OR_SAVE_CLICKED', clickDelOrSaveButton);
  yield takeLatest('ADD_RISPOSTA', addRes);
  yield takeLatest('DELETE_DOMANDA_FORM_PIU_RES', deleteDomandaPiuRes);
  yield takeLatest('ADD_RISULTATO', addResult);
  yield takeLatest('CHANGE_REPARTO', changeRep);
  yield takeLatest('ADD_DOMANDA_MORE_RES_IN_ARRAY', addDomandaMoreResInArray);
  yield takeLatest('CONFIRM_DELETE_FORM', confirmDelForm);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
