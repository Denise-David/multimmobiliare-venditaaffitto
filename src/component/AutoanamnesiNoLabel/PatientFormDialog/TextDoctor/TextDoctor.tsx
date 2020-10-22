import React, { ReactElement, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked, setFieldFDoctorEmpty, unsetFieldDoctorEmpty,
} from '../../../../store/slice/patientDataSlice';
import { getStringMedico } from '../../../../util';

// Campo dottore inviante
const TextDoctor = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const cancClicked = useSelector(cancelClicked);

  if (disabled === false) {
    if (dataEtichetta.doctor === null && error === false) {
      setError(!error);
      dispatch(setFieldFDoctorEmpty());
    } else if (dataEtichetta.doctor !== null && error === true) {
      setError(!error);
      dispatch(unsetFieldDoctorEmpty());
    }
  } else if (cancClicked === true && error === true) {
    setError(!error);
    dispatch(unsetFieldDoctorEmpty());
  }

  return (
    <TextField
      fullWidth
      disabled
      error={error}
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

export default TextDoctor;
