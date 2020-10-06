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
    label: 0 as number,
    familynameCercato: '' as string,
    IDFormSelected: '' as string,
    filtro: 'Senza etichetta' as string,
    formWithLabel: [] as any[],
  },
  reducers: {
    setFormWithLabel(state, { payload }) {
      state.formWithLabel = payload;
    },
    setFiltro(state, { payload }) {
      state.filtro = payload;
    },
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
      const {
        nomeCognome, formulario, reparto, IDForm,
      } = payload;
      state.repSelected = reparto;
      state.formSelected = formulario;
      state.patientSelected = nomeCognome;
      state.IDFormSelected = IDForm;
    },
    setLabel(state, { payload }) {
      state.label = payload;
    },
    resetLabel(state) {
      state.label = 0;
    },
  },
});
export const DeleteAnsForm = (payload : string) => ({
  type: 'DELETE_ANS_FORM',
  payload,
});

export const formWithLabel = (state: State) => state.interfacciaAmm.formWithLabel;
export const filtro = (state: State) => state.interfacciaAmm.filtro;
export const IDFormSelected = (state : State) => state.interfacciaAmm.IDFormSelected;
export const label = (state : State) => state.interfacciaAmm.label;
export const familynameCercato = (state : State) => state.interfacciaAmm.familynameCercato;
export const repSelected = (state : State) => state.interfacciaAmm.repSelected;
export const formSelected = (state : State) => state.interfacciaAmm.formSelected;
export const patientSelected = (state : State) => state.interfacciaAmm.patientSelected;
export const nameCercato = (state : State) => state.interfacciaAmm.nameCercato;
export const formNoLabel = (state : State) => state.interfacciaAmm.formNoLabel;
export const {
  setFormNoLabel, setNameCercato, setSelected,
  setFamilynameCercato, setLabel, resetLabel,
  setFiltro, setFormWithLabel,
} = interfacciaAmmSlice.actions;
export default interfacciaAmmSlice.reducer;
