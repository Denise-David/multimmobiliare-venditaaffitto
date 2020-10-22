import React, { ReactElement } from 'react';
import {
  Grid, Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import {
  selectedReparto,
} from '../../../../store/slice/addFormSlice';

// Campo nome formulario all'aggiunta del formulario
const TextFieldRepartoAddForm = ():ReactElement => {
  const repartoSelezionato = useSelector(selectedReparto);
  return (
    <>
      <Grid item xs={12} sm={2}>
        <Typography variant="h5">Reparto:</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">
          {repartoSelezionato.nomeReparto}
        </Typography>
      </Grid>
    </>
  );
};

export default TextFieldRepartoAddForm;
