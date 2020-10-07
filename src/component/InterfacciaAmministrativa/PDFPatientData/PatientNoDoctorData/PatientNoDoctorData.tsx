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
      { oldDataPatient.givenname.toLowerCase() === newDataPatient.givenname.toLowerCase() ? <></>
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
      { oldDataPatient.familyname.toLowerCase() === newDataPatient.familyname.toLowerCase() ? <></>
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
      { oldDataPatient.cityName.toLowerCase() === newDataPatient.cityName.toLowerCase() ? <></>
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
      { oldDataPatient.streetName.toLowerCase() === newDataPatient.streetName.toLowerCase() ? <></>
        : (
          <span className={classes.spazio}>
            NUOVA Via:
            {' '}
            { newDataPatient.streetName}
          </span>
        ) }
      <br />

      { oldDataPatient.streetNumber.toLowerCase() === newDataPatient.streetNumber.toLowerCase() ? (
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
      {oldDataPatient.mobile.toLowerCase() === newDataPatient.mobile.toLowerCase() ? <></>
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
