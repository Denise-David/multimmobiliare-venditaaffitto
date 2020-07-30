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
    risultati: {} as any,
    colorButton: 'primary' as 'inherit' | 'disabled' | 'primary' | 'action' | 'secondary' | 'error' | undefined,

  },
  reducers: {
    // Gestione domande
    modifyDomandaAction(state, { payload }) {
      state.disabled[payload] = !state.disabled[payload];
    },
    initializeDomande(state, { payload }) {
      state.disabled = payload;
    },
    // Gestione risultati
    initializeRisultati(state, { payload }) {
      state.risultati = payload;
    },
    modifyRisultatiAction(state, { payload }) {
      state.risultati[payload] = !state.risultati[payload];
    },
    // Gestione reparto
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
    // gestione alert
    alertConfirmDelete(state) {
      state.deleteActive = !state.deleteActive;
    },
    disableAll(state) {
      state.isDisable = true;
      state.colorButton = 'disabled';
    },
    enableAll(state) {
      state.isDisable = false;
      state.colorButton = 'primary';
    },

    // Gestione risposte
    addRispostaVuotaAction(state) {
      state.addRisVuotaDeactive = !state.addRisVuotaDeactive;
    },
    repartoOnChange(state) {
      console.log('ciao');
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
export const stateRisultato = (state : State) => state.editForm.risultati;
export const colDisable = (state : State) => state.editForm.colorButton;
export const {
  modifyDomandaAction, addRepartoAction, confirmRepartoAction, modifyRepartoAction,
  initializeDomande, cancelRepartoAction, enableAll, repartoOnChange,
  alertConfirmDelete, disableAll, addRispostaVuotaAction, initializeRisultati,
  modifyRisultatiAction,
} = editFormSlice.actions;
export default editFormSlice.reducer;
