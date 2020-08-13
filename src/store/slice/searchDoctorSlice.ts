import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const searchDoctorSlice = createSlice({
  name: 'searchDoctor',
  initialState: {
    nomeMedico: '' as string,
    cognomeMedico: '' as string,
    mediciTrovati: {} as any,
    buttonSearchState: false as boolean,
    dialogSearchStatus: false as boolean,
    name: '' as string,
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
      state.buttonSearchState = true;
    },
    openDialogSearch(state, { payload }) {
      state.dialogSearchStatus = true;
      state.name = payload;
    },
    closeDialogSearch(state) {
      state.dialogSearchStatus = false;
    },
  },
});

export const nameSearch = (state : State) => state.searchDoctor.name;
export const dialogSearchStatus = (state : State) => state.searchDoctor.dialogSearchStatus;
export const mediciTrovati = (state : State) => state.searchDoctor.mediciTrovati;
export const cognomeMedico = (state : State) => state.searchDoctor.cognomeMedico;
export const nomeMedico = (state : State) => state.searchDoctor.nomeMedico;
export const {
  getNomeMedico, getCognomeMedico,
  setMediciTrovati, buttonSearchClicked,
  openDialogSearch, closeDialogSearch,
} = searchDoctorSlice.actions;
export default searchDoctorSlice.reducer;
