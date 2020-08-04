import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/datiPazienteSlice';
import { getNomePaziente } from '../../store/slice/dialogSlice';

const TextLastname = () => {
  const dispatch = useDispatch();
  const getTextFieldValue = (event: React.ChangeEvent<{ value: unknown }>) => {
    const textFieldValue = event.target.value;
    dispatch(getNomePaziente(textFieldValue));
    console.log('xxxnomePAziente', textFieldValue);
  };
  const dataEtichetta = useSelector(allDataEtichetta);
  return (
    <TextField fullWidth label="Nome" onChange={getTextFieldValue} value={dataEtichetta.data.patient.givenname} />
  );
};

export default TextLastname;
