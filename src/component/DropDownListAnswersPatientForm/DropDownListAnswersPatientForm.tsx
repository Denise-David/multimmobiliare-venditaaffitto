import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from '@material-ui/core';
import { State } from '../../store/store/store';
import { Domanda, Risposta } from '../../store/slice/formSlice';
import { getRisposta } from '../../store/slice/patientFormSlice';

interface Props {idDomanda : string, domanda : string}

const DropDownListAnswersPatient = ({ idDomanda, domanda } : Props) => {
  const dispatch = useDispatch();
  const controlID = (state : State) => {
    const domandaByID = state.patientForm.domandeReparto.find((d: Domanda) => d.ID === idDomanda);

    return domandaByID?.Risposte;
  };
  const risposte = useSelector(controlID);

  // eslint-disable-next-line
  const listItems = risposte ? risposte.map((risposta : Risposta) => {
    return (
      <MenuItem key={risposta.ID} value={risposta.ID}>{risposta.risposta}</MenuItem>);
  }) : <></>;

  return (

    <Select
      onChange={(event) => {
        const { value } = event.target;
        const rispostaSelezionata = risposte?.find((risposta : Risposta) => risposta.ID === value);
        const valore = rispostaSelezionata?.valore;
        const testoRisposta = rispostaSelezionata?.risposta;

        dispatch(getRisposta({
          idDomanda, valore, domanda, testoRisposta,
        }));
      }}
    >
      {listItems}
    </Select>
  );
};

export default DropDownListAnswersPatient;
