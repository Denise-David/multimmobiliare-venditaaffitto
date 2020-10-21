import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

// Slice gestione dei dialog
const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    dialogSummaryOpen: false as boolean,
    dialogReturnDeviceOpen: false as boolean,
    dialogSearchOpen: false as boolean,
    dialogFormPatientOpen: false as boolean,
    dialogGroupOpen: false as boolean,
    dialogLabel: false as boolean,
    dialogFiltro: false as boolean,
    dialogLabelManager: false as boolean,
  },
  reducers: {
    // Gestione dialog gestione etichetta interfaccia amministrativa
    openDialogLabelManager(state) {
      state.dialogLabelManager = true;
    },
    closeDialogLabelManager(state) {
      state.dialogLabelManager = false;
    },
    // Gestione dialog filtri interfaccia amministrativa
    openDialogFiltro(state) {
      state.dialogFiltro = true;
    },
    closeDialogFiltro(state) {
      state.dialogFiltro = false;
    },
    // Gestione dialog aggiunta etichetta interfaccia amministrativa
    openDialogLabel(state) {
      state.dialogLabel = true;
    },
    closeDialogLabel(state) {
      state.dialogLabel = false;
    },
    // Gestione dialog gestione gruppi editor
    openDialogGroup(state) {
      state.dialogGroupOpen = true;
    },
    closeDialogGroup(state) {
      state.dialogGroupOpen = false;
    },
    // Gestione Dialog riassunto autoanamnesi
    openDialogSummary(state) {
      state.dialogSummaryOpen = true;
    },
    closeDialogSummaryAndSave(state) {
      state.dialogSummaryOpen = false;
    },
    closeDialogSummary(state) {
      state.dialogSummaryOpen = false;
    },
    // Gestione Dialog ritorno dispositivo autoanamnesi
    openReturnDeviceDialog(state) {
      state.dialogReturnDeviceOpen = true;
    },
    closeReturnDeviceDialog(state) {
      state.dialogReturnDeviceOpen = false;
    },
    // Gestione dialog ricerca dottori autoanamnesi
    openDialogSearch(state) {
      state.dialogSearchOpen = true;
    },
    closeDialogSearch(state) {
      state.dialogSearchOpen = false;
    },
    // Gestioen dialog formulario paziente autoanamnesi
    openDialogFormPatient(state) {
      state.dialogFormPatientOpen = true;
    },
    closeDialogFormPatient(state) {
      state.dialogFormPatientOpen = false;
    },
  },
});

// action inviata al cambiamento di filtro del dialog filtro dell'interfaccia amministrativa
export const closeAndFilterDialog = ():{type:string} => ({
  type: 'CLOSE_AND_FILTER_DIALOG',

});

export const dialogLabelManager = (state : State):boolean => state.dialog.dialogLabelManager;
export const dialogFiltro = (state : State):boolean => state.dialog.dialogFiltro;
export const dialogLabel = (state : State):boolean => state.dialog.dialogLabel;
export const dialogGroupOpen = (state : State):boolean => state.dialog.dialogGroupOpen;
export const dialogFormPatientOpen = (state : State):boolean => state.dialog.dialogFormPatientOpen;
export const dialogSearchOpen = (state : State):boolean => state.dialog.dialogSearchOpen;
export const
  dialogReturnDeviceOpen = (state : State):boolean => state.dialog.dialogReturnDeviceOpen;
export const dialogSummaryOpen = (state : State):boolean => state.dialog.dialogSummaryOpen;
export const {
  openDialogSummary, closeDialogSummary,
  closeDialogSummaryAndSave, openReturnDeviceDialog,
  closeReturnDeviceDialog, openDialogSearch, closeDialogSearch,
  closeDialogFormPatient,
  openDialogFormPatient, openDialogGroup, closeDialogGroup,
  openDialogLabel, closeDialogLabel, openDialogFiltro, closeDialogFiltro,
  openDialogLabelManager, closeDialogLabelManager,
} = dialogSlice.actions;
export default dialogSlice.reducer;
