import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const editFormSlice = createSlice({
  name: 'editForm',
  initialState:
  {
    disabled: {} as any,
    stateModifyRisposte: {} as any,
    icon: 'modify',
    addActive: false,
    modifyActive: false,
    deleteActive: false as boolean | undefined,
    isDisable: false,
    addRisVuotaDeactive: true,

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
      state.addActive = !state.addActive;
    },
    modifyRepartoAction(state) {
      state.modifyActive = !state.modifyActive;
    },
    confirmRepartoAction(state) {
      state.addActive = false;
      state.modifyActive = false;
      console.log('aggiungi,modifica reparto e selezionarlo');
    },
    deleteRepartoAction(state) {
      console.log('elemina reparto e tutti dati su back-end');
    },
    cancelRepartoAction(state) {
      state.addActive = false;
      state.modifyActive = false;
    },
    alertConfirmDelete(state) {
      state.deleteActive = !state.deleteActive;
    },
    disableEnableAll(state) {
      state.isDisable = !state.isDisable;
    },
    addRispostaVuotaAction(state) {
      state.addRisVuotaDeactive = !state.addRisVuotaDeactive;
    },
  },
});

export const stateTextField = (state : State) => state.editForm.disabled;
export const iconCurrent = (state : State) => state.editForm.icon;
export const add = (state : State) => state.editForm.addActive;
export const modify = (state : State) => state.editForm.modifyActive;
export const delActive = (state : State) => state.editForm.deleteActive;
export const isDisable = (state : State) => state.editForm.isDisable;
export const risActive = (state : State) => state.editForm.addRisVuotaDeactive;
export const {
  modifyDomandaAction, addRepartoAction, confirmRepartoAction, modifyRepartoAction,
  initializeDomande, initializeRisposte, modifyRispostaAction, cancelRepartoAction,
  alertConfirmDelete, disableEnableAll, addRispostaVuotaAction,
} = editFormSlice.actions;
export default editFormSlice.reducer;
