import { call, select, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import {
  risposteOfDomandaObject,
  valore, answer, risposta2 as Response2,
  risposta1 as response1, setAnswersInDomanda,
  resetAnswerValore, setAddRispostaUnclicked, deleteDomandeObject,
} from '../slice/risposteAddFormSlice';
import { resetRisultati } from '../slice/risultatiFormularioSlice';
import {
  valoreMin, valoreMax, alertConfirmDelete, disableAll, result, addRisultato,
} from '../slice/risultatiAddFormSlice';

import {
  domandaAddForm,
  domandeObject,
  question, setBAddDomandaUnclicked, resetDomanda,
  setDomandaInObjectDomande,
  resetDomandaByIDDomanda,
  resetDomandeOfDomandeObject,
} from '../slice/domandeAddFormSlice';

import {
  formType, selectedReparto, nomeFormulario, setBAddFormClicked,
} from '../slice/addFormSlice';
import { addFormDueRisposte, addFormPiuRisposte } from '../api';
import { objectToArray } from '../../util';
import { setInitialStateAction } from '../slice/initialStateSlice';
import { resetDomande } from '../slice/domandeModifySlice';

export default function* addFormulario() {
  const tipoForm = yield select(formType);
  const reparto = yield select(selectedReparto);
  const { idReparto, nomeReparto } = reparto;
  const nomeForm = yield select(nomeFormulario);
  const domandeAndStatus = yield select(domandeObject);
  const ris1 = yield select(response1);
  const { risposta1 } = ris1;
  const ris2 = yield select(Response2);
  const { risposta2 } = ris2;
  const resWithStatus = yield select(result);
  const risposteWithStatus = yield select(risposteOfDomandaObject);

  // controllo il tipo fi Form
  if (tipoForm === 'a due risposte') {
    // creo un array con solo le domande senza lo stateText
    const domandeAndStatusArray = objectToArray(domandeAndStatus);

    // eslint-disable-next-line max-len
    const domande = domandeAndStatusArray.map((domandaAndStatus: domandaAddForm) => {
      const { IDDomanda, Domanda } = domandaAndStatus;
      return { IDDomanda, Domanda };
    });
    // inserisco Form due risposte nel DB
    yield call(addFormDueRisposte, nomeReparto,
      tipoForm, idReparto, nomeForm, domande,
      risposta1, risposta2);
  } else {
    // creo un array con solo le domande senza lo stateText e aggiungo risposte senta stateText.
    const domandeAndStatusArray = objectToArray(domandeAndStatus);

    // eslint-disable-next-line max-len
    const domande = domandeAndStatusArray.map((domandaAndStatus: domandaAddForm) => {
      const { IDDomanda, Domanda } = domandaAndStatus;
      const risposteWithStatusArray = objectToArray(risposteWithStatus[IDDomanda]);
      const risposte = risposteWithStatusArray.map((rispostaWithStatus : any) => {
        const { IDRisposta, Risposta, Valore } = rispostaWithStatus;
        return { IDRisposta, Risposta, Valore };
      });
      return { IDDomanda, Domanda, risposte };
    });
    // Creo Array con solo i risultati senza gli status
    const resWithStatusArray = objectToArray(resWithStatus);

    const risultati = resWithStatusArray.map((risultatoWithStatus : any) => {
      const {
        IDRisultato, Risultato, ValoreMin, ValoreMax,
      } = risultatoWithStatus;
      return {
        IDRisultato, Risultato, ValoreMin, ValoreMax,
      };
    });
    // inserico Form piu risposte nel DB
    yield call(addFormPiuRisposte, nomeReparto, tipoForm, idReparto,
      nomeForm, domande, risultati);
  }

  yield put(resetDomandeOfDomandeObject());
}

export function* addDomandaInArray() {
  const IDDomanda = uuidv4();
  const Domanda = yield select(question);

  yield put(setDomandaInObjectDomande({ IDDomanda, Domanda }));
  yield put(setBAddDomandaUnclicked());
  yield put(resetDomanda());
}

export function* clickAddButton() {
  yield put(setBAddFormClicked());
  yield put(setInitialStateAction());
  yield put(resetDomande());
  yield put(resetRisultati());
}
export function* clickDelOrSaveButton() {
  yield put(alertConfirmDelete());
  yield put(disableAll());
}

export function* addDomandaMoreAnswers() {
  const IDDomanda = uuidv4();
  const Domanda = yield select(question);

  yield put(setDomandaInObjectDomande({ IDDomanda, Domanda }));
  yield put(setBAddDomandaUnclicked());
}
export function* addRes(action:any) {
  const IDRisposta = uuidv4();
  const RispostaWithID = yield select(answer);
  const ValorewithID = yield select(valore);
  const IDDomanda = action.payload;

  const Risposta = RispostaWithID[IDDomanda];
  const Valore = ValorewithID[IDDomanda];

  yield put(setAnswersInDomanda({
    IDDomanda, IDRisposta, Risposta, Valore,
  }));
  yield put(resetAnswerValore());
  yield put(setAddRispostaUnclicked(IDDomanda));
}

export function* deleteDomandaPiuRes(action:any) {
  const IDDomanda = action.payload;

  yield put(deleteDomandeObject(IDDomanda));
  yield put(resetDomandaByIDDomanda(IDDomanda));
}

export function* addResult() {
  const IDRisultato = uuidv4();
  const risultato = yield select(result);
  const ValoreMin = yield select(valoreMin);
  const ValoreMax = yield select(valoreMax);
  const stateModify = false;

  yield put(addRisultato({
    IDRisultato, risultato, ValoreMin, ValoreMax, stateModify,
  }));
}
