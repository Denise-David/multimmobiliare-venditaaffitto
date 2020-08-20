import { call, select, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { risposta2 as Response2, risposta1 as response1 } from '../slice/risposteAddFormSlice';

import {
  domandaAddForm,
  domandeObject,
  question, setDomandaInObjectDomande, setBAddDomandaUnclicked, resetDomanda,
} from '../slice/domandeAddFormSlice';

import { formType, selectedReparto, nomeFormulario } from '../slice/addFormSlice';
import { addFormDueRisposte } from '../api';
import { objectToArray } from '../../util';

// eslint-disable-next-line import/no-cycle

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

  // creo un array con solo le domande senza lo stateText
  const domandeAndStatusArray = objectToArray(domandeAndStatus);

  // eslint-disable-next-line max-len
  const domande = domandeAndStatusArray.map((domandaAndStatus: domandaAddForm) => {
    const { IDDomanda, Domanda } = domandaAndStatus;
    return { IDDomanda, Domanda };
  });
  // inserisco Form nel DB
  yield call(addFormDueRisposte, nomeReparto,
    tipoForm, idReparto, nomeForm, domande,
    risposta1, risposta2);
}

export function* addDomandaInArray() {
  const IDDomanda = uuidv4();
  const Domanda = yield select(question);

  yield put(setDomandaInObjectDomande({ IDDomanda, Domanda }));
  yield put(setBAddDomandaUnclicked());
  yield put(resetDomanda());
}
