import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/patientDataSlice';

const TextLastname = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  const allAdress = dataEtichetta.data.patient.address.street;
  return (
    <TextField fullWidth label="Via" value={allAdress.substring(0, allAdress.length - 2)} />
  );
};

export default TextLastname;
