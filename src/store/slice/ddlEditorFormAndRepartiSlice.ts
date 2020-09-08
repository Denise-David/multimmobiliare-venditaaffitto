import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const ddlEditorFormAndRepartiSlice = createSlice({
  name: 'ddlEditorFormAndReparti',
  initialState: {
    IDRepartoSelected: '-1' as string,
    IDForm: '-1' as string,
  },
  reducers: {
    setRepartoSelected(state, { payload }) {
      state.IDRepartoSelected = payload;
    },
    setFormularioSelected(state, { payload }) {
      state.IDForm = payload;
    },
    resetIDReparto(state) {
      state.IDRepartoSelected = '-1';
    },
    resetIDForm(state) {
      state.IDForm = '-1';
    },
  },
});
export const changeReparto = () => ({
  type: 'CHANGE_REPARTO',

});

export const IDRepartoSelected = (state : State) => state.ddlEditorFormAndReparti.IDRepartoSelected;
export const IDForm = (state : State) => state.ddlEditorFormAndReparti.IDForm;
export const {
  setRepartoSelected,
  setFormularioSelected, resetIDForm, resetIDReparto,
} = ddlEditorFormAndRepartiSlice.actions;
export default ddlEditorFormAndRepartiSlice.reducer;
