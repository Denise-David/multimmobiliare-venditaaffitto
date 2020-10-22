import React, { ReactElement, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked, setObligatoryFieldEmpty, unsetObligatoryFieldEmpty, obligatoryFieldEmpty,
} from '../../../../store/slice/patientDataSlice';

/**
 * Campo nome
 */
const TextLastname = ():ReactElement => {
  const dispatch = useDispatch();
  const disabled = useSelector(textFieldDisabled);
  const dataEtichetta = useSelector(newPatientInfo);
  const error = useSelector(obligatoryFieldEmpty);

  const cancClicked = useSelector(cancelClicked);
  useEffect(() => {
    if (disabled === false) {
      if (dataEtichetta) {
        if (dataEtichetta.givenname === '') {
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
      label="*Nome"
      value={dataEtichetta ? dataEtichetta.givenname : ''}
      error={error}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'givenname';
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

export default TextLastname;
