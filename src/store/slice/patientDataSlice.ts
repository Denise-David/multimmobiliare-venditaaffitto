import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState: {
    allData: { } as any | null,
    isDisable: true,
  },
  reducers: {
    getAllDataEtichetta(state, { payload }) {
      state.allData = payload;
    },
    changePatientValue(state, { payload }) {
      const { value, name } = payload;
      state.allData[name] = value;
    },
    switchStateDisabled(state) {
      state.isDisable = !state.isDisable;
    },
  },
});

export const isDisable = (state : State) => state.patientData.isDisable;
export const allDataEtichetta = (state : State) => state.patientData.allData;
export const {
  getAllDataEtichetta,
  changePatientValue,
  switchStateDisabled,
} = patientDataSlice.actions;
export default patientDataSlice.reducer;
