import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './style';

interface Props {IDForm : string}

/**
 * bottone apri PDF dati paziente
 */
const ButtonOpenPDFDataPatient = ({ IDForm } :Props):ReactElement => {
  const classes = useStyles();

  const buttonFineDispatch = () => {
    // eslint-disable-next-line no-underscore-dangle
    window.open(`http://gecotest2.eoc.ch/autoanamnesi-client/pdfDatiPaziente?ID=${IDForm}`);
  };

  return (
    <>
      <Button
        className={classes.margin}
        variant="contained"
        color="primary"
        onClick={buttonFineDispatch}
      >
        PDF dati paziente
      </Button>
    </>
  );
};

export default ButtonOpenPDFDataPatient;
