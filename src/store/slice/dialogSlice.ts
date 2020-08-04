import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';
import { Domanda } from './formSlice';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState:
  {
    open: false as boolean,
    repartoID: '' as any,
    domandeReparto: [] as Domanda[],
    isButtonClcked: false,
    nomePaziente: '' as string,
  },
  reducers: {
    showPatientFormDialog(state) {
      state.open = !state.open;
    },
    getDomandeReparto(state, { payload }) {
      state.domandeReparto = payload;
    },
    buttonSendForm(state) {
      state.isButtonClcked = true;
    },
    getNomePaziente(state, { payload }) {
      state.nomePaziente = payload;
    },
  },
});

export const repartoDomande = (state: State) => state.dialog.domandeReparto;
export const isOpen = (state : State) => state.dialog.open;
export const {
  getNomePaziente, showPatientFormDialog, getDomandeReparto, buttonSendForm,
} = dialogSlice.actions;
export default dialogSlice.reducer;
