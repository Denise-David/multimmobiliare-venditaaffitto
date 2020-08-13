import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import NumPad from 'react-numpad';
import { getCodeValue, ValueCode } from '../../store/slice/CodeSlice';
import EOCTheme from '../../theme';

const TextFieldCodice = () => {
  const dispatch = useDispatch();
  const valueCode = useSelector(ValueCode);

  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const codeValue = event.target.value;
    dispatch(getCodeValue(codeValue));
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
  console.log('xxtema', EOCTheme);

  return (

    // Questo è da CANCELLARE!!!!!
    <TextField id="outlined-basic" value="4153656" label="Immetti codice" onChange={getValueOnChange} fullWidth variant="outlined" />

  // <TextField id="outlined-basic"
  // value={valueCode} label="Immetti codice"
  // onChange={getValueOnChange} fullWidth variant="outlined" />

  // <NumPad.Number
  //   onChange={getValueOnChange}
  //   label="Total"
  //   placeholder="my placeholder"
  //   value={valueCode}
  //   decimal={0}
  //   theme={muiTheme}
  // />
  );
};

export default TextFieldCodice;
