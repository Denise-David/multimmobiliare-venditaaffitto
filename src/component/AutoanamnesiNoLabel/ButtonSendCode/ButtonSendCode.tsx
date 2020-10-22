import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { openForm } from '../../../store/slice/homepageNoLabelSlice';

/**
 * Bottone per inviare formulario scelto
 */
const ButtonSendCode = ():ReactElement => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <Button
        onClick={() => dispatch(openForm())}
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
