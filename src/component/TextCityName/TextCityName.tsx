import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/patientDataSlice';

const TextCityName = () => {
  const dataEtichetta = useSelector(allDataEtichetta);

  return (
    <TextField fullWidth label="Residenza" value={dataEtichetta.data.patient.address.cityName} />

  );
};

export default TextCityName;
