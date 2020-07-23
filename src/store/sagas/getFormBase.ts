import { call } from 'redux-saga/effects';
import fetchForm from '../api/index';
// eslint-disable-next-line import/no-cycle

export function* getDomandeAndID() {
  const form = yield call(fetchForm, 1);
  console.log('mmm', form.data);
  // yield put(domande(form.data));

  // const numDomande = form.data.formulari[0].Domande;
  // const domandeArray = [];

  // for (let i = 0; i < numDomande.length; i += 1) {
  //   const domandaAndID = {

  //     domandaTesto: form.data.formulari[0].Domande[i].Domanda,
  //     ID: form.data.formulari[0].Domande[i].ID,
  //   };

  //   domandeArray.push(domandaAndID);
  // }
  // yield put(domande(domandeArray));
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
