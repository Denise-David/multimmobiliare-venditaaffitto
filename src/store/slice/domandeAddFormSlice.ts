import { createSlice } from '@reduxjs/toolkit';

import { State } from '../store/store';

export interface domandaAddForm {
  Tipo: string,
  IDDomanda : string,
   Domanda : string,
   stateText : boolean,
   openCard: boolean,
    Risposte? : []}

const domandeAddFormSlice = createSlice({
  name: 'domandeAddForm',
  initialState: {
    isBAddDomandaclicked: false as boolean,
    isTextFieldNewDomandaDisabled: true as boolean,
    Question: '' as string,
    domandeObject: {} as {[key:string]:domandaAddForm},
    isBCheckDisabled: false as boolean,
    isBCheckAddDomandaDisabled: true as boolean,
    expandedTable: true as boolean,
  },
  reducers: {
    expandTable(state) {
      state.expandedTable = !state.expandedTable;
    },
    openCloseDomandaCard(state, { payload }) {
      state.domandeObject[payload].openCard = !state.domandeObject[payload].openCard;
    },
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
    },
    setDomanda(state, { payload }) {
      state.Question = payload;
    },
    setDomandaInObjectDomandeTwoRes(state, { payload }) {
      const { IDDomanda } = payload;
      state.domandeObject[IDDomanda] = payload;
      state.domandeObject[IDDomanda].stateText = true;
      state.domandeObject[IDDomanda].Tipo = 'a due risposte';
    },
    setDomandaInObjectDomandeMoreRes(state, { payload }) {
      const { IDDomanda } = payload;
      state.domandeObject[IDDomanda] = payload;
      state.domandeObject[IDDomanda].stateText = true;
      state.domandeObject[IDDomanda].Tipo = 'a più risposte';
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
      const { IDDomanda, Domanda } = payload;
      state.domandeObject[IDDomanda].Domanda = Domanda;
    },
    deleteDomandaInObjectDomande(state, { payload }) {
      delete state.domandeObject[payload];
    },
    setBCheckDisabled(state) {
      state.isBCheckDisabled = true;
    },
    setBCheckEnabled(state) {
      state.isBCheckDisabled = false;
    },
    setBCheckAddDomandaDisabled(state) {
      state.isBCheckAddDomandaDisabled = true;
    },
    setBCheckAddDomandaEnabled(state) {
      state.isBCheckAddDomandaDisabled = false;
    },

  },
});

export const addDomandaInArray = () => ({
  type: 'ADD_DOMANDA_IN_ARRAY',

});
export const addDomandaMoreResInArray = () => ({
  type: 'ADD_DOMANDA_MORE_RES_IN_ARRAY',

});
export const deleteDomandaFormPiuRes = (payload:any) => ({
  type: 'DELETE_DOMANDA_FORM_PIU_RES',
  payload,
});

export const expandedTable = (state : State) => state.domandeAddForm.expandedTable;
// eslint-disable-next-line max-len
export const isBCheckAddDomandaDisabled = (state : State) => state.domandeAddForm.isBCheckAddDomandaDisabled;
export const isBCheckDisabled = (state : State) => state.domandeAddForm.isBCheckDisabled;
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
  setDomandeinObject, expandTable,
  resetDomandeOfDomandeObject, openCloseDomandaCard,

} = domandeAddFormSlice.actions;
export default domandeAddFormSlice.reducer;
