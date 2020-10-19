import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './style';

interface Props {etichetta: string | undefined, IDForm : string}

// Bottone apri PDF risposte formulario paziente
const ButtonOpenPDFFormPatient = ({ etichetta, IDForm }: Props):ReactElement => {
  const classes = useStyles();

  const buttonFineDispatch = () => {
    // eslint-disable-next-line no-underscore-dangle
    window.open(`http://gecotest2.eoc.ch/autoanamnesi-client/pdfRispostePaziente?etichetta=${etichetta}&ID=${IDForm}`);
  };

  return (
    <>
      <Button
        className={classes.margin}
        variant="contained"
        color="primary"
        onClick={buttonFineDispatch}
      >
        PDF risposte paziente
      </Button>
    </>
  );
};

export default ButtonOpenPDFFormPatient;
