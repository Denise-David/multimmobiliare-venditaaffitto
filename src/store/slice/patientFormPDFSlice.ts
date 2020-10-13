import { createSlice } from '@reduxjs/toolkit';
import { rispostaPazienteType } from './patientFormSlice';
import { Medico } from '../../util/index';
import { State } from '../store/store';

export interface patientData {familyname : string, givenname : string,
cityName : string, mobile: string, streetName: string, streetNumber : string,
doctor : Medico, familyDoctor : Medico, insuranceCoversName: string, zip:string}

const patientInfoPDFSlice = createSlice({
  name: 'patientInfoPDF',
  initialState:
  {
    numEtichetta: 0 as number,
    ID: '' as string,
    oldPatientData: {} as patientData,
    newPatientData: {} as patientData,
    patientAnswers: {} as {givenname:string, familyname:string, risposte: rispostaPazienteType[]},
    infoReparto: {} as {Risultati:[], Reparto:string, tipo:string,
      risposta1:string},
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

export const lastFormID = (state : State):string => state.patientInfoPDF.lastFormID;
export const infoReparto = (state : State):{Risultati:[], Reparto:string, tipo:string,
  risposta1:string} => state.patientInfoPDF.infoReparto;
export const
  patientAnswers = (state : State):
  {givenname:string, familyname:string,
    risposte: rispostaPazienteType[]} => state.patientInfoPDF.patientAnswers;
export const newPatientData = (state : State):patientData => state.patientInfoPDF.newPatientData;
export const oldPatientData = (state : State):patientData => state.patientInfoPDF.oldPatientData;
export const IDFormRisposte = (state : State):string => state.patientInfoPDF.ID;
export const numEtichetta = (state : State):number => state.patientInfoPDF.numEtichetta;
export const {
  setNumEtichetta, setIDFormRisposte,
  getOldPatientData, getNewPatientData,
  getPatientAnswer, getRepartoInfo, setIDLastForm,
} = patientInfoPDFSlice.actions;
export default patientInfoPDFSlice.reducer;
