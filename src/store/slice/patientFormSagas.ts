import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';
import { Domanda } from './formSlice';

const patientFormSlice = createSlice({
  name: 'patientForm',
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
      // eslint-disable-next-line no-param-reassign
      state.open = !state.open;
    },
    getDomandeReparto(state, { payload }) {
      // eslint-disable-next-line no-param-reassign
      state.domandeReparto = payload;
    },
    buttonSendForm(state) {
      // eslint-disable-next-line no-param-reassign
      state.isButtonClcked = true;
    },
    getNomePaziente(state, { payload }) {
      // eslint-disable-next-line no-param-reassign
      state.nomePaziente = payload;
    },
  },
});

export const repartoDomande = (state: State) => state.patientForm.domandeReparto;
export const isOpen = (state : State) => state.patientForm.open;
export const {
  getNomePaziente, showPatientFormDialog, getDomandeReparto, buttonSendForm,
} = patientFormSlice.actions;
export default patientFormSlice.reducer;
