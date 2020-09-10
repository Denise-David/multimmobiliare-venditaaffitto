import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { oldPatientData, newPatientData } from '../../store/slice/patientFormPDFSlice';
import useStyles from './style';

const PatientNoDoctorData = () => {
  const oldDataPatient = useSelector(oldPatientData);
  const newDataPatient = useSelector(newPatientData);
  const classes = useStyles();
  return (
    <Typography variant="subtitle1">
      Nome :&nbsp;
      {oldDataPatient.givenname}
      { oldDataPatient.givenname === newDataPatient.givenname ? <></>
        : (
          <span className={classes.spazio}>
            NUOVO Nome :
            {' '}
            { newDataPatient.givenname }
          </span>
        ) }
      <br />
      Cognome :
      {' '}
      {oldDataPatient.familyname}
      { oldDataPatient.familyname === newDataPatient.familyname ? <></>
        : (
          <span className={classes.spazio}>
            NUOVO Cognome :
            {' '}
            { newDataPatient.familyname}
          </span>

        ) }
      <br />
      Città :
      {' '}
      {oldDataPatient.cityName}
      { oldDataPatient.cityName === newDataPatient.cityName ? <></>
        : (
          <span className={classes.spazio}>
            NUOVA Città :
            {' '}
            { newDataPatient.cityName}
          </span>

        ) }
      <br />
      Via :
      {' '}
      {oldDataPatient.streetName}
      { oldDataPatient.streetName === newDataPatient.streetName ? <></>
        : (
          <span className={classes.spazio}>
            NUOVA Via:
            {' '}
            { newDataPatient.streetName}
          </span>
        ) }
      <br />

      { oldDataPatient.streetNumber === newDataPatient.streetNumber ? (
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
      { oldDataPatient.mobile === newDataPatient.mobile ? <></>
        : (
          <span className={classes.spazio}>
            NUOVO Telefono :
            {' '}
            { newDataPatient.mobile}
          </span>

        ) }
    </Typography>
  );
};

export default PatientNoDoctorData;
