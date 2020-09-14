import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    dialogSummaryOpen: false as boolean,
    dialogReturnDeviceOpen: false as boolean,
    dialogSearchOpen: false as boolean,
    dialogFormPatientOpen: false as boolean,
  },
  reducers: {
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

export const dialogFormPatientOpen = (state : State) => state.dialog.dialogFormPatientOpen;
export const dialogSearchOpen = (state : State) => state.dialog.dialogSearchOpen;
export const dialogReturnDeviceOpen = (state : State) => state.dialog.dialogReturnDeviceOpen;
export const dialogSummaryOpen = (state : State) => state.dialog.dialogSummaryOpen;
export const {
  openDialogSummary, closeDialogSummary,
  closeDialogSummaryAndSave, openReturnDeviceDialog,
  closeReturnDeviceDialog, openDialogSearch, closeDialogSearch,
  closeDialogFormPatient, openDialogFormPatient,
} = dialogSlice.actions;
export default dialogSlice.reducer;
