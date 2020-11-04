import { Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeSnackbarNoNomeCognome, snackbarNoNomeCognome,
} from '../../../../store/slice/snackbarSlice';

/**
 * alert che avvisa che non sono confermate le modifiche
 */
const SnackbarNoNomeCognome = ():ReactElement => {
  const snackbarOpen = useSelector(snackbarNoNomeCognome);
  const dispatch = useDispatch();

  return (

    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={snackbarOpen}
      autoHideDuration={4000}
      onClose={() => dispatch(closeSnackbarNoNomeCognome())}
    >
      <Alert severity="warning">
        <Typography variant="body1">
          Ci sono dei dati obbligatori vuoti nei dati personali
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNoNomeCognome;
