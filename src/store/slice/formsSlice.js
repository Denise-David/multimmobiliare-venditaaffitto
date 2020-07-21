import { createSlice } from '@reduxjs/toolkit';

const formsSlice = createSlice({
  name: 'forms',
  initialState: {
    data: [],
  },
  reducers: {
    domande: (state, { payload }) => {
      state.data = payload;
    },

  },

});

export const selectData = (state) => state.forms.data;
export const { domande } = formsSlice.actions;
export default formsSlice.reducer;
