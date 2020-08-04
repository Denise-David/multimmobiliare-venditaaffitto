import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState:
  {
    open: false as boolean,
    repartoID: '' as any,
    domandeReparto: [] as string[],
  },
  reducers: {
    showPatientFormDialog(state) {
      state.open = !state.open;
    },
    getDomandeReparto(state, { payload }) {
      state.domandeReparto = payload;
    },
  },
});

export const repartoDomande = (state: State) => state.dialog.domandeReparto;
export const isOpen = (state : State) => state.dialog.open;
export const { showPatientFormDialog, getDomandeReparto } = dialogSlice.actions;
export default dialogSlice.reducer;
