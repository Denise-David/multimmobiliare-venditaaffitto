import { call } from 'redux-saga/effects';
import fetchForm, { fetchAllForm } from '../api/index';
// eslint-disable-next-line import/no-cycle

export function* getDomandeAndID() {
  const form = yield call(fetchForm, 1);
}

export function* getAllForm() {
  const allForm = yield call(fetchAllForm);
}

export function* getRisposteByDomandaID() {
  const form = yield call(fetchForm);
  const numRisposte = form.data.formulari[0].Domande[0].Risposte;

  const Risposte = [];
  for (let i = 0; i < numRisposte.length; i += 1) {
    const domanda = form.data.formulari[0].Domande[0].Risposte[i].risposta;
    Risposte.push(domanda);
  }
  console.log(Risposte);
}
