import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { newPatientInfo } from '../../../../store/slice/patientDataSlice';
import { getStringMedico } from '../../../../util';

/**
 * Dati medici paziente
 */
const PatientDoctorDataSummary = ():ReactElement => {
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
