import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';
import { Select } from '@material-ui/core';
import { risposteData } from '../../store/slice/formsSlice';

const ListaATendina = () => {
  const risposte = useSelector(risposteData);
  const listItems = risposte.map((risposta : string, key : number) => (
  // eslint-disable-next-line react/no-array-index-key
    <MenuItem key={key} value={4}>{risposta}</MenuItem>

  ));
  return (

    <Select autoWidth>
      {listItems}
    </Select>
  );
};

export default ListaATendina;
