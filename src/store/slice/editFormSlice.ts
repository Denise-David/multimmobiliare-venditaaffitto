import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const editFormSlice = createSlice({
  name: 'editForm',
  initialState:
  {
    disabled: {} as any,
    icon: 'modify',
    conversion: 'dropDownList',
    modifyActive: true,

  },
  reducers: {
    modifyDomandaAction(state, { payload }) {
      state.disabled[payload] = !state.disabled[payload];
    },
    initializeDomande(state, { payload }) {
      state.disabled = payload;
      state.icon = 'done';
    },
    addRepartoAction(state) {
      state.conversion = 'TextField';
      state.modifyActive = false;
    },
    modifyRepartoAction(state) {
      state.modifyActive = true;
      state.conversion = 'TextField';
    },
    deleteRepartoAction(state) {
      state.conversion = 'TextField';
    },
    confirmAction(state) {
      state.conversion = 'dropDownList';
      state.icon = 'modify';
      console.log('aggiunta reparto a banca dati');
    },
  },
});

export const stateTextField = (state : State) => state.editForm.disabled;
export const iconCurrent = (state : State) => state.editForm.icon;
export const ddl = (state : State) => state.editForm.conversion;
export const modify = (state : State) => state.editForm.modifyActive;
export const {
  modifyDomandaAction, addRepartoAction, confirmAction, modifyRepartoAction, initializeDomande,
} = editFormSlice.actions;
export default editFormSlice.reducer;
