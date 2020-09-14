import React from 'react';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';
import useStyles from './style';
import { resetDomandeReparto, resetRisposte, resetBooleanAnswers } from '../../store/slice/patientFormSlice';
import { resetAllData, setDisabledTrue } from '../../store/slice/patientDataSlice';
import { resetCode } from '../../store/slice/labelCodeSlice';
import { resetSelectedForm, resetRepartoGUID, resetFormList } from '../../store/slice/homePageLabelSlice';
import { closeReturnDeviceDialog } from '../../store/slice/dialogSlice';

const ButtonReturnDevice = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const buttonFineDispatch = () => {
    dispatch(closeReturnDeviceDialog());
    dispatch(resetDomandeReparto());
    dispatch(resetRisposte());
    dispatch(resetAllData());
    dispatch(resetBooleanAnswers());
    dispatch(setDisabledTrue());
    dispatch(resetCode());
    dispatch(resetSelectedForm());
    dispatch(resetRepartoGUID());
    dispatch(resetFormList());
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
