import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { getCodeValue, ValueCode } from '../../store/slice/CodeSlice';

const TextFieldCodice = () => {
  const dispatch = useDispatch();
  const valueCode = useSelector(ValueCode);

  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const codeValue = event.target.value;
    dispatch(getCodeValue(codeValue));
  };
  return (
    <TextField id="outlined-basic" value={valueCode} label="Immetti codice" onChange={getValueOnChange} fullWidth variant="outlined" />
  );
};

export default TextFieldCodice;
