import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { getCodeValue } from '../../store/slice/CodeSlice';

const TextFieldCodice = () => {
  const dispatch = useDispatch();

  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const codeValue = event.target.value;
    dispatch(getCodeValue(codeValue));
  };
  return (
    <TextField id="outlined-basic" label="Immetti codice" onChange={getValueOnChange} fullWidth variant="outlined" />
  );
};

export default TextFieldCodice;
