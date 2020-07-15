import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import useStyles from './style';

const FormPaziente = () => {
  const classes = useStyles();
  return (

    <div>
      <div className={classes.NavColor} />
      <Card className={classes.card}>
        <div>
          <Typography variant="h5" align="center"> Dati personali </Typography>
          <TextField fullWidth label="Nome" />
          <TextField fullWidth label="Cognome" />
          <TextField fullWidth label="Via e n°" />
          <TextField fullWidth label="Città di residenza" />
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
