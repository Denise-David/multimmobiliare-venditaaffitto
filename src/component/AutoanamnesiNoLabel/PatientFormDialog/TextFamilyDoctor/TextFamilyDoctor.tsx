import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue,
} from '../../../../store/slice/patientDataSlice';
import { getStringMedico } from '../../../../util';

/**
 * Campo medico di famiglia
 */
const TextFamilyDoctor = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
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

export default TextFamilyDoctor;
