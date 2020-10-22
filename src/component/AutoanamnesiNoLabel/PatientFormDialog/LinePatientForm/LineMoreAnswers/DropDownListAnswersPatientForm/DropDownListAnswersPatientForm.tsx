import React, { ReactElement } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, Select } from '@material-ui/core';
import { State } from '../../../../../../store/store/store';
import { domandeDimenticate, setRisposta } from '../../../../../../store/slice/patientFormSlice';
import { rispostaType } from '../../../../../../store/slice/risposteAddFormSlice';
import { domandaType } from '../../../../../../store/slice/domandeAddFormSlice';

interface Props {idDomanda : string, domanda : string, index:number}

/**
 * Lista a tendina risposte paziente
 */
const DropDownListAnswersPatient = ({ idDomanda, domanda, index } : Props):ReactElement => {
  const dispatch = useDispatch();
  const domDimenticate = useSelector(domandeDimenticate);

  let error = false;
  // cerco le risposte della domanda tramite l'ID
  const controlID = (state : State) => {
    const domandaByID = state.patientForm.domandeReparto.find(
      (d: domandaType) => d.IDDomanda === idDomanda,
    );
    return domandaByID?.risposte;
  };
  const risposte = useSelector(controlID);
  if (domDimenticate.length === 0) {
    error = false;
  } else { error = !domDimenticate[index]; }

  const answer = useSelector((state : State) => state.patientForm.risposte[idDomanda] || null);

  // Creo la lista di risposte
  const listItems = risposte ? risposte.map((risposta : rispostaType) => {
    if (risposta.type === 'normal' || !risposta.type) {
      return (
        <MenuItem
          key={risposta.IDRisposta}
          value={risposta.IDRisposta}
        >
          {risposta.risposta}
        </MenuItem>
      );
    }
    return <></>;
  }) : <></>;

  return (
    <FormControl variant="outlined" error={error}>
      <Select
        value={answer?.idRisposta || ''}
        onChange={(event) => {
        // value è l'ID della risposta
          const { value } = event.target;
          const rispostaSelezionata = risposte?.find(
          (risposta : rispostaType) => risposta.IDRisposta === value
        );
          const valore = rispostaSelezionata?.valore;
          const testoRisposta = rispostaSelezionata?.risposta;
          const idRisposta = value;
          dispatch(setRisposta({
            idDomanda, valore, domanda, testoRisposta, idRisposta,
          }));
        }}
      >
        {listItems}
      </Select>
    </FormControl>

  );
};

export default DropDownListAnswersPatient;
