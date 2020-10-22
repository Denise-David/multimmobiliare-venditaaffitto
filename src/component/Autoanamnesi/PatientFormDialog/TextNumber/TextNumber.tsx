import React, { ReactElement, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked, setObligatoryFieldEmpty, unsetObligatoryFieldEmpty, obligatoryFieldEmpty,
} from '../../../../store/slice/patientDataSlice';

// Campo numero via
const TextNumber = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const error = useSelector(obligatoryFieldEmpty);
  const cancClicked = useSelector(cancelClicked);
  useEffect(() => {
    if (disabled === false) {
      if (dataEtichetta) {
        if (dataEtichetta.streetNumber === '') {
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
      style={{ marginLeft: 8 }}
      error={error}
      label="*n°"
      value={dataEtichetta ? dataEtichetta.streetNumber : ''}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'streetNumber';
        dispatch(changePatientValue({ name, value }));
        if (value !== '') {
          dispatch(unsetObligatoryFieldEmpty());
        } else if ((value === '' || value === ' ')) {
          dispatch(setObligatoryFieldEmpty());
        }
      }}
    />
  );
};

export default TextNumber;
