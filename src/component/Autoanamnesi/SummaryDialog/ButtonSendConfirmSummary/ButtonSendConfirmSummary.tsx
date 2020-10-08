import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';

import { closeDialogSummaryAndSave, openReturnDeviceDialog, closeDialogFormPatient } from '../../../../store/slice/dialogSlice';

const ButtonSendConfirmSummary = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickOpen = () => {
    console.log('PASSA?');
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
