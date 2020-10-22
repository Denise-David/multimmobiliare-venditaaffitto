import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

/**
 * Gestione etichetta autoanamnesi con etichetta
 */
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

// Bottone apertura formulario
export const buttonSendCode = ():{type:string} => ({
  type: 'BUTTON_SEND_CODE',

});

export const ValueCode = (state : State):string => state.labelCode.Code;
export const {
  getCodeValue, resetCode,
} = labelCodeSlice.actions;
export default labelCodeSlice.reducer;
