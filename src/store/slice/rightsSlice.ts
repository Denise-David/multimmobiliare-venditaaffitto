import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const rightsSlice = createSlice({
  name: 'rights',
  initialState: {
    user: 'eoc22527' as string,
    rightsUserAUTAN: {} as any,
    repartiCreate: [] as any,
  },
  reducers: {
    getUser(state) {
      state.user = 'eoc22527';
    },
    setRightsUserAUTAN(state, { payload }) {
      state.rightsUserAUTAN = payload;
    },
    setRepartiCreate(state, { payload }) {
      state.repartiCreate = payload;
    },
  },
});

export const repartiCreate = (state : State) => state.rights.repartiCreate;
export const rightsUserAUTAN = (state : State) => state.rights.rightsUserAUTAN;
export const user = (state : State) => state.rights.user;
export const {
  getUser, setRightsUserAUTAN, setRepartiCreate,
} = rightsSlice.actions;
export default rightsSlice.reducer;
