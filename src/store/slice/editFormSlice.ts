import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const editFormSlice = createSlice({
  name: 'editForm',
  initialState:
  {
    disabled: true,
    icon: 'modify',
    conversion: 'dropDownList',
  },
  reducers: {
    modifyDomandaAction(state) {
      state.disabled = false;
      state.icon = 'done';
    },
    addRepartoAction(state) {
      state.conversion = 'TextField';
    },
    confirmAction(state) {
      state.conversion = 'dropDownList';
      state.disabled = true;
      state.icon = 'modify';
      console.log('aggiunta reparto a banca dati');
    },
  },
});

export const stateTextField = (state : State) => state.editForm.disabled;
export const iconCurrent = (state : State) => state.editForm.icon;
export const ddl = (state : State) => state.editForm.conversion;
export const { modifyDomandaAction, addRepartoAction, confirmAction } = editFormSlice.actions;
export default editFormSlice.reducer;
