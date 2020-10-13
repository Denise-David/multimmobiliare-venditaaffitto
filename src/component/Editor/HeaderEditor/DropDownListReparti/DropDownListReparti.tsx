import React, { ReactElement } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  IDRepartoSelected, setRepartoSelected,
  changeReparto,
} from '../../../../store/slice/ddlEditorFormAndRepartiSlice';
import {
  allReparti, repartiDelete, repartiModify, repartoRightType, rightsUserAUTAN,
  rightType,
  setRepartoDeleteRight, setRepartoModifyRight, setUserCreateRight,
  setUserDeleteRight, setUserModifyRight, unsetRepartoDeleteRight,
} from '../../../../store/slice/rightsSlice';
import { isBModifyDelAddReturnDisabled } from '../../../../store/slice/disableEnableSlice';

const DropDownListReparti = ():ReactElement => {
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

    repModify.forEach((reparto:repartoRightType) => {
      if (value === reparto.unitid || value === reparto.sermednodeid) {
        dispatch(setRepartoModifyRight());
      }
    });

    repDelete.forEach((reparto:repartoRightType) => {
      if (value === reparto.unitid || value === reparto.sermednodeid) {
        dispatch(setRepartoDeleteRight());
      }
    });
  };
  if (IDRepSelected === '-1') {
    rightUser.forEach((scope: rightType) => {
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
  const listRep = allRep.map((reparto: repartoRightType) => (
    <MenuItem
      key={reparto.unitid}
      value={reparto.unitid ? reparto.unitid : reparto.sermednodeid}

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
