import { Button, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openDialogSearch } from '../../../../store/slice/dialogSlice';
import { setCheckboxFamilyDoctor, setNoFamilyDoctor } from '../../../../store/slice/patientDataSlice';
import { setNomeCognomeDottoreScelto } from '../../../../store/slice/searchDoctorSlice';
import { closeSnackbarFamilyDoctor, snackbarFamilyDoctor } from '../../../../store/slice/snackbarSlice';

/**
 * Avviso che manca il campo dottore di famiglia
 */
const SnackbarFamilyDoctor = ():ReactElement => {
  const snackbarOpen = useSelector(snackbarFamilyDoctor);
  const dispatch = useDispatch();

  return (

    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={snackbarOpen}
      onClose={() => dispatch(closeSnackbarFamilyDoctor())}
    >
      <Alert severity="warning">
        <Typography variant="body1">
          il campo medico di famiglia è vuoto, vuoi immettere nessun medico oppure
          immettere un nuovo medico?
        </Typography>
        <Button onClick={() => {
          dispatch(openDialogSearch());
          dispatch(setNomeCognomeDottoreScelto('familyDoctor'));
          dispatch(closeSnackbarFamilyDoctor());
        }}
        >
          {' '}
          nuovo medico

        </Button>
        <Button onClick={() => {
          dispatch(setNoFamilyDoctor());
          dispatch(setCheckboxFamilyDoctor());
          dispatch(closeSnackbarFamilyDoctor());
        }}
        >
          nessun medico

        </Button>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarFamilyDoctor;
