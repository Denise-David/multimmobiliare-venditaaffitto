import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { buttonSendCode, resetCode } from '../../store/slice/CodeSlice';

const ButtonSend = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickOpen = () => {
    dispatch(buttonSendCode());
    // dispatch(resetCode());
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

export default ButtonSend;
