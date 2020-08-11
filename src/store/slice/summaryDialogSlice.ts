import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const summaryDialogSlice = createSlice({
  name: 'summaryDialog',
  initialState:
  {
    patientData: {} as any,
    answersPatientData: {} as any,
    dialogStatus: false as boolean,
  },
  reducers: {
    setPatientData(state, { payload }) {
      state.patientData = payload;
    },
    setSummaryDialogOpen(state) {
      state.dialogStatus = true;
    },
    setAnswersData(state, { payload }) {
      state.answersPatientData = payload;
    },
    buttonSendConfirmClicked(state) {
      state.dialogStatus = false;
    },
    buttonSendCancelClicked(state) {
      state.dialogStatus = false;
    },
  },
});

export const answersPatientData = (state : State) => state.summaryDialog.answersPatientData;
export const dialogStatus = (state : State) => state.summaryDialog.dialogStatus;
export const patientInfoData = (state : State) => state.summaryDialog.patientData;
export const {
  setAnswersData, setPatientData, setSummaryDialogOpen,
  buttonSendConfirmClicked, buttonSendCancelClicked,
} = summaryDialogSlice.actions;
export default summaryDialogSlice.reducer;
