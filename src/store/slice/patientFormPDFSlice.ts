import { createSlice } from '@reduxjs/toolkit';
import { State } from '../store/store';

export interface patientData {familyname : '', givenname : '',
cityName : '', mobile: '', streetName: '', streetNumber : '',
nameDoctor : '', nameFamilyDoctor : '', insuranceCoversName: ''}

export interface answersData { givenname:'', familyname:'', risposte:{[key: string] : { idDomanda : '', value: '', domanda: ''}}}

const patientInfoPDFSlice = createSlice({
  name: 'patientInfoPDF',
  initialState:
  {
    numEtichetta: 0 as number,
    ID: '' as string,
    oldPatientData: {} as patientData,
    newPatientData: {} as patientData,
    patientAnswers: {} as answersData,
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
    getPatientAnswer(state, { payload }) {
      state.patientAnswers = payload;
    },

  },
});

export const patientAnswers = (state : State) => state.patientInfoPDF.patientAnswers;
export const newPatientData = (state : State) => state.patientInfoPDF.newPatientData;
export const oldPatientData = (state : State) => state.patientInfoPDF.oldPatientData;
export const IDFormRisposte = (state : State) => state.patientInfoPDF.ID;
export const numEtichetta = (state : State) => state.patientInfoPDF.numEtichetta;
export const {
  setNumEtichetta, setIDFormRisposte,
  getOldPatientData, getNewPatientData,
  getPatientAnswer,
} = patientInfoPDFSlice.actions;
export default patientInfoPDFSlice.reducer;
