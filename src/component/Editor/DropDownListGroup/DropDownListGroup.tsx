import React, { ReactElement, useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { isDDLFormDisabled } from '../../../store/slice/disableEnableSlice';
import { groups } from '../../../store/slice/groupSlice';
import { domandeObject, setGroupSelected } from '../../../store/slice/domandeAddFormSlice';
import { haveRepModifyRight } from '../../../store/slice/rightsSlice';
import { isBConfirmAddFormClicked, setUnsavedChanges } from '../../../store/slice/addFormSlice';

interface Props {IDDomanda : string}

/**
 * Lista a tendina gruppi
 */
const DropDownListGroup = ({ IDDomanda }: Props):ReactElement => {
  const dispatch = useDispatch();
  const ddlDisabled = useSelector(isDDLFormDisabled);
  const groupsList = useSelector(groups);
  const DomandeObj = useSelector(domandeObject);
  const rightMod = useSelector(haveRepModifyRight);
  const confirmClicked = useSelector(isBConfirmAddFormClicked);
  const [disabled, setDisabled] = useState(false);

  // creo array con il nome dei gruppi
  const listGroups = groupsList.map((gruppo : {id:string, name:string}) => (
    // eslint-disable-next-line no-underscore-dangle
    <MenuItem value={gruppo.id} key={gruppo.id}>
      {gruppo.name}
    </MenuItem>
  ));
  // Prendere e settare il valore quando si modifica
  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(setGroupSelected({ value, IDDomanda }));
    dispatch(setUnsavedChanges());
  };

  // Controllo dei diritti e se si è in modalità aggiungi formulario
  if ((rightMod || confirmClicked) && disabled === true) {
    setDisabled(!disabled);
  } else if ((!rightMod && !confirmClicked) && disabled === false) {
    setDisabled(!disabled);
  }

  return (
    <div>
      <FormControl placeholder="seleziona Formulario" variant="outlined" fullWidth>
        <Select
          defaultValue={-1}
          autoWidth
          disabled={ddlDisabled || disabled}
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
