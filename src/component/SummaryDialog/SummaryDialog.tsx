import React from 'react';
import { useSelector } from 'react-redux';
import { Dialog, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import { dialogStatus, patientInfoData, answersPatientData } from '../../store/slice/summaryDialogSlice';
import Nav from '../Navbar/Navbar';
import useStyles from './style';
import { infoReparto } from '../../store/slice/patientFormPDFSlice';
import ButtonSendConfirmSummary from '../ButtonSendConfirmSummary/ButtonSendConfirmSummary';
import ButtonSendCancelSummary from '../ButtonSendCancelSummary copy/ButtonSendCancelSummary';
import { getStringMedico, objectToArray } from '../../util';
import { oldPatientInfo } from '../../store/slice/patientDataSlice';

const SummaryDialog = () => {
  const statusDialog = useSelector(dialogStatus);
  const dataPatient = useSelector(patientInfoData);
  const oldDataPatient = useSelector(oldPatientInfo);
  const dataAnswers = useSelector(answersPatientData);
  const repartoInfo = useSelector(infoReparto);
  const classes = useStyles();

  const answersArray = dataAnswers ? Object.keys(dataAnswers).map((key) => {
    const risposta = dataAnswers[key];
    return risposta;
  }) : [];

  const listRisposte = answersArray ? answersArray.map((risposta :any) => {
    const objDate = risposta.date ? risposta.date : [];
    const arrayDate = objectToArray(objDate);
    const noPuntoDiDomanda = risposta.domanda
      ? risposta.domanda.substring(0, risposta.domanda.length - 1)
      : <></>;
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
        <Typography variant="subtitle1">
          <br />
          {' '}
          {risposta.domanda ? risposta.domanda : <></>}
          <br />

          {' '}
          {risposta.testoRisposta}
          {listDate || <></>}

        </Typography>

        {risposta.valore === repartoInfo.risposta1
          ? (
            <div>
              <Typography variant="body1">
                { noPuntoDiDomanda }
              </Typography>
            </div>
          ) : <></>}
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
          <br />
          {dataPatient.doctor
            && (
            <>
              { getStringMedico(dataPatient.doctor)
              === getStringMedico(oldDataPatient.doctor)
                ? (
                  <>
                    <span>
                      Medico inviante:
                      {' '}
                      {getStringMedico(oldDataPatient.doctor)}
                    </span>

                  </>
                )
                : (
                  <span className={classes.color}>
                    Medico inviante:
                    {' '}
                    <span className={classes.oldData}>
                      {getStringMedico(oldDataPatient.doctor)}
                    </span>
                    {' '}
                    Nuovo:
                    {' '}
                    {getStringMedico(dataPatient.doctor)}
                  </span>
                )}
            </>
            )}

          <br />
          {dataPatient.familyDoctor
            && (
            <>
              { getStringMedico(dataPatient.familyDoctor)
              === getStringMedico(oldDataPatient.familyDoctor)
                ? (
                  <>
                    <span>
                      Medico di famiglia:
                      {' '}
                      {getStringMedico(oldDataPatient.familyDoctor)}
                    </span>

                  </>
                )
                : (
                  <span className={classes.color}>
                    Medico di famiglia:
                    {' '}
                    <span className={classes.oldData}>
                      {getStringMedico(oldDataPatient.familyDoctor)}
                    </span>
                    {' '}
                    Nuovo:
                    {' '}
                    {getStringMedico(dataPatient.familyDoctor)}
                  </span>
                )}
            </>
            )}
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
