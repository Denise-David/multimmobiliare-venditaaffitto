import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch, useSelector } from 'react-redux';
import {
  Checkbox, FormControlLabel, Grid, IconButton, Snackbar,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './style';
import Navbar from '../../component/Navbar/Navbar';
import TextName from '../../component/TextName/TextName';
import TextLastname from '../../component/TextLastname/TextLastname';
import TextStreet from '../../component/TextStreet/TextStreet';
import TextNumber from '../../component/TextNumber/TextNumber';
import TextDoctor from '../../component/TextDoctor/TextDoctor';
import TextCassaMalati from '../../component/TextHealthInsurance/TextHealthInsurance';
import TextPhone from '../../component/TextPhone/TextPhone';
import MultipleChoiceLinePatientForm from '../../component/MultipleChoiceLinePatientForm/MultipleChoiceLinePatientForm';
import TextFamilyDoctor from '../../component/TextFamilyDoctor/TextFamilyDoctor';
import ButtonSendFormPaziente from '../../component/ButtonSendPatientForm/ButtonSendPatientForm';
import {
  checkboxDoctor,
  checkboxFamilyDoctro,
  deleteDoctor, deleteFamilyDoctor, fieldDoctorEmpty, fieldFamilyDoctorEmpty, obligatoryFieldEmpty,
  resetNewPatientInfo, setCheckboxDoctor, setCheckboxFamilyDoctor,
  setNoDoctor, setNoFamilyDoctor, switchStateDisabled, textFieldDisabled,
  unsetCancelClicked,
  unsetCheckboxDoctor, unsetCheckboxFamilyDoctor,
} from '../../store/slice/patientDataSlice';
import TextCityName from '../../component/TextCityName/TextCityName';
import TextCAP from '../../component/TextCAP/TextCityName';
import SearchDoctorDialog from '../../component/SearchDoctorDialog/SearchDoctorDialog';
import { setNomeCognomeDottoreScelto } from '../../store/slice/searchDoctorSlice';
import { openDialogSearch } from '../../store/slice/dialogSlice';
import {
  snackbarPatientAnswersOpen, closeSnackbarPatientAnswers,
  closeSnackbarFieldEmpty, openSnackbarFieldEmpty, snackbarEmptyField,
  openSnackbarFamilyDoctor, openSnackbarDoctor,
} from '../../store/slice/snackbarSlice';
import SnackbarFamilyDoctor from '../../component/SnackbarFamilyDoctor/SnackbarFamilyDoctor';
import SnackbarDoctor from '../../component/SnackbarDoctor/SnackbarDoctor';
import SnackbarDatiPersonali from '../../component/SnackbarDatiPersonali/SnackbarDatiPersonali';

const FormPaziente = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const statusSnackbar = useSelector(snackbarPatientAnswersOpen);
  const modifyClicked = useSelector(textFieldDisabled);
  const obbFieldempty = useSelector(obligatoryFieldEmpty);
  const snackbarEmpty = useSelector(snackbarEmptyField);
  const cbFamilyDoctor = useSelector(checkboxFamilyDoctro);
  const cbDoctor = useSelector(checkboxDoctor);
  const familyDoctorEmpty = useSelector(fieldFamilyDoctorEmpty);
  const doctorEmpty = useSelector(fieldDoctorEmpty);

  function Alert(props: AlertProps) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
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
              {modifyClicked
                ? (
                  <IconButton onClick={() => {
                    dispatch(unsetCancelClicked());
                    dispatch(switchStateDisabled());
                  }}
                  >
                    <CreateIcon color="primary" fontSize="large" />
                  </IconButton>
                )
                : (
                  <>
                    <IconButton onClick={() => {
                      if (!obbFieldempty && !familyDoctorEmpty && !doctorEmpty) {
                        dispatch(switchStateDisabled());
                      } else if (obbFieldempty) {
                        dispatch(openSnackbarFieldEmpty());
                      } else if (familyDoctorEmpty) {
                        dispatch(openSnackbarFamilyDoctor());
                      } else if (doctorEmpty) {
                        dispatch(openSnackbarDoctor());
                      }
                    }}
                    >
                      <CheckCircleOutlineIcon color="primary" fontSize="large" />
                    </IconButton>
                    <IconButton onClick={() => {
                      dispatch(switchStateDisabled());
                      dispatch(resetNewPatientInfo());
                      dispatch(unsetCheckboxDoctor());
                      dispatch(unsetCheckboxFamilyDoctor());
                    }}
                    >
                      <HighlightOffIcon color="primary" fontSize="large" />
                    </IconButton>
                  </>
                )}
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
          <List>
            <MultipleChoiceLinePatientForm />
          </List>

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

  );
};
export default FormPaziente;
