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

// prendi tutti i formulari
export const fetchAllForm = () => struttureFormReparti.find({});

// Prendi il formulario con id ID
const fetchForm = (ID) => struttureFormReparti.get(ID, {});
export default fetchForm;

// Prendi il formulario con actualWardGUID GUID
export const fetchRepartoFormByGUID = (GUID) => struttureFormReparti.find(
  { query: { actualWardGUID: GUID } },
);

// Aggiungi formulario
export const addForm = (nomeReparto) => struttureFormReparti.create(
  {
    Reparto: nomeReparto,
    Risultati: [],
    Domande: [],

  },
);

// Prendo i dati dell'etichetta
export const getEtichettaData = (labelNumber) => axios.get(`/autoanamnesi/forwardCall/adts?edsId=${labelNumber}`);

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
export const getRisposteFormPazienti = (ID) => risposteFormPazienti.get(ID, {});

// prendo ultimo documento risposte messo nel DB

export const getLastRisposteFormPazienti = () => risposteFormPazienti.find({
  query: {
    $select: ['_id'],
    $limit: 1,
    $sort: {
      createdAt: -1,
    },
  },
});

// Cerco dottori
export const searchDoctor = (medicoName, medicoCognome) => axios.post('/autoanamnesi/forwardCall/eocmoss',
  {
    givenname: medicoName.value,
    familyname: medicoCognome.value,
  });
