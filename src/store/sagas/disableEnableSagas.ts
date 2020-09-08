import { put } from 'redux-saga/effects';

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
    yield put(setBModifyDelAddReturnEnabled());
    yield put(setBSaveEnabled());
    yield put(setDDLFormEnabled());
  } catch (error) {
    console.log('errore', error);
  }
}
