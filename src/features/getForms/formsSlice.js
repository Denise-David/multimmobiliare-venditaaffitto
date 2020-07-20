import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchForms = createAsyncThunk('forms/getForms', async (arg) => {
  // eslint-disable-next-line no-undef
  const res = await fetch(arg);

  const json = await res.json();
  console.log(json);

  return json;
});

// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )

const formsSlice = createSlice({
  name: 'forms',
  initialState: {
    data: [],
  },
  reducers: {
  },

  extraReducers: {
    [fetchForms.fulfilled]: (state, action) => {
      state.data = action.payload;
    },

  },
});

export const selectData = (state) => state.forms.data;
export default formsSlice.reducer;
