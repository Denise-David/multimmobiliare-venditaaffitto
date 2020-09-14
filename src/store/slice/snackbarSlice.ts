import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    snackbarLabelOpen: false as boolean,
    snackbarPatientAnswersOpen: false as boolean,
    snackbarConfirmDeleteOpen: false as boolean,
    snackbarAtLeast2ResOpen: false as boolean,
  },
  reducers: {
    closeSnackbarLabelPage(state) {
      state.snackbarLabelOpen = false;
    },
    openSnackbarLabelPage(state) {
      state.snackbarLabelOpen = true;
    },
    closeSnackbarPatientAnswers(state) {
      state.snackbarPatientAnswersOpen = true;
    },
    openSnackbarPatientAnswers(state) {
      state.snackbarPatientAnswersOpen = false;
    },
    openCloseSnackbarConfirmDelete(state) {
      state.snackbarConfirmDeleteOpen = !state.snackbarConfirmDeleteOpen;
    },
    openSnackbarAtLeast2Res(state) {
      state.snackbarAtLeast2ResOpen = true;
    },
    closeSnackbarAtLeast2Res(state) {
      state.snackbarAtLeast2ResOpen = false;
    },
  },
});

export const snackbarAtLeast2ResOpen = (state : State) => state.snackbar.snackbarAtLeast2ResOpen;
export const snackbarConfirmDeleteOpen = (state :State) => state.snackbar.snackbarConfirmDeleteOpen;
// eslint-disable-next-line max-len
export const snackbarPatientAnswersOpen = (state : State) => state.snackbar.snackbarPatientAnswersOpen;
export const snackbarLabelOpen = (state : State) => state.snackbar.snackbarLabelOpen;
export const {
  closeSnackbarLabelPage, openSnackbarLabelPage,
  closeSnackbarPatientAnswers, openSnackbarPatientAnswers,
  openCloseSnackbarConfirmDelete, openSnackbarAtLeast2Res, closeSnackbarAtLeast2Res,
} = snackbarSlice.actions;
export default snackbarSlice.reducer;
