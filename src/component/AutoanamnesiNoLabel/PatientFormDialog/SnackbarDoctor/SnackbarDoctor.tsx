import { Button, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openDialogSearch } from '../../../../store/slice/dialogSlice';
import { setCheckboxDoctor, setNoDoctor } from '../../../../store/slice/patientDataSlice';
import { setNomeCognomeDottoreScelto } from '../../../../store/slice/searchDoctorSlice';
import {
  closeSnackbarDoctor, closeSnackbarFamilyDoctor, snackbarDoctor,
} from '../../../../store/slice/snackbarSlice';

// Avviso che il dottore inviante non è stato messo
const SnackbarDoctor = ():ReactElement => {
  const snackbarOpen = useSelector(snackbarDoctor);
  const dispatch = useDispatch();

  return (

    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={snackbarOpen}
      onClose={() => dispatch(closeSnackbarFamilyDoctor())}
    >
      <Alert severity="warning">
        <Typography variant="body1">
          il campo medico inviante è vuoto, vuoi immettere nessun medico oppure
          immettere un nuovo medico?
        </Typography>
        <Button onClick={() => {
          dispatch(openDialogSearch());
          dispatch(setNomeCognomeDottoreScelto('doctor'));
          dispatch(closeSnackbarDoctor());
        }}
        >
          {' '}
          nuovo medico

        </Button>
        <Button onClick={() => {
          dispatch(setNoDoctor());
          dispatch(setCheckboxDoctor());
          dispatch(closeSnackbarDoctor());
        }}
        >
          nessun medico

        </Button>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarDoctor;
