import React from 'react';

import {
  TextField,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setRichiedente } from '../../../store/slice/FormSlice';

const CampoTesto = (nome) => {
  const dispatch = useDispatch();
  return (
    <TextField
      InputLabelProps={{
        style: { color: 'white' },
      }}
      color="white"
      variant="outlined"
      label={nome.nome}
      style={{ margin: '0.5em', width: '20em' }}
      onChange={(event) => {
        const name = nome.nome;
        const { value } = event.target;
        dispatch(setRichiedente({ name, value }));
      }}
    />
  );
};
export default CampoTesto;
