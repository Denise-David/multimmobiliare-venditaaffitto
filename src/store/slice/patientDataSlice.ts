import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState:
  {
    allData: null as any | null,
  },
  reducers: {
    getAllDataEtichetta(state, { payload }) {
      state.allData = payload;
    },
  },
});

export const allDataEtichetta = (state : State) => state.patientData.allData;
export const { getAllDataEtichetta } = patientDataSlice.actions;
export default patientDataSlice.reducer;
