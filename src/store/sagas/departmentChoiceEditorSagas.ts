import { put, select } from 'redux-saga/effects';
import { resetIDReparto, resetIDForm } from '../slice/ddlEditorFormAndRepartiSlice';
import { unsetRepartoModifyRight } from '../slice/rightsSlice';
import {
  resetDataRisultati,
} from '../slice/risultatiAddFormSlice';
import {
  resetFormType, resetSelectedReparto, setConfirmDisabled,
  isButtonAddFormClicked, setBAddFormUnclicked, setBConfirmAddFormClicked,
  setBConfirmAddFormUnclicked,
} from '../slice/addFormSlice';

import { domandeObject, resetDomandeOfDomandeObject } from '../slice/domandeAddFormSlice';

import { resetRisposteTwoRisposte, resetRisposteOfDomanda, resAtLeast2 } from '../slice/risposteAddFormSlice';
import { setBModifyDelAddReturnEnabled, setDDLFormDisabled } from '../slice/disableEnableSlice';
import { objectToArray } from '../../util';
import { openSnackbarAtLeast2Res } from '../slice/snackbarSlice';

// eslint-disable-next-line import/no-cycle

export default function* confirmAddForm() {
  yield put(setConfirmDisabled());
  yield put(setBModifyDelAddReturnEnabled());
  yield put(setBAddFormUnclicked());
  yield put(setBConfirmAddFormClicked());
}

export function* cancelAddForm() {
  const atLeast2Res = yield select(resAtLeast2);
  const listDom = yield select(domandeObject);
  const listDomandeArray = objectToArray(listDom);
  if (atLeast2Res === false && listDomandeArray.length !== 0) {
    yield put(openSnackbarAtLeast2Res());
  } else {
    const addReparto = yield select(isButtonAddFormClicked);
    yield put(setBAddFormUnclicked());
    yield put(setBModifyDelAddReturnEnabled());
    yield put(resetFormType());
    yield put(resetSelectedReparto());
    yield put(setConfirmDisabled());
    yield put(setBConfirmAddFormUnclicked());
    yield put(resetIDReparto());
    yield put(resetIDForm());

    yield put(resetDomandeOfDomandeObject());
    yield put(resetRisposteTwoRisposte());
    yield put(setDDLFormDisabled());
    if (addReparto === true) {
      yield put(resetIDReparto());
    }
  }
}
export function* changeRep() {
  yield put(setBAddFormUnclicked());
  yield put(setBModifyDelAddReturnEnabled());
  yield put(resetFormType());
  yield put(resetSelectedReparto());
  yield put(setConfirmDisabled());
  yield put(setBConfirmAddFormUnclicked());
  yield put(resetIDForm());

  yield put(resetDomandeOfDomandeObject());
  yield put(unsetRepartoModifyRight());
  yield put(resetDataRisultati());
  yield put(resetRisposteTwoRisposte());
  yield put(resetRisposteOfDomanda());
}
