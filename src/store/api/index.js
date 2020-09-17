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

// Prendi il formulario con tramite ID
const fetchFormStructureByID = (ID) => struttureFormReparti.get(ID, {});
export default fetchFormStructureByID;

// Prendi i formulari con actualWardGUID GUID
export const fetchRepartoFormByGUID = (GUID) => struttureFormReparti.find(
  { query: { actualWardGUID: GUID } },
);

// Aggiungi formulario piu risposte
export const addForm = (
  nomeReparto,
  idReparto, nomeForm, gruppi,
  domande, risultati, risposta1, risposta2, intestazioneMoreAns, intestazioneTwoAnswers,
) => struttureFormReparti.create(
  {
    actualWardGUID: idReparto,
    Reparto: nomeReparto,
    formulario: nomeForm,
    gruppi,
    Domande: domande,
    Risultati: risultati,
    intestazionePiuRisposte: intestazioneMoreAns,
    IntestazioneDueRisposte: intestazioneTwoAnswers,
    Risposte:
    {
      risposta1,
      risposta2,
    },

  },
);

// Prendo i dati dell'etichetta
export const getEtichettaDataByLabel = (labelNumber) => axios.get(`/autoanamnesi/forwardCall/adts?edsId=${labelNumber}`);

// Aggiungi formulario risposte paziente

export const addRisposteFormPazienti = (
  oldPaziente,
  paziente,
  risposte,
) => risposteFormPazienti.create(

  {
    oldPaziente,
    paziente,
    risposte,
  },

);

// prendo le risposte dei pazienti tramite ID
export const getRisposteFormPazientiByID = (ID) => risposteFormPazienti.get(ID, {});

// Cerco dottori tramite nome e cognome
export const searchDoctor = (medicoName, medicoCognome) => axios.post('/autoanamnesi/forwardCall/eocmoss',
  {
    givenname: medicoName.value,
    familyname: medicoCognome.value,
  });

// Cerco diritti dell utente selezionato
export const getUserRights = (username) => axios.get(`/autoanamnesi/forwardCall/user?username=${username}`);

// Cerco reparti ZAS
export const getRepartiZAS = (zasAcronym) => axios.get(`/autoanamnesi/forwardCall/unit?zasAcronym=${zasAcronym}`);

// Cerco reparti ZAM
export const getRepartiZAM = (zamAcronym) => axios.get(`/autoanamnesi/forwardCall/sermed?zamAcronym=${zamAcronym}`);

// Modifica dati formulario
export const updateForm = (
  IDFormulario, GUID, nomeReparto,
  nomeForm, listDomandeAndRisposte, listRisultati, risposta1,
  risposta2, intestazioneMoreAns, intestazioneTwoAnswers, gruppi,
) => struttureFormReparti.update(IDFormulario,
  {
    actualWardGUID: GUID,
    Reparto: nomeReparto,
    formulario: nomeForm,
    gruppi,
    Domande: listDomandeAndRisposte,
    Risultati: listRisultati,
    intestazionePiuRisposte: intestazioneMoreAns,
    intestazioneDueRisposte: intestazioneTwoAnswers,
    Risposte:
    {
      risposta1,
      risposta2,
    },

  });

// Elimina formulario
export const deleteForm = (IDForm) => struttureFormReparti.remove(IDForm, {});

// settiamo la vecchia struttura del formulario prima di eliminarla
export const setOldStructure = (formulario, utente, date) => historyEditor.create(
  {
    data: date,
    user: utente,
    type: 'delete',
    oldStructure: formulario,
  },

);

// per l'history quando creo un nuovo formulario
export const setNewStructure = (nomeReparto,
  GUID, nomeForm, gruppi,
  domande, risultati, risposta1, risposta2, utente, date) => historyEditor.create(

  {
    data: date,
    user: utente,
    type: 'create',
    newStructure: {
      actualWardGUID: GUID,
      Reparto: nomeReparto,
      formulario: nomeForm,
      gruppi,
      Domande: domande,
      Risultati: risultati,
      Risposte:
      {
        risposta1,
        risposta2,
      },

    },
  },
);

// aggiungiamo all'history il nuovo e vecchio formulario quando si modifica
export const setNewAndOldStructure = (GUID, gruppi, nomeReparto,
  nomeForm, listDomandeAndRisposte, listRisultati,
  risposta1, risposta2, date, formulario, utente) => historyEditor.create(

  {
    data: date,
    user: utente,
    type: 'modify',

    oldStructure: formulario,
    newStructure: {
      actualWardGUID: GUID,
      Reparto: nomeReparto,
      formulario: nomeForm,
      gruppi,
      Domande: listDomandeAndRisposte,
      Risultati: listRisultati,
      Risposte:
      {
        risposta1,
        risposta2,
      },
    },
  },
);
