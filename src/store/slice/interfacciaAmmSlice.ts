import { createSlice } from '@reduxjs/toolkit';
import { formularioDBType } from './addFormSlice';
import { State } from '../store/store';

/**
 * Slice gestione interfaccia amministrativa
 */
const interfacciaAmmSlice = createSlice({
  name: 'interfacciaAmm',
  initialState: {
    formNoLabel: [] as formularioDBType[],
    nameCercato: '' as string,
    repSelected: '' as string,
    formSelected: '' as string,
    patientSelected: '' as string,
    label: 0 as number,
    familynameCercato: '' as string,
    IDFormSelected: '' as string,
    filtro: 'Senza etichetta' as string,
    formWithLabel: [] as formularioDBType[],
    patientLabel: { nome: '', cognome: '' } as {nome:string, cognome:string},
  },
  reducers: {
    // Gestione etichetta
    resetPatientLabel(state) {
      state.patientLabel.nome = '';
      state.patientLabel.cognome = '';
    },
    setPatientLabel(state, { payload }) {
      const { givenname, familyname } = payload;
      state.patientLabel.nome = givenname;
      state.patientLabel.cognome = familyname;
    },
    setLabel(state, { payload }) {
      state.label = payload;
    },
    resetLabel(state) {
      state.label = 0;
    },
    // Gestione formulari
    setFormWithLabel(state, { payload }) {
      state.formWithLabel = payload;
    },
    setFormNoLabel(state, { payload }) {
      state.formNoLabel = payload;
    },
    setSelected(state, { payload }) {
      const {
        nomeCognome, formulario, reparto, IDForm,
      } = payload;
      state.repSelected = reparto;
      state.formSelected = formulario;
      state.patientSelected = nomeCognome;
      state.IDFormSelected = IDForm;
    },
    // Gestione filtri, ricerca
    setFiltro(state, { payload }) {
      state.filtro = payload;
    },
    setNameCercato(state, { payload }) {
      state.nameCercato = payload;
    },
    setFamilynameCercato(state, { payload }) {
      state.familynameCercato = payload;
    },

  },
});

// action eliminazione formulario
export const deleteAnsForm = (payload : string):{payload:string, type:string} => ({
  type: 'DELETE_ANS_FORM',
  payload,
});
// action apertura gestione etichetta
export const getNameFamilynameLabel = ():{type:string} => ({
  type: 'GET_NAME_FAMILYNAME_LABEL',

});
// action slega etichetta
export const slegaLabel = ():{type:string} => ({
  type: 'SLEGA_LABEL',

});

export const
  patientLabel = (state: State):{nome:string, cognome:string} => state.interfacciaAmm.patientLabel;
export const
  formWithLabel = (state: State):formularioDBType[] => state.interfacciaAmm.formWithLabel;
export const filtro = (state: State):string => state.interfacciaAmm.filtro;
export const IDFormSelected = (state : State):string => state.interfacciaAmm.IDFormSelected;
export const label = (state : State):number => state.interfacciaAmm.label;
export const familynameCercato = (state : State):string => state.interfacciaAmm.familynameCercato;
export const repSelected = (state : State):string => state.interfacciaAmm.repSelected;
export const formSelected = (state : State):string => state.interfacciaAmm.formSelected;
export const patientSelected = (state : State):string => state.interfacciaAmm.patientSelected;
export const nameCercato = (state : State):string => state.interfacciaAmm.nameCercato;
export const formNoLabel = (state : State):formularioDBType[] => state.interfacciaAmm.formNoLabel;
export const {
  setFormNoLabel, setNameCercato, setSelected,
  setFamilynameCercato, setLabel, resetLabel,
  setFiltro, setFormWithLabel, setPatientLabel,
  resetPatientLabel,
} = interfacciaAmmSlice.actions;
export default interfacciaAmmSlice.reducer;
