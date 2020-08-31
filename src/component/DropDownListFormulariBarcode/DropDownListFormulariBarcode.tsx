import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const DropDownListFormulariBarcode = () => (
  <div>
    <FormControl placeholder="seleziona Formulario" variant="outlined" fullWidth>
      <Select
        defaultValue={-1}
        autoWidth
        disabled
      >
        <MenuItem value={-1}>
          Seleziona Formulario
        </MenuItem>
      </Select>
    </FormControl>

  </div>
);

export default DropDownListFormulariBarcode;
