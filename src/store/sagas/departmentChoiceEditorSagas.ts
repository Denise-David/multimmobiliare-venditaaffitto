import { put, select } from 'redux-saga/effects';
import {
  enableAll,
} from '../slice/editFormSlice';
import {
  resetFormType, resetSelectedReparto, setConfirmDisabled,
  isButtonAddFormClicked, setBAddFormUnclicked, setBConfirmAddFormClicked,
  setBConfirmAddFormUnclicked,
} from '../slice/addFormSlice';
import { resetIDReparto, resetIDForm } from '../slice/repartoSlice';
import { setInitialStateAction } from '../slice/initialStateSlice';
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
  if (addReparto === true) {
    yield put(resetIDReparto());
  }
}
