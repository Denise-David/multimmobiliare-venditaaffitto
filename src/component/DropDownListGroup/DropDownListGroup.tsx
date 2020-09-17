import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { isDDLFormDisabled } from '../../store/slice/disableEnableSlice';
import { groups } from '../../store/slice/groupSlice';
import { domandeObject, setGroupSelected } from '../../store/slice/domandeAddFormSlice';

interface Props {IDDomanda : string}

const DropDownListGroup = ({ IDDomanda }: Props) => {
  const dispatch = useDispatch();
  const ddlDisabled = useSelector(isDDLFormDisabled);
  const groupsList = useSelector(groups);
  const DomandeObj = useSelector(domandeObject);
  const IDGroup = DomandeObj.group;

  // attivo la DDL formulari solo se c'è un valore nella DDL reparti

  const listGroups = groupsList.map((gruppo : any) => (
    // eslint-disable-next-line no-underscore-dangle
    <MenuItem value={gruppo.id} key={gruppo.id}>
      {gruppo.name}
    </MenuItem>
  ));

  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(setGroupSelected({ value, IDDomanda }));
  };

  return (
    <div>
      <FormControl placeholder="seleziona Formulario" variant="outlined" fullWidth>
        <Select
          defaultValue={-1}
          autoWidth
          disabled={ddlDisabled}
          // eslint-disable-next-line no-underscore-dangle
          value={IDGroup}
          onChange={getValueOnChange}
        >
          <MenuItem value={-1}>
            Nessun Gruppo
          </MenuItem>
          {listGroups}
        </Select>
      </FormControl>

    </div>
  );
};

export default DropDownListGroup;
