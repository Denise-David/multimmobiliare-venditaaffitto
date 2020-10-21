import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { buttonSendCode } from '../../../store/slice/labelCodeSlice';

// Bottone invia etichetta
const ButtonSendCode = ():ReactElement => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <Button
        onClick={() => dispatch(buttonSendCode())}
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
