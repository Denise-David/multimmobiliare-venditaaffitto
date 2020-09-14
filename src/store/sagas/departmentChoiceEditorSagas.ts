import { call, put, select } from 'redux-saga/effects';
import { IDRepartoSelected, resetIDReparto, resetIDForm } from '../slice/ddlEditorFormAndRepartiSlice';
import { formulariByReparto, unsetRepartoModifyRight } from '../slice/rightsSlice';
import {
  resetDataRisultati,
} from '../slice/risultatiAddFormSlice';
import {
  resetFormType, resetSelectedReparto, setConfirmDisabled,
  isButtonAddFormClicked, setBAddFormUnclicked, setBConfirmAddFormClicked,
  setBConfirmAddFormUnclicked,
} from '../slice/addFormSlice';

import { resetDomandeOfDomandeObject } from '../slice/domandeAddFormSlice';

import { resetRisposteTwoRisposte, resetRisposteOfDomanda } from '../slice/risposteAddFormSlice';
import { setBModifyDelAddReturnEnabled, setDDLFormDisabled, setDDLFormEnabled } from '../slice/disableEnableSlice';
import { fetchRepartoFormByGUID } from '../api';
import { repartoGUID, setFormulariList, setRepartoGUID } from '../slice/homePageLabelSlice';
// eslint-disable-next-line import/no-cycle

export default function* confirmAddForm() {
  yield put(setConfirmDisabled());
  yield put(setBModifyDelAddReturnEnabled());
  yield put(setBAddFormUnclicked());
  yield put(setBConfirmAddFormClicked());
}

export function* cancelAddForm() {
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
