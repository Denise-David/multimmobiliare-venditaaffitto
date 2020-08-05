import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import useStyles from './style';
import Nav from '../../component/Navbar/Navbar';
import TextName from '../../component/TextName/TextName';
import TextLastname from '../../component/TextLastname/TextLastname';
import TextStreet from '../../component/TextStreet/TextStreet';
import TextNumber from '../../component/TextNumber/TextNumber';
import TextDoctor from '../../component/TextDoctor/TextDoctor';
import TextCassaMalati from '../../component/TextHealthInsurance/TextHealthInsurance';
import TextPhone from '../../component/TextPhone/TextPhone';
import DropDownList from '../../component/MultipleChoiceLinePatientForm/MultipleChoiceLinePatientForm';
import TextFamilyDoctor from '../../component/TextFamilyDoctor/TextFamilyDoctor';
import ButtonSendFormPaziente from '../../component/ButtonSendPatientForm/ButtonSendPatientForm';
import { switchStateDisabled } from '../../store/slice/patientDataSlice';
import TextCityName from '../../component/TextCityName/TextCityName';

const FormPaziente = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
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
        <List>
          <DropDownList />
        </List>
        <div className={classes.centerButton}>
          <ButtonSendFormPaziente />
        </div>
      </Container>
    </div>

  );
};
export default FormPaziente;
