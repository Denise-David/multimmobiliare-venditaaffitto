import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import Nav from '../../component/Navbar/Nav';
import TextName from '../../component/TextName/TextName';
import TextLastname from '../../component/TextLastname/TextLastname';
import TextStreet from '../../component/TextStreet/TextStreet';
import TextNumber from '../../component/TextNumber/TextNumber';
import TextResidence from '../../component/TextResidence/TextResidence';
import TextDoctor from '../../component/TextDoctor/TextDoctor';
import TextCassaMalati from '../../component/TextCassaMalati/TextCassaMalati';
import TextPhone from '../../component/TextPhone/TextPhone';
import ButtonSend from '../../component/ButtonSend/ButtonSend';
import DropDownList from '../../component/RisposteMultiple/RisposteMultiple';
import BooleanAnswer from '../../component/BooleanAnswer/BooleanAnswer';

const FormPaziente = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);

  return (
    <div>
      <Nav />
      <Card className={classes.card}>
        <div className={classes.contentCard}>
          <Typography variant="h5" align="center"> Dati personali </Typography>
          <Typography variant="subtitle2" align="center"> Se già compilato, siete pregati di controllare e aggiornare i dati </Typography>
          <div className={classes.center}>
            <PermIdentityIcon color="secondary" fontSize="large" />
          </div>
          <div className={classes.inline}>
            <TextName />
            <TextLastname />
          </div>
          <div className={classes.inline}>
            <TextStreet />
            <TextNumber />
          </div>
          <TextResidence />
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
          <ListItem divider>
            <Typography variant="subtitle1" />
            <BooleanAnswer />
          </ListItem>
          <ListItem divider>
            <Typography variant="subtitle1">
              Ha presentato febbre persistente?
            </Typography>
            <BooleanAnswer />
          </ListItem>
        </List>
        <div className={classes.centerButton}>
          <ButtonSend />
        </div>
      </Container>
    </div>

  );
};
export default FormPaziente;
