import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const editFormSlice = createSlice({
  name: 'editForm',
  initialState:
  {
    disabled: {} as any,
    stateModifyRisposte: {} as any,
    icon: 'modify',
    conversion: true,
    modifyActive: true,

  },
  reducers: {
    modifyDomandaAction(state, { payload }) {
      state.disabled[payload] = !state.disabled[payload];
    },
    initializeDomande(state, { payload }) {
      state.disabled = payload;
    },
    initializeRisposte(state, { payload }) {
      state.stateModifyRisposte = payload;
    },
    modifyRispostaAction(state, { payload }) {
      state.stateModifyRisposte[payload] = !state.stateModifyRisposte[payload];
    },
    addRepartoAction(state) {
      state.conversion = !state.conversion;
      state.modifyActive = !state.modifyActive;
    },
    modifyRepartoAction(state) {
      state.modifyActive = !state.modifyActive;
    },
    confirmAction(state) {
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
  initializeRisposte, modifyRispostaAction,
} = editFormSlice.actions;
export default editFormSlice.reducer;
