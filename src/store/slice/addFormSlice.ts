import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const addFormSlice = createSlice({
  name: 'addForm',
  initialState:
  {
    isButtonAddFormClicked: false as boolean,
    formType: '' as string,
    selectedReparto: {} as any,
    isConfirmDisabled: true as boolean,
    isBConfirmAddFormClicked: false as boolean,
    colorButton: 'disabled' as 'inherit' | 'disabled' | 'primary' | 'action' | 'secondary' | 'error' | undefined,
    isBSaveDisabled: true as boolean,
    nomeFormulario: '' as string,
  },
  reducers: {
    getFormType(state, { payload }) {
      state.formType = payload;
    },
    setSelectedReparto(state, { payload }) {
      const { nomeReparto, idReparto } = payload;
      state.selectedReparto = { nomeReparto, idReparto };
    },
    setConfirmDisabled(state) {
      state.isConfirmDisabled = true;
      state.colorButton = 'disabled';
    },
    setConfirmEnabled(state) {
      state.isConfirmDisabled = false;
      state.colorButton = 'primary';
    },
    resetFormType(state) {
      state.formType = '';
    },
    resetSelectedReparto(state) {
      state.selectedReparto = {};
    },
    setBAddFormUnclicked(state) {
      state.isButtonAddFormClicked = false;
    },
    setBAddFormClicked(state) {
      state.isButtonAddFormClicked = true;
    },
    setBConfirmAddFormClicked(state) {
      state.isBConfirmAddFormClicked = true;
    },
    setBConfirmAddFormUnclicked(state) {
      state.isBConfirmAddFormClicked = false;
    },
    setBSaveDisabled(state) {
      state.isBSaveDisabled = true;
      state.colorButton = 'disabled';
    },
    setBSaveEnabled(state) {
      state.isBSaveDisabled = false;
      state.colorButton = 'primary';
    },
    setNomeFormulario(state, { payload }) {
      state.nomeFormulario = payload;
    },

  },
});

export const buttonConfirmAddFormClicked = () => ({
  type: 'BUTTON_CONFIRM_CLICKED',
});
export const buttonCancelAddFormClicked = () => ({
  type: 'BUTTON_CANCEL_CLICKED',

});
export const buttonSaveFormClicked = () => ({
  type: 'BUTTON_SAVE_FORM_CLICKED',
});

// eslint-disable-next-line max-len
export const isBSaveDisabled = (state : State) => state.addForm.isBSaveDisabled;
export const nomeFormulario = (state : State) => state.addForm.nomeFormulario;
export const isBConfirmAddFormClicked = (state : State) => state.addForm.isBConfirmAddFormClicked;
export const isButtonAddFormClicked = (state : State) => state.addForm.isButtonAddFormClicked;
export const colButton = (state : State) => state.addForm.colorButton;
export const isConfirmDisabled = (state : State) => state.addForm.isConfirmDisabled;
export const selectedReparto = (state : State) => state.addForm.selectedReparto;
export const formType = (state : State) => state.addForm.formType;
export const {
  getFormType, setSelectedReparto, setConfirmEnabled,
  resetFormType, resetSelectedReparto, setConfirmDisabled,
  setBAddFormClicked, setBAddFormUnclicked, setBConfirmAddFormClicked,
  setBConfirmAddFormUnclicked, setNomeFormulario, setBSaveEnabled,
  setBSaveDisabled,
} = addFormSlice.actions;
export default addFormSlice.reducer;
