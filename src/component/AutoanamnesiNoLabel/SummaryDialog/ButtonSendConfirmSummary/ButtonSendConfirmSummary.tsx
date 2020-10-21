import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';

import { closeDialogSummaryAndSave, openReturnDeviceDialog, closeDialogFormPatient } from '../../../../store/slice/dialogSlice';

// Bottone invio formulario e dati paziente
const ButtonSendConfirmSummary = ():ReactElement => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickOpen = () => {
    dispatch(closeDialogSummaryAndSave());
    dispatch(closeDialogFormPatient());
    dispatch(openReturnDeviceDialog());
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        className={classes.margin}
        variant="contained"
        color="primary"
      >
        Conferma dati
      </Button>
    </>
  );
};

export default ButtonSendConfirmSummary;
