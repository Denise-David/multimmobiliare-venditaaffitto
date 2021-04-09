import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxForm = (nome) => (
  <FormControlLabel
    style={{ margin: '0.5em', color: 'white' }}
    control={(
      <Checkbox
        name="checkedB"
        color="secondary"
      />
        )}
    label={nome.nome}
  />
);
export default CheckboxForm;
