import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const menuDomandeERisposteSlice = createSlice({
  name: 'menuDomandeERisposte',
  initialState: {
    risposteTutteUguali: false as boolean,
  },
  reducers: {
    setRisposteTutteUguali(state) {
      state.risposteTutteUguali = !state.risposteTutteUguali;
    },
  },
});

// eslint-disable-next-line max-len
export const risposteTutteUguali = (state : State) => state.menuDomandeERisposte.risposteTutteUguali;
export const { setRisposteTutteUguali } = menuDomandeERisposteSlice.actions;
export default menuDomandeERisposteSlice.reducer;
