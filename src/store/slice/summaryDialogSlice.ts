import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const summaryDialogSlice = createSlice({
  name: 'summaryDialog',
  initialState:
  {
    lastDocumentData: {} as any,
    dialogStatus: false as boolean,
  },
  reducers: {
    setLastDocumentRisposte(state, { payload }) {
      state.lastDocumentData = payload;
    },
    setSummaryDialogOpen(state) {
      state.dialogStatus = true;
    },
  },
});

export const dialogStatus = (state : State) => state.summaryDialog.dialogStatus;
export const lastDocumentData = (state : State) => state.summaryDialog.lastDocumentData;
export const { setLastDocumentRisposte, setSummaryDialogOpen } = summaryDialogSlice.actions;
export default summaryDialogSlice.reducer;
