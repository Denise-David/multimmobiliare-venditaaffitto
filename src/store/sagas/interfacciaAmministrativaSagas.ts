import { put, call } from 'redux-saga/effects';

import { fetchFormNoLabel } from '../api';
import { setFormNoLabel } from '../slice/interfacciaAmmSlice';

export default function* initInterfaccia() {
  try {
    const formNoLabel = yield call(fetchFormNoLabel);
    yield put(setFormNoLabel(formNoLabel.data));
  } catch (error) {
    console.log('errore', error);
  }
}
