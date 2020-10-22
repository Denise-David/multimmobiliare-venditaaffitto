import React, { ReactElement, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  setObligatoryFieldEmpty, unsetObligatoryFieldEmpty, cancelClicked, obligatoryFieldEmpty,
} from '../../../../store/slice/patientDataSlice';

/**
 * Campo città di residenza
 */
const TextCityName = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const error = useSelector(obligatoryFieldEmpty);
  const cancClicked = useSelector(cancelClicked);
  useEffect(() => {
    if (disabled === false) {
      if (dataEtichetta) {
        if (dataEtichetta.cityName === '') {
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
      error={error}
      label="*Residenza"
      value={dataEtichetta ? dataEtichetta.cityName : ''}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'cityName';
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

export default TextCityName;
