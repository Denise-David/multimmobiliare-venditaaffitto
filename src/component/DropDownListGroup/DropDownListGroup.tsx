import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { isDDLFormDisabled } from '../../store/slice/disableEnableSlice';
import { groups } from '../../store/slice/groupSlice';
import { domandeObject, setGroupSelected } from '../../store/slice/domandeAddFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import confirmAddForm from '../../store/sagas/departmentChoiceEditorSagas';

interface Props {IDDomanda : string}

const DropDownListGroup = ({ IDDomanda }: Props) => {
  const dispatch = useDispatch();
  const ddlDisabled = useSelector(isDDLFormDisabled);
  const groupsList = useSelector(groups);
  const DomandeObj = useSelector(domandeObject);
  const rightMod = useSelector(haveRepModifyRight);
  const confirmClicked = useSelector(confirmAddForm);

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
          disabled={ddlDisabled || (!rightMod && !confirmClicked)}
          // eslint-disable-next-line no-underscore-dangle
          value={DomandeObj[IDDomanda].group}
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
