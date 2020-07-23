import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';
import { Select } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { State } from '../../store/store/store';
// eslint-disable-next-line no-unused-vars
import { Domanda, Risposta } from '../../store/slice/domandeSlice';

interface Props {id : number}

const ListaATendina = ({ id }: Props) => {
  const controlID = (state : State) => {
    const domandaID = state.domande.dataDomande.find((d: Domanda) => d.ID === id);
    return domandaID?.Risposte;
  };
  const risposte = useSelector(controlID);
  // eslint-disable-next-line
  const listItems = risposte ? risposte.map((risposta : Risposta) => <MenuItem value={risposta.valore}>{risposta.risposta}</MenuItem>) : <></>;
  return (

    <Select autoWidth>
      {listItems}
    </Select>
  );
};

export default ListaATendina;
