import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { allDataEtichetta, changePatientValue, isDisable } from '../../store/slice/patientDataSlice';

const TextCassaMalati = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  const disabled = useSelector(isDisable);
  const dispatch = useDispatch();
  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="Cassa malati"
      value={dataEtichetta.insuranceCoversName}

      onChange={(event) => {
        const { value } = event.target;
        const name = 'insuranceCoversName';
        dispatch(changePatientValue({ name, value }));
      }}
    />
  );
};

export default TextCassaMalati;
