import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const returnDeviceSlice = createSlice({
  name: 'returnDevice',
  initialState: {
    returnDeviceIsOpen: false as boolean,
    lastRisposta: {} as any,
  },
  reducers: {
    openReturnDeviceDialog(state) {
      state.returnDeviceIsOpen = true;
    },
    closeReturnDeviceDialog(state) {
      state.returnDeviceIsOpen = false;
    },
    setLastRisposta(state, { payload }) {
      state.lastRisposta = payload;
    },
  },
});

export const lastRisposta = (state : State) => state.returnDevice.lastRisposta;
export const returnDeviceIsOpen = (state : State) => state.returnDevice.returnDeviceIsOpen;
export const {
  openReturnDeviceDialog,
  closeReturnDeviceDialog,
  setLastRisposta,
} = returnDeviceSlice.actions;
export default returnDeviceSlice.reducer;
