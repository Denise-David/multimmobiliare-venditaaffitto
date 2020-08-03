import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/datiPazienteSlice';

const TextName = () => {
  const dataEtichetta = useSelector(allDataEtichetta);

  return (
    <TextField
      fullWidth
      style={{ marginLeft: 8 }}
      label="Cognome"
      value={dataEtichetta.data.patient.familyname}
    />

  );
};

export default TextName;
