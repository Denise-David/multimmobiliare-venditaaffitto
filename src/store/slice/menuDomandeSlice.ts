import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const menuDomandeSlice = createSlice({
  name: 'menuDomande',
  initialState: {
    risposteTutteUguali: false as boolean,
    intestazioneAttiva: false as boolean,
    raggruppaAttivo: false as boolean,
  },
  reducers: {
    setRisposteTutteUguali(state) {
      state.risposteTutteUguali = !state.risposteTutteUguali;
    },
    setIntestazioneAttiva(state) {
      state.intestazioneAttiva = !state.intestazioneAttiva;
    },
    setGroupAttiviTwoAns(state) {
      state.raggruppaAttivo = !state.raggruppaAttivo;
    },
    resetMenuTwoAns(state) {
      state.risposteTutteUguali = false;
      state.intestazioneAttiva = false;
      state.raggruppaAttivo = false;
    },
  },
});

export const raggruppaAttivo = (state:State):boolean => state.menuDomande.raggruppaAttivo;
export const intestazioneAttiva = (state : State):boolean => state.menuDomande.intestazioneAttiva;
// eslint-disable-next-line max-len
export const risposteTutteUguali = (state : State):boolean => state.menuDomande.risposteTutteUguali;
export const {
  setRisposteTutteUguali, setIntestazioneAttiva,
  setGroupAttiviTwoAns, resetMenuTwoAns,
} = menuDomandeSlice.actions;
export default menuDomandeSlice.reducer;
