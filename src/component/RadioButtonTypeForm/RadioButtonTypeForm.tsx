import React from 'react';
import {
  Grid, Typography, RadioGroup, FormControlLabel, Radio, TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFormType, setConfirmEnabled, selectedReparto, formType,
} from '../../store/slice/addFormSlice';
import useStyles from './style';

const RadioButtonTypeForm = () => {
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

export default RadioButtonTypeForm;
