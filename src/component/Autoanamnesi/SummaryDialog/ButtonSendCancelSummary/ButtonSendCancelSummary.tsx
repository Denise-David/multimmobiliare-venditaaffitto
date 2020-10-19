import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { closeDialogSummary } from '../../../../store/slice/dialogSlice';

// Bottone di ritorno e modifica dei dati
const ButtonSendCancelSummary = ():ReactElement => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClickOpen = () => {
    dispatch(closeDialogSummary());
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        className={classes.margin}
        variant="contained"
        color="primary"
      >
        Annulla e correggi dati
      </Button>
    </>
  );
};

export default ButtonSendCancelSummary;
