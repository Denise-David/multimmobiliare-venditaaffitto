import React from 'react';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';
import useStyles from './style';
import { buttonReturnDevice } from '../../store/slice/patientFormSlice';

const ButtonReturnDevice = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  return (
    <>
      <Button
        size="large"
        className={classes.margin}
        variant="contained"
        color="primary"
        onClick={() => (dispatch(buttonReturnDevice()))}
      >
        Fine
      </Button>
    </>
  );
};

export default ButtonReturnDevice;
