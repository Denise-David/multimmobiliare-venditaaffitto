import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface nomeCognomeMedico { value : string}
const searchDoctorSlice = createSlice({
  name: 'searchDoctor',
  initialState: {
    nomeMedico: {} as nomeCognomeMedico,
    cognomeMedico: {} as nomeCognomeMedico,
    mediciTrovati: {} as any,
    tipoDottoreScelto: '' as string,
  },
  reducers: {
    getNomeMedico(state, { payload }) {
      state.nomeMedico = payload;
    },
    getCognomeMedico(state, { payload }) {
      state.cognomeMedico = payload;
    },
    setMediciTrovati(state, { payload }) {
      state.mediciTrovati = payload;
    },
    setNomeCognomeDottoreScelto(state, { payload }) {
      state.tipoDottoreScelto = payload;
    },
    resetMedici(state) {
      state.mediciTrovati = {};
      state.cognomeMedico = { value: '' };
      state.nomeMedico = { value: '' };
    },
  },
});
export const buttonSearchClicked = () => ({
  type: 'BUTTON_SEARCH_CLICKED',

});

// eslint-disable-next-line max-len
export const tipoDottoreScelto = (state : State) => state.searchDoctor.tipoDottoreScelto;
export const mediciTrovati = (state : State) => state.searchDoctor.mediciTrovati;
export const cognomeMedico = (state : State) => state.searchDoctor.cognomeMedico;
export const nomeMedico = (state : State) => state.searchDoctor.nomeMedico;
export const {
  getNomeMedico, getCognomeMedico,
  setMediciTrovati,
  setNomeCognomeDottoreScelto,
  resetMedici,
} = searchDoctorSlice.actions;
export default searchDoctorSlice.reducer;
