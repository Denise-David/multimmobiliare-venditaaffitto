import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const labelCodeSlice = createSlice({
  name: 'labelCode',
  initialState:
  {
    Code: '' as string,

  },
  reducers: {
    getCodeValue(state, { payload }) {
      state.Code = payload;
    },
    resetCode(state) {
      state.Code = '';
    },

  },
});

export const buttonSendCode = () => ({
  type: 'BUTTON_SEND_CODE',

});

export const ValueCode = (state : State) => state.labelCode.Code;
export const {
  getCodeValue, resetCode,
} = labelCodeSlice.actions;
export default labelCodeSlice.reducer;
