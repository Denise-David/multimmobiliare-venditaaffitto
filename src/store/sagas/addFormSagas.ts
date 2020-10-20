/* eslint-disable no-underscore-dangle */
import {
  call, select, put, all,
} from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import startOfToday from 'date-fns/startOfToday';
import {

  selectedReparto, nomeFormulario, setBAddFormClicked, setIDAddedForm,
} from '../slice/addFormSlice';
import {
  actionAnsType,
  rispostaType,
  risposteOfDomandaObject,
  valoreRis, answer, ris2 as Response2,
  ris1 as response1, setAnswersInDomanda,
  resetAnswerValore, typeAnswer, setAddRispostaUnclicked,
  deleteDomandeObject, resetRisposteOfDomanda, setType,
} from '../slice/risposteAddFormSlice';
import {
  resultType,
  valueMin, valueMax,
  result, addRisultato, dataRisultati, resetDataRisultati,
} from '../slice/risultatiAddFormSlice';

import {
  questionTwoAns,
  domandaType,
  domandeObject,
  question, setBAddDomandaUnclicked, resetDomanda,
  setDomandaInObjectDomande,
  resetDomandaByIDDomanda,
  resetDomandeOfDomandeObject,
  setDomandaInObjectDomandeMoreRes, intestazioneMoreAnswers,
} from '../slice/domandeAddFormSlice';
import { openCloseSnackbarConfirmDelete, openSnackbarAtLeast2Res } from '../slice/snackbarSlice';

import { groups } from '../slice/groupSlice';
import { user } from '../slice/rightsSlice';
import { risposteTutteUguali } from '../slice/menuDomandeERisposteSlice';

import { addForm, setNewStructure } from '../api';
import { objectToArray } from '../../util';
import { resetIDForm, resetIDReparto } from '../slice/ddlEditorFormAndRepartiSlice';
import { setBModifyDelAddReturnDisabled } from '../slice/disableEnableSlice';

import { setIsLoaded, setIsLoading } from '../slice/loadingSlice';

