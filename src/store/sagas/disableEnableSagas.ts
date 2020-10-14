import { put, select } from 'redux-saga/effects';
import { isBConfirmAddFormClicked, nomeFormulario } from '../slice/addFormSlice';

import {
  setBModifyDelAddReturnDisabled, setBSaveDisabled,
  setDDLFormDisabled, setBModifyDelAddReturnEnabled,
  setBSaveEnabled, setDDLFormEnabled,
} from '../slice/disableEnableSlice';

export default function* allDisabled():Generator {
  try {
    yield put(setBModifyDelAddReturnDisabled());
    yield put(setBSaveDisabled());
    yield put(setDDLFormDisabled());
  } catch (error) {
    console.error(error);
  }
}

export function* allEnabled():Generator {
  try {
    const confirmAddFormClicked = yield select(isBConfirmAddFormClicked);
    const nomeForm = yield select(nomeFormulario);

    yield put(setBModifyDelAddReturnEnabled());
    if (nomeForm !== '' && confirmAddFormClicked === true) {
      yield put(setBSaveEnabled());
    } else if (confirmAddFormClicked === false) {
      yield put(setBSaveEnabled());
    }
    yield put(setDDLFormEnabled());
  } catch (error) {
    console.error(error);
  }
}
