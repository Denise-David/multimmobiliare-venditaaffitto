import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
} from '../../../../store/slice/patientDataSlice';

const TextLastname = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();

  return (
    <TextField
      fullWidth
      disabled={disabled}
      label="Numero di telefono"
      value={dataEtichetta ? dataEtichetta.mobile : ''}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'mobile';
        dispatch(changePatientValue({ name, value }));
      }}
    />
  );
};

export default TextLastname;
