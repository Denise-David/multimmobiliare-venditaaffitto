import React from 'react';
import Button from '@material-ui/core/Button';

import { useSelector } from 'react-redux';
import useStyles from './style';
import { lastFormID } from '../../../../store/slice/patientFormPDFSlice';

const ButtonOpenPDFDataPatient = () => {
  const classes = useStyles();
  const lastIDForm = useSelector(lastFormID);

  const buttonFineDispatch = () => {
    // eslint-disable-next-line no-underscore-dangle
    window.open(`http://localhost:3000/pdfDatiPaziente?ID=${lastIDForm}`);
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
