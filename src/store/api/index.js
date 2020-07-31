import axios from 'axios';
import feathers from '@feathersjs/client';
import rest from '@feathersjs/rest-client';

// export const fetchForm = (ID) => axios.get(`/getData/${ID}`);
// export const fetchAllForm = () => axios.get('/getAllForm');

const app = feathers();

// Connect to a different URL
const restClient = rest();

// Configure an AJAX library (see below) with that client
app.configure(restClient.axios(axios));

// Connect to the `http://feathers-api.com/messages` service
const struttureFormReparti = app.service('strutture_form_reparti');

export const fetchAllForm = () => struttureFormReparti.find({});

const fetchForm = (ID) => struttureFormReparti.get(ID, {});
export default fetchForm;
