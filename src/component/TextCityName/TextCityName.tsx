import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { allDataEtichetta, changePatientValue, isDisable } from '../../store/slice/patientDataSlice';

const TextCityName = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  const disabled = useSelector(isDisable);
  const dispatch = useDispatch();

  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="Residenza"
      value={dataEtichetta.cityName}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'cityName';
        dispatch(changePatientValue({ name, value }));
      }}
    />

  );
};

export default TextCityName;
