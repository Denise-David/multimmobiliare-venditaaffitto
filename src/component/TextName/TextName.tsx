import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { newPatientInfo, changePatientValue, textFieldDisabled } from '../../store/slice/patientDataSlice';

const TextLastname = () => {
  const dispatch = useDispatch();
  const disabled = useSelector(textFieldDisabled);

  const dataEtichetta = useSelector(newPatientInfo);
  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="Nome"
      value={dataEtichetta.givenname}

      onChange={(event) => {
        const { value } = event.target;
        const name = 'givenname';
        dispatch(changePatientValue({ name, value }));
      }}
    />
  );
};

export default TextLastname;
