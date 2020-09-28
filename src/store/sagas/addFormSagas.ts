import {
  call, select, put, all,
} from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import startOfToday from 'date-fns/startOfToday';
import {
  questionTwoAns,
  domandaAddForm,
  domandeObject,
  question, setBAddDomandaUnclicked, resetDomanda,
  setDomandaInObjectDomande,
  resetDomandaByIDDomanda,
  resetDomandeOfDomandeObject,
  setDomandaInObjectDomandeMoreRes, intestazioneMoreAnswers,
} from '../slice/domandeAddFormSlice';
import { openCloseSnackbarConfirmDelete, openSnackbarAtLeast2Res } from '../slice/snackbarSlice';
import {
  buttonCancelAddFormClicked,
  selectedReparto, nomeFormulario, setBAddFormClicked,
} from '../slice/addFormSlice';
import { groups } from '../slice/groupSlice';
import { user } from '../slice/rightsSlice';
import { risposteTutteUguali } from '../slice/menuDomandeERisposteSlice';
import {
  valueMin, valueMax,
  result, addRisultato, dataRisultati, resetDataRisultati,
} from '../slice/risultatiAddFormSlice';
import {
  risposteOfDomandaObject,
  valore, answer, ris2 as Response2,
  ris1 as response1, setAnswersInDomanda,
  resetAnswerValore, typeAnswer, setAddRispostaUnclicked,
  deleteDomandeObject, resetRisposteOfDomanda, setType,
} from '../slice/risposteAddFormSlice';

import { addForm, setNewStructure } from '../api';
import { objectToArray } from '../../util';
import { resetIDForm, resetIDReparto } from '../slice/ddlEditorFormAndRepartiSlice';
import { setBSaveDisabled, setBModifyDelAddReturnDisabled } from '../slice/disableEnableSlice';

import { setIsLoaded, setIsLoading } from '../slice/loadingSlice';

export default function* addFormulario() {
  yield put(setIsLoading());

  const domandeAndStatus = yield select(domandeObject);
  const risposteWithStatus = yield select(risposteOfDomandaObject);
  const domandeAndStatusArray = objectToArray(domandeAndStatus);
  let atLeast1Res = true;

  const response = domandeAndStatusArray.map((domanda : any) => {
    if ((risposteWithStatus[domanda.IDDomanda] === undefined
      || Object.keys(risposteWithStatus[domanda.IDDomanda]).length === 0) && atLeast1Res === true
       && domanda.Tipo === 'a più risposte') {
      atLeast1Res = false;
      return (atLeast1Res);
    } atLeast1Res = true;
    return atLeast1Res;
  });

  const atLeast = response.includes(false);

  if (atLeast) {
    yield put(openSnackbarAtLeast2Res());
  } else {
    const reparto = yield select(selectedReparto);
    const { idReparto, nomeReparto } = reparto;
    const nomeForm = yield select(nomeFormulario);
    const gruppi = yield select(groups);
    const ris1 = yield select(response1);
    const { risposta1 } = ris1;
    const ris2 = yield select(Response2);
    const { risposta2 } = ris2;
    const resWithStatus = yield select(dataRisultati);

    const intestazioneMoreAns = yield select(intestazioneMoreAnswers);

    // creo un array con solo le domande senza lo stateText

    // eslint-disable-next-line max-len
    const domande = domandeAndStatusArray.map((domandaAndStatus: domandaAddForm) => {
      const {
        IDDomanda, Domanda, Tipo, group, facoltativa, libera,
      } = domandaAndStatus;
      if (domandaAndStatus.Tipo === 'a più risposte') {
        const risposteWithStatusArray = objectToArray(risposteWithStatus[IDDomanda]);
        const risposte = risposteWithStatusArray.map((rispostaWithStatus : any) => {
          const {
            IDRisposta, Risposta, Valore, type,
          } = rispostaWithStatus;
          return {
            IDRisposta, Risposta, Valore, type,
          };
        });
        return {
          IDDomanda, Domanda, Tipo, risposte, group, facoltativa, libera,
        };
      }
      return {
        IDDomanda, Domanda, Tipo, group, facoltativa, libera,
      };
    });
    domande.sort((a, b) => {
      const IDGroupA = a.group?.toUpperCase() ? a.group?.toUpperCase() : '';
      const IDGroupB = b.group?.toUpperCase() ? b.group?.toUpperCase() : '';
      if (IDGroupA < IDGroupB) {
        return -1;
      }
      if (IDGroupA > IDGroupB) {
        return 1;
      }
      return 0;
    });
    // Creo Array con solo i risultati senza gli status
    const resWithStatusArray = objectToArray(resWithStatus);

    const risultati = resWithStatusArray.map((risultatoWithStatus : any) => {
      const {
        IDRisultato, risultato, valoreMin, valoreMax,
      } = risultatoWithStatus;
      return {
        IDRisultato, risultato, valoreMin, valoreMax,
      };
    });
    // inserico Form piu risposte nel DB
    yield call(addForm, nomeReparto, idReparto,
      nomeForm, gruppi, domande, risultati, risposta1, risposta2,
      intestazioneMoreAns);
    const utente = yield select(user);
    const date = startOfToday();
    // inserico il nuovo form nell history editor
    yield call(setNewStructure, nomeReparto, idReparto,
      nomeForm, domande, gruppi, risultati, risposta1, risposta2, utente, date);

    yield put(resetDataRisultati());

    yield put(resetDomandeOfDomandeObject());
    yield put(setBSaveDisabled());
    yield put(buttonCancelAddFormClicked());

    yield put(setIsLoaded());
  }
}

