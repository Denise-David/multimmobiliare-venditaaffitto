import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import useStyles from './style';
import Nav from '../../component/Navbar/Nav';

const FormPaziente = () => {
  const classes = useStyles();
  return (

    <div>
      <Nav />
      <Card className={classes.card}>
        <div>
          <Typography variant="h5" align="center"> Dati personali </Typography>
          <div className={classes.center}>
            <PermIdentityIcon color="secondary" fontSize="large" />
          </div>
          <div className={classes.inline}>
            <TextField fullWidth label="Nome" />
            <TextField style={{ marginLeft: 8 }} fullWidth label="Cognome" />
          </div>
          <div className={classes.inline}>
            <TextField fullWidth label="Via" />
            <TextField style={{ marginLeft: 8 }} fullWidth label="n°" />
          </div>
          <TextField fullWidth label="Residenza" />
          <TextField fullWidth label="Medico d famiglia" />
          <TextField fullWidth label="Cassa malati" />
          <TextField fullWidth label="AVS" />
          <TextField fullWidth label="Numero di telefono" />
        </div>
      </Card>
    </div>
  );
};
export default FormPaziente;
