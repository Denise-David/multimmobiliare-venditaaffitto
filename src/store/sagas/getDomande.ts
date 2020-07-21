import { call, put } from 'redux-saga/effects';
import fetchForm from '../api/index';
import { domande } from '../slice/formsSlice';

// eslint-disable-next-line import/prefer-default-export
export function* getDomande() {
  const form = yield call(fetchForm);
  const numDomande = form.data.formulari[0].Domande;
  const Domande = [];
  for (let i = 0; i < numDomande.length; i += 1) {
    const domanda = form.data.formulari[0].Domande[i].Domanda;
    Domande.push(domanda);
  }
  console.log(Domande);
  yield put(domande(Domande));
}
