import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import {
  Checkbox, FormControlLabel, Grid, IconButton, Snackbar,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { dialogFormPatientOpen, openDialogSearch } from '../../../store/slice/dialogSlice';
import useStyles from './style';
import Navbar from '../../Navbar/Navbar';
import TextName from './TextName/TextName';
import TextLastname from './TextLastname/TextLastname';
import TextStreet from './TextStreet/TextStreet';
import TextNumber from './TextNumber/TextNumber';
import TextDoctor from './TextDoctor/TextDoctor';
import TextCassaMalati from './TextHealthInsurance/TextHealthInsurance';
import TextPhone from './TextPhone/TextPhone';
import MultipleChoiceLinePatientForm from './LinePatientForm/LinePatientForm';
import TextFamilyDoctor from './TextFamilyDoctor/TextFamilyDoctor';
import ButtonSendFormPaziente from './ButtonSendPatientForm/ButtonSendPatientForm';
import {
  checkboxDoctor,
  checkboxFamilyDoctro,
  deleteDoctor, deleteFamilyDoctor,
  setCheckboxDoctor, setCheckboxFamilyDoctor,
  setNoDoctor, setNoFamilyDoctor, textFieldDisabled,
  unsetCheckboxDoctor, unsetCheckboxFamilyDoctor,
} from '../../../store/slice/patientDataSlice';
import TextCityName from './TextCityName/TextCityName';
import TextCAP from './TextCAP/TextCityName';
import SearchDoctorDialog from './SearchDoctorDialog/SearchDoctorDialog';
import { setNomeCognomeDottoreScelto } from '../../../store/slice/searchDoctorSlice';
import {
  snackbarPatientAnswersOpen, closeSnackbarPatientAnswers,
  closeSnackbarFieldEmpty, snackbarEmptyField,
} from '../../../store/slice/snackbarSlice';
import SnackbarFamilyDoctor from './SnackbarFamilyDoctor/SnackbarFamilyDoctor';
import SnackbarDoctor from './SnackbarDoctor/SnackbarDoctor';
import SnackbarDatiPersonali from './SnackbarDatiPersonali/SnackbarDatiPersonali';
import ButtonPatientDataForm from './ButtonPatientDataForm/ButtonPatientDataForm';

const PatientFormDialog = () => {
  const open = useSelector(dialogFormPatientOpen);
  const classes = useStyles();
  const dispatch = useDispatch();
  const statusSnackbar = useSelector(snackbarPatientAnswersOpen);
  const modifyClicked = useSelector(textFieldDisabled);
  const snackbarEmpty = useSelector(snackbarEmptyField);
  const cbFamilyDoctor = useSelector(checkboxFamilyDoctro);
  const cbDoctor = useSelector(checkboxDoctor);

  function Alert(props: AlertProps) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <Dialog fullScreen open={open}>
      <AppBar />
      <div>
        <Navbar />
        <div className={classes.bordi}>
          <Card className={classes.card}>
            <div className={classes.contentCard}>
              <Typography variant="h5" align="center"> Dati personali </Typography>
              <Typography variant="subtitle2" align="center"> Se già compilato, siete pregati di controllare e aggiornare i dati </Typography>
              <SnackbarFamilyDoctor />
              <SnackbarDoctor />
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackbarEmpty}
                autoHideDuration={4000}
                onClose={() => dispatch(closeSnackbarFieldEmpty())}
              >
                <Alert severity="warning">
                  <Typography variant="body1">
                    Ci sono dei campi obbligatori vuoti!
                  </Typography>
                </Alert>
              </Snackbar>
              <div className={classes.center}>

                <ButtonPatientDataForm />

              </div>
              <div className={classes.inline}>
                <TextName />
                <TextLastname />
              </div>
              <div className={classes.inline}>
                <TextStreet />
                <TextNumber />
              </div>

              <TextCAP />
              <TextCityName />

              <TextCassaMalati />
              <TextPhone />
              <div className={classes.inline}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >

                  {!modifyClicked
                    ? (
                      <>
                        {' '}
                        <Grid item xs={12} sm={6}>
                          <TextFamilyDoctor />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <IconButton color="primary">
                            <CreateIcon onClick={() => {
                              dispatch(openDialogSearch());
                              dispatch(setNomeCognomeDottoreScelto('familyDoctor'));
                            }}
                            />
                          </IconButton>
                          <FormControlLabel
                            label="Nessun medico di famiglia"
                            control={(
                              <Checkbox
                                checked={cbFamilyDoctor}
                                onClick={() => {
                                  dispatch(deleteFamilyDoctor());
                                  dispatch(setNoFamilyDoctor());
                                  if (cbFamilyDoctor === true) {
                                    dispatch(unsetCheckboxFamilyDoctor());
                                    dispatch(deleteFamilyDoctor());
                                  } else {
                                    dispatch(setCheckboxFamilyDoctor());
                                  }
                                }}
                              />

                    )}
                          />
                        </Grid>
                      </>
                    ) : (
                      <>
                        {' '}
                        <Grid item xs={12} sm={12}>
                          <TextFamilyDoctor />
                          {' '}
                        </Grid>
                      </>
                    )}
                </Grid>
              </div>
              <div className={classes.inline}>

                {!modifyClicked
                  ? (
                    <>
                      {' '}
                      <Grid item xs={12} sm={6}>
                        <TextDoctor />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <IconButton color="primary">
                          <CreateIcon onClick={() => {
                            dispatch(openDialogSearch());
                            dispatch(setNomeCognomeDottoreScelto('doctor'));
                          }}
                          />
                        </IconButton>
                        <FormControlLabel
                          label="Nessun medico inviante"
                          control={(
                            <Checkbox
                              checked={cbDoctor}
                              onClick={() => {
                                dispatch(deleteDoctor());
                                dispatch(setNoDoctor());
                                if (cbDoctor === true) {
                                  dispatch(unsetCheckboxDoctor());
                                  dispatch(deleteDoctor());
                                } else {
                                  dispatch(setCheckboxDoctor());
                                }
                              }}
                            />
                    )}
                        />
                      </Grid>
                    </>
                  ) : (
                    <>
                      {' '}
                      <Grid item xs={12} sm={12}><TextDoctor /></Grid>
                    </>
                  )}
              </div>
            </div>
          </Card>
          <SearchDoctorDialog />
          <Container className={classes.container}>
            <Paper>
              <Typography className={classes.Titolo} variant="h5" align="center"> Si prega di rispondere alle seguenti domande </Typography>
            </Paper>

            <MultipleChoiceLinePatientForm />
            <div className={classes.margini}>
              <Typography variant="inherit">
                *domanda obbligatoria
              </Typography>
            </div>
            <SnackbarDatiPersonali />
            <Snackbar
              open={statusSnackbar}
              autoHideDuration={4000}
              onClose={() => dispatch(closeSnackbarPatientAnswers())}
            >
              <Alert severity="warning">
                <Typography variant="body1">
                  Non ha risposto a tutte le domande!
                </Typography>
              </Alert>
            </Snackbar>
            <div className={classes.centerButton}>
              <ButtonSendFormPaziente />
            </div>
          </Container>
        </div>
      </div>

    </Dialog>
  );
};

export default PatientFormDialog;
