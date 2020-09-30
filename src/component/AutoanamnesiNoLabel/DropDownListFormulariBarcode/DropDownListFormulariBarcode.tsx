import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { formulariList, setSelectedForm, formSelected } from '../../../store/slice/homePageLabelSlice';
import useStyles from './style';

const DropDownListFormulariBarcode = () => {
  const formulari = useSelector(formulariList);
  const dispatch = useDispatch();
  const classes = useStyles();
  const selectedForm = useSelector(formSelected);
  const listForm = formulari.map((formulario : any) => (
    // eslint-disable-next-line no-underscore-dangle
    <MenuItem value={formulario._id} key={formulario._id}>
      {formulario.formulario}
    </MenuItem>
  ));

  return (
    <div>
      <FormControl className={classes.alignLeft} placeholder="seleziona Formulario" variant="outlined" fullWidth>
        <Select
          defaultValue={-1}
          autoWidth
          value={selectedForm}
          onChange={(event) => {
            const { value } = event.target;
            dispatch(setSelectedForm(value));
          }}
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

export default DropDownListFormulariBarcode;
