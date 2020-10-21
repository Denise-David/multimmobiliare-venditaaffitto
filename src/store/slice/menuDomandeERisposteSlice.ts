import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

// Slice menu tabella domande a più risposte
const menuDomandeERisposteSlice = createSlice({
  name: 'menuDomandeERisposte',
  initialState: {
    risposteTutteUguali: false as boolean,
    intestazioneAttiva: false as boolean,
    raggruppaAttivo: false as boolean,
  },
  reducers: {
    setRisposteTutteUguali(state) {
      state.risposteTutteUguali = !state.risposteTutteUguali;
    },
    setIntestazioneMoreAnsAttiva(state) {
      state.intestazioneAttiva = !state.intestazioneAttiva;
    },
    setGroupAttivi(state) {
      state.raggruppaAttivo = !state.raggruppaAttivo;
    },
    resetMenuMoreAns(state) {
      state.risposteTutteUguali = false;
      state.intestazioneAttiva = false;
      state.raggruppaAttivo = false;
    },
  },
});

export const raggruppaAttivo = (state:State):boolean => state.menuDomandeERisposte.raggruppaAttivo;
// eslint-disable-next-line max-len
export const intestazioneMoreAnsAttiva = (state : State):boolean => state.menuDomandeERisposte.intestazioneAttiva;
// eslint-disable-next-line max-len
export const risposteTutteUguali = (state : State):boolean => state.menuDomandeERisposte.risposteTutteUguali;
export const {
  setRisposteTutteUguali,
  setIntestazioneMoreAnsAttiva, setGroupAttivi, resetMenuMoreAns,
} = menuDomandeERisposteSlice.actions;
export default menuDomandeERisposteSlice.reducer;
