import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { buttonSendForm } from '../../../../store/slice/patientFormSlice';

/**
 * Bottone invia formulario
 */
const ButtonSendFormPaziente = ():ReactElement => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickOpen = () => {
    dispatch(buttonSendForm());
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

export default ButtonSendFormPaziente;
