import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  formulariByReparto,
} from '../../store/slice/rightsSlice';
import { setFormularioSelected, IDForm } from '../../store/slice/repartoDDLSlice';
import { isDDLFormDisabled } from '../../store/slice/disableEnableSlice';

const DropDownListFormulari = () => {
  const formulari = useSelector(formulariByReparto);
  const dispatch = useDispatch();
  const IDFormulario = useSelector(IDForm);
  const ddlDisabled = useSelector(isDDLFormDisabled);

  // attivo la DDL formulari solo se c'è un valore nella DDL reparti

  const listForm = formulari.map((formulario : any) => (
    // eslint-disable-next-line no-underscore-dangle
    <MenuItem value={formulario._id} key={formulario._id}>
      {formulario.formulario}
    </MenuItem>
  ));

  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(setFormularioSelected(value));
    dispatch({ type: 'INIT' });
  };

  return (
    <div>
      <FormControl placeholder="seleziona Formulario" variant="outlined" fullWidth>
        <Select
          defaultValue={-1}
          autoWidth
          disabled={ddlDisabled}
          // eslint-disable-next-line no-underscore-dangle
          value={IDFormulario}
          onChange={getValueOnChange}
        >
          <MenuItem value={-1}>
            Seleziona Formulario
          </MenuItem>
          {listForm}
        </Select>
      </FormControl>

    </div>
  );
};

export default DropDownListFormulari;
