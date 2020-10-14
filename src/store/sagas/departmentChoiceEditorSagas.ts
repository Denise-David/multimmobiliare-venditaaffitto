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

import { resetDomandeOfDomandeObject, resetIntestazioneMoreAns } from '../slice/domandeAddFormSlice';

import { resetRisposteTwoRisposte, resetRisposteOfDomanda } from '../slice/risposteAddFormSlice';
import { setBModifyDelAddReturnEnabled, setDDLFormDisabled } from '../slice/disableEnableSlice';

import { resetGroups } from '../slice/groupSlice';
import { resetMenuMoreAns } from '../slice/menuDomandeERisposteSlice';
import { resetMenuTwoAns } from '../slice/menuDomandeSlice';

export default function* confirmAddForm():Generator {
  yield put(setConfirmDisabled());
  yield put(setBModifyDelAddReturnEnabled());
  yield put(setBAddFormUnclicked());
  yield put(setBConfirmAddFormClicked());
  yield put(resetMenuMoreAns());
  yield put(resetMenuTwoAns());
  yield put(resetIntestazioneMoreAns());
}

export function* cancelAddForm():Generator {
  const addReparto = yield select(isButtonAddFormClicked);
  yield put(resetMenuMoreAns());
  yield put(resetMenuTwoAns());
  yield put(setBAddFormUnclicked());
  yield put(setBModifyDelAddReturnEnabled());
  yield put(resetFormType());
  yield put(resetSelectedReparto());
  yield put(setConfirmDisabled());
  yield put(setBConfirmAddFormUnclicked());
  yield put(resetIDReparto());
  yield put(resetIDForm());
  yield put(resetIntestazioneMoreAns());
  yield put(resetDomandeOfDomandeObject());
  yield put(resetRisposteTwoRisposte());
  yield put(setDDLFormDisabled());
  yield put(resetGroups());
  yield put(resetMenuMoreAns());
  yield put(resetMenuTwoAns());
  if (addReparto === true) {
    yield put(resetIDReparto());
  }
}
export function* changeRep():Generator {
  yield put(setBAddFormUnclicked());
  yield put(setBModifyDelAddReturnEnabled());
  yield put(resetFormType());
  yield put(resetSelectedReparto());
  yield put(setConfirmDisabled());
  yield put(setBConfirmAddFormUnclicked());
  yield put(resetIDForm());
  yield put(resetMenuTwoAns());
  yield put(resetDomandeOfDomandeObject());
  yield put(unsetRepartoModifyRight());
  yield put(resetDataRisultati());
  yield put(resetRisposteTwoRisposte());
  yield put(resetRisposteOfDomanda());
  yield put(resetIntestazioneMoreAns());
  yield put(resetGroups());
  yield put(resetMenuMoreAns());
}
