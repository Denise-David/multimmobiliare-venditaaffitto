import React from 'react';
import { useSelector } from 'react-redux';
import { Dialog, Typography } from '@material-ui/core';
import { dialogStatus, patientInfoData, answersPatientData } from '../../store/slice/summaryDialogSlice';
import Nav from '../Navbar/Navbar';
import useStyles from './style';
import { infoReparto } from '../../store/slice/patientFormPDFSlice';
import ButtonSendConfirmSummary from '../ButtonSendConfirmSummary/ButtonSendConfirmSummary';
import ButtonSendCancelSummary from '../ButtonSendCancelSummary copy/ButtonSendCancelSummary';
import { getStringMedico } from '../../util';

const SummaryDialog = () => {
  const statusDialog = useSelector(dialogStatus);
  const dataPatient = useSelector(patientInfoData);
  const dataAnswers = useSelector(answersPatientData);
  const repartoInfo = useSelector(infoReparto);
  const classes = useStyles();

  const answersArray = dataAnswers ? Object.keys(dataAnswers).map((key) => {
    const risposta = dataAnswers[key];
    return risposta;
  }) : [];

  const listRisposte = answersArray ? answersArray.map((risposta :any) => {
    if (repartoInfo.tipo === 'a più risposte') {
      return (
        <Typography key={risposta.idDomanda} variant="subtitle1">
          <br />
          {' '}
          {risposta.domanda}
          <br />

          {' '}
          {risposta.testoRisposta}

        </Typography>
      );
    }
    const noPuntoDiDomanda = risposta.domanda.substring(0, risposta.domanda.length - 1);
    return (
      <>
        {risposta.valore === repartoInfo.risposta1
          ? (
            <div>
              <Typography variant="body1">
                { noPuntoDiDomanda }
              </Typography>
            </div>
          ) : <></>}
      </>
    );
  }) : <></>;

  return (
    <Dialog fullScreen open={statusDialog}>
      <Nav />
      <div className={classes.margin}>
        <Typography variant="h4" align="center">
          Riassunto dati
        </Typography>
        <Typography variant="h6">
          Dati personali
          <hr />
        </Typography>
        <Typography className={classes.marginBottom} variant="subtitle1">
          Nome:
          {' '}
          {dataPatient.givenname}
          <br />
          Cognome:
          {' '}
          {dataPatient.familyname}
          <br />
          Città:
          {' '}
          {dataPatient.cityName}
          <br />
          Via:
          {' '}
          {dataPatient.streetName}
          <br />
          Numero:
          {' '}
          {dataPatient.streetNumber}
          <br />
          Telefono:
          {' '}
          {dataPatient.mobile}
          <br />
          {dataPatient.doctor
            && (
              <span>
                Medico inviante:
                {' '}
                {/* {dataPatient.nameDoctor} */}
                {getStringMedico(dataPatient.doctor)}
              </span>
            )}
          <br />
          {dataPatient.familyDoctor
            && (
            <span>
              Medico di famiglia:
              {' '}
              {getStringMedico(dataPatient.familyDoctor)}
            </span>
            )}
          <br />
          Cassa malati:
          {' '}
          {dataPatient.insuranceCoversName}
          <br />

        </Typography>
        <Typography variant="h6">
          Risposte formulario
          <hr />
        </Typography>

        <div>
          {listRisposte}
        </div>
        <div className={classes.button}>
          <ButtonSendConfirmSummary />
          <ButtonSendCancelSummary />
        </div>
      </div>
    </Dialog>
  );
};

export default SummaryDialog;
