import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    repartoGUID: null as number | null,
    formulariList: [] as any,
    formSelected: '-1' as string,
  },
  reducers: {
    setRepartoGUID(state, { payload }) {
      state.repartoGUID = payload;
    },
    setFormulariList(state, { payload }) {
      state.formulariList = payload;
    },
    setSelectedForm(state, { payload }) {
      state.formSelected = payload;
    },
    resetSelectedForm(state) {
      state.formSelected = '-1';
    },
    resetRepartoGUID(state) {
      state.repartoGUID = null;
    },
    resetFormList(state) {
      state.formulariList = [];
    },
  },
});

export const initFormulariReparto = () => ({
  type: 'INIT_FORMULARI_REPARTO',

});
export const formSelected = (state: State) => state.homePage.formSelected;
export const formulariList = (state : State) => state.homePage.formulariList;
export const repartoGUID = (state : State) => state.homePage.repartoGUID;
export const {
  setRepartoGUID, setFormulariList, setSelectedForm,
  resetSelectedForm, resetRepartoGUID, resetFormList,
} = homePageSlice.actions;
export default homePageSlice.reducer;
