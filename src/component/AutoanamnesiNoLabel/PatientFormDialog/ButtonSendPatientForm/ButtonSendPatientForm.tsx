import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import { buttonSendForm } from '../../../../store/slice/patientFormSlice';
import { openSnackbarFieldEmpty } from '../../../../store/slice/snackbarSlice';
import { obligatoryFieldEmpty } from '../../../../store/slice/patientDataSlice';

const ButtonSendFormPaziente = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const obbFieldempty = useSelector(obligatoryFieldEmpty);

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
