import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const labelCodeSlice = createSlice({
  name: 'labelCode',
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

export const ValueCode = (state : State) => state.labelCode.Code;
export const {
  getCodeValue, buttonSendCode, resetCode,
} = labelCodeSlice.actions;
export default labelCodeSlice.reducer;
