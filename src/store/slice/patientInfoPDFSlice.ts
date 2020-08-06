import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface patientData {familyname : '', givenname : '',
cityName : '', mobile: '', streetName: '', streetNumber : '',
nameDoctor : '', nameFamilyDoctor : '', insuranceCoversName: ''}

const patientInfoPDFSlice = createSlice({
  name: 'patientInfoPDF',
  initialState:
  {
    numEtichetta: 0 as number,
    ID: '' as string,
    oldPatientData: {} as patientData,
    newPatientData: {} as patientData,
  },
  reducers: {
    setNumEtichetta(state, { payload }) {
      state.numEtichetta = payload;
    },
    setIDFormRisposte(state, { payload }) {
      state.ID = payload;
    },
    getOldPatientData(state, { payload }) {
      state.oldPatientData = payload;
    },
    getNewPatientData(state, { payload }) {
      state.newPatientData = payload;
    },
  },
});

export const newPatientData = (state : State) => state.patientInfoPDF.newPatientData;
export const oldPatientData = (state : State) => state.patientInfoPDF.oldPatientData;
export const IDFormRisposte = (state : State) => state.patientInfoPDF.ID;
export const numEtichetta = (state : State) => state.patientInfoPDF.numEtichetta;
export const {
  setNumEtichetta, setIDFormRisposte,
  getOldPatientData, getNewPatientData,
} = patientInfoPDFSlice.actions;
export default patientInfoPDFSlice.reducer;
