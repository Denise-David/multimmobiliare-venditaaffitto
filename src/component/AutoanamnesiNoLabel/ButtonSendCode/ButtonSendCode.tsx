import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { openForm } from '../../../store/slice/homepageNoLabelSlice';

const ButtonSendCode = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickOpen = () => {
    dispatch(openForm());
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
