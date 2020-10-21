import { createSlice } from '@reduxjs/toolkit';
import { formularioDBType } from './addFormSlice';
import { State } from '../store/store';

// Slice home page autanamnesi cone etichetta
const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    repartoGUID: null as number | null,
    formulariList: [] as formularioDBType[],
    formSelected: '-1' as string,
    reparto: '' as string,
  },
  reducers: {
    // Gestione reparto
    setReparto(state, { payload }) {
      state.reparto = payload;
    },
    setRepartoGUID(state, { payload }) {
      state.repartoGUID = payload;
    },
    resetReparto(state) {
      state.reparto = '';
    },
    resetRepartoGUID(state) {
      state.repartoGUID = null;
    },
    // Gestione formulario
    setFormulariList(state, { payload }) {
      state.formulariList = payload;
    },
    setSelectedForm(state, { payload }) {
      state.formSelected = payload;
    },
    resetSelectedForm(state) {
      state.formSelected = '-1';
    },
    resetFormList(state) {
      state.formulariList = [];
    },

  },
});

// action inizializzazione formulari reparto
export const initFormulariReparto = ():{type:string} => ({
  type: 'INIT_FORMULARI_REPARTO',

});
export const reparto = (state: State):string => state.homePage.reparto;
export const formSelected = (state: State):string => state.homePage.formSelected;
export const formulariList = (state : State):formularioDBType[] => state.homePage.formulariList;
export const repartoGUID = (state : State):number|null => state.homePage.repartoGUID;
export const {
  setRepartoGUID, setFormulariList, setSelectedForm,
  resetSelectedForm, resetRepartoGUID, resetFormList,
  setReparto, resetReparto,
} = homePageSlice.actions;
export default homePageSlice.reducer;
