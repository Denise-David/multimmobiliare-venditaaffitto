import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    snackbarLabelOpen: false as boolean,
    snackbarPatientAnswersOpen: false as boolean,
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
  },
});

// eslint-disable-next-line max-len
export const snackbarPatientAnswersOpen = (state : State) => state.snackbar.snackbarPatientAnswersOpen;
export const snackbarLabelOpen = (state : State) => state.snackbar.snackbarLabelOpen;
export const {
  closeSnackbarLabelPage, openSnackbarLabelPage,
  closeSnackbarPatientAnswers, openSnackbarPatientAnswers,
} = snackbarSlice.actions;
export default snackbarSlice.reducer;
