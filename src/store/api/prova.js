import axios from 'axios';
import _ from 'lodash';
import configuration from '../../configs/config.json';

const { http } = configuration;

const client = axios.create({
  baseURL: http.baseUrl,
  headers: http.headers,
});

const fetchAll = () => client.get('Immobile/public');
export default fetchAll;

export const fetchCountries = () => client.get('https://restcountries.eu/rest/v2');
export const setCliente = (cliente) => client.post('https://api.multimmobiliare.com/api/immobile/AddClient', cliente);

export const setRicerca = (ricerca) => client.post('https://api.multimmobiliare.com/api/immobile/AddRicerca', ricerca);

export const fetchClienti = () => client.get('https://api.multimmobiliare.com/api/immobile/Clienti');
