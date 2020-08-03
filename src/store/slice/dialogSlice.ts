import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState:
  {
    open: false as boolean,
  },
  reducers: {
    showPatientFormDialog(state) {
      state.open = !state.open;
    },
  },
});

export const isOpen = (state : State) => state.dialog.open;
export const { showPatientFormDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
