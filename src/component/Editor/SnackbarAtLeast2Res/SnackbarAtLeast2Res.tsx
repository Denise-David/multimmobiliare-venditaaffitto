import { Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSnackbarAtLeast2Res, snackbarAtLeast2ResOpen } from '../../../store/slice/snackbarSlice';

const SnackbarAtLeast2Res = () => {
  const snackbarOpen = useSelector(snackbarAtLeast2ResOpen);
  const dispatch = useDispatch();
  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={2000}
      onClose={() => dispatch(closeSnackbarAtLeast2Res())}
    >
      <Alert severity="warning">
        <Typography variant="body1">
          Impossibile salvare, ogni domanda deve avere ALMENO
          1 risposta.
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAtLeast2Res;
