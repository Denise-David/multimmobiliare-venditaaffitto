import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/datiPazienteSlice';

const TextLastname = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  return (
    <TextField fullWidth label="Nome" value={dataEtichetta.data.patient.givenname} />
  );
};

export default TextLastname;
