import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { buttonSendConfirmClicked } from '../../store/slice/summaryDialogSlice';
import { closeDialogForm } from '../../store/slice/patientFormSlice';
import { openReturnDeviceDialog } from '../../store/slice/returnDeviceSlice';

const ButtonSendConfirmSummary = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickOpen = () => {
    dispatch(buttonSendConfirmClicked());
    dispatch(closeDialogForm());
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
