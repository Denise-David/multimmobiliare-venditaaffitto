import React, { ReactElement } from 'react';
import {
  Grid, Typography, TextField,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  selectedReparto,
} from '../../../../store/slice/addFormSlice';
import useStyles from './style';

// Campo nome formulario all'aggiunta del formulario
const TextFieldRepartoAddForm = ():ReactElement => {
  const classes = useStyles();
  const repartoSelezionato = useSelector(selectedReparto);
  return (
    <>
      <Grid item xs={12} sm={2}>
        <Typography className={classes.background} variant="h5">Reparto:</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          variant="outlined"
          disabled
          value={repartoSelezionato.nomeReparto}
        />
      </Grid>
    </>
  );
};

export default TextFieldRepartoAddForm;
