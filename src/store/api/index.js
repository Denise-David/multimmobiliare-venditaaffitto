import axios from 'axios';

const fetchForm = (ID) => axios.get(`/getData/${ID}`);
export const fetchAllForm = () => axios.get('/getAllForm');

export default fetchForm;
