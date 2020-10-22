import { Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSnackbarLabelPage, snackbarLabelOpen } from '../../../store/slice/snackbarSlice';

/**
 * Avviso che manca il campo dottore di famiglia
 */
const SnackbarLabel = ():ReactElement => {
  const statusSnackbarBarcode = useSelector(snackbarLabelOpen);
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={statusSnackbarBarcode}
      autoHideDuration={2000}
      onClose={() => dispatch(closeSnackbarLabelPage())}
    >
      <Alert severity="warning">
        <Typography variant="body1">
          Codice immesso errato
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarLabel;
