/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { LocalizationProvider, MobileDateTimePicker, DatePicker } from '@material-ui/pickers';

import itLocale from 'date-fns/locale/it';
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns';

import {
  TextField,
} from '@material-ui/core';

const CampoData = (nome) => {
  const [value, setValue] = useState();

  return (
    <LocalizationProvider locale={itLocale} dateAdapter={DateFnsAdapter}>
      <DatePicker
        color="secondary"
        label={nome.nome}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(props) => <TextField {...props} variant="outlined" helperText="" style={{ margin: '0.5em', width: '20em' }} />}
      />
    </LocalizationProvider>
  );
};
export default CampoData;
