import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const rightsSlice = createSlice({
  name: 'rights',
  initialState: {
    user: 'eoc22527' as string,
    rightsUserAUTAN: {} as any,
    repartiCreate: [] as any,
    repartiDelete: [] as any,
    allReparti: [] as any,
    formulari: [] as any,
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
    setRepartiDelete(state, { payload }) {
      state.repartiDelete = payload;
    },
    setAllReparti(state, { payload }) {
      state.allReparti = payload;
    },
    setFormulari(state, { payload }) {
      state.formulari = payload;
    },

  },
});

export const formulariByReparto = (state : State) => state.rights.formulari;
export const allReparti = (state : State) => state.rights.allReparti;
export const repartiDelete = (state : State) => state.rights.repartiDelete;
export const repartiCreate = (state : State) => state.rights.repartiCreate;
export const rightsUserAUTAN = (state : State) => state.rights.rightsUserAUTAN;
export const user = (state : State) => state.rights.user;
export const {
  getUser, setRightsUserAUTAN, setRepartiCreate, setRepartiDelete,
  setAllReparti, setFormulari,
} = rightsSlice.actions;
export default rightsSlice.reducer;
