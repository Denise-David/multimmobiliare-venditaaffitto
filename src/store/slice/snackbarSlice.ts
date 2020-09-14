import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    snackbarLabelOpen: false as boolean,
    snackbarPatientAnswersOpen: false as boolean,
    snackbarConfirmDeleteOpen: false as boolean,
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
  },
});

export const snackbarConfirmDeleteOpen = (state :State) => state.snackbar.snackbarConfirmDeleteOpen;
// eslint-disable-next-line max-len
export const snackbarPatientAnswersOpen = (state : State) => state.snackbar.snackbarPatientAnswersOpen;
export const snackbarLabelOpen = (state : State) => state.snackbar.snackbarLabelOpen;
export const {
  closeSnackbarLabelPage, openSnackbarLabelPage,
  closeSnackbarPatientAnswers, openSnackbarPatientAnswers,
  openCloseSnackbarConfirmDelete,
} = snackbarSlice.actions;
export default snackbarSlice.reducer;
