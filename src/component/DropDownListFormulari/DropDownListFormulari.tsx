import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { formulariByReparto } from '../../store/slice/rightsSlice';
import { setFormularioSelected } from '../../store/slice/repartoSlice';

const DropDownListFormulari = () => {
  const formulari = useSelector(formulariByReparto);
  const dispatch = useDispatch();

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
          defaultValue={0}
          autoWidth
          onChange={getValueOnChange}
        >
          <MenuItem value={0}>
            Seleziona Formulario
          </MenuItem>
          {listForm}
        </Select>
      </FormControl>

    </div>
  );
};

export default DropDownListFormulari;
