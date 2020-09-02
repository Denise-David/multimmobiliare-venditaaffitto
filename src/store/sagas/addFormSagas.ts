import { call, select, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import {
  valueMin, valueMax, alertConfirmDelete,
  disableAll, result, addRisultato, dataRisultati, resetDataRisultati,
} from '../slice/risultatiAddFormSlice';
import {
  risposteOfDomandaObject,
  valore, answer, risposta2 as Response2,
  risposta1 as response1, setAnswersInDomanda,
  resetAnswerValore, typeAnswer, setAddRispostaUnclicked,
  deleteDomandeObject, resetRisposteOfDomanda, setType,
} from '../slice/risposteAddFormSlice';
import { resetRisultati } from '../slice/risultatiFormularioSlice';
import {
  domandaAddForm,
  domandeObject,
  question, setBAddDomandaUnclicked, resetDomanda,
  setDomandaInObjectDomande,
  resetDomandaByIDDomanda,
  resetDomandeOfDomandeObject,
  setDomandaInObjectDomandeMoreRes,
} from '../slice/domandeAddFormSlice';
import {
  selectedReparto, nomeFormulario, setBAddFormClicked, setBSaveDisabled,
} from '../slice/addFormSlice';
import { addFormPiuRisposte } from '../api';
import { objectToArray } from '../../util';
import { setInitialStateAction } from '../slice/initialStateSlice';
import { resetIDForm, resetIDReparto } from '../slice/repartoDDLSlice';

export default function* addFormulario() {
  const reparto = yield select(selectedReparto);
  const { idReparto, nomeReparto } = reparto;
  const nomeForm = yield select(nomeFormulario);
  const domandeAndStatus = yield select(domandeObject);
  const ris1 = yield select(response1);
  const { risposta1 } = ris1;
  const ris2 = yield select(Response2);
  const { risposta2 } = ris2;
  const resWithStatus = yield select(dataRisultati);
  const risposteWithStatus = yield select(risposteOfDomandaObject);

  // creo un array con solo le domande senza lo stateText
  const domandeAndStatusArray = objectToArray(domandeAndStatus);

  // eslint-disable-next-line max-len
  const domande = domandeAndStatusArray.map((domandaAndStatus: domandaAddForm) => {
    const { IDDomanda, Domanda, Tipo } = domandaAndStatus;
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
        IDDomanda, Domanda, Tipo, risposte,
      };
    }
    return { IDDomanda, Domanda, Tipo };
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
  yield call(addFormPiuRisposte, nomeReparto, idReparto,
    nomeForm, domande, risultati, risposta1, risposta2);

  yield put(resetDataRisultati());

  yield put(resetDomandeOfDomandeObject());
  yield put(setBSaveDisabled());
}

export function* addDomandaTwoResInArray() {
  const IDDomanda = uuidv4();
  const Domanda = yield select(question);

  yield put(setDomandaInObjectDomande({ IDDomanda, Domanda }));
  yield put(setBAddDomandaUnclicked());
  yield put(resetDomanda());
}

export function* addDomandaMoreResInArray() {
  const IDDomanda = uuidv4();
  const Domanda = yield select(question);

  yield put(setDomandaInObjectDomandeMoreRes({ IDDomanda, Domanda }));
  yield put(setBAddDomandaUnclicked());
  yield put(resetDomanda());
}

export function* clickAddButton() {
  yield put(setBAddFormClicked());
  yield put(setInitialStateAction());
  yield put(resetRisultati());
  yield put(resetDomandeOfDomandeObject());
  yield put(resetIDForm());
  yield put(resetIDReparto());
  yield put(resetDataRisultati());
  yield put(resetRisposteOfDomanda());
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
  const typeWithID = yield select(typeAnswer);
  const IDDomanda = action.payload;
  const type = typeWithID[IDDomanda];

  const Risposta = RispostaWithID[IDDomanda];
  const Valore = ValorewithID[IDDomanda];

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
