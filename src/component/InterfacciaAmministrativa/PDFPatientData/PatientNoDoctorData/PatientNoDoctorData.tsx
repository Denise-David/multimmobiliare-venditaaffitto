import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { oldPatientData, newPatientData } from '../../../../store/slice/patientFormPDFSlice';
import useStyles from './style';

const PatientNoDoctorData = () => {
  const oldDataPatient = useSelector(oldPatientData);
  const newDataPatient = useSelector(newPatientData);
  const classes = useStyles();
  return (
    <Typography variant="subtitle1">

      { (oldDataPatient.givenname.toLowerCase() === newDataPatient.givenname.toLowerCase())
        ? (
          <>
            {' '}
            Nome :&nbsp;
            {oldDataPatient.givenname}
          </>
        )
        : (
          <span className={classes.color}>
            Nome :&nbsp;
            {oldDataPatient.givenname}
            <span className={classes.spazio}>
              NUOVO Nome :
              {' '}
              { newDataPatient.givenname }
            </span>
          </span>
        ) }
      <br />

      { (oldDataPatient.familyname.toLowerCase() === newDataPatient.familyname.toLowerCase())
        ? (
          <>
            Cognome :
            {' '}
            {oldDataPatient.familyname}
          </>
        )
        : (
          <span className={classes.color}>
            Cognome :
            {' '}
            {oldDataPatient.familyname}
            <span className={classes.spazio}>
              NUOVO Cognome :
              {' '}
              { newDataPatient.familyname}
            </span>
          </span>
        ) }
      <br />

      { (oldDataPatient.cityName.toLowerCase() === newDataPatient.cityName.toLowerCase())
       || (oldDataPatient.cityName && !newDataPatient.cityName)
        ? (
          <>
            {' '}
            Città :
            {' '}
            {oldDataPatient.cityName}
          </>
        )
        : (
          <span className={classes.color}>
            Città :
            {' '}
            {oldDataPatient.cityName}
            <span className={classes.spazio}>
              NUOVA Città :
              {' '}
              { newDataPatient.cityName}
            </span>
          </span>

        ) }
      <br />

      { (oldDataPatient.streetName.toLowerCase() === newDataPatient.streetName.toLowerCase())
       || (oldDataPatient.streetName && !newDataPatient.streetName)
        ? (
          <>
            {' '}
            Via :
            {' '}
            {oldDataPatient.streetName}
          </>
        )
        : (
          <span className={classes.color}>
            Via :
            {' '}
            {oldDataPatient.streetName}
            <span className={classes.spazio}>
              NUOVA Via:
              {' '}
              { newDataPatient.streetName}
            </span>
          </span>
        ) }
      <br />

      { (oldDataPatient.streetNumber.toLowerCase() === newDataPatient.streetNumber.toLowerCase())
       || (oldDataPatient.streetNumber && !newDataPatient.streetNumber) ? (
         <>
           Numero :
           {' '}
           {oldDataPatient.streetNumber}
         </>
        )
        : (
          <span className={classes.color}>
            Numero :
            {' '}
            {oldDataPatient.streetNumber}
            <span className={classes.spazio}>
              NUOVO Numero :
              {' '}
              { newDataPatient.streetNumber}
            </span>
          </span>

        ) }
      <br />

      { (oldDataPatient.mobile.toLowerCase() === newDataPatient.mobile.toLowerCase())
       || (oldDataPatient.mobile && !newDataPatient.mobile)
        ? (
          <>
            {' '}
            Telefono :
            {' '}
            {oldDataPatient.mobile}
          </>
        )
        : (
          <span className={classes.color}>
            Telefono :
            {' '}
            {oldDataPatient.mobile}
            <span className={classes.spazio}>
              NUOVO Telefono :
              {' '}
              { newDataPatient.mobile}
            </span>
          </span>

        ) }
    </Typography>
  );
};

export default PatientNoDoctorData;
