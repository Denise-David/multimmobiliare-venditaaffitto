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
    setGroupAttivi(state) {
      state.raggruppaAttivo = !state.raggruppaAttivo;
    },
  },
});

export const raggruppaAttivo = (state:State) => state.menuDomande.raggruppaAttivo;
export const intestazioneAttiva = (state : State) => state.menuDomande.intestazioneAttiva;
// eslint-disable-next-line max-len
export const risposteTutteUguali = (state : State) => state.menuDomande.risposteTutteUguali;
export const {
  setRisposteTutteUguali, setIntestazioneAttiva,
  setGroupAttivi,
} = menuDomandeSlice.actions;
export default menuDomandeSlice.reducer;
