import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

interface rispostaUno { risposta1: string, stateText: boolean}
interface rispostaDue { risposta2: string, stateText: boolean}

const risposteAddFormSlice = createSlice({
  name: 'risposteAddForm',
  initialState: {
    risposta1: { risposta1: 'Si', stateText: true } as rispostaUno,
    isTextFieldRispostaDisabled: true as boolean,
    risposta2: { risposta2: 'No', stateText: true } as rispostaDue,
    isBModifyRis1Clicked: false as boolean,
    isBModifyRis2Clicked: false as boolean,
  },
  reducers: {
    setBModifyRis1Clicked(state) {
      state.risposta1.stateText = false;
      state.isBModifyRis1Clicked = true;
    },
    getRisposta1(state, { payload }) {
      state.risposta1 = payload;
    },
    setBModifyRis1Unclicked(state) {
      state.risposta1.stateText = true;
      state.isBModifyRis1Clicked = false;
    },
    getRisposta2(state, { payload }) {
      state.risposta2 = payload;
    },
    setBModifyRis2Clicked(state) {
      state.risposta2.stateText = false;
      state.isBModifyRis2Clicked = true;
    },
    setBModifyRis2Unclicked(state) {
      state.risposta2.stateText = true;
      state.isBModifyRis2Clicked = false;
    },

  },
});

export const isBModifyRis2Clicked = (state : State) => state.risposteAddForm.isBModifyRis2Clicked;
export const isBModifyRis1Clicked = (state : State) => state.risposteAddForm.isBModifyRis1Clicked;
export const risposta2 = (state : State) => state.risposteAddForm.risposta2;
export const risposta1 = (state : State) => state.risposteAddForm.risposta1;
export const {
  setBModifyRis1Clicked, getRisposta1, getRisposta2,
  setBModifyRis2Clicked, setBModifyRis1Unclicked,
  setBModifyRis2Unclicked,
} = risposteAddFormSlice.actions;
export default risposteAddFormSlice.reducer;
