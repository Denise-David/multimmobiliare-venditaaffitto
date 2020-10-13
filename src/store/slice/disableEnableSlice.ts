import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const disableEnableSlice = createSlice({
  name: 'disableEnable',
  initialState: {
    isBModifyDelAddReturnDisabled: false as boolean,
    isBSaveDisabled: false as boolean,
    isDDLFormDisabled: true as boolean,
  },
  reducers: {
    setBModifyDelAddReturnDisabled(state) {
      state.isBModifyDelAddReturnDisabled = true;
    },
    setBModifyDelAddReturnEnabled(state) {
      state.isBModifyDelAddReturnDisabled = false;
    },
    setBSaveDisabled(state) {
      state.isBSaveDisabled = true;
    },
    setBSaveEnabled(state) {
      state.isBSaveDisabled = false;
    },
    setDDLFormDisabled(state) {
      state.isDDLFormDisabled = true;
    },
    setDDLFormEnabled(state) {
      state.isDDLFormDisabled = false;
    },
  },
});

export const disableAll = ():{type:string} => ({
  type: 'DISABLE_ALL',

});
export const enableAll = ():{type:string} => ({
  type: 'ENABLE_ALL',

});
export const isDDLFormDisabled = (state : State):boolean => state.disableEnable.isDDLFormDisabled;
export const
  // eslint-disable-next-line max-len
  isBModifyDelAddReturnDisabled = (state : State):boolean => state.disableEnable.isBModifyDelAddReturnDisabled;
export const isBSaveDisabled = (state : State):boolean => state.disableEnable.isBSaveDisabled;
export const {
  setBModifyDelAddReturnDisabled,
  setBModifyDelAddReturnEnabled, setBSaveDisabled,
  setBSaveEnabled, setDDLFormDisabled, setDDLFormEnabled,
} = disableEnableSlice.actions;
export default disableEnableSlice.reducer;
