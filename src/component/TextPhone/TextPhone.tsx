import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/patientDataSlice';

const TextLastname = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  return (
    <TextField fullWidth label="Numero di telefono" value={dataEtichetta.data.patient.address.mobile} />
  );
};

export default TextLastname;
