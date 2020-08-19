import { call, select, put } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import {
  nomeDomanda, setDomandaInArrayDomande, setBAddDomandaUnclicked, resetDomanda,
} from '../slice/domandeAddFormSlice';
import { formType, selectedReparto, nomeFormulario } from '../slice/addFormSlice';
import { addFormDueRisposte } from '../api';

// eslint-disable-next-line import/no-cycle

export default function* addReparto() {
  const tipoForm = yield select(formType);
  const reparto = yield select(selectedReparto);
  const { idReparto, nomeReparto } = reparto;
  const nomeForm = yield select(nomeFormulario);

  yield call(addFormDueRisposte, nomeReparto, tipoForm, idReparto, nomeForm);
}

export function* addDomandaInArray() {
  const IDDomanda = uuidv4();
  const Domanda = yield select(nomeDomanda);

  yield put(setDomandaInArrayDomande({ IDDomanda, Domanda }));
  yield put(setBAddDomandaUnclicked());
  yield put(resetDomanda());
}
