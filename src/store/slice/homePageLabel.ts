import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    repartoGUID: null as number | null,
    formulariList: [] as any,
  },
  reducers: {
    setRepartoGUID(state, { payload }) {
      // eslint-disable-next-line no-param-reassign
      state.repartoGUID = payload;
    },
    setFormulariList(state, { payload }) {
      // eslint-disable-next-line no-param-reassign
      state.formulariList = payload;
    },
  },
});

export const initFormulariReparto = () => ({
  type: 'INIT_FORMULARI_REPARTO',

});
export const formulariList = (state : State) => state.homePage.formulariList;
export const repartoGUID = (state : State) => state.homePage.repartoGUID;
export const { setRepartoGUID, setFormulariList } = homePageSlice.actions;
export default homePageSlice.reducer;
