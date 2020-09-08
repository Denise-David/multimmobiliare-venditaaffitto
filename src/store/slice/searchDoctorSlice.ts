import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface nomeCognomeMedico { value : string}
const searchDoctorSlice = createSlice({
  name: 'searchDoctor',
  initialState: {
    nomeMedico: {} as nomeCognomeMedico,
    cognomeMedico: {} as nomeCognomeMedico,
    mediciTrovati: {} as any,
    buttonSearchClick: false as boolean,
    tipoDottoreScelto: '' as string,
    buttonSearchDisabled: true as boolean,
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
    buttonSearchClicked(state) {
      state.buttonSearchClick = true;
    },
    setNomeCognomeDottoreScelto(state, { payload }) {
      state.tipoDottoreScelto = payload;
    },
    resetMedici(state) {
      state.mediciTrovati = {};
    },
    setButtonSearchDisabled(state) {
      state.buttonSearchDisabled = true;
    },
    setButtonSearchEnable(state) {
      state.buttonSearchDisabled = false;
    },
  },
});

export const buttonSearchStatus = (state : State) => state.searchDoctor.buttonSearchDisabled;
// eslint-disable-next-line max-len
export const nomeCognomeDottoreScelto = (state : State) => state.searchDoctor.tipoDottoreScelto;
export const mediciTrovati = (state : State) => state.searchDoctor.mediciTrovati;
export const cognomeMedico = (state : State) => state.searchDoctor.cognomeMedico;
export const nomeMedico = (state : State) => state.searchDoctor.nomeMedico;
export const {
  getNomeMedico, getCognomeMedico,
  setMediciTrovati, buttonSearchClicked,
  setNomeCognomeDottoreScelto,
  resetMedici, setButtonSearchEnable,
  setButtonSearchDisabled,
} = searchDoctorSlice.actions;
export default searchDoctorSlice.reducer;
