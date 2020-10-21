import { select, put, call } from 'redux-saga/effects';
import { nomeMedico, cognomeMedico, setMediciTrovati } from '../slice/searchDoctorSlice';
import { searchDoctor } from '../api';

// bottone di ricerca dottori
export default function* buttonSearch():Generator {
  try {
    const medicoName = yield select(nomeMedico);
    const medicoCognome = yield select(cognomeMedico);
    const risultatoMedici:any = yield call(searchDoctor, medicoName, medicoCognome);
    const { data = {} } = risultatoMedici;

    yield put(setMediciTrovati(data));
  } catch (error) {
    console.error(error);
  }
}
