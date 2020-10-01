import { call, put, select } from 'redux-saga/effects';
import {
  repartoCercato, formularioCercato, setList, resetList, resetSelectedIndex,
} from '../slice/homepageNoLabelSlice';

import { getAllForm } from '../api';

export default function* initHomeNoLabel() {
  try {
    const rep = yield select(repartoCercato);
    const form = yield select(formularioCercato);
    const allFormForm = yield call(getAllForm, form, '');
    const allFormRep = yield call(getAllForm, '', rep);

    if (rep.length > 2) {
      const allForm = allFormForm.data.concat(allFormRep.data);

      yield put(setList(allForm));
    } else {
      yield put(resetList());
      yield put(resetSelectedIndex());
    }
  } catch (error) {
    console.log('errore', error);
  }
}
