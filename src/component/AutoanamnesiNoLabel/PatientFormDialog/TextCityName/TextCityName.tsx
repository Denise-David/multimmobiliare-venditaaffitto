import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,

} from '../../../../store/slice/patientDataSlice';

// Campo città di residenza
const TextCityName = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();

  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="Residenza"
      value={dataEtichetta.cityName || ''}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'cityName';
        dispatch(changePatientValue({ name, value }));
      }}
    />

  );
};

export default TextCityName;
