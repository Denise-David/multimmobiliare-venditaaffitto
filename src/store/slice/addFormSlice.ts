import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const addFormSlice = createSlice({
  name: 'addForm',
  initialState:
  {
    formType: '' as string,
  },
  reducers: {
    getFormType(state, { payload }) {
      state.formType = payload;
    },
  },
});

export const formType = (state : State) => state.addForm.formType;
export const { getFormType } = addFormSlice.actions;
export default addFormSlice.reducer;
