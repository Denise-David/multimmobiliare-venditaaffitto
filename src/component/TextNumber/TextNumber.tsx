import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/patientDataSlice';

const TextNumber = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  const allAdress = dataEtichetta.data.patient.address.street;
  return (
    <TextField
      fullWidth
      style={{ marginLeft: 8 }}
      label="n°"
      value={allAdress.substring(allAdress.length - 2)}
    />
  );
};

export default TextNumber;
