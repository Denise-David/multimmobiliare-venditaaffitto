import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from '@material-ui/core';
import { State } from '../../store/store/store';
import { getRisposta } from '../../store/slice/patientFormSlice';

interface Props {idDomanda : string, domanda : string}
export interface Domanda { ID : string, Domanda : string, Risposte : Risposta[],
  stateModify: boolean}
export interface Risposta { ID : string, risposta : string, valore : string}

const DropDownListAnswersPatient = ({ idDomanda, domanda } : Props) => {
  const dispatch = useDispatch();
  const controlID = (state : State) => {
    const domandaByID = state.patientForm.domandeReparto.find((d: Domanda) => d.ID === idDomanda);

    return domandaByID?.Risposte;
  };
  const risposte = useSelector(controlID);
  const answer = useSelector((state : State) => state.patientForm.risposte[idDomanda] || null);

  // eslint-disable-next-line
  const listItems = risposte ? risposte.map((risposta : Risposta) => {
    return (
      <MenuItem key={risposta.ID} value={risposta.ID}>{risposta.risposta}</MenuItem>);
  }) : <></>;

  return (

    <Select
      value={answer?.idRisposta || ''}
      onChange={(event) => {
        // value è l'ID della risposta
        const { value } = event.target;
        const rispostaSelezionata = risposte?.find((risposta : Risposta) => risposta.ID === value);
        const valore = rispostaSelezionata?.valore;
        const testoRisposta = rispostaSelezionata?.risposta;
        const idRisposta = value;
        dispatch(getRisposta({
          idDomanda, valore, domanda, testoRisposta, idRisposta,
        }));
      }}
    >
      {listItems}
    </Select>
  );
};

export default DropDownListAnswersPatient;
