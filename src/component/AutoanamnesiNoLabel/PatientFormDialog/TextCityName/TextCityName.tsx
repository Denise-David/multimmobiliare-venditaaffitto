import React, { ReactElement, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  setObligatoryFieldEmpty, unsetObligatoryFieldEmpty, cancelClicked,
} from '../../../../store/slice/patientDataSlice';

// Campo città di residenza
const TextCityName = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const cancClicked = useSelector(cancelClicked);

  if (disabled === false) {
    if (dataEtichetta.cityName === '' && error === false) {
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
      error={error}
      label="Residenza"
      value={dataEtichetta.cityName || ''}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'cityName';
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

export default TextCityName;
