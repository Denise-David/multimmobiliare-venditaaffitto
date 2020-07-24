import { useSelector } from 'react-redux';
import { call, select } from 'redux-saga/effects';
import fetchForm, { fetchAllForm } from '../api/index';
import { formID } from '../slice/repartoSlice';
// eslint-disable-next-line import/no-cycle

export function* getDomandeAndID() {
  const ID = yield select(formID);
  const form = yield call(fetchForm, ID);
  console.log('idid', ID);
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
