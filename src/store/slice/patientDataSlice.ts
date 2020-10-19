import { createSlice } from '@reduxjs/toolkit';
import { patientData } from './patientFormPDFSlice';
import { State } from '../store/store';

const patientDataSlice = createSlice({
  name: 'patientData',
  initialState: {
    newPatientInfo: { } as patientData,
    textFieldDisabled: true as boolean,
    oldPatientInfo: {} as patientData,
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
      if (state.newPatientInfo) {
        state.newPatientInfo.familyDoctor = { city: 'Nessun medico di famiglia' };
      }
    },
    setNoDoctor(state) {
      if (state.newPatientInfo) {
        state.newPatientInfo.doctor = { city: 'Nessun medico inviante' };
      }
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
      if (state.newPatientInfo) {
        state.newPatientInfo.doctor = {};
      }
    },
    deleteFamilyDoctor(state) {
      if (state.newPatientInfo) {
        state.newPatientInfo.familyDoctor = {};
      }
    },
    getOldPatientInfo(state, { payload }) {
      state.oldPatientInfo = payload;
    },
    getNewPatientInfo(state, { payload }) {
      state.newPatientInfo = payload;
    },
    changePatientValue(state, { payload }) {
      const { value } = payload;
      const nome : 'familyname' | 'givenname' | 'cityName' | 'mobile' |
      'streetName' | 'streetNumber' | 'doctor'
      | 'familyDoctor' | 'insuranceCoversName' = payload.name;

      if (state.newPatientInfo) {
        state.newPatientInfo[nome] = value;
      }
    },
    switchStateDisabled(state) {
      state.textFieldDisabled = !state.textFieldDisabled;
    },
    setDisabledTrue(state) {
      state.textFieldDisabled = true;
    },
    resetAllData(state) {
      state.newPatientInfo = {
        familyname: '',
        givenname: '',
        cityName: '',
        mobile: '',
        streetName: '',
        streetNumber: '',
        doctor: {},
        familyDoctor: {},
        insuranceCoversName: '',
        zip: '',
      };
      state.birthdayDate = '';
    },
  },
});

export const birthdayDate = (state : State):string | null => state.patientData.birthdayDate;
export const fieldDoctorEmpty = (state: State):boolean => state.patientData.fieldDoctorEmpty;
export const
  fieldFamilyDoctorEmpty = (state: State):boolean => state.patientData.fieldFamilyDoctorEmpty;
export const checkboxDoctor = (state : State):boolean => state.patientData.checkboxDoctor;
export const
  checkboxFamilyDoctro = (state : State):boolean => state.patientData.checkboxFamilyDoctor;
export const cancelClicked = (state : State):boolean => state.patientData.cancelClicked;
export const
  obligatoryFieldEmpty = (state : State):boolean => state.patientData.obligatoryFieldEmpty;
export const
  oldPatientInfo = (state : State):patientData => state.patientData.oldPatientInfo;
export const textFieldDisabled = (state : State):boolean => state.patientData.textFieldDisabled;
export const
  newPatientInfo = (state : State):patientData => state.patientData.newPatientInfo;
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
