import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';

const DropDownListFormulari = () => (
  <div>
    <FormControl variant="outlined" fullWidth>
      <Select
        defaultValue={0}
        value="1"
        autoWidth
      >
        <MenuItem value={0}>
          Seleziona Formulario
        </MenuItem>
      </Select>
    </FormControl>

  </div>
);

export default DropDownListFormulari;
