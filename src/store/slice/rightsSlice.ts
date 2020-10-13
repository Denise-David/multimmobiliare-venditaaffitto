import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface repartoRightType {
 sermednodeid?: number,
unitid?:number,
acronym:string,
enddate:number,
longname:string,
nodetype:number,
sermednodeparentid?:number,
unitparentid?:number,
shortname:string,
startdate:number,
localization:number}

export interface rightType {
 code:string,
description:string,
id:number,
scopes:[]}

export interface scopeType {
  areaCode:string,
areaType:string,
areaDescription:string,
description:string,
id:number}

export interface repartoScopeRightType {

  data:[],

}

const rightsSlice = createSlice({
  name: 'rights',
  initialState: {
    user: 'eoc22527' as string,
    rightsUserAUTAN: [] as rightType[],
    repartiCreate: [] as repartoRightType[],
    repartiDelete: [] as repartoRightType[],
    repartiModify: [] as repartoRightType[],
    allReparti: [] as repartoRightType[],
    formulariByReparto: [] as {formulario:string, _id:string}[],
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
      state.formulariByReparto = payload;
    },

  },
});

export const haveRepModifyRight = (state : State):boolean => state.rights.haveRepModifyRight;
export const haveRepDeleteRight = (state : State):boolean => state.rights.haveRepDeleteRight;
export const haveUserDeleteRight = (state : State):boolean => state.rights.haveUserDeleteRight;
export const haveUserModifyRight = (state : State):boolean => state.rights.haveUserModifyRight;
export const haveUserCreateRight = (state : State):boolean => state.rights.haveUserCreateRight;
export const
  formulariByReparto = (state : State):
  {formulario:string, _id:string}[] => state.rights.formulariByReparto;
export const allReparti = (state : State):repartoRightType[] => state.rights.allReparti;
export const repartiDelete = (state : State):repartoRightType[] => state.rights.repartiDelete;
export const repartiCreate = (state : State):repartoRightType[] => state.rights.repartiCreate;
export const repartiModify = (state : State):repartoRightType[] => state.rights.repartiModify;
export const rightsUserAUTAN = (state : State):rightType[] => state.rights.rightsUserAUTAN;
export const user = (state : State):string => state.rights.user;
export const {
  getUser, setRightsUserAUTAN, setRepartiCreate, setRepartiDelete,
  setAllReparti, setFormulari, setUserCreateRight, setUserDeleteRight,
  setUserModifyRight, unsetUserDeleteRight, setRepartoDeleteRight,
  unsetRepartoDeleteRight, setRepartiModify, setRepartoModifyRight,
  unsetRepartoModifyRight,
} = rightsSlice.actions;
export default rightsSlice.reducer;
