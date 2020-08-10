/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNumEtichetta, setIDFormRisposte, patientAnswers, infoReparto,
} from '../../store/slice/patientFormPDFSlice';
import useStyles from './style';

const PDFPatientAnswers = () => {
  // eslint-disable-next-line no-restricted-globals
  const parsedText = queryString.parse(location.search);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    const parsed = queryString.parse(location.search);

    dispatch(setNumEtichetta(parsed.etichetta));
    dispatch(setIDFormRisposte(parsed.ID));
    dispatch({ type: 'initPDFPatientAnswers' });
  }, []);

  const repartoInfo = useSelector(infoReparto);
  const typeForm = repartoInfo.tipo;
  const answersPatient = useSelector(patientAnswers);

  const answersArray = answersPatient.risposte ? Object.keys(answersPatient.risposte).map((key) => {
    const risposta = answersPatient.risposte[key];
    return risposta;
  }) : [];

  const listRisposte = answersArray ? answersArray.map((risposta :any) => {
    const { domanda } = risposta;
    const noPuntoDiDomanda = domanda.substring(0, domanda.length - 1);
    if (typeForm === 'a più risposte') {
      return (
        <div className={classes.cornice}>
          <Typography variant="body1">
            {risposta.domanda}
          </Typography>
          <Typography variant="body1" align="right">
            {risposta.value}
          </Typography>
        </div>
      );
    }

    return (
      <>
        {risposta.value === repartoInfo.risposta1
          ? (
            <div className={classes.cornice}>
              <Typography variant="body1">
                { noPuntoDiDomanda }
              </Typography>
            </div>
          ) : <></>}

      </>
    );
  }) : <></>;

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
        <br />
        Reparto :
        {' '}
        {repartoInfo.Reparto}
      </Typography>
      <Typography className={classes.titolo} variant="h4">
        Risposte paziente
      </Typography>
      <Typography variant="h5" align="right">
        {answersPatient.givenname}
        {' '}
        {answersPatient.familyname}
      </Typography>
      <hr />
      {listRisposte}
    </div>
  );
};

export default PDFPatientAnswers;
