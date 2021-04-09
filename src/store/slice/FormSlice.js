/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit';

/**
 * Gestione etichetta autoanamnesi con etichetta
 */
const FormSlice = createSlice({
  name: 'Form',
  initialState:
  {
    listCountries: [],
    work: 'Lavoro',
    tipeWork: 'Dipendente',
    married: 'Celibe/Nubile',
    country: 'Switzerland',
    richiedente: {},
    coniuge: {},
    figli: [],
    coinquilini: [],

  },
  reducers: {
    setCountries(state, { payload }) {
      state.listCountries = payload;
    },
    setWork(state, { payload }) {
      state.work = payload;
    },
    setTipeWork(state, { payload }) {
      state.tipeWork = payload;
    },
    setMarried(state, { payload }) {
      state.married = payload;
    },
    setCountry(state, { payload }) {
      state.country = payload;
    },
    setRichiedente(state, { payload }) {
      const { name, value } = payload;
      state.richiedente[name] = value;
    },
    setConiuge(state, { payload }) {
      const { name, value } = payload;

      state.coniuge[name] = value;
    },
    setCoinquilini(state, { payload }) {
      const { index, name, value } = payload;
      state.coinquilini[index][name] = value;
    },
    addCoinquilino(state) {
      state.coinquilini.push({});
    },

  },
});

export const initForm = () => ({
  type: 'INIT_FORM',

});

export const listCountries = (state) => state.Form.listCountries;
export const work = (state) => state.Form.work;
export const tipeWork = (state) => state.Form.tipeWork;
export const married = (state) => state.Form.married;
export const country = (state) => state.Form.country;

export const {
  setCountries, setWork, setTipeWork, setMarried, setCountry, setRichiedente, setConiuge,
} = FormSlice.actions;
export default FormSlice.reducer;
