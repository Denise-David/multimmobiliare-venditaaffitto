import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';
import { getRisposteByDomandaID } from '../sagas/getFormBase';
import { selectData } from './domandeSlice';

const risposteSlice = createSlice({
  name: 'risposte',
  initialState: {
    dataRisposte: [] as string[],
  },
  reducers: {
    risposte: (state, { payload }) => {
      state.dataRisposte = payload;
      getRisposteByDomandaID();
    },

  },

});

// export const risposteData = (state : State) => state.risposte.dataRisposte;
// export const { risposte } = risposteSlice.actions;
// export default risposteSlice.reducer;
