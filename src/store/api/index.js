import axios from 'axios';
import feathers from '@feathersjs/client';
import rest from '@feathersjs/rest-client';

const app = feathers();

// Connect to a different URL
const restClient = rest('/autoanamnesi');

// Configure an AJAX library (see below) with that client
app.configure(restClient.axios(axios));

// Connect to the service
const struttureFormReparti = app.service('strutture_form_reparti');
const risposteFormPazienti = app.service('risposte_form_pazienti');
const historyEditor = app.service('history_editor');

/**
 * Prende formulari senza etchetta
 */
export const fetchFormNoLabel = () => risposteFormPazienti.find({
  query: {
    etichetta: '',
  },
});
/**
 * Prende formulari con etichetta
 */
export const fetchFormWithLabel = () => risposteFormPazienti.find({
  query: {
    etichetta: { $nin: [''] },
  },
});
/**
 * Elimina formulario risposte paziente
 */
export const deleteAnswersForm = (ID) => risposteFormPazienti.remove(ID, {});

/**
 * Prende tutti formulari che contengono il form e il rep cercati
 */
export const searchForm = (form, rep) => struttureFormReparti.find({
  query: {
    formulario: { $search: form },
    reparto: { $search: rep },

  },
});

/**
 * Prende formulario tramite ID formulario
 */
const fetchFormStructureByID = (ID) => struttureFormReparti.get(ID, {});
export default fetchFormStructureByID;

/**
 * Prende i formulari tramile il reparto GUID
 */
export const fetchRepartoFormByGUID = (GUID) => struttureFormReparti.find(
  { query: { actualWardGUID: GUID } },
);

/**
 * Aggiunge un formulario
 */
export const addForm = (
  nomeReparto,
  idReparto, nomeForm, gruppi,
  domande, risultati, risposta1, risposta2, intestazioneMoreAns,
) => struttureFormReparti.create(
  {
    actualWardGUID: idReparto,
    reparto: nomeReparto,
    formulario: nomeForm,
    gruppi,
    domande,
    risultati,
    intestazione: intestazioneMoreAns,
    risposte:
    {
      risposta1,
      risposta2,
    },

  },
);

/**
 * Prende i dati dell'etichetta
 */
export const getEtichettaDataByLabel = (labelNumber) => axios.get(`/autoanamnesi/forwardCall/adts?edsId=${labelNumber}`);

/**
 * Aggiunge un formulario risposte del paziente
 */

export const addRisposteFormPazienti = (
  GUIDReparto,
  reparto,
  formulario,
  etichetta,
  oldPaziente,
  paziente,
  risposte,
) => risposteFormPazienti.create(

  {
    GUIDReparto,
    reparto,
    formulario,
    etichetta,
    oldPaziente,
    paziente,
    risposte,
  },

);

/**
 * Aggiunge l'etichetta e i suoi dati a un formulario senza etichetta
 */
export const addLabelToRispostePaziente = (
  IDForm, risposte, etichetta, patientInfo,
) => risposteFormPazienti.update(IDForm,
  {
    etichetta,
    GUIDReparto: risposte.GUIDReparto,
    reparto: risposte.reparto,
    formulario: risposte.formulario,
    oldPaziente: patientInfo,
    paziente: risposte.paziente,
    risposte: risposte.risposte,
  });

/**
 * prende le risposte dei pazient tramite ID formulario
 */
export const getRisposteFormPazientiByID = (ID) => risposteFormPazienti.get(ID, {});

/**
 * Prende i dottori con nome e cognome cercati
 */
export const searchDoctor = (medicoName, medicoCognome) => axios.post('/autoanamnesi/forwardCall/eocmoss',
  {
    givenname: medicoName.value,
    familyname: medicoCognome.value,
  });

/**
 * Prende i diritti dell'utente selezionato
 */
export const getUserRights = (username) => axios.get(`/autoanamnesi/forwardCall/user?username=${username}`);

/**
 * Prende i reparti ZAS
 */
export const getRepartiZAS = (zasAcronym) => axios.get(`/autoanamnesi/forwardCall/unit?zasAcronym=${zasAcronym}`);
/**
 * Prende le categorie mediche ZAM
 */
export const getRepartiZAM = (zamAcronym) => axios.get(`/autoanamnesi/forwardCall/sermed?zamAcronym=${zamAcronym}`);

/**
 * Modifica il formulario
 */
export const updateForm = (
  IDFormulario, GUID, nomeReparto,
  nomeForm, gruppi, listDomandeAndRisposte, listRisultati, risposta1,
  risposta2, intestazioneMoreAns,
) => struttureFormReparti.update(IDFormulario,
  {
    actualWardGUID: GUID,
    reparto: nomeReparto,
    formulario: nomeForm,
    gruppi,
    domande: listDomandeAndRisposte,
    risultati: listRisultati,
    intestazione: intestazioneMoreAns,
    risposte:
    {
      risposta1,
      risposta2,
    },

  });

/**
 * Elimina il formulario
 */
export const deleteForm = (IDForm) => struttureFormReparti.remove(IDForm, {});

/**
 * setta la vecchia struttura del formulario prima di eliminarla
 */
export const setOldStructure = (formulario, utente, date) => historyEditor.create(
  {
    data: date,
    user: utente,
    type: 'delete',
    oldStructure: formulario,
  },

);

/**
 * setta la nuova struttura del formuario dopo averla aggiunta
 */
export const setNewStructure = (nomeReparto,
  GUID, nomeForm, gruppi,
  domande, ris, risposta1, risposta2, utente, date) => historyEditor.create(

  {
    data: date,
    user: utente,
    type: 'create',
    newStructure: {

      actualWardGUID: GUID,
      reparto: nomeReparto,
      formulario: nomeForm,
      gruppi,
      romande: domande,
      risultati: ris,
      risposte:
      {
        risposta1,
        risposta2,
      },

    },
  },
);

/**
 * aggiunge all'history il nuovo e vecchio formulairo quando si modifica
 */
export const setNewAndOldStructure = (GUID, nomeReparto,
  nomeForm, gruppi, listDomandeAndRisposte, listRisultati,
  risposta1, risposta2, date, formulario, utente) => historyEditor.create(

  {
    data: date,
    user: utente,
    type: 'modify',

    oldStructure: formulario,
    newStructure: {
      actualWardGUID: GUID,
      reparto: nomeReparto,
      formulario: nomeForm,
      gruppi,
      domande: listDomandeAndRisposte,
      risultati: listRisultati,
      risposte:
      {
        risposta1,
        risposta2,
      },
    },
  },
);
