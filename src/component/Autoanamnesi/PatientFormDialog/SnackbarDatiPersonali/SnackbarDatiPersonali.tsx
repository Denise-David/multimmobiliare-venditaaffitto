import { Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  closeSnackbarDatiPersonali, snackbarDatiPersonali,
} from '../../../../store/slice/snackbarSlice';

// Avviso che non sono state confermate le modifiche ai propri dati
const SnackbarDatiPersonali = ():ReactElement => {
  const snackbarOpen = useSelector(snackbarDatiPersonali);
  const dispatch = useDispatch();

  return (

    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={snackbarOpen}
      autoHideDuration={4000}
      onClose={() => dispatch(closeSnackbarDatiPersonali())}
    >
      <Alert severity="warning">
        <Typography variant="body1">
          I cambiamenti dei dati personali devono essere confermati!
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarDatiPersonali;
