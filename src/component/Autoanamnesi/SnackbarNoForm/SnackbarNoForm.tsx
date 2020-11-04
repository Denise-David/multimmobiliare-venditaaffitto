import { Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSnackbarNoForm, snackbarNoForm } from '../../../store/slice/snackbarSlice';

/**
 * Avviso che manca il campo dottore di famiglia
 */
const SnackbarNoForm = ():ReactElement => {
  const statusSnackbarBarcode = useSelector(snackbarNoForm);
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={statusSnackbarBarcode}
      autoHideDuration={2000}
      onClose={() => dispatch(closeSnackbarNoForm())}
    >
      <Alert severity="warning">
        <Typography variant="body1">
          Nessun formulario selezionato
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNoForm;
