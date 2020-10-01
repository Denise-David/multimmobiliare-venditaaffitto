import React from 'react';
import { useSelector } from 'react-redux';
import { newPatientInfo } from '../../../../store/slice/patientDataSlice';
import { getStringMedico } from '../../../../util';

const PatientDoctorDataSummary = () => {
  const dataPatient = useSelector(newPatientInfo);
  return (

    <>

      <>
        <span>
          Medico inviante:
          {' '}
          {getStringMedico(dataPatient.doctor)}
        </span>

      </>

      <br />

      <>
        <span>
          Medico di famiglia:
          {' '}
          {getStringMedico(dataPatient.familyDoctor)}
        </span>

      </>

    </>
  );
};

export default PatientDoctorDataSummary;
