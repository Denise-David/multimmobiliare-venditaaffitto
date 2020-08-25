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
  const dispatch = useDispatch();
  const classes = useStyles();
  const repartoSelezionato = useSelector(selectedReparto);
  const tipoForm = useSelector(formType);
  return (
    <>

      <Grid item xs={12} sm={2}>
        <Typography className={classes.background} variant="h5">Tipo formulario:</Typography>
      </Grid>
      <Grid item xs={12} sm={2}>
        <RadioGroup
          row
          onChange={(event) => {
            const { value } = event.target;
            dispatch(getFormType(value));
            if (Object.keys(repartoSelezionato).length !== 0) {
              dispatch(setConfirmEnabled());
            }
          }}
        >
          {' '}
          <FormControlLabel value="a più risposte" control={<Radio />} label="A più risposte" />
          <FormControlLabel value="a due risposte" control={<Radio />} label="A due risposte" />
        </RadioGroup>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography className={classes.background} variant="h5">Reparto:</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          onChange={
                  () => {
                    if (tipoForm !== '') {
                      dispatch(setConfirmEnabled());
                    }
                  }
                }

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
