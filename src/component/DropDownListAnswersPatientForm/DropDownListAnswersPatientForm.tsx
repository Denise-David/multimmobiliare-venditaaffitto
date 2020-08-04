import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';
import { Select } from '@material-ui/core';
import { State } from '../../store/store/store';
import { Domanda, Risposta } from '../../store/slice/formSlice';

interface Props {idDomanda : string}

const ListaATendina = ({ idDomanda } : Props) => {
  const controlID = (state : State) => {
    const domandaByID = state.patientForm.domandeReparto.find((d: Domanda) => d.ID === idDomanda);

    return domandaByID?.Risposte;
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
