import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './style';
import { buttonSendCancelClicked } from '../../store/slice/summaryDialogSlice';

const ButtonSendCancelSummary = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClickOpen = () => {
    dispatch(buttonSendCancelClicked());
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
