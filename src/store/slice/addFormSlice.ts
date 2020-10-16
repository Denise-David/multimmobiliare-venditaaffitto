import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface formularioDBType {
_id:string,
actualWardGUID?:number,
formulario:string,
intestazione?:string,
gruppi?:[],
domande?:[],
risultati?:[],
risposte?:{risposta1:string, risposta2:string}
paziente?:{givenname: string, familyname:string}
etichetta?:string,
reparto?:string,
}

export interface repartoType {
  nomeReparto:string, idReparto:number
}

const addFormSlice = createSlice({
  name: 'addForm',
  initialState:
  {
    isButtonAddFormClicked: false as boolean,
    formType: '' as string,
    selectedReparto: {} as repartoType,
    isConfirmDisabled: true as boolean,
    isBConfirmAddFormClicked: false as boolean,
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
    },
    setConfirmEnabled(state) {
      state.isConfirmDisabled = false;
    },
    resetFormType(state) {
      state.formType = '';
    },
    resetSelectedReparto(state) {
      state.selectedReparto = { nomeReparto: '', idReparto: -1 };
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
    setNomeFormulario(state, { payload }) {
      state.nomeFormulario = payload;
    },

  },
});

export const buttonConfirmAddFormClicked = ():{type:string} => ({
  type: 'BUTTON_CONFIRM_CLICKED',
});
export const buttonCancelAddFormClicked = ():{type:string} => ({
  type: 'BUTTON_CANCEL_CLICKED',
});
export const buttonSaveFormClicked = ():{type:string} => ({
  type: 'BUTTON_SAVE_FORM_CLICKED',
});

export const buttonAddClicked = ():{type:string} => ({
  type: 'BUTTON_ADD_CLICKED',
});

export const buttonDeleteOrSaveClicked = ():{type:string} => ({
  type: 'BUTTON_DELETE_OR_SAVE_CLICKED',

});

export const confirmDeleteForm = ():{type:string} => ({
  type: 'CONFIRM_DELETE_FORM',
});
export const saveModifyForm = ():{type:string} => ({
  type: 'SAVE_MODIFY_FORM',
});

// eslint-disable-next-line max-len

export const nomeFormulario = (state : State):string => state.addForm.nomeFormulario;
export const
  isBConfirmAddFormClicked = (state : State):boolean => state.addForm.isBConfirmAddFormClicked;
export const
  isButtonAddFormClicked = (state : State):boolean => state.addForm.isButtonAddFormClicked;
export const isConfirmDisabled = (state : State):boolean => state.addForm.isConfirmDisabled;
export const
  selectedReparto = (state : State):
   repartoType => state.addForm.selectedReparto;
export const formType = (state : State):string => state.addForm.formType;
export const {
  getFormType, setSelectedReparto, setConfirmEnabled,
  resetFormType, resetSelectedReparto, setConfirmDisabled,
  setBAddFormClicked, setBAddFormUnclicked, setBConfirmAddFormClicked,
  setBConfirmAddFormUnclicked, setNomeFormulario,
} = addFormSlice.actions;
export default addFormSlice.reducer;
