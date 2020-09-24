import React from 'react';
import { useSelector } from 'react-redux';
import { Dialog, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import Nav from '../../Navbar/Navbar';
import useStyles from './style';
import ButtonSendConfirmSummary from './ButtonSendConfirmSummary/ButtonSendConfirmSummary';
import ButtonSendCancelSummary from './ButtonSendCancelSummary/ButtonSendCancelSummary';
import { objectToArray } from '../../../util';
import { oldPatientInfo, newPatientInfo } from '../../../store/slice/patientDataSlice';
import { dialogSummaryOpen } from '../../../store/slice/dialogSlice';
import { boolAnswers, risposte } from '../../../store/slice/patientFormSlice';
import PatientNoDoctorDataSummary from './PatientNoDoctorDataSummary/PatientNoDoctorDataSummary';
import PatientDoctorDataSummary from './PatientDoctorDataSummary/PatientDoctorDataSummary';

const SummaryDialog = () => {
  const statusDialog = useSelector(dialogSummaryOpen);
  const dataPatient = useSelector(newPatientInfo);
  const oldDataPatient = useSelector(oldPatientInfo);
  const dataAnswers = useSelector(risposte);
  const boolAns = useSelector(boolAnswers);
  const classes = useStyles();

  const answersArray = dataAnswers ? Object.keys(dataAnswers).map((key) => {
    const risposta = dataAnswers[key];
    return risposta;
  }) : [];

  const listRisposte = answersArray ? answersArray.map((risposta :any) => {
    const objDate = risposta.date ? risposta.date : [];
    const arrayDate = objectToArray(objDate);
    const indexPuntoDomanda = risposta.domanda ? risposta.domanda.indexOf('?') : -1;
    const noPuntoDiDomanda = indexPuntoDomanda !== -1
      ? risposta.domanda.substring(0, indexPuntoDomanda)
      : risposta.domanda;
    const listDate = arrayDate ? arrayDate.map((data:any) => (

      <div key={data.idRisposta}>
        <Typography variant="body1">
          {data.testoData}
          :
          {' '}
          {format(new Date(data.dataFormattata), 'dd.MM.yyyy')}
        </Typography>
      </div>

    )) : <></>;
    return (
      <div key={risposta.idDomanda}>
        {risposta.idRisposta
          ? (
            <>
              <Typography variant="subtitle1">
                <br />
                {' '}
                {risposta.domanda ? risposta.domanda : <></>}
                <br />

                {' '}
                {risposta.testoLibero ? risposta.testoLibero : <></>}
                {' '}
                {risposta.testoRisposta}
                {listDate || <></>}
              </Typography>
            </>
          )
          : (
            <>

              {risposta.valore === boolAns.risposta1
                ? (
                  <div>
                    <Typography variant="body1">
                      { noPuntoDiDomanda }
                      {' '}
                      {risposta.testoLibero ? risposta.testoLibero : <></>}
                    </Typography>
                  </div>
                ) : <></>}
            </>
          )}
      </div>
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
          <PatientNoDoctorDataSummary />
          <br />
          <PatientDoctorDataSummary />
          <br />
          {dataPatient.insuranceCoversName === oldDataPatient.insuranceCoversName
            ? (
              <>
                Cassa malati:
                {' '}
                { dataPatient.insuranceCoversName}
              </>
            )
            : (
              <span className={classes.color}>
                Cassa malati:
                {' '}
                <span className={classes.oldData}>
                  {oldDataPatient.insuranceCoversName}
                </span>
                {' '}
                Nuovo:
                {' '}
                {dataPatient.insuranceCoversName}
              </span>
            )}
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
