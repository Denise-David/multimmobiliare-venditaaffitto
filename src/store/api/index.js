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

// prendi tutte le strutture formulari, filtrando quello di cui ho bisogno
export const fetchAllFormStructure = () => struttureFormReparti.find({});

// Prendi il formulario con tramite ID
const fetchFormStructureByID = (ID) => struttureFormReparti.get(ID, {});
export default fetchFormStructureByID;

// Prendi i formulari con actualWardGUID GUID
export const fetchRepartoFormByGUID = (GUID) => struttureFormReparti.find(
  { query: { actualWardGUID: GUID } },
);

// Aggiungi formulario piu risposte
export const addFormPiuRisposte = (
  nomeReparto,
  idReparto, nomeForm,
  domande, risultati, risposta1, risposta2,
) => struttureFormReparti.create(
  {
    actualWardGUID: idReparto,
    Reparto: nomeReparto,
    formulario: nomeForm,
    Domande: domande,
    Risultati: risultati,
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
export const modifyForm = (
  IDForm, tipoForm, GUID, nomeReparto,
  nomeForm, listDomande, listRisultati, risposta1, risposta2,
) => struttureFormReparti.update(IDForm,
  {
    tipo: tipoForm,
    actualWardGUID: GUID,
    Reparto: nomeReparto,
    formulario: nomeForm,
    Domande: listDomande,
    Risultati: listRisultati,
    Risposte:
    {
      risposta1,
      risposta2,
    },

  });

// Elimina formulario
export const deleteForm = (IDForm) => struttureFormReparti.remove(IDForm, {});
