import { createSlice } from '@reduxjs/toolkit';

import { State } from '../store/store';

export interface domandaAddForm{IDDomanda : string, Domanda : string, stateText : boolean}

const domandeAddFormSlice = createSlice({
  name: 'domandeAddForm',
  initialState: {
    isBAddDomandaclicked: false as boolean,
    isTextFieldNewDomandaDisabled: true as boolean,
    Question: '' as string,
    domandeObject: {} as {[key:string]:domandaAddForm},
    isIconsDisabled: false as boolean,
    colorButton: 'primary' as 'primary' | 'inherit' | 'secondary' | 'default' | undefined,
  },
  reducers: {
    setBAddDomandaClicked(state) {
      state.isBAddDomandaclicked = true;
      state.isTextFieldNewDomandaDisabled = false;
    },
    setBAddDomandaUnclicked(state) {
      state.isBAddDomandaclicked = false;
      state.isTextFieldNewDomandaDisabled = true;
    },
    setDomanda(state, { payload }) {
      state.Question = payload;
    },
    setDomandaInObjectDomande(state, { payload }) {
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
    unsetIcons(state) {
      state.isIconsDisabled = true;
      state.colorButton = 'secondary';
    },
    setIcons(state) {
      state.isIconsDisabled = false;
      state.colorButton = 'primary';
    },

  },
});

export const addDomandaInArray = () => ({
  type: 'ADD_DOMANDA_IN_ARRAY',

});

export const colorButton = (state : State) => state.domandeAddForm.colorButton;
export const isIconsDisabled = (state : State) => state.domandeAddForm.isIconsDisabled;
// eslint-disable-next-line max-len
export const domandeObject = (state : State) => state.domandeAddForm.domandeObject;
export const question = (state : State) => state.domandeAddForm.Question;
export const isBAddDomandaClicked = (state : State) => state.domandeAddForm.isBAddDomandaclicked;
// eslint-disable-next-line max-len
export const isTextFieldNewDomandaDisabled = (state : State) => state.domandeAddForm.isTextFieldNewDomandaDisabled;
export const {
  setBAddDomandaClicked, setBAddDomandaUnclicked,
  setDomanda, setDomandaInObjectDomande, resetDomanda,
  setBModifyDomandaClicked, setBModifyDomandaUnclicked,
  modifyDomandaInObjectDomande, deleteDomandaInObjectDomande,
  setIcons, unsetIcons,
} = domandeAddFormSlice.actions;
export default domandeAddFormSlice.reducer;
