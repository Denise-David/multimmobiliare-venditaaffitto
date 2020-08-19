import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const domandeAddFormSlice = createSlice({
  name: 'domandeAddForm',
  initialState: {
    isBAddDomandaclicked: false as boolean,
    isTextFieldDomandaDisabled: true as boolean,
    Question: '' as string,
    domandeArray: [] as any,
  },
  reducers: {
    setBAddDomandaClicked(state) {
      state.isBAddDomandaclicked = true;
      state.isTextFieldDomandaDisabled = false;
    },
    setBAddDomandaUnclicked(state) {
      state.isBAddDomandaclicked = false;
      state.isTextFieldDomandaDisabled = true;
    },
    setDomanda(state, { payload }) {
      state.Question = payload;
    },
    setDomandaInArrayDomande(state, { payload }) {
      state.domandeArray.push(payload);
    },
    resetDomanda(state) {
      state.Question = '';
    },
  },
});

export const addDomandaInArray = () => ({
  type: 'ADD_DOMANDA_IN_ARRAY',

});

export const nomeDomanda = (state : State) => state.domandeAddForm.Question;
export const isBAddDomandaClicked = (state : State) => state.domandeAddForm.isBAddDomandaclicked;
// eslint-disable-next-line max-len
export const isTextFieldDomandaDisabled = (state : State) => state.domandeAddForm.isTextFieldDomandaDisabled;
export const {
  setBAddDomandaClicked, setBAddDomandaUnclicked,
  setDomanda, setDomandaInArrayDomande, resetDomanda,
} = domandeAddFormSlice.actions;
export default domandeAddFormSlice.reducer;
