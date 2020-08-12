import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const CodeSlice = createSlice({
  name: 'code',
  initialState:
  {
    Code: '' as string,
    ButtonSend: false as boolean,
    snackbarStatusBarcode: false as boolean,
  },
  reducers: {
    getCodeValue(state, { payload }) {
      state.Code = payload;
    },
    buttonSendCode(state) {
      state.ButtonSend = true;
    },
    resetCode(state) {
      state.Code = '';
    },
    closeSnackbarBarcode(state) {
      state.snackbarStatusBarcode = false;
    },
    openSnackbarBarcode(state) {
      state.snackbarStatusBarcode = true;
    },
  },
});

export const snackbarStatusBarcode = (state : State) => state.code.snackbarStatusBarcode;
export const ValueCode = (state : State) => state.code.Code;
export const {
  getCodeValue, buttonSendCode, resetCode, closeSnackbarBarcode, openSnackbarBarcode,
} = CodeSlice.actions;
export default CodeSlice.reducer;
