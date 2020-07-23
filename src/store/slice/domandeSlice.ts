import { createSlice } from '@reduxjs/toolkit';
import { getDomandeAndID, getRisposteByDomandaID } from '../sagas/getFormBase';
import { State } from '../store/store';

export interface Domanda { ID : number, Domanda : string, Risposte : Risposta[]}
export interface Risposta { risposta : string, valore : string}

const domandeSlice = createSlice({
  name: 'domande',
  initialState: {
    dataDomande: [] as Domanda[],
  },
  reducers: {
    domande: (state, { payload }) => {
      state.dataDomande = payload;
      console.log('ccc', payload);
    },
  },
});

export const selectData = (state: State) => state.domande.dataDomande;
export const { domande } = domandeSlice.actions;
export default domandeSlice.reducer;
