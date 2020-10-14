import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import NumPad from 'react-numpad';
import { getCodeValue, ValueCode } from '../../../store/slice/labelCodeSlice';
import { initFormulariReparto } from '../../../store/slice/homePageLabelSlice';

const TextFieldCodice = ():ReactElement => {
  const dispatch = useDispatch();
  const valueCode = useSelector(ValueCode);

  const getValueOnChange = (value : string) => {
    dispatch(getCodeValue(value));
    dispatch(initFormulariReparto());
  };
  const muiTheme = {
    global: {
      fontFamily: 'IBM Plex Sans',
    },
    header: {
      primaryColor: '#01579b',
      secondaryColor: '#f9f9f9',
      highlightColor: '#FFC107',
      backgroundColor: '#01579b',
    },
    root: {

    },
    body: {
      primaryColor: '#01579b',
      secondaryColor: '#32a5f2',
      highlightColor: '#FFC107',
      backgroundColor: '#f9f9f9',
    },
    panel: {
      backgroundColor: '#CFD8DC',
    },
  };

  return (

    <NumPad.Number
      fullWidth
      onChange={getValueOnChange}
      placeholder="Immetti Codice"
      value={valueCode}
      decimal={0}
      theme={muiTheme}
    >
      <TextField
        id="outlined-basic"
        value={valueCode}
        label="Immetti codice"

        fullWidth
        variant="outlined"
      />

    </NumPad.Number>
  );
};

export default TextFieldCodice;
