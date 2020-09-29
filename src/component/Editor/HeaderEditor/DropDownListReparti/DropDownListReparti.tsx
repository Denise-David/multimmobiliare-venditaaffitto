import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  IDRepartoSelected, setRepartoSelected,
  changeReparto,
} from '../../../../store/slice/ddlEditorFormAndRepartiSlice';
import {
  allReparti, repartiDelete, repartiModify, rightsUserAUTAN,
  setRepartoDeleteRight, setRepartoModifyRight, setUserCreateRight,
  setUserDeleteRight, setUserModifyRight, unsetRepartoDeleteRight,
} from '../../../../store/slice/rightsSlice';
import { isBModifyDelAddReturnDisabled } from '../../../../store/slice/disableEnableSlice';

const DropDownListReparti = () => {
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const IDReparto = useSelector(IDRepartoSelected);
  const allRep = useSelector(allReparti);
  const dispatch = useDispatch();
  const rightUser = useSelector(rightsUserAUTAN);
  const IDRepSelected = useSelector(IDRepartoSelected);
  const repDelete = useSelector(repartiDelete);
  const repModify = useSelector(repartiModify);
  // prendo e setto il valore quando cambia, prendo i dati dei formulari ec...
  const getValueOnChange = (event : React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    dispatch(setRepartoSelected(value));
    dispatch({ type: 'INIT' });
    dispatch(unsetRepartoDeleteRight());
    dispatch(changeReparto());

    repModify.forEach((reparto:any) => {
      if (value === reparto.unitid || value === reparto.sermednodeid) {
        dispatch(setRepartoModifyRight());
      }
    });

    repDelete.forEach((reparto:any) => {
      if (value === reparto.unitid || value === reparto.sermednodeid) {
        dispatch(setRepartoDeleteRight());
      }
    });
  };
  if (IDRepSelected === '-1') {
    rightUser.forEach((scope: any) => {
      if (scope.code === 'AUTAN_ALL') {
        dispatch(setRepartoModifyRight());
        dispatch(setRepartoDeleteRight());
        dispatch(setUserCreateRight());
      }
      if (scope.code === 'AUTAN_CREATE') {
        dispatch(setUserCreateRight());
      } // diritto delete
      if (scope.code === 'AUTAN_DELETE') {
        dispatch(setUserDeleteRight());
      }
      if (scope.code === 'AUTAN_MODIFY') {
        dispatch(setUserModifyRight());
      }
    });
  }
  // array nome reparti
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
