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

/**
 * Salvataggio delle modifiche sul formulario
 */
export default function* saveModify():Generator {
  try {
    const objDomande = yield select(domandeObject);
    const objRisultati = yield select(dataRisultati);
    const listDomande = objectToArray(objDomande);
    const objRisposte:any = yield select(risposteOfDomandaObject);
    let atLeast1Res = true;
    // Controllo ci sia almeno 1 risposta per ogni domanda
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
    // Se non c'è almeno 1 risposta per ogni domanda apro lo snackbar
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

      // Ritorno la lista da inserire nel DB senza i dati che non servono
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

      // Riordino le domande per gruppi
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
      // Metto il formulario con le modifiche nel DB
      yield call(updateForm, IDFormulario, GUID, nomeReparto,
        nomeForm, gruppi, listDomandeAndRisposte, listRisultati, risposta1,
        risposta2, intestazioneMoreAns);
      // Inserisco nell'history il formulario con le nuove modifiche e quello senza
      yield call(setNewAndOldStructure, GUID, nomeReparto,
        nomeForm, gruppi, listDomandeAndRisposte, listRisultati, risposta1,
        risposta2, date, formulario, utente);
      // Segnalo che non ci sono modifiche non salvate
      yield put(unsetUnsavedChanges());
    }
  } catch (error) {
    console.error('errore', error);
  }
}
