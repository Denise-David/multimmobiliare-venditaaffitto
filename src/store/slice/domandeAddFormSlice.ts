import { createSlice } from '@reduxjs/toolkit';

import { emit } from 'process';
import { State } from '../store/store';

export interface domandaAddForm {
  IDDomanda : string,
   Domanda : string,
   stateText : boolean,
    Risposte? : []}

const domandeAddFormSlice = createSlice({
  name: 'domandeAddForm',
  initialState: {
    isBAddDomandaclicked: false as boolean,
    isTextFieldNewDomandaDisabled: true as boolean,
    Question: '' as string,
    domandeObject: {} as {[key:string]:domandaAddForm},
    isBCheckDisabled: false as boolean,
    colorBCheck: 'primary' as 'primary' | 'default' |'inherit' | 'secondary' | 'default' | undefined,
    isBCheckAddDomandaDisabled: true as boolean,
    colorBCheckAddDomanda: 'default' as 'primary' | 'default' |'inherit' | 'secondary' | 'default' | undefined,
  },
  reducers: {
    setDomandeinObject(state, { payload }) {
      state.domandeObject = payload;
    },
    resetDomandaByIDDomanda(state, { payload }) {
      delete state.domandeObject[payload];
    },
    resetDomandeOfDomandeObject(state) {
      state.domandeObject = {};
    },
    setBAddDomandaClicked(state) {
      state.isBAddDomandaclicked = true;
      state.isTextFieldNewDomandaDisabled = false;
    },
    setBAddDomandaUnclicked(state) {
      state.isBAddDomandaclicked = false;
      state.isTextFieldNewDomandaDisabled = true;
      state.isBCheckAddDomandaDisabled = true;
      state.colorBCheckAddDomanda = 'default';
    },
    setDomanda(state, { payload }) {
      state.Question = payload;
    },
    setDomandaInObjectDomandeTwoRes(state, { payload }) {
      const { IDDomanda } = payload;
      state.domandeObject[IDDomanda] = payload;
      state.domandeObject[IDDomanda].stateText = true;
    },
    setDomandaInObjectDomandeMoreRes(state, { payload }) {
      const { IDDomanda } = payload;
      state.domandeObject[IDDomanda] = payload;
      state.domandeObject[IDDomanda].stateText = true;
    },
    resetDomanda(state) {
      state.Question = '';
    },
    setBModifyDomandaClicked(state, { payload }) {
      state.domandeObject[payload].stateText = false;
    },
    setBModifyDomandaUnclicked(state, { payload }) {
      state.domandeObject[payload].stateText = true;
    },
    modifyDomandaInObjectDomande(state, { payload }) {
      const { IDDomanda } = payload;
      state.domandeObject[IDDomanda] = payload;
    },
    deleteDomandaInObjectDomande(state, { payload }) {
      delete state.domandeObject[payload];
    },
    setBCheckDisabled(state) {
      state.isBCheckDisabled = true;
      state.colorBCheck = 'default';
    },
    setBCheckEnabled(state) {
      state.isBCheckDisabled = false;
      state.colorBCheck = 'primary';
    },
    setBCheckAddDomandaDisabled(state) {
      state.isBCheckAddDomandaDisabled = true;
      state.colorBCheckAddDomanda = 'default';
    },
    setBCheckAddDomandaEnabled(state) {
      state.isBCheckAddDomandaDisabled = false;
      state.colorBCheckAddDomanda = 'primary';
    },

  },
});

export const addDomandaInArray = () => ({
  type: 'ADD_DOMANDA_IN_ARRAY',

});
export const deleteDomandaFormPiuRes = (payload:any) => ({
  type: 'DELETE_DOMANDA_FORM_PIU_RES',
  payload,
});

// eslint-disable-next-line max-len
export const isBCheckAddDomandaDisabled = (state : State) => state.domandeAddForm.isBCheckAddDomandaDisabled;
export const colorBCheckAddDomanda = (state : State) => state.domandeAddForm.colorBCheckAddDomanda;
export const isBCheckDisabled = (state : State) => state.domandeAddForm.isBCheckDisabled;
export const colorBCheck = (state : State) => state.domandeAddForm.colorBCheck;
// eslint-disable-next-line max-len
export const domandeObject = (state : State) => state.domandeAddForm.domandeObject;
export const question = (state : State) => state.domandeAddForm.Question;
export const isBAddDomandaClicked = (state : State) => state.domandeAddForm.isBAddDomandaclicked;
// eslint-disable-next-line max-len
export const isTextFieldNewDomandaDisabled = (state : State) => state.domandeAddForm.isTextFieldNewDomandaDisabled;
export const {
  setBAddDomandaClicked, setBAddDomandaUnclicked,
  setDomanda, setDomandaInObjectDomandeTwoRes: setDomandaInObjectDomande, resetDomanda,
  setBModifyDomandaClicked, setBModifyDomandaUnclicked,
  modifyDomandaInObjectDomande, deleteDomandaInObjectDomande, setBCheckDisabled,
  setBCheckEnabled, setBCheckAddDomandaDisabled,
  setBCheckAddDomandaEnabled, resetDomandaByIDDomanda, setDomandaInObjectDomandeMoreRes,
  setDomandeinObject,
  resetDomandeOfDomandeObject,

} = domandeAddFormSlice.actions;
export default domandeAddFormSlice.reducer;
