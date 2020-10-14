import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';
import useStyles from './style';
import {
  resetDomandeReparto, resetRisposte, resetBooleanAnswers, resetNoFacoltative,
} from '../../../../store/slice/patientFormSlice';
import { resetAllData, setDisabledTrue } from '../../../../store/slice/patientDataSlice';
import { resetCode } from '../../../../store/slice/labelCodeSlice';
import {
  resetSelectedForm, resetRepartoGUID, resetFormList, resetReparto,
} from '../../../../store/slice/homePageLabelSlice';
import { closeReturnDeviceDialog } from '../../../../store/slice/dialogSlice';

const ButtonReturnDevice = ():ReactElement => {
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
    dispatch(resetNoFacoltative());
    dispatch(resetReparto());
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
