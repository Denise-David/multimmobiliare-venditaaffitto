import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

// Slice per la gestione delle liste a tendina dell'editor del reparto e formulario
const ddlEditorFormAndRepartiSlice = createSlice({
  name: 'ddlEditorFormAndReparti',
  initialState: {
    IDRepartoSelected: '-1' as string,
    IDForm: '-1' as string,
  },
  reducers: {
    // Gestione del reparto selezionato
    setRepartoSelected(state, { payload }) {
      state.IDRepartoSelected = payload;
    },
    resetIDReparto(state) {
      state.IDRepartoSelected = '-1';
    },
    // Gestione del formulario selezionato
    setFormularioSelected(state, { payload }) {
      state.IDForm = payload;
    },
    resetIDForm(state) {
      state.IDForm = '-1';
    },
  },
});
// action quando si cambia reparto dalla lista a tendina
export const changeReparto = ():{type:string} => ({
  type: 'CHANGE_REPARTO',

});

export const
  IDRepartoSelected = (state : State):string => state.ddlEditorFormAndReparti.IDRepartoSelected;
export const IDForm = (state : State):string => state.ddlEditorFormAndReparti.IDForm;
export const {
  setRepartoSelected,
  setFormularioSelected, resetIDForm, resetIDReparto,
} = ddlEditorFormAndRepartiSlice.actions;
export default ddlEditorFormAndRepartiSlice.reducer;