export function* addDomandaTwoResInArray() {
  const IDDomanda = uuidv4();
  const Domanda = yield select(questionTwoAns);

  yield put(setDomandaInObjectDomande({ IDDomanda, Domanda }));
  yield put(setBAddDomandaUnclicked());
  yield put(resetDomanda());
}

export function* addDomandaMoreResInArray() {
  const IDDomanda = uuidv4();
  const Domanda = yield select(question);
  const listRisposte = yield select(risposteOfDomandaObject);
  const ansTutteUguali = yield select(risposteTutteUguali);
  yield put(setDomandaInObjectDomandeMoreRes({ IDDomanda, Domanda }));
  yield put(setBAddDomandaUnclicked());
  yield put(resetDomanda());

  if (ansTutteUguali === true) {
    const listRisposteArray = objectToArray(listRisposte);
    const listResPrimaDomanda = objectToArray(listRisposteArray[0]);
    yield all(listResPrimaDomanda.map((res : any) => {
      const IDRisposta = uuidv4();
      const { Risposta, Valore, type } = res;
      const setRes = put(setAnswersInDomanda({
        IDDomanda, IDRisposta, Risposta, Valore, type,
      }));
      return setRes;
    }));
    yield put(resetAnswerValore());
  }
}

export function* clickAddButton() {
  yield put(setBAddFormClicked());

  yield put(resetDomandeOfDomandeObject());
  yield put(resetIDForm());
  yield put(resetIDReparto());
  yield put(resetDataRisultati());
  yield put(resetRisposteOfDomanda());
}
export function* clickDelOrSaveButton() {
  yield put(openCloseSnackbarConfirmDelete());
  yield put(setBModifyDelAddReturnDisabled());
}

export function* addDomandaMoreAnswers() {
  const IDDomanda = uuidv4();
  const Domanda = yield select(question);

  yield put(setDomandaInObjectDomande({ IDDomanda, Domanda }));
  yield put(setBAddDomandaUnclicked());
}
export function* addRes(action:any) {
  const ansTutteUguali = yield select(risposteTutteUguali);
  let IDRisposta = uuidv4();
  const RispostaWithID = yield select(answer);
  const ValorewithID = yield select(valore);
  const typeWithID = yield select(typeAnswer);
  let IDDomanda = action.payload;
  const IDPrimaDom = action.payload;
  const type = typeWithID[IDDomanda];
  const Risposta = RispostaWithID[IDDomanda];
  const Valore = ValorewithID[IDDomanda];

  // Se è cliccato il risposte tutte uguali
  if (ansTutteUguali === true) {
    const listDomandeObj = yield select(domandeObject);
    const listDomandeArr = objectToArray(listDomandeObj);
    yield all(listDomandeArr.map((ques : any) => {
      IDDomanda = ques.IDDomanda;
      IDRisposta = uuidv4();
      const setRes = put(setAnswersInDomanda({
        IDDomanda, IDRisposta, Risposta, Valore, type,
      }));
      return setRes;
    }));
    yield put(resetAnswerValore());
    yield put(setAddRispostaUnclicked(IDPrimaDom));
    yield put(setType(IDPrimaDom));
  }
  yield put(setAnswersInDomanda({
    IDDomanda, IDRisposta, Risposta, Valore, type,
  }));

  yield put(resetAnswerValore());
  yield put(setAddRispostaUnclicked(IDDomanda));
  yield put(setType(IDDomanda));
}

export function* deleteDomandaPiuRes(action:any) {
  const IDDomanda = action.payload;

  yield put(deleteDomandeObject(IDDomanda));
  yield put(resetDomandaByIDDomanda(IDDomanda));
}

export function* addResult() {
  const IDRisultato = uuidv4();
  const risultato = yield select(result);
  const valoreMin = yield select(valueMin);
  const valoreMax = yield select(valueMax);
  const stateModify = false;

  yield put(addRisultato({
    IDRisultato, risultato, valoreMin, valoreMax, stateModify,
  }));
}
