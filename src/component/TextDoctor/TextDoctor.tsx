import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { newPatientInfo, changePatientValue } from '../../store/slice/patientDataSlice';
import { getStringMedico } from '../../util';

const TextLastname = () => {
  const dataEtichetta = useSelector(newPatientInfo);

  const dispatch = useDispatch();
  return (
    <TextField
      fullWidth
      disabled
      label="Medico inviante"
      value={getStringMedico(dataEtichetta.doctor)}

      onChange={(event) => {
        const { value } = event.target;
        const name = 'doctor';
        dispatch(changePatientValue({ name, value }));
      }}
    />
  );
};

export default TextLastname;
