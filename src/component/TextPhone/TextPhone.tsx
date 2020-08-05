import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { allDataEtichetta, changePatientValue, isDisable } from '../../store/slice/patientDataSlice';

const TextLastname = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  const disabled = useSelector(isDisable);
  const dispatch = useDispatch();
  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="Numero di telefono"

      value={dataEtichetta.mobile}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'mobile';
        dispatch(changePatientValue({ name, value }));
      }}
    />
  );
};

export default TextLastname;
