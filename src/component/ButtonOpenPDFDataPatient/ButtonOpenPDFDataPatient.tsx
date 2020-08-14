import React from 'react';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';
import useStyles from './style';
import { lastRisposta } from '../../store/slice/returnDeviceSlice';

const ButtonOpenPDFDataPatient = () => {
  const classes = useStyles();
  const lastRispostaPaziente = useSelector(lastRisposta);
  console.log('rrr', lastRispostaPaziente);

  const buttonFineDispatch = () => {
    // window.open(`http://localhost:3000/pdfDatiPaziente?ID=${lastRispostaPaziente._id}`);
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
        Apri PDF dati paziente
      </Button>
    </>
  );
};

export default ButtonOpenPDFDataPatient;
