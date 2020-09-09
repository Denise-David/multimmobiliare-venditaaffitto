import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { newPatientInfo, changePatientValue, textFieldDisabled } from '../../store/slice/patientDataSlice';

const TextCAP = () => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();

  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="CAP"
      value={dataEtichetta.zip}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'zip';
        dispatch(changePatientValue({ name, value }));
      }}
    />

  );
};

export default TextCAP;
