import { Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  closeSnackbarNomeGruppo, snackbarNomeGruppo,
} from '../../../../store/slice/snackbarSlice';

/**
 * Avviso che il nome gruppo messo esiste già
 */
const SnackbarNomeGruppo = ():ReactElement => {
  const snackbarOpen = useSelector(snackbarNomeGruppo);
  const dispatch = useDispatch();

  return (

    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={snackbarOpen}
      autoHideDuration={4000}
      onClose={() => dispatch(closeSnackbarNomeGruppo())}
    >
      <Alert severity="warning">
        <Typography variant="body1">
          Questo gruppo esiste gia! Mettere un altro nome
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNomeGruppo;
