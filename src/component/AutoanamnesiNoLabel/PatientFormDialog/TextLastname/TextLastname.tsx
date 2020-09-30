import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked, setObligatoryFieldEmpty, unsetObligatoryFieldEmpty,
} from '../../../../store/slice/patientDataSlice';

const TextLastname = () => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const cancClicked = useSelector(cancelClicked);

  if (disabled === false) {
    if (dataEtichetta.familyname === '' && error === false) {
      setError(!error);
      dispatch(setObligatoryFieldEmpty());
    }
  } else if (cancClicked === true && error === true) {
    setError(!error);
    dispatch(unsetObligatoryFieldEmpty());
  }

  return (
    <TextField
      fullWidth
      disabled={disabled}
      style={{ marginLeft: 8 }}
      label="*Cognome"
      value={dataEtichetta.familyname || ''}
      error={error}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'familyname';
        dispatch(changePatientValue({ name, value }));
        if (value !== '' && error === true) {
          setError(!error);
          dispatch(unsetObligatoryFieldEmpty());
        } else if (value === '' && error === false) {
          setError(!error);
          dispatch(setObligatoryFieldEmpty());
        }
      }}
    />

  );
};

export default TextLastname;
