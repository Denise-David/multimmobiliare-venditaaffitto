import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const rightsSlice = createSlice({
  name: 'rights',
  initialState: {
    user: 'eoc22527' as string,
    rightsUserAUTAN: [] as any,
    repartiCreate: [] as any,
    repartiDelete: [] as any,
    repartiModify: [] as any,
    allReparti: [] as any,
    formulari: [] as any,
    haveUserCreateRight: false as boolean,
    haveUserDeleteRight: false as boolean,
    haveUserModifyRight: false as boolean,
    haveRepDeleteRight: false as boolean,
    haveRepModifyRight: false as boolean,

  },
  reducers: {
    unsetRepartoModifyRight(state) {
      state.haveRepModifyRight = false;
    },
    setRepartoModifyRight(state) {
      state.haveRepModifyRight = true;
    },
    setRepartiModify(state, { payload }) {
      state.repartiModify = payload;
    },
    unsetRepartoDeleteRight(state) {
      state.haveRepDeleteRight = false;
    },
    setRepartoDeleteRight(state) {
      state.haveRepDeleteRight = true;
    },
    unsetUserDeleteRight(state) {
      state.haveUserCreateRight = false;
    },
    setUserCreateRight(state) {
      state.haveUserCreateRight = true;
    },
    setUserDeleteRight(state) {
      state.haveUserDeleteRight = true;
    },
    setUserModifyRight(state) {
      state.haveUserModifyRight = true;
    },
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

export const haveRepModifyRight = (state : State) => state.rights.haveRepModifyRight;
export const haveRepDeleteRight = (state : State) => state.rights.haveRepDeleteRight;
export const haveUserDeleteRight = (state : State) => state.rights.haveUserDeleteRight;
export const haveUserModifyRight = (state : State) => state.rights.haveUserModifyRight;
export const haveUserCreateRight = (state : State) => state.rights.haveUserCreateRight;
export const formulariByReparto = (state : State) => state.rights.formulari;
export const allReparti = (state : State) => state.rights.allReparti;
export const repartiDelete = (state : State) => state.rights.repartiDelete;
export const repartiCreate = (state : State) => state.rights.repartiCreate;
export const repartiModify = (state : State) => state.rights.repartiModify;
export const rightsUserAUTAN = (state : State) => state.rights.rightsUserAUTAN;
export const user = (state : State) => state.rights.user;
export const {
  getUser, setRightsUserAUTAN, setRepartiCreate, setRepartiDelete,
  setAllReparti, setFormulari, setUserCreateRight, setUserDeleteRight,
  setUserModifyRight, unsetUserDeleteRight, setRepartoDeleteRight,
  unsetRepartoDeleteRight, setRepartiModify, setRepartoModifyRight, unsetRepartoModifyRight,
} = rightsSlice.actions;
export default rightsSlice.reducer;
