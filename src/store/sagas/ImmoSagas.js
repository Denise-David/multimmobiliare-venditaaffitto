import { put, call, select } from 'redux-saga/effects';
import Geocode from 'react-geocode';
import fetchAll, { fetchCountries } from '../api/prova';
import { setAllImmo } from '../slice/ImmoSlice';
import { setLoading, setLoaded } from '../slice/LoadingSlice';
import { setCountries } from '../slice/FormSlice';

/**
 * Filtraggio dati immobili
 */
export default function* filterImmo() {
  try {
    yield put(setLoading());
    const allImmoData = yield call(fetchAll);
    if (allImmoData) {
      yield put(setAllImmo(allImmoData.data));
    }
    yield put(setLoaded());
  } catch (error) {
    console.error('errore', error);
  }
}

export function* countries() {
  try {
    yield put(setLoading());
    const countriesList = yield call(fetchCountries);
    if (countriesList) {
      yield put(setCountries(countriesList.data));
    }
    yield put(setLoaded());
  } catch (error) {
    console.error('errore', error);
  }
}
