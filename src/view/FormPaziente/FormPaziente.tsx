import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Snackbar } from '@material-ui/core';

import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
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
import { switchStateDisabled } from '../../store/slice/patientDataSlice';
import TextCityName from '../../component/TextCityName/TextCityName';
import { tipoForm, snackbarStatus, closeSnackbar } from '../../store/slice/patientFormSlice';
import BooleanLinePatientForm from '../../component/BooleanLinePatientForm/BooleanLinePatientForm';

const FormPaziente = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formType = useSelector(tipoForm);
  const statusSnackbar = useSelector(snackbarStatus);
  function Alert(props: AlertProps) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div>
      <Navbar />
      <Card className={classes.card}>
        <div className={classes.contentCard}>
          <Typography variant="h5" align="center"> Dati personali </Typography>
          <Typography variant="subtitle2" align="center"> Se già compilato, siete pregati di controllare e aggiornare i dati </Typography>
          <div className={classes.center}>
            <IconButton onClick={() => (dispatch(switchStateDisabled()))}>
              <CreateIcon color="secondary" fontSize="large" />
            </IconButton>
          </div>
          <div className={classes.inline}>
            <TextName />
            <TextLastname />
          </div>
          <div className={classes.inline}>
            <TextStreet />
            <TextNumber />
          </div>
          <TextCityName />
          <TextFamilyDoctor />
          <TextDoctor />
          <TextCassaMalati />
          <TextPhone />
        </div>
      </Card>
      <Container className={classes.container}>
        <Paper>
          <Typography className={classes.Titolo} variant="h5" align="center"> Si prega di rispondere alle seguenti domande </Typography>
        </Paper>
        { formType === 'a più risposte'
          ? (
            <List>
              <MultipleChoiceLinePatientForm />
            </List>
          ) : <BooleanLinePatientForm /> }
        <Snackbar
          open={statusSnackbar}
        >
          <Alert onClose={() => dispatch(closeSnackbar())} severity="warning">
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

  );
};
export default FormPaziente;
