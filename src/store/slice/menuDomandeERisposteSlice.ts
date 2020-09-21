import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

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
  },
});

export const raggruppaAttivo = (state:State) => state.menuDomandeERisposte.raggruppaAttivo;
// eslint-disable-next-line max-len
export const intestazioneMoreAnsAttiva = (state : State) => state.menuDomandeERisposte.intestazioneAttiva;
// eslint-disable-next-line max-len
export const risposteTutteUguali = (state : State) => state.menuDomandeERisposte.risposteTutteUguali;
export const {
  setRisposteTutteUguali,
  setIntestazioneMoreAnsAttiva, setGroupAttivi,
} = menuDomandeERisposteSlice.actions;
export default menuDomandeERisposteSlice.reducer;
