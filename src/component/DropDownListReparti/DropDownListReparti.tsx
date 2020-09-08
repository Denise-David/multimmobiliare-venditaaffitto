import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { IDRepartoSelected, setRepartoSelected, changeReparto } from '../../store/slice/ddlEditorFormAndRepartiSlice';
import { allReparti, unsetRepartoDeleteRight } from '../../store/slice/rightsSlice';
import { isBModifyDelAddReturnDisabled, setDDLFormEnabled } from '../../store/slice/disableEnableSlice';

const DropDownListReparti = () => {
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const IDReparto = useSelector(IDRepartoSelected);
  const allRep = useSelector(allReparti);
  const dispatch = useDispatch();

  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(setRepartoSelected(value));
    dispatch({ type: 'INIT' });
    dispatch(unsetRepartoDeleteRight());
    dispatch(changeReparto());
    if (value !== '-1') {
      dispatch(setDDLFormEnabled());
    }
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

      <FormControl disabled={iconsDisabled} variant="outlined" fullWidth>
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
