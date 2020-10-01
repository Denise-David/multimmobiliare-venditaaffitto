import React from 'react';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';
import { birthdayDate, newPatientInfo } from '../../../../store/slice/patientDataSlice';

const PatientNoDoctorDataSummary = () => {
  const dataPatient = useSelector(newPatientInfo);
  const birthday = useSelector(birthdayDate);
  return (
    <>

      <>
        Nome:
        {' '}
        { dataPatient.givenname}
      </>

      <br />

      <>
        Cognome:
        {' '}
        { dataPatient.familyname}
      </>

      <br />

      <>
        Città:
        {' '}
        { dataPatient.cityName}
      </>

      <br />

      <>
        Via:
        {' '}
        { dataPatient.streetName}
      </>

      <br />

      <>
        Numero:
        {' '}
        { dataPatient.streetNumber}
      </>

      <br />

      <>
        Telefono:
        {' '}
        { dataPatient.mobile}
      </>

      <br />
      Data di nascita:
      {' '}
      {birthday ? format(new Date(birthday), 'dd.MM.yyyy') : ''}

    </>
  );
};
export default PatientNoDoctorDataSummary;
