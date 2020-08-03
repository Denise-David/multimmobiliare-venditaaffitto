import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/datiPazienteSlice';

const TextCassaMalati = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  return (
    <TextField fullWidth label="Cassa malati" value={dataEtichetta.data.hcase.insuranceCovers[0].guarantName} />
  );
};

export default TextCassaMalati;