export default function* addFormulario():Generator {
  yield put(setIsLoading());

  const domandeAndStatus = yield select(domandeObject);
  const risposteWithStatus:any = yield select(risposteOfDomandaObject);
  const domandeAndStatusArray = objectToArray(domandeAndStatus);
  let atLeast1Res = true;

  const response = domandeAndStatusArray.map((domanda : domandaType) => {
    if ((risposteWithStatus[domanda.IDDomanda] === undefined
      || Object.keys(risposteWithStatus[domanda.IDDomanda]).length === 0) && atLeast1Res === true
       && domanda.tipo === 'a più risposte') {
      atLeast1Res = false;
      return (atLeast1Res);
    } atLeast1Res = true;
    return atLeast1Res;
  });

  const atLeast = response.includes(false);

  if (atLeast) {
    yield put(openSnackbarAtLeast2Res());
  } else {
    const reparto:any = yield select(selectedReparto);
    const { idReparto, nomeReparto } = reparto;
    const nomeForm = yield select(nomeFormulario);
    const gruppi = yield select(groups);
    const ris1:any = yield select(response1);
    const { risposta1 } = ris1;
    const ris2:any = yield select(Response2);
    const { risposta2 } = ris2;
    const resWithStatus = yield select(dataRisultati);

    const intestazioneMoreAns = yield select(intestazioneMoreAnswers);

    // creo un array con solo le domande senza lo stateText

    // eslint-disable-next-line max-len
    const domande = domandeAndStatusArray.map((domandaAndStatus: domandaType) => {
      const {
        IDDomanda, domanda, tipo, group, facoltativa, libera,
      } = domandaAndStatus;
      if (domandaAndStatus.tipo === 'a più risposte') {
        const risposteWithStatusArray = objectToArray(risposteWithStatus[IDDomanda]);
        const risposte = risposteWithStatusArray.map((rispostaWithStatus : rispostaType) => {
          const {
            // eslint-disable-next-line no-shadow
            IDRisposta, risposta, valore, type,
          } = rispostaWithStatus;
          return {
            IDRisposta, risposta, valore, type,
          };
        });
        return {
          IDDomanda, domanda, tipo, risposte, group, facoltativa, libera,
        };
      }
      return {
        IDDomanda, domanda, tipo, group, facoltativa, libera,
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

    const risultati = resWithStatusArray.map((risultatoWithStatus : resultType) => {
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
    const structure = yield call(setNewStructure, nomeReparto, idReparto,
      nomeForm, domande, gruppi, risultati, risposta1, risposta2, utente, date);

    yield put(setIDAddedForm(structure));

    yield put(setIsLoaded());
  }
}

export function* addDomandaTwoResInArray():Generator {
  const IDDomanda = uuidv4();
  const domanda = yield select(questionTwoAns);

  yield put(setDomandaInObjectDomande({ IDDomanda, domanda }));
  yield put(setBAddDomandaUnclicked());
  yield put(resetDomanda());
}

export function* addDomandaMoreResInArray():Generator {
  const IDDomanda = uuidv4();
  const domanda = yield select(question);
  const listRisposte = yield select(risposteOfDomandaObject);
  const ansTutteUguali = yield select(risposteTutteUguali);
  yield put(setDomandaInObjectDomandeMoreRes({ IDDomanda, domanda }));
  yield put(setBAddDomandaUnclicked());
  yield put(resetDomanda());

  if (ansTutteUguali === true) {
    const listRisposteArray = objectToArray(listRisposte);
    const listResPrimaDomanda = objectToArray(listRisposteArray[0]);
    yield all(listResPrimaDomanda.map((res : rispostaType) => {
      const IDRisposta = uuidv4();
      // eslint-disable-next-line no-shadow
      const { risposta, valore, type } = res;
      const setRes = put(setAnswersInDomanda({
        IDDomanda, IDRisposta, risposta, valore, type,
      }));
      return setRes;
    }));
    yield put(resetAnswerValore());
  }
}

export function* clickAddButton():Generator {
  yield put(setBAddFormClicked());

  yield put(resetDomandeOfDomandeObject());
  yield put(resetIDForm());
  yield put(resetIDReparto());
  yield put(resetDataRisultati());
  yield put(resetRisposteOfDomanda());
}
export function* clickDelOrSaveButton():Generator {
  yield put(openCloseSnackbarConfirmDelete());
  yield put(setBModifyDelAddReturnDisabled());
}

export function* addRes(action:actionAnsType):Generator {
  const ansTutteUguali = yield select(risposteTutteUguali);
  let IDRisposta = uuidv4();
  const RispostaWithID:any = yield select(answer);
  const ValorewithID:any = yield select(valoreRis);
  const typeWithID:any = yield select(typeAnswer);
  let IDDomanda = action.payload;
  const IDPrimaDom = action.payload;
  const type = typeWithID[IDDomanda];
  const risposta = RispostaWithID[IDDomanda];
  const valore = ValorewithID[IDDomanda];

  // Se è cliccato il risposte tutte uguali
  if (ansTutteUguali === true) {
    const listDomandeObj = yield select(domandeObject);
    const listDomandeArr = objectToArray(listDomandeObj);
    yield all(listDomandeArr.map((ques : domandaType) => {
      IDDomanda = ques.IDDomanda;
      IDRisposta = uuidv4();
      const setRes = put(setAnswersInDomanda({
        IDDomanda, IDRisposta, risposta, valore, type,
      }));
      return setRes;
    }));
    yield put(resetAnswerValore());
    yield put(setAddRispostaUnclicked(IDPrimaDom));
    yield put(setType(IDPrimaDom));
  }
  yield put(setAnswersInDomanda({
    IDDomanda, IDRisposta, risposta, valore, type,
  }));

  yield put(resetAnswerValore());
  yield put(setAddRispostaUnclicked(IDDomanda));
  yield put(setType(IDDomanda));
}

export function* deleteDomandaPiuRes(action:actionAnsType):Generator {
  const IDDomanda = action.payload;

  yield put(deleteDomandeObject(IDDomanda));
  yield put(resetDomandaByIDDomanda(IDDomanda));
}

export function* addResult():Generator {
  const IDRisultato = uuidv4();
  const risultato = yield select(result);
  const valoreMin = yield select(valueMin);
  const valoreMax = yield select(valueMax);
  const stateModify = false;

  yield put(addRisultato({
    IDRisultato, risultato, valoreMin, valoreMax, stateModify,
  }));
}
