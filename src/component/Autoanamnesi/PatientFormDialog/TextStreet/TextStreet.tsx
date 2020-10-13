import React, { ReactElement, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked, setObligatoryFieldEmpty, unsetObligatoryFieldEmpty,
} from '../../../../store/slice/patientDataSlice';

const TextLastname = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const cancClicked = useSelector(cancelClicked);

  if (disabled === false) {
    if (dataEtichetta) {
      if (dataEtichetta.streetName === '' && error === false) {
        setError(!error);
        dispatch(setObligatoryFieldEmpty());
      }
    }
  } else if (cancClicked === true && error === true) {
    setError(!error);
    dispatch(unsetObligatoryFieldEmpty());
  }
  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="*Via"
      value={dataEtichetta ? dataEtichetta.streetName : ''}
      error={error}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'streetName';
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
