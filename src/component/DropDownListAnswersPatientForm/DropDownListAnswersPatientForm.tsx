import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from '@material-ui/core';
import { State } from '../../store/store/store';
import { Domanda, Risposta } from '../../store/slice/formSlice';
import { getRisposta } from '../../store/slice/patientFormSlice';

interface Props {idDomanda : string}

const ListaATendina = ({ idDomanda } : Props) => {
  const dispatch = useDispatch();
  const controlID = (state : State) => {
    const domandaByID = state.patientForm.domandeReparto.find((d: Domanda) => d.ID === idDomanda);

    return domandaByID?.Risposte;
  };
  const risposte = useSelector(controlID);

  // eslint-disable-next-line
  const listItems = risposte ? risposte.map((risposta : Risposta) => (<MenuItem value={risposta.risposta} >{risposta.risposta}</MenuItem>
  )) : <></>;
  return (

    <Select
      onChange={(event) => {
        const { value } = event.target;
        dispatch(getRisposta({ idDomanda, value }));
        console.log('id e value', idDomanda, value);
      }}
      autoWidth
    >
      {listItems}
    </Select>
  );
};

export default ListaATendina;
