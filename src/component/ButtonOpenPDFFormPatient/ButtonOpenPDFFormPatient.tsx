import React from 'react';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';
import useStyles from './style';
import { ValueCode } from '../../store/slice/labelCodeSlice';
import { lastFormID } from '../../store/slice/patientFormPDFSlice';

const ButtonOpenPDFFormPatient = () => {
  const classes = useStyles();
  const lastIDForm = useSelector(lastFormID);
  const etichetta = useSelector(ValueCode);

  const buttonFineDispatch = () => {
    // eslint-disable-next-line no-underscore-dangle
    window.open(`http://localhost:3000/pdfRispostePaziente?etichetta=${etichetta}&ID=${lastIDForm}`);
  };

  return (
    <>
      <Button
        size="large"
        className={classes.margin}
        variant="contained"
        color="primary"
        onClick={buttonFineDispatch}
      >
        Apri PDF risposte paziente
      </Button>
    </>
  );
};

export default ButtonOpenPDFFormPatient;
