import React, { ReactElement, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked, setObligatoryFieldEmpty, unsetObligatoryFieldEmpty, obligatoryFieldEmpty,
} from '../../../../store/slice/patientDataSlice';

/**
 * Campo CAP della città di residenza
 */
const TextCAP = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const cancClicked = useSelector(cancelClicked);
  const error = useSelector(obligatoryFieldEmpty);
  useEffect(() => {
    if (disabled === false) {
      if (dataEtichetta && dataEtichetta.zip) {
        if (dataEtichetta.zip === '') {
          dispatch(setObligatoryFieldEmpty());
        }
      }
    } else if (cancClicked === true) {
      dispatch(unsetObligatoryFieldEmpty());
    }
  });

  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="*CAP"
      value={dataEtichetta ? dataEtichetta.zip : ''}
      error={error}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'zip';
        dispatch(changePatientValue({ name, value }));
        if (value !== '') {
          dispatch(unsetObligatoryFieldEmpty());
        } else if (value === '') {
          dispatch(setObligatoryFieldEmpty());
        }
      }}
    />

  );
};

export default TextCAP;
