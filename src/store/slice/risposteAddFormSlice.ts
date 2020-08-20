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
  },
  reducers: {
    setBModifyRis1Clicked(state) {
      state.risposta1.stateText = false;
    },
    getRisposta1(state, { payload }) {
      state.risposta1 = payload;
    },
    setBModifyRis1Unclicked(state) {
      state.risposta1.stateText = true;
    },
    getRisposta2(state, { payload }) {
      state.risposta2 = payload;
    },
    setBModifyRis2Clicked(state) {
      state.risposta2.stateText = false;
    },

  },
});

export const risposta2 = (state : State) => state.risposteAddForm.risposta2;
export const risposta1 = (state : State) => state.risposteAddForm.risposta1;
export const {
  setBModifyRis1Clicked, getRisposta1, getRisposta2, setBModifyRis2Clicked,
} = risposteAddFormSlice.actions;
export default risposteAddFormSlice.reducer;
