import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState: {
    allData: { } as any | null,
    isDisable: true,
    oldPatientInfo: {} as any | null,
  },
  reducers: {
    getNewPatientInfo(state, { payload }) {
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

export const oldPatientInfo = (state : State) => state.patientData.oldPatientInfo;
export const isDisable = (state : State) => state.patientData.isDisable;
export const newPatientInfo = (state : State) => state.patientData.allData;
export const {
  getNewPatientInfo,
  changePatientValue,
  switchStateDisabled,

} = patientDataSlice.actions;
export default patientDataSlice.reducer;
