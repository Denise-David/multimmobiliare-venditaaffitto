import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const menuDomandeERisposteSlice = createSlice({
  name: 'menuDomandeERisposte',
  initialState: {
    risposteTutteUguali: false as boolean,
    intestazioneAttiva: false as boolean,
  },
  reducers: {
    setRisposteTutteUguali(state) {
      state.risposteTutteUguali = !state.risposteTutteUguali;
    },
    setIntestazioneAttiva(state) {
      state.intestazioneAttiva = !state.intestazioneAttiva;
    },
  },
});

export const intestazioneAttiva = (state : State) => state.menuDomandeERisposte.intestazioneAttiva;
// eslint-disable-next-line max-len
export const risposteTutteUguali = (state : State) => state.menuDomandeERisposte.risposteTutteUguali;
export const { setRisposteTutteUguali, setIntestazioneAttiva } = menuDomandeERisposteSlice.actions;
export default menuDomandeERisposteSlice.reducer;
