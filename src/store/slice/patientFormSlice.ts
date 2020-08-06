import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';
import { Domanda } from './formSlice';

const patientFormSlice = createSlice({
  name: 'patientForm',
  initialState:
  {
    open: false as boolean,
    domandeReparto: [] as Domanda[],
    isButtonClcked: false,
    risposte: {} as any,
    cancelCode: false,
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
      state.open = false;
    },
    getRisposta(state, { payload }) {
      const { idDomanda, value, domanda } = payload;
      state.risposte[idDomanda] = value;
    },
    buttonReturnDevice(state) {
      state.isButtonClcked = false;
      state.cancelCode = true;
    },
  },
});

export const risposte = (state : State) => state.patientForm.risposte;
export const repartoDomande = (state: State) => state.patientForm.domandeReparto;
export const isClicked = (state : State) => state.patientForm.isButtonClcked;
export const isOpen = (state:State) => state.patientForm.open;
export const cancelCode = (state: State) => state.patientForm.cancelCode;
export const {
  showPatientFormDialog, getDomandeReparto,
  buttonSendForm, getRisposta, buttonReturnDevice,
} = patientFormSlice.actions;
export default patientFormSlice.reducer;
