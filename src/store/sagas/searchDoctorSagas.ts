import { select, put, call } from 'redux-saga/effects';
import { nomeMedico, cognomeMedico, setMediciTrovati } from '../slice/searchDoctorSlice';
import { searchDoctor } from '../api';

export default function* buttonSearch(action : any) {
  try {
    const medicoName = yield select(nomeMedico);
    const medicoCognome = yield select(cognomeMedico);
    const risultatoMedici = yield call(searchDoctor, medicoName, medicoCognome);
    const { data = {} } = risultatoMedici;

    yield put(setMediciTrovati(data));
  } catch (error) {
    console.error(error);
  }
}
