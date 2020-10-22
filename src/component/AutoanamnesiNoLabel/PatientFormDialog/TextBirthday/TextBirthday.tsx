/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { ReactElement, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { MobileDatePicker } from '@material-ui/pickers';

import parseISO from 'date-fns/parseISO';
import {
  textFieldDisabled,
  cancelClicked, setObligatoryFieldEmpty, unsetObligatoryFieldEmpty, birthdayDate, setBirthdayDate,
} from '../../../../store/slice/patientDataSlice';

// Campo data di nascita
const TextBirthday = ():ReactElement => {
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const cancClicked = useSelector(cancelClicked);
  const birthday = useSelector(birthdayDate);
  useEffect(() => {
    if (disabled === false) {
      if (!birthday) {
        dispatch(setObligatoryFieldEmpty());
      }
    } else if (cancClicked === true) {
      dispatch(unsetObligatoryFieldEmpty());
    }
  });

  return (
    <MobileDatePicker
      disableHighlightToday
      disableFuture
      disabled={disabled}
      mask="__/__/____"
      onError={(reason:
        'shouldDisableDate' | 'invalidDate' | 'disableFuture' | 'maxDate' | 'disablePast' | 'minDate' | null, value: unknown) => { console.error(value); }}
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
