import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    dialogSummaryOpen: false as boolean,
    dialogReturnDeviceOpen: false as boolean,
    dialogSearchOpen: false as boolean,
    dialogFormPatientOpen: false as boolean,
    dialogGroupOpen: false as boolean,
    dialogLabel: false as boolean,
  },
  reducers: {
    openDialogLabel(state) {
      state.dialogLabel = true;
    },
    closeDialogLabel(state) {
      state.dialogLabel = false;
    },
    openDialogGroup(state) {
      state.dialogGroupOpen = true;
    },
    closeDialogGroup(state) {
      state.dialogGroupOpen = false;
    },
    openDialogSummary(state) {
      state.dialogSummaryOpen = true;
    },
    closeDialogSummaryAndSave(state) {
      state.dialogSummaryOpen = false;
    },
    closeDialogSummary(state) {
      state.dialogSummaryOpen = false;
    },
    openReturnDeviceDialog(state) {
      state.dialogReturnDeviceOpen = true;
    },
    closeReturnDeviceDialog(state) {
      state.dialogReturnDeviceOpen = false;
    },
    openDialogSearch(state) {
      state.dialogSearchOpen = true;
    },
    closeDialogSearch(state) {
      state.dialogSearchOpen = false;
    },
    openDialogFormPatient(state) {
      state.dialogFormPatientOpen = true;
    },
    closeDialogFormPatient(state) {
      state.dialogFormPatientOpen = false;
    },
  },
});

export const dialogLabel = (state : State) => state.dialog.dialogLabel;
export const dialogGroupOpen = (state : State) => state.dialog.dialogGroupOpen;
export const dialogFormPatientOpen = (state : State) => state.dialog.dialogFormPatientOpen;
export const dialogSearchOpen = (state : State) => state.dialog.dialogSearchOpen;
export const dialogReturnDeviceOpen = (state : State) => state.dialog.dialogReturnDeviceOpen;
export const dialogSummaryOpen = (state : State) => state.dialog.dialogSummaryOpen;
export const {
  openDialogSummary, closeDialogSummary,
  closeDialogSummaryAndSave, openReturnDeviceDialog,
  closeReturnDeviceDialog, openDialogSearch, closeDialogSearch,
  closeDialogFormPatient,
  openDialogFormPatient, openDialogGroup, closeDialogGroup,
  openDialogLabel, closeDialogLabel,
} = dialogSlice.actions;
export default dialogSlice.reducer;
