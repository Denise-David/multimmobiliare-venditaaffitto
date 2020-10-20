import React, { ReactElement } from 'react';
import { IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
  addRisposta, resetRispostaType, stateAddedRisposta,
} from '../../../../../store/slice/risposteAddFormSlice';
import { setUnsavedChanges } from '../../../../../store/slice/addFormSlice';

interface Props{ IDDomanda: string}

// Bottoni aggiunta risposta
const ButtonEmptyAnsweLine = ({ IDDomanda }:Props):ReactElement => {
  const dispatch = useDispatch();
  const stateTextField = useSelector(stateAddedRisposta);

  return (
    <span>
      <IconButton disabled />
      <IconButton disabled />
      <IconButton
        onClick={() => {
          dispatch(addRisposta(IDDomanda));
          dispatch(resetRispostaType(IDDomanda));
          dispatch(setUnsavedChanges());
        }}
        color="primary"
        disabled={stateTextField[IDDomanda]}
      >
        <AddCircleOutlineIcon />
      </IconButton>

    </span>
  );
};

export default ButtonEmptyAnsweLine;
