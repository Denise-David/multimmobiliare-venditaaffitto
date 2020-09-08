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
    dialogSearchStatus: false as boolean,
    nomeCognomeDottoreScelto: '' as string,
    buttonSearchStatus: true as boolean,
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
    openDialogSearch(state, { payload }) {
      state.dialogSearchStatus = true;
      state.nomeCognomeDottoreScelto = payload;
    },
    closeDialogSearch(state) {
      state.dialogSearchStatus = false;
    },
    resetMedici(state) {
      state.mediciTrovati = {};
    },
    setButtonSearchDisabled(state) {
      state.buttonSearchStatus = true;
    },
    setButtonSearchEnable(state) {
      state.buttonSearchStatus = false;
    },
  },
});

export const buttonSearchStatus = (state : State) => state.searchDoctor.buttonSearchStatus;
// eslint-disable-next-line max-len
export const nomeCognomeDottoreScelto = (state : State) => state.searchDoctor.nomeCognomeDottoreScelto;
export const dialogSearchStatus = (state : State) => state.searchDoctor.dialogSearchStatus;
export const mediciTrovati = (state : State) => state.searchDoctor.mediciTrovati;
export const cognomeMedico = (state : State) => state.searchDoctor.cognomeMedico;
export const nomeMedico = (state : State) => state.searchDoctor.nomeMedico;
export const {
  getNomeMedico, getCognomeMedico,
  setMediciTrovati, buttonSearchClicked,
  openDialogSearch, closeDialogSearch,
  resetMedici, setButtonSearchEnable,
  setButtonSearchDisabled,
} = searchDoctorSlice.actions;
export default searchDoctorSlice.reducer;
