import React, { ReactElement, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked,
  setFieldFamilyDoctorEmpty,
  unsetFieldFamilyDoctorEmpty,
} from '../../../../store/slice/patientDataSlice';
import { getStringMedico } from '../../../../util';

/**
 * Campo medico di famiglia
 */
const TextFamilyDoctor = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const dispatch = useDispatch();
  const disabled = useSelector(textFieldDisabled);
  const [error, setError] = useState(false);
  const cancClicked = useSelector(cancelClicked);

  if (disabled === false) {
    if (dataEtichetta) {
      if (dataEtichetta.familyDoctor === null && error === false) {
        setError(!error);
      } else if (dataEtichetta.familyDoctor !== null && error === true) {
        setError(!error);
      }
    }
  } else if (cancClicked === true && error === true) {
    setError(!error);
  }

  if (error === true) {
    dispatch(setFieldFamilyDoctorEmpty());
  } else { dispatch(unsetFieldFamilyDoctorEmpty()); }

  return (
    <TextField
      fullWidth
      disabled
      error={error}
      label="Medico di famiglia"
      value={getStringMedico(dataEtichetta ? dataEtichetta.familyDoctor : {})}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'nameFamilyDoctor';
        dispatch(changePatientValue({ name, value }));
      }}
    />
  );
};

export default TextFamilyDoctor;
