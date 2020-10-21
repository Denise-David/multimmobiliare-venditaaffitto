import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

// Slice per gestire l'abilita/disabilita delle icone
const disableEnableSlice = createSlice({
  name: 'disableEnable',
  initialState: {
    isBModifyDelAddReturnDisabled: false as boolean,
    isBSaveDisabled: false as boolean,
    isDDLFormDisabled: true as boolean,
  },
  reducers: {
    // Gestione maggiore parte delle icone
    setBModifyDelAddReturnDisabled(state) {
      state.isBModifyDelAddReturnDisabled = true;
    },
    setBModifyDelAddReturnEnabled(state) {
      state.isBModifyDelAddReturnDisabled = false;
    },
    // Gestione icona salva
    setBSaveDisabled(state) {
      state.isBSaveDisabled = true;
    },
    setBSaveEnabled(state) {
      state.isBSaveDisabled = false;
    },
    // Gestione lista a tendina formulari
    setDDLFormDisabled(state) {
      state.isDDLFormDisabled = true;
    },
    setDDLFormEnabled(state) {
      state.isDDLFormDisabled = false;
    },
  },
});
// action per disabilitare quasi tutto
export const disableAll = ():{type:string} => ({
  type: 'DISABLE_ALL',

});
// action per riabilitare quasi tutti
export const enableAll = ():{type:string} => ({
  type: 'ENABLE_ALL',

});
export const isDDLFormDisabled = (state : State):boolean => state.disableEnable.isDDLFormDisabled;
export const
  isBModifyDelAddReturnDisabled = (state : State)
  :boolean => state.disableEnable.isBModifyDelAddReturnDisabled;
export const isBSaveDisabled = (state : State):boolean => state.disableEnable.isBSaveDisabled;
export const {
  setBModifyDelAddReturnDisabled,
  setBModifyDelAddReturnEnabled, setBSaveDisabled,
  setBSaveEnabled, setDDLFormDisabled, setDDLFormEnabled,
} = disableEnableSlice.actions;
export default disableEnableSlice.reducer;
