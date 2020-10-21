import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

// Struttura di un formulario
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

// Struttura di un reparto selezionato
export interface repartoType {
  nomeReparto:string, idReparto:number
}

// Slice aggiunta di un formulario
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
    idAddedFormulario: '' as string,
    unsavedChanges: false as boolean,

  },
  reducers: {
    // gestione modifiche salvate
    unsetUnsavedChanges(state) {
      if (state.unsavedChanges === true) {
        state.unsavedChanges = false;
      }
    },
    setUnsavedChanges(state) {
      if (state.unsavedChanges === false) {
        state.unsavedChanges = true;
      }
    },
    // Gestione id del formulario appena aggiunto
    resetIDAddedForm(state) {
      state.idAddedFormulario = '';
    },
    setIDAddedForm(state, { payload }) {
      const { _id } = payload;
      state.idAddedFormulario = _id;
    },
    // Gestione tipo formulario
    getFormType(state, { payload }) {
      state.formType = payload;
    },
    resetFormType(state) {
      state.formType = '';
    },
    // gestione reparto selezionato
    setSelectedReparto(state, { payload }) {
      const { nomeReparto, idReparto } = payload;
      state.selectedReparto = { nomeReparto, idReparto };
    },
    resetSelectedReparto(state) {
      state.selectedReparto = { nomeReparto: '', idReparto: -1 };
    },
    // gestione bottone conferma
    setConfirmDisabled(state) {
      state.isConfirmDisabled = true;
    },
    setConfirmEnabled(state) {
      state.isConfirmDisabled = false;
    },
    // Gestione pulsante aggiunta formulario
    setBAddFormUnclicked(state) {
      state.isButtonAddFormClicked = false;
    },
    setBAddFormClicked(state) {
      state.isButtonAddFormClicked = true;
    },
    // Gestione conferma scelta reparto in cui aggiungere formulario
    setBConfirmAddFormClicked(state) {
      state.isBConfirmAddFormClicked = true;
    },
    setBConfirmAddFormUnclicked(state) {
      state.isBConfirmAddFormClicked = false;
    },
    // Gestione nome formulario
    setNomeFormulario(state, { payload }) {
      state.nomeFormulario = payload;
    },

  },
});

// action del bottone conferma scelta reparto in cui aggiungere formulario
export const buttonConfirmAddFormClicked = ():{type:string} => ({
  type: 'BUTTON_CONFIRM_CLICKED',
});
// action del bottone annulla durante la scelta del reparto
export const buttonCancelAddFormClicked = ():{type:string} => ({
  type: 'BUTTON_CANCEL_CLICKED',
});
// action del bottone salva all'aggiunta di un nuovo formulario
export const buttonSaveFormClicked = ():{type:string} => ({
  type: 'BUTTON_SAVE_FORM_CLICKED',
});
// action del bottone aggiungi formulario
export const buttonAddClicked = ():{type:string} => ({
  type: 'BUTTON_ADD_CLICKED',
});
// action del bottone elimina formulario
export const buttonDeleteOrSaveClicked = ():{type:string} => ({
  type: 'BUTTON_DELETE_OR_SAVE_CLICKED',

});
// action del bottone conferma eliminazione formulario
export const confirmDeleteForm = ():{type:string} => ({
  type: 'CONFIRM_DELETE_FORM',
});
// action del pulsante salva modifiche
export const saveModifyForm = ():{type:string} => ({
  type: 'SAVE_MODIFY_FORM',
});

export const unsavedChanges = (state : State) : boolean => state.addForm.unsavedChanges;
export const idAddedFormulario = (state : State) :string => state.addForm.idAddedFormulario;
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
  setBConfirmAddFormUnclicked, setNomeFormulario, setIDAddedForm,
  resetIDAddedForm, setUnsavedChanges, unsetUnsavedChanges,
} = addFormSlice.actions;
export default addFormSlice.reducer;
