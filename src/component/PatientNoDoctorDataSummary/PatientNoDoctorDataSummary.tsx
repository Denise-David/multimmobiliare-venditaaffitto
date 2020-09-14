import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './style';
import { newPatientInfo, oldPatientInfo } from '../../store/slice/patientDataSlice';

const PatientNoDoctorDataSummary = () => {
  const dataPatient = useSelector(newPatientInfo);
  const oldDataPatient = useSelector(oldPatientInfo);
  const classes = useStyles();
  return (
    <>
      {dataPatient.givenname === oldDataPatient.givenname
        ? (
          <>
            Nome:
            {' '}
            { oldDataPatient.givenname}
          </>
        )
        : (
          <span className={classes.color}>
            Nome:
            {' '}
            <span className={classes.oldData}>
              {oldDataPatient.givenname}
            </span>
            {' '}
            Nuovo:
            {' '}
            {dataPatient.givenname}
          </span>
        )}
      <br />
      {dataPatient.familyname === oldDataPatient.familyname
        ? (
          <>
            Cognome:
            {' '}
            { oldDataPatient.familyname}
          </>
        )
        : (
          <span className={classes.color}>
            Cognome:
            {' '}
            <span className={classes.oldData}>
              {oldDataPatient.familyname}
            </span>
            {' '}
            Nuovo:
            {' '}
            {dataPatient.familyname}
          </span>
        )}
      <br />
      {dataPatient.cityName === oldDataPatient.cityName
        ? (
          <>
            Città:
            {' '}
            { oldDataPatient.cityName}
          </>
        )
        : (
          <span className={classes.color}>
            Città:
            {' '}
            <span className={classes.oldData}>
              {oldDataPatient.cityName}
            </span>
            {' '}
            Nuovo:
            {' '}
            {dataPatient.cityName}
          </span>
        )}
      <br />
      {dataPatient.streetName === oldDataPatient.streetName
        ? (
          <>
            Via:
            {' '}
            { oldDataPatient.streetName}
          </>
        )
        : (
          <span className={classes.color}>
            Via:
            {' '}
            <span className={classes.oldData}>
              {oldDataPatient.streetName}
            </span>
            {' '}
            Nuovo:
            {' '}
            {dataPatient.streetName}
          </span>
        )}
      <br />
      {dataPatient.streetNumber === oldDataPatient.streetNumber
        ? (
          <>
            Numero:
            {' '}
            { oldDataPatient.streetNumber}
          </>
        )
        : (
          <span className={classes.color}>
            Numero:
            {' '}
            <span className={classes.oldData}>
              {oldDataPatient.streetNumber}
            </span>
            {' '}
            Nuovo:
            {' '}
            {dataPatient.streetNumber}
          </span>
        )}
      <br />
      {dataPatient.mobile === oldDataPatient.mobile
        ? (
          <>
            Telefono:
            {' '}
            { oldDataPatient.mobile}
          </>
        )
        : (
          <span className={classes.color}>
            Telefono:
            {' '}
            <span className={classes.oldData}>
              {oldDataPatient.mobile}
            </span>
            {' '}
            Nuovo:
            {' '}
            {dataPatient.mobile}
          </span>
        )}
      ;
    </>
  );
};
export default PatientNoDoctorDataSummary;
