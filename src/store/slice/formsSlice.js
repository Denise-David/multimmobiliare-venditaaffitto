import { createSlice } from '@reduxjs/toolkit';
import { getDomande, getRisposte } from '../sagas/getFormBase';

const formsSlice = createSlice({
  name: 'forms',
  initialState: {
    dataDomande: [],
    dataRisposte: [],
  },
  reducers: {
    domande: (state, { payload }) => {
      state.dataDomande = payload;
      getDomande();
    },
    risposte: (state, { payload }) => {
      state.dataRisposte = payload;
      getRisposte();
    },

  },

});

export const selectData = (state) => state.forms.dataDomande;
export const risposteData = (state) => state.forms.dataRisposte;
export const { domande, risposte } = formsSlice.actions;
export default formsSlice.reducer;
