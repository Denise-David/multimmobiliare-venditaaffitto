import { call, put } from 'redux-saga/effects';
import fetchForm from '../api/index';
// eslint-disable-next-line import/no-cycle
import { domande, risposte } from '../slice/formsSlice';

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

export function* getRisposte() {
  const form = yield call(fetchForm);
  const numRisposte = form.data.formulari[0].Domande[0].Risposte;
  const Risposte = [];
  for (let i = 0; i < numRisposte.length; i += 1) {
    const domanda = form.data.formulari[0].Domande[0].Risposte[i].risposta;
    Risposte.push(domanda);
  }
  console.log(Risposte);
  yield put(risposte(Risposte));
}
