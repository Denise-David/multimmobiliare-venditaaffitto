import { call, select } from 'redux-saga/effects';
import { valueTextField } from '../slice/editFormSlice';

import { addForm } from '../api';
// eslint-disable-next-line import/no-cycle

export default function* addReparto() {
  const textFieldValue = yield select(valueTextField);
  yield call(addForm, textFieldValue);
}
