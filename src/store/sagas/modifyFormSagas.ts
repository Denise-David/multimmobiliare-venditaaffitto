import { put, select, call } from 'redux-saga/effects';
import startOfToday from 'date-fns/startOfToday';
import {
  rispostaType,
  risposteOfDomandaObject, ris2, ris1,
} from '../slice/risposteAddFormSlice';
import { repartoRightType, allReparti, user } from '../slice/rightsSlice';
import { domandaType, domandeObject, intestazioneMoreAnswers } from '../slice/domandeAddFormSlice';
import { groups } from '../slice/groupSlice';

import { dataRisultati } from '../slice/risultatiAddFormSlice';

import {
  IDRepartoSelected, IDForm,
} from '../slice/ddlEditorFormAndRepartiSlice';
import fetchFormStructureByID, { setNewAndOldStructure, updateForm } from '../api';
import { objectToArray } from '../../util';
import { nomeFormulario, unsetUnsavedChanges } from '../slice/addFormSlice';
import { openSnackbarAtLeast2Res } from '../slice/snackbarSlice';

export default function* saveModify():Generator {
  try {
    const objDomande = yield select(domandeObject);
    const objRisultati = yield select(dataRisultati);
    const listDomande = objectToArray(objDomande);
    const objRisposte:any = yield select(risposteOfDomandaObject);
    let atLeast1Res = true;
    const response = listDomande.map((domanda : domandaType) => {
      if ((objRisposte[domanda.IDDomanda] === undefined
        || Object.keys(objRisposte[domanda.IDDomanda]).length === 0) && atLeast1Res === true
        && domanda.tipo === 'a più risposte') {
        atLeast1Res = false;

        return atLeast1Res;
      } atLeast1Res = true;
      return atLeast1Res;
    });

    const atLeast = response.includes(false);
    if (atLeast) {
      yield put(openSnackbarAtLeast2Res());
    } else {
      const IDFormulario = yield select(IDForm);
      const GUID = yield select(IDRepartoSelected);
      const listRep :any = yield select(allReparti);
      const intestazioneMoreAns = yield select(intestazioneMoreAnswers);

      // trovo il nome del reparto in base al formuario selezionato
      const findNameByID = (rep : repartoRightType) => rep.sermednodeid
      === GUID || rep.unitid === GUID;
      const repSelected = listRep.find(findNameByID);
      const nomeReparto = repSelected.longname;

      const nomeForm = yield select(nomeFormulario);
      const listDomandeAndRisposte = listDomande.map((dom : domandaType) => {
        const {
          IDDomanda, domanda, tipo, group, facoltativa, libera,
        } = dom;
        if (tipo === 'a più risposte') {
          const listRisposte = objectToArray(objRisposte[IDDomanda]);
          const risposte = listRisposte?.map((ris : rispostaType) => {
            const {
              IDRisposta, risposta, valore, type,
            } = ris;
            return {
              IDRisposta, risposta, valore, type,
            };
          });
          return {
            IDDomanda, domanda, tipo, risposte, group, facoltativa, libera,
          };
        }
        return {
          IDDomanda, domanda, tipo, group, facoltativa, libera,
        };
      });

      listDomandeAndRisposte.sort((a, b) => {
        const IDGroupA = a.group?.toUpperCase() ? a.group?.toUpperCase() : '';
        const IDGroupB = b.group?.toUpperCase() ? b.group?.toUpperCase() : '';
        if (IDGroupA < IDGroupB) {
          return -1;
        }
        if (IDGroupA > IDGroupB) {
          return 1;
        }
        return 0;
      });
      const listRisultati = objectToArray(objRisultati);
      const ans1:any = yield select(ris1);
      const ans2 :any = yield select(ris2);
      const { risposta1 } = ans1;
      const { risposta2 } = ans2;
      const utente = yield select(user);
      const date = startOfToday();
      const formulario = yield call(fetchFormStructureByID, IDFormulario);
      const gruppi = yield select(groups);

      yield call(updateForm, IDFormulario, GUID, nomeReparto,
        nomeForm, gruppi, listDomandeAndRisposte, listRisultati, risposta1,
        risposta2, intestazioneMoreAns);

      yield call(setNewAndOldStructure, GUID, nomeReparto,
        nomeForm, gruppi, listDomandeAndRisposte, listRisultati, risposta1,
        risposta2, date, formulario, utente);
      yield put(unsetUnsavedChanges());
    }
  } catch (error) {
    console.error('errore', error);
  }
}
