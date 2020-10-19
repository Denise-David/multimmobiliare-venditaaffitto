/* eslint-disable react/no-unescaped-entities */
import { Button, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buttonCancelAddFormClicked } from '../../../../store/slice/addFormSlice';
import {
  closeSnackbarConfirmCancel, snackbarConfirmCancel,
} from '../../../../store/slice/snackbarSlice';

// Avviso che ogni domanda deve avere almeno 1 risposta
const SnackbarConfirmCancel = ():ReactElement => {
  const snackbarOpen = useSelector(snackbarConfirmCancel);
  const dispatch = useDispatch();
  return (
    <Snackbar
      open={snackbarOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={() => dispatch(closeSnackbarConfirmCancel())}
    >
      <Alert severity="warning">
        <Typography variant="body1">
          Siete sicuri di voler annullare? Tutte le modifiche fatte
          dall'ultimo salvataggio verranno annullate
          <Button onClick={() => {
            dispatch(buttonCancelAddFormClicked());
            dispatch(closeSnackbarConfirmCancel());
          }}
          >
            Si
          </Button>
          <Button onClick={() => dispatch(closeSnackbarConfirmCancel())}>
            No
          </Button>
        </Typography>

      </Alert>
    </Snackbar>
  );
};

export default SnackbarConfirmCancel;
