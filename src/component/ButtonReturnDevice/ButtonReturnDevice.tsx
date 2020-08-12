import React from 'react';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';
import useStyles from './style';
import { closeReturnDeviceDialog } from '../../store/slice/returnDeviceSlice';
import { resetDomandeReparto, resetRisposte, resetBooleanAnswers } from '../../store/slice/patientFormSlice';
import { resetAllData } from '../../store/slice/patientDataSlice';

const ButtonReturnDevice = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const buttonFineDispatch = () => {
    dispatch(closeReturnDeviceDialog());
    dispatch(resetDomandeReparto());
    dispatch(resetRisposte());
    dispatch(resetAllData());
    dispatch(resetBooleanAnswers());
  };

  return (
    <>
      <Button
        size="large"
        className={classes.margin}
        variant="contained"
        color="primary"
        onClick={buttonFineDispatch}
      >
        Fine
      </Button>
    </>
  );
};

export default ButtonReturnDevice;
