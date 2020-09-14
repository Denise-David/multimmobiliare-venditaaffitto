import { put, select } from 'redux-saga/effects';
import { nomeFormulario, buttonConfirmAddFormClicked } from '../slice/addFormSlice';

import {
  setBModifyDelAddReturnDisabled, setBSaveDisabled,
  setDDLFormDisabled, setBModifyDelAddReturnEnabled,
  setBSaveEnabled, setDDLFormEnabled,
} from '../slice/disableEnableSlice';

export default function* allDisabled() {
  try {
    yield put(setBModifyDelAddReturnDisabled());
    yield put(setBSaveDisabled());
    yield put(setDDLFormDisabled());
  } catch (error) {
    console.log('errore', error);
  }
}

export function* allEnabled() {
  try {
    const confirmAddFormClicked = yield select(buttonConfirmAddFormClicked);
    const nomeForm = yield select(nomeFormulario);
    yield put(setBModifyDelAddReturnEnabled());
    if (nomeForm !== '' && confirmAddFormClicked === true) {
      yield put(setBSaveEnabled());
    } else if (confirmAddFormClicked === false) {
      yield put(setBSaveEnabled());
    }
    yield put(setDDLFormEnabled());
  } catch (error) {
    console.log('errore', error);
  }
}
