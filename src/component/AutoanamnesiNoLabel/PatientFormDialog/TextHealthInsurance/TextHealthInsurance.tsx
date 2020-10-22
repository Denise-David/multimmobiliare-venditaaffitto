import React, { ReactElement, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  setObligatoryFieldEmpty, unsetObligatoryFieldEmpty,
} from '../../../../store/slice/patientDataSlice';

/**
 * Campo cassa malati
 */
const TextCassaMalati = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="Cassa malati"
      value={dataEtichetta.insuranceCoversName || ''}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'insuranceCoversName';
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

export default TextCassaMalati;
