import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const interfacciaAmmSlice = createSlice({
  name: 'interfacciaAmm',
  initialState: {
    formNoLabel: [] as any[],
    nameCercato: '' as string,
    repSelected: '' as string,
    formSelected: '' as string,
    patientSelected: '' as string,
    label: '' as string,
    familynameCercato: '' as string,
  },
  reducers: {
    setFormNoLabel(state, { payload }) {
      state.formNoLabel = payload;
    },
    setNameCercato(state, { payload }) {
      state.nameCercato = payload;
    },
    setFamilynameCercato(state, { payload }) {
      state.familynameCercato = payload;
    },
    setSelected(state, { payload }) {
      const { nomeCognome, formulario, reparto } = payload;
      state.repSelected = reparto;
      state.formSelected = formulario;
      state.patientSelected = nomeCognome;
    },
  },
});

export const familynameCercato = (state : State) => state.interfacciaAmm.familynameCercato;
export const repSelected = (state : State) => state.interfacciaAmm.repSelected;
export const formSelected = (state : State) => state.interfacciaAmm.formSelected;
export const patientSelected = (state : State) => state.interfacciaAmm.patientSelected;
export const nameCercato = (state : State) => state.interfacciaAmm.nameCercato;
export const formNoLabel = (state : State) => state.interfacciaAmm.formNoLabel;
export const {
  setFormNoLabel, setNameCercato, setSelected,
  setFamilynameCercato,
} = interfacciaAmmSlice.actions;
export default interfacciaAmmSlice.reducer;
