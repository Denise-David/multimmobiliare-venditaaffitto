import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const searchDoctorSlice = createSlice({
  name: 'searchDoctor',
  initialState: {
    nomeMedico: '' as string,
    cognomeMedico: '' as string,
    mediciTrovati: {} as any,
    buttonSearchState: false as boolean,
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
  },
});

export const mediciTrovati = (state : State) => state.searchDoctor.mediciTrovati;
export const cognomeMedico = (state : State) => state.searchDoctor.cognomeMedico;
export const nomeMedico = (state : State) => state.searchDoctor.nomeMedico;
export const {
  getNomeMedico, getCognomeMedico,
  setMediciTrovati, buttonSearchClicked,
} = searchDoctorSlice.actions;
export default searchDoctorSlice.reducer;
