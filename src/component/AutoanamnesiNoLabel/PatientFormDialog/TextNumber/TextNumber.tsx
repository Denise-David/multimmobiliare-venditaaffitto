import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked, setObligatoryFieldEmpty, unsetObligatoryFieldEmpty,
} from '../../../../store/slice/patientDataSlice';

const TextNumber = () => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const cancClicked = useSelector(cancelClicked);

  if (disabled === false) {
    if (dataEtichetta.streetNumber === '' && error === false) {
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
      error={error}
      label="*n°"
      value={dataEtichetta.streetNumber || ''}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'streetNumber';
        dispatch(changePatientValue({ name, value }));
        if (value !== '' && error === true) {
          setError(!error);
          dispatch(unsetObligatoryFieldEmpty());
        } else if ((value === '' || value === ' ') && error === false) {
          setError(!error);
          dispatch(setObligatoryFieldEmpty());
        }
      }}
    />
  );
};

export default TextNumber;
