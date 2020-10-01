/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { MobileDatePicker } from '@material-ui/pickers';

import parseISO from 'date-fns/parseISO';
import {
  newPatientInfo, textFieldDisabled,
  cancelClicked, setObligatoryFieldEmpty, unsetObligatoryFieldEmpty, birthdayDate, setBirthdayDate,
} from '../../../../store/slice/patientDataSlice';

const TextBirthday = () => {
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const cancClicked = useSelector(cancelClicked);
  const birthday = useSelector(birthdayDate);

  if (disabled === false) {
    if (!birthday && error === false) {
      dispatch(setObligatoryFieldEmpty());
    }
  } else if (cancClicked === true && error === true) {
    dispatch(unsetObligatoryFieldEmpty());
  }

  return (
    <MobileDatePicker
      disableHighlightToday
      disableFuture
      disabled={disabled}
      mask="__/__/____"
      onError={(reason:any, value: any) => { console.log(value); }}
      label="*Data di nascita"
      value={birthday ? parseISO(birthday) : null}

      onChange={(data) => {
        const dataFormattata = data !== null ? data.toISOString() : '';
        dispatch(setBirthdayDate(dataFormattata));
        dispatch(unsetObligatoryFieldEmpty());
      }}
          // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(props) => {
        props = { ...props, InputProps: { ...props.InputProps, error: !birthday && !disabled } };

        return (<TextField fullWidth {...props} />);
      }}
    />

  );
};

export default TextBirthday;
