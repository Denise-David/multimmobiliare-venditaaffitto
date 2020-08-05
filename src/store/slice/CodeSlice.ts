import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const CodeSlice = createSlice({
  name: 'code',
  initialState:
  {
    Code: '' as string,
    ButtonSend: false as boolean,
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
  },
});

export const ValueCode = (state : State) => state.code.Code;
export const { getCodeValue, buttonSendCode, resetCode } = CodeSlice.actions;
export default CodeSlice.reducer;
