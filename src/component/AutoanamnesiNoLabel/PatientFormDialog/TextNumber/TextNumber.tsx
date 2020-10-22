import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
} from '../../../../store/slice/patientDataSlice';

// Campo numero via
const TextNumber = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();

  return (
    <TextField
      fullWidth
      disabled={disabled}
      style={{ marginLeft: 8 }}
      label="n°"
      value={dataEtichetta.streetNumber || ''}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'streetNumber';
        dispatch(changePatientValue({ name, value }));
      }}
    />
  );
};

export default TextNumber;
