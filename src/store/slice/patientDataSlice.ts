import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState: {
    newPatientInfo: { } as any | null,
    textFieldDisabled: true as boolean,
    oldPatientInfo: {} as any | null,
  },
  reducers: {
    getOldPatientInfo(state, { payload }) {
      state.oldPatientInfo = payload;
    },
    getNewPatientInfo(state, { payload }) {
      state.newPatientInfo = payload;
    },
    changePatientValue(state, { payload }) {
      const { value, name } = payload;
      state.newPatientInfo[name] = value;
    },
    switchStateDisabled(state) {
      state.textFieldDisabled = !state.textFieldDisabled;
    },
    setDisabledTrue(state) {
      state.textFieldDisabled = true;
    },
    resetAllData(state) {
      state.newPatientInfo = {};
    },
  },
});

export const oldPatientInfo = (state : State) => state.patientData.oldPatientInfo;
export const textFieldDisabled = (state : State) => state.patientData.textFieldDisabled;
export const newPatientInfo = (state : State) => state.patientData.newPatientInfo;
export const {
  getNewPatientInfo,
  changePatientValue,
  switchStateDisabled,
  resetAllData,
  getOldPatientInfo, setDisabledTrue,

} = patientDataSlice.actions;
export default patientDataSlice.reducer;
