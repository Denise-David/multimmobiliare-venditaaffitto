import React, { useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import {
  setNumEtichetta, setIDFormRisposte, oldPatientData, newPatientData,
} from '../../store/slice/patientFormPDFSlice';
import useStyles from './style';

const PDFPatientData = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // eslint-disable-next-line no-restricted-globals
  const parsedText = queryString.parse(location.search);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const parsed = queryString.parse(location.search);

    dispatch(setNumEtichetta(parsed.etichetta));
    dispatch(setIDFormRisposte(parsed.ID));
    dispatch({ type: 'initPDFPatientData' });
  }, []);
  const oldDataPatient = useSelector(oldPatientData);
  const newDataPatient = useSelector(newPatientData);

  return (
    <div className={classes.margini}>
      <Typography variant="body2">
        Etichetta :
        {' '}
        {parsedText.etichetta}
        <br />
        ID formulario risposte :
        {' '}
        {parsedText.ID}
      </Typography>
      <Typography className={classes.titolo} variant="h4">
        Dati paziente
        <hr />
      </Typography>
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
        Numero :
        {' '}
        {oldDataPatient.streetNumber}
        { oldDataPatient.streetNumber === newDataPatient.streetNumber ? <></>
          : (
            <span className={classes.spazio}>
              NUOVO Numero :
              {' '}
              { newDataPatient.streetNumber}
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
        <br />
        Medico di famiglia :
        {' '}
        {oldDataPatient.nameFamilyDoctor}
        { oldDataPatient.nameFamilyDoctor === newDataPatient.nameFamilyDoctor ? <></>
          : (
            <span className={classes.spazio}>
              NUOVO Medico di famiglia :
              {' '}
              { newDataPatient.nameFamilyDoctor}
            </span>

          ) }
        <br />
        Medico inviante :
        {' '}
        {oldDataPatient.nameDoctor}
        { oldDataPatient.nameDoctor === newDataPatient.nameDoctor ? <></>
          : (
            <span className={classes.spazio}>
              NUOVO Medico Inviante :
              {' '}
              { newDataPatient.nameDoctor}
            </span>

          ) }
        <br />
        Cassa malati :
        {' '}
        {oldDataPatient.insuranceCoversName}
        { oldDataPatient.insuranceCoversName === newDataPatient.insuranceCoversName ? <></>
          : (
            <span className={classes.spazio}>
              NUOVA Cassa malati :
              {' '}
              { newDataPatient.insuranceCoversName}
            </span>

          ) }

      </Typography>
      <hr />
    </div>

  );
};

export default PDFPatientData;
