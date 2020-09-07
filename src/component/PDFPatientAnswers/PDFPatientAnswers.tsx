/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
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
  }, [dispatch]);

  const repartoInfo = useSelector(infoReparto);

  const answersArray = useSelector(patientAnswers);

  let sommaRisposte = 0;
  // creo lista di risposte
  const listRisposte = answersArray.risposte ? answersArray.risposte.map((risposta :any) => {
    const { domanda } = risposta;
    const noPuntoDiDomanda = domanda.substring(0, domanda.length - 1);
    sommaRisposte += risposta.valore;
    // creo la lista di date
    const arrayDate = risposta.date.map((data: any) => (
      <Typography key={data.idRisposta}>
        {data.testoData}
        {': '}
        {format(new Date(data.dataFormattata), 'dd.MM.yyyy')}
      </Typography>
    ));

    return (
      <>
        <div className={classes.cornice}>
          <Typography variant="body1">
            {risposta.domanda}
          </Typography>
          <Typography variant="body1" align="right">
            {risposta.testoRisposta}
            {arrayDate}
          </Typography>
        </div>

        {risposta.value === repartoInfo.risposta1
          ? (
            <div className={classes.cornice}>
              <Typography variant="body1">
                { noPuntoDiDomanda }
                {arrayDate}
              </Typography>
            </div>
          ) : <></>}
      </>
    );
  }) : <></>;

  const risultatiArray = repartoInfo.Risultati ? Object.keys(repartoInfo.Risultati).map((key) => {
    const risultato = repartoInfo.Risultati[key];
    return risultato;
  }) : [];
  const listRisultati = risultatiArray ? risultatiArray.map((risultato :any) => {
    if (sommaRisposte >= risultato.valoreMin && sommaRisposte <= risultato.valoreMax) {
      return (
        <div>
          {risultato.testoAnamnesi}
        </div>
      );
    }
    return (
      <div />
    );
  }) : <> </>;

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
        {answersArray.givenname}
        {' '}
        {answersArray.familyname}
      </Typography>
      <hr />
      {listRisposte}
      <Typography className={classes.risultatoSpace} variant="h6">
        Risultato:
        {' '}
        <span className={classes.center}>
          {listRisultati}
        </span>
      </Typography>

    </div>
  );
};

export default PDFPatientAnswers;
