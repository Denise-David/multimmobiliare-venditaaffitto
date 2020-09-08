import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { buttonSendCode } from '../../store/slice/labelCodeSlice';

const ButtonSendCode = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickOpen = () => {
    dispatch(buttonSendCode());
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        className={classes.margin}
        variant="contained"
        color="primary"
      >
        Invia
      </Button>
    </>
  );
};

export default ButtonSendCode;
