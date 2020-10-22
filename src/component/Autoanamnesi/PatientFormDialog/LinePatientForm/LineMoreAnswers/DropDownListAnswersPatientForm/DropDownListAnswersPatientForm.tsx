import React, { ReactElement } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, Select } from '@material-ui/core';
import { State } from '../../../../../../store/store/store';
import { setRisposta } from '../../../../../../store/slice/patientFormSlice';
import { domandaType } from '../../../../../../store/slice/domandeAddFormSlice';
import { rispostaType } from '../../../../../../store/slice/risposteAddFormSlice';

interface Props {idDomanda : string, domanda : string, index: number, domDimenticate: boolean[]}

/**
 * Lista a tendina risposte domanda
 */
const DropDownListAnswersPatient = ({
  idDomanda, domanda, index, domDimenticate,
} : Props):ReactElement => {
  const dispatch = useDispatch();

  let error = false;
  // cerco le risposte della domanda tramite l'ID
  const controlID = (state : State) => {
    const domandaByID = state.patientForm.domandeReparto.find(
      (d: domandaType) => d.IDDomanda === idDomanda,
    );
    const ritorno :rispostaType[] | undefined = domandaByID ? domandaByID.risposte : [];
    return ritorno;
  };
  const risposte = useSelector(controlID);
  if (domDimenticate.length === 0) {
    error = false;
  } else { error = !domDimenticate[index]; }

  const answer = useSelector((state : State) => state.patientForm.risposte[idDomanda] || null);
  // eslint-disable-next-line
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
