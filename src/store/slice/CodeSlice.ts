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
      state.ButtonSend = !state.ButtonSend;
    },
  },
});

export const ValueCode = (state : State) => state.code.Code;
export const { getCodeValue, buttonSendCode } = CodeSlice.actions;
export default CodeSlice.reducer;
