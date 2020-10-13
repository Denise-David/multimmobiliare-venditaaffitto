import { call, put, select } from 'redux-saga/effects';
import {
  repartoCercato, formularioCercato, setList, resetList, resetSelectedIndex,
} from '../slice/homepageNoLabelSlice';

import { searchForm } from '../api';

export default function* initHomeNoLabel() {
  try {
    const rep = yield select(repartoCercato);
    const form = yield select(formularioCercato);
    const allFormForm = yield call(searchForm, form, '');
    const allFormRep = yield call(searchForm, '', rep);

    if (rep.length > 2) {
      const allForm = allFormForm.data.concat(allFormRep.data);

      yield put(setList(allForm));
    } else {
      yield put(resetList());
      yield put(resetSelectedIndex());
    }
  } catch (error) {
    console.error('errore', error);
  }
}
