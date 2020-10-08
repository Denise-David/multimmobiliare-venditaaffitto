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
      Nome :&nbsp;
      {oldDataPatient.givenname}
      { (oldDataPatient.givenname === newDataPatient.givenname)
      || (oldDataPatient.givenname === null && newDataPatient.givenname === '') ? <></>
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
      Cognome :
      {' '}
      {oldDataPatient.familyname}
      { (oldDataPatient.familyname === newDataPatient.familyname)
       || (oldDataPatient.familyname === null && newDataPatient.familyname === '') ? <></>
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
      Città :
      {' '}
      {oldDataPatient.cityName}
      { (oldDataPatient.cityName === newDataPatient.cityName)
       || (oldDataPatient.cityName === null && newDataPatient.cityName === '') ? <></>
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
      Via :
      {' '}
      {oldDataPatient.streetName}
      { (oldDataPatient.streetName === newDataPatient.streetName)
       || (oldDataPatient.streetName === null && newDataPatient.streetName === '') ? <></>
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

      { (oldDataPatient.streetNumber === newDataPatient.streetNumber)
       || (oldDataPatient.streetNumber === null && newDataPatient.streetNumber === '') ? (
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
      Telefono :
      {' '}
      {oldDataPatient.mobile}
      { (oldDataPatient.mobile === newDataPatient.mobile)
       || (oldDataPatient.mobile === null && newDataPatient.mobile === '') ? <></>
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
