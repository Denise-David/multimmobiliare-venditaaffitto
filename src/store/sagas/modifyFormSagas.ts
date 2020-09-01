import { put, select, call } from 'redux-saga/effects';
import { formulariByReparto, allReparti } from '../slice/rightsSlice';
import { risposta2, risposta1 } from '../slice/risposteAddFormSlice';

import { dataRisultati } from '../slice/risultatiAddFormSlice';
import { domandeObject } from '../slice/domandeAddFormSlice';
import {
  IDRepartoSelected, IDForm,
} from '../slice/repartoDDLSlice';

import { modifyForm } from '../api';
import { objectToArray } from '../../util';
import { buttonCancelAddFormClicked } from '../slice/addFormSlice';

export default function* saveModify() {
  try {
    const IDFormulario = yield select(IDForm);
    const GUID = yield select(IDRepartoSelected);
    const listRep = yield select(allReparti);
    const listForm = yield select(formulariByReparto);

    // trovo il nome del reparto in base al formuario selezionato
    const findNameByID = (rep : any) => rep.sermednodeid || rep.unitid === GUID;
    const repSelected = listRep.find(findNameByID);
    const nomeReparto = repSelected.longname;

    // trovo il nome in base al form selezionato
    // eslint-disable-next-line no-underscore-dangle
    const findNameFormByID = (form : any) => form._id === IDFormulario;
    const formSelected = listForm.find(findNameFormByID);
    const nomeForm = formSelected.formulario;

    const objDomande = yield select(domandeObject);
    const objRisultati = yield select(dataRisultati);
    const listDomande = objectToArray(objDomande);
    const listRisultati = objectToArray(objRisultati);
    const ris1 = yield select(risposta1);
    const ris2 = yield select(risposta2);

    yield call(modifyForm, IDFormulario, GUID, nomeReparto,
      nomeForm, listDomande, listRisultati, ris1, ris2);

    yield put(buttonCancelAddFormClicked());
  } catch (error) {
    console.log('errore', error);
  }
}
