import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

// Slice menu domande a due risposte
const menuDomandeSlice = createSlice({
  name: 'menuDomande',
  initialState: {
    intestazioneAttiva: false as boolean,
    raggruppaAttivo: false as boolean,
  },
  reducers: {
    setIntestazioneAttiva(state) {
      state.intestazioneAttiva = !state.intestazioneAttiva;
    },
    setGroupAttiviTwoAns(state) {
      state.raggruppaAttivo = !state.raggruppaAttivo;
    },
    resetMenuTwoAns(state) {
      state.intestazioneAttiva = false;
      state.raggruppaAttivo = false;
    },
  },
});

export const raggruppaAttivo = (state:State):boolean => state.menuDomande.raggruppaAttivo;
export const intestazioneAttiva = (state : State):boolean => state.menuDomande.intestazioneAttiva;
export const {
  setIntestazioneAttiva,
  setGroupAttiviTwoAns, resetMenuTwoAns,
} = menuDomandeSlice.actions;
export default menuDomandeSlice.reducer;
