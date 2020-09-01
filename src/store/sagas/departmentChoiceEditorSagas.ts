import { put, select } from 'redux-saga/effects';
import {
  enableAll, resetDataRisultati,
} from '../slice/risultatiAddFormSlice';
import {
  resetFormType, resetSelectedReparto, setConfirmDisabled,
  isButtonAddFormClicked, setBAddFormUnclicked, setBConfirmAddFormClicked,
  setBConfirmAddFormUnclicked,
} from '../slice/addFormSlice';
import { resetIDReparto, resetIDForm } from '../slice/repartoDDLSlice';
import { setInitialStateAction } from '../slice/initialStateSlice';
import { resetDomandeOfDomandeObject } from '../slice/domandeAddFormSlice';
import { unsetRepartoModifyRight } from '../slice/rightsSlice';
import { resetRisposteTwoRisposte } from '../slice/risposteAddFormSlice';
// eslint-disable-next-line import/no-cycle

export default function* confirmAddForm() {
  yield put(setConfirmDisabled());
  yield put(enableAll());
  yield put(setBAddFormUnclicked());
  yield put(setBConfirmAddFormClicked());
}

export function* cancelAddForm() {
  const addReparto = yield select(isButtonAddFormClicked);
  yield put(setBAddFormUnclicked());
  yield put(enableAll());
  yield put(resetFormType());
  yield put(resetSelectedReparto());
  yield put(setConfirmDisabled());
  yield put(setBConfirmAddFormUnclicked());
  yield put(resetIDReparto());
  yield put(resetIDForm());
  yield put(setInitialStateAction());
  yield put(resetDomandeOfDomandeObject());
  if (addReparto === true) {
    yield put(resetIDReparto());
  }
}
export function* changeRep() {
  yield put(setBAddFormUnclicked());
  yield put(enableAll());
  yield put(resetFormType());
  yield put(resetSelectedReparto());
  yield put(setConfirmDisabled());
  yield put(setBConfirmAddFormUnclicked());
  yield put(resetIDForm());
  yield put(setInitialStateAction());
  yield put(resetDomandeOfDomandeObject());
  yield put(unsetRepartoModifyRight());
  yield put(resetDataRisultati());
  yield put(resetRisposteTwoRisposte());
}
