import { put, call, select } from 'redux-saga/effects';
import Geocode from 'react-geocode';
import fetchAll, {
  fetchCountries,
  setCliente, setRicerca, fetchClienti,
} from '../api/prova';
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

export function* setClient(action) {
  try {
    const { payload } = action;
    const clienti = yield call(fetchClienti);
    const listClienti = clienti.data;
    let lastCliente;
    const clienteEsistente = listClienti.find((i) => i.email === payload.Email);
    if (clienteEsistente === undefined) {
      yield call(setCliente, payload[0]);
      const clientis = yield call(fetchClienti);
      lastCliente = clientis.data[clientis.data.length - 1];
    } else {
      lastCliente = clienteEsistente;
    }
    payload[1].ClienteId = lastCliente.id;
    yield call(setRicerca, payload[1]);
  } catch (error) {
    console.error('errore', error);
  }
}

export function* setRic(action) {
  try {
    const { payload } = action;
    const clienti = yield call(fetchClienti);
    const lastCliente = clienti.data[clienti.data.length - 1];
    payload.IdCliente = lastCliente.id;
    yield call(setRicerca, payload);
  } catch (error) {
    console.error('errore', error);
  }
}

export function* getClienti() {
  try {
    yield call(fetchClienti);
  } catch (error) {
    console.error('errore', error);
  }
}
