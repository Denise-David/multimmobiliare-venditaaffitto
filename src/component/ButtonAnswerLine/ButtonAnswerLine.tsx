import React from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  disableAll, isBModifyDelAddReturnDisabled, enableAll,
} from '../../store/slice/disableEnableSlice';
import { setModifyRispostaClicked, deleteRisposta, setModifyRispostaUnclicked } from '../../store/slice/risposteAddFormSlice';
import { isBCheckDisabled } from '../../store/slice/domandeAddFormSlice';

interface Props{rispostaArray : any, id: string, IDRisposta: string}

const ButtonAnswerLine = ({ rispostaArray, id, IDRisposta } : Props) => {
  const dispatch = useDispatch();
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const IDDomanda = id;

  if (!rispostaArray.stateModify) {
    return (
      <span>
        {/* Bottone Modifica */}

        <IconButton
          onClick={() => {
            dispatch(disableAll());
            dispatch(setModifyRispostaClicked({ IDDomanda, IDRisposta }));
          }}
          disabled={iconsDisabled}
          color="primary"
        >
          <CreateIcon />
        </IconButton>

        {/* Bottone Elimina */}

        <IconButton
          onClick={() => dispatch(deleteRisposta({ IDDomanda, IDRisposta }))}
          disabled={iconsDisabled}
          color="primary"
        >
          <DeleteIcon />
        </IconButton>

      </span>

    );
  } return (
    <>
      {/* Bottone Check */}
      <IconButton disabled />
      <IconButton
        onClick={() => {
          dispatch(enableAll());
          dispatch(setModifyRispostaUnclicked({
            IDDomanda,
            IDRisposta,

          }));
        }}
        disabled={bCheckDisabled}
        color="primary"
      >
        <CheckCircleOutlineIcon />
      </IconButton>

    </>
  );
};

export default ButtonAnswerLine;
