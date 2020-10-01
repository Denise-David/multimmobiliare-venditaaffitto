import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState: {
    newPatientInfo: { } as any | null,
    textFieldDisabled: true as boolean,
    oldPatientInfo: {} as any | null,
    obligatoryFieldEmpty: false as boolean,
    cancelClicked: false as boolean,
    checkboxFamilyDoctor: false as boolean,
    checkboxDoctor: false as boolean,
    fieldFamilyDoctorEmpty: false as boolean,
    fieldDoctorEmpty: false as boolean,
    birthdayDate: '' as string | null,
  },
  reducers: {
    setBirthdayDate(state, { payload }) {
      state.birthdayDate = payload;
    },
    resetBirthday(state) {
      state.birthdayDate = null;
    },
    unsetCancelClicked(state) {
      state.cancelClicked = false;
    },
    setFieldFDoctorEmpty(state) {
      state.fieldDoctorEmpty = true;
    },
    unsetFieldDoctorEmpty(state) {
      state.fieldDoctorEmpty = false;
    },
    setFieldFamilyDoctorEmpty(state) {
      state.fieldFamilyDoctorEmpty = true;
    },
    unsetFieldFamilyDoctorEmpty(state) {
      state.fieldFamilyDoctorEmpty = false;
    },
    setCheckboxDoctor(state) {
      state.checkboxDoctor = true;
    },
    unsetCheckboxDoctor(state) {
      state.checkboxDoctor = false;
    },
    setCheckboxFamilyDoctor(state) {
      state.checkboxFamilyDoctor = true;
    },
    unsetCheckboxFamilyDoctor(state) {
      state.checkboxFamilyDoctor = false;
    },
    setNoFamilyDoctor(state) {
      state.newPatientInfo.familyDoctor = { givenname: 'Nessun medico di famiglia' };
    },
    setNoDoctor(state) {
      state.newPatientInfo.doctor = { givenname: 'Nessun medico inviante' };
    },
    setObligatoryFieldEmpty(state) {
      state.obligatoryFieldEmpty = true;
    },
    unsetObligatoryFieldEmpty(state) {
      state.obligatoryFieldEmpty = false;
    },
    resetNewPatientInfo(state) {
      state.newPatientInfo = state.oldPatientInfo;
      state.cancelClicked = !state.cancelClicked;
    },
    deleteDoctor(state) {
      state.newPatientInfo.doctor = null;
    },
    deleteFamilyDoctor(state) {
      state.newPatientInfo.familyDoctor = null;
    },
    getOldPatientInfo(state, { payload }) {
      state.oldPatientInfo = payload;
    },
    getNewPatientInfo(state, { payload }) {
      state.newPatientInfo = payload;
    },
    changePatientValue(state, { payload }) {
      const { value, name } = payload;
      if (state.newPatientInfo[name] === null) {
        state.newPatientInfo[name] = '';
      }
      state.newPatientInfo[name] = value;
    },
    switchStateDisabled(state) {
      state.textFieldDisabled = !state.textFieldDisabled;
    },
    setDisabledTrue(state) {
      state.textFieldDisabled = true;
    },
    resetAllData(state) {
      state.newPatientInfo = {};
    },
  },
});

export const birthdayDate = (state : State) => state.patientData.birthdayDate;
export const fieldDoctorEmpty = (state: State) => state.patientData.fieldDoctorEmpty;
export const fieldFamilyDoctorEmpty = (state: State) => state.patientData.fieldFamilyDoctorEmpty;
export const checkboxDoctor = (state : State) => state.patientData.checkboxDoctor;
export const checkboxFamilyDoctro = (state : State) => state.patientData.checkboxFamilyDoctor;
export const cancelClicked = (state : State) => state.patientData.cancelClicked;
export const obligatoryFieldEmpty = (state : State) => state.patientData.obligatoryFieldEmpty;
export const oldPatientInfo = (state : State) => state.patientData.oldPatientInfo;
export const textFieldDisabled = (state : State) => state.patientData.textFieldDisabled;
export const newPatientInfo = (state : State) => state.patientData.newPatientInfo;
export const {
  getNewPatientInfo,
  changePatientValue,
  switchStateDisabled, resetNewPatientInfo,
  resetAllData, deleteDoctor,
  getOldPatientInfo, setDisabledTrue, deleteFamilyDoctor,
  setObligatoryFieldEmpty, unsetObligatoryFieldEmpty,
  setNoDoctor, setNoFamilyDoctor, setCheckboxFamilyDoctor,
  unsetCheckboxFamilyDoctor, setCheckboxDoctor, unsetCheckboxDoctor,
  setFieldFDoctorEmpty, setFieldFamilyDoctorEmpty, unsetFieldDoctorEmpty,
  unsetFieldFamilyDoctorEmpty, unsetCancelClicked, setBirthdayDate, resetBirthday,

} = patientDataSlice.actions;
export default patientDataSlice.reducer;
