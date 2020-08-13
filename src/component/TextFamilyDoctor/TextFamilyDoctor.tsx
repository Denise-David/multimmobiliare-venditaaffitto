import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { newPatientInfo, changePatientValue, isDisable } from '../../store/slice/patientDataSlice';
import { getStringMedico } from '../../util';

const TextLastname = () => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(isDisable);
  const dispatch = useDispatch();
  return (
    <TextField
      fullWidth
      disabled
      label="Medico di famiglia"
      value={getStringMedico(dataEtichetta.familyDoctor)}

      onChange={(event) => {
        const { value } = event.target;
        const name = 'nameFamilyDoctor';
        dispatch(changePatientValue({ name, value }));
      }}
    />
  );
};

export default TextLastname;
