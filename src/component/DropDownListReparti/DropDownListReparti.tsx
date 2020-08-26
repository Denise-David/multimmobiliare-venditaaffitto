import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { isDisable } from '../../store/slice/risultatiAddFormSlice';
import { idRepartoSelected, setRepartoSelected } from '../../store/slice/repartoSlice';
import { allReparti } from '../../store/slice/rightsSlice';

const DropDownListReparti = () => {
  const disableActive = useSelector(isDisable);
  const IDReparto = useSelector(idRepartoSelected);
  const allRep = useSelector(allReparti);
  const dispatch = useDispatch();

  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(setRepartoSelected(value));
    dispatch({ type: 'INIT' });
  };

  const listRep = allRep.map((reparto: any) => (
    <MenuItem
      value={reparto.unitid ? reparto.unitid : reparto.sermednodeid}
      key={reparto.unitid}
    >
      {reparto.longname}

    </MenuItem>
  ));

  return (
    <div>
      {/* se non è cliccato nulla */}

      <FormControl disabled={disableActive} variant="outlined" fullWidth>
        <Select
          defaultValue={-1}
          value={IDReparto}
          autoWidth
          onChange={getValueOnChange}
        >
          <MenuItem value={-1}>
            Seleziona Reparto
          </MenuItem>
          {listRep}
        </Select>

      </FormControl>

    </div>
  );
};

export default DropDownListReparti;
