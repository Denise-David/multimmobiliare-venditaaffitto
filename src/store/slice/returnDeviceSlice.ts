import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const returnDeviceSlice = createSlice({
  name: 'returnDevice',
  initialState: {
    returnDeviceIsOpen: false as boolean,
  },
  reducers: {
    openReturnDeviceDialog(state) {
      state.returnDeviceIsOpen = true;
    },
    closeReturnDeviceDialog(state) {
      state.returnDeviceIsOpen = false;
    },
  },
});

export const returnDeviceIsOpen = (state : State) => state.returnDevice.returnDeviceIsOpen;
export const { openReturnDeviceDialog, closeReturnDeviceDialog } = returnDeviceSlice.actions;
export default returnDeviceSlice.reducer;
