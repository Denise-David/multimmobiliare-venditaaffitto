import { select, put, call } from 'redux-saga/effects';
import { nomeMedico, cognomeMedico, setMediciTrovati } from '../slice/searchDoctorSlice';
import { searchDoctor } from '../api';

export default function* buttonSearch(action : any) {
  try {
    const medicoName = yield select(nomeMedico);
    console.log('xxnome', medicoName);
    const medicoCognome = yield select(cognomeMedico);
    const risultatoMedici = yield call(searchDoctor, medicoName, medicoCognome);
    const { firstname = '', lastname = '', city = '' } = risultatoMedici;
    const datiImporantiRisultatoMedici = `${firstname} ${lastname}, ${city}`;
    console.log(datiImporantiRisultatoMedici);

    yield put(setMediciTrovati(datiImporantiRisultatoMedici));
  } catch (error) {
    console.log(error);
  }
}
