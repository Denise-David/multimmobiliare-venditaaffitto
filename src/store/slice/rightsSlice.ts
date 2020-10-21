import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

// struttura di un reparto preso dai diritti dell'utente
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

// struttura di un diritto dell'utente
export interface rightType {
 code:string,
description:string,
id:number,
scopes:[]}

// struttura  di uno scope di un diritto
export interface scopeType {
  areaCode:string,
areaType:string,
areaDescription:string,
description:string,
id:number}

// struttura di un reparto di uno scope dei diritti dell'utente
export interface repartoScopeRightType {

  data:[],

}

// Slice per la gestione dei diritti
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
    // Gestione dei reparti
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
    setRepartiCreate(state, { payload }) {
      state.repartiCreate = payload;
    },
    setRepartiDelete(state, { payload }) {
      state.repartiDelete = payload;
    },
    setAllReparti(state, { payload }) {
      state.allReparti = payload;
    },
    // Gestione dei diritti
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
    setRightsUserAUTAN(state, { payload }) {
      state.rightsUserAUTAN = payload;
    },
    // Gestione utente
    getUser(state) {
      state.user = 'eoc22527';
    },
    // Gestione formulario
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
