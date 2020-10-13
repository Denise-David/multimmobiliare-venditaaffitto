import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked,
  setFieldFamilyDoctorEmpty,
  unsetFieldFamilyDoctorEmpty,
} from '../../../../store/slice/patientDataSlice';
import { getStringMedico } from '../../../../util';

const TextLastname = () => {
  const dataEtichetta = useSelector(newPatientInfo);
  const dispatch = useDispatch();
  const disabled = useSelector(textFieldDisabled);
  const [error, setError] = useState(false);
  const cancClicked = useSelector(cancelClicked);

  if (disabled === false) {
    if (dataEtichetta) {
      if (dataEtichetta.familyDoctor === null && error === false) {
        setError(!error);
        dispatch(setFieldFamilyDoctorEmpty());
      } else if (dataEtichetta.familyDoctor !== null && error === true) {
        setError(!error);
        dispatch(unsetFieldFamilyDoctorEmpty());
      }
    }
  } else if (cancClicked === true && error === true) {
    setError(!error);
    dispatch(unsetFieldFamilyDoctorEmpty());
  }
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

export default TextLastname;
