import { createSlice } from '@reduxjs/toolkit';
import { Medico } from '../../util/index';
import { State } from '../store/store';

export interface PatientData {familyname : string, givenname : string,
cityName : string, mobile: string, streetName: string, streetNumber : string,
doctor : Medico, familyDoctor : Medico, insuranceCoversName: string}

const patientInfoPDFSlice = createSlice({
  name: 'patientInfoPDF',
  initialState:
  {
    numEtichetta: 0 as number,
    ID: '' as string,
    oldPatientData: {} as PatientData,
    newPatientData: {} as PatientData,
    patientAnswers: [] as any,
    infoReparto: {} as any,
    sommaRisposte: 0 as number,
    lastFormID: '' as string,
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
    getRepartoInfo(state, { payload }) {
      state.infoReparto = payload;
    },
    setIDLastForm(state, { payload }) {
      const { _id } = payload;
      state.lastFormID = _id;
    },

  },
});

export const lastFormID = (state : State) => state.patientInfoPDF.lastFormID;
export const infoReparto = (state : State) => state.patientInfoPDF.infoReparto;
export const patientAnswers = (state : State) => state.patientInfoPDF.patientAnswers;
export const newPatientData = (state : State) => state.patientInfoPDF.newPatientData;
export const oldPatientData = (state : State) => state.patientInfoPDF.oldPatientData;
export const IDFormRisposte = (state : State) => state.patientInfoPDF.ID;
export const numEtichetta = (state : State) => state.patientInfoPDF.numEtichetta;
export const {
  setNumEtichetta, setIDFormRisposte,
  getOldPatientData, getNewPatientData,
  getPatientAnswer, getRepartoInfo, setIDLastForm,
} = patientInfoPDFSlice.actions;
export default patientInfoPDFSlice.reducer;
