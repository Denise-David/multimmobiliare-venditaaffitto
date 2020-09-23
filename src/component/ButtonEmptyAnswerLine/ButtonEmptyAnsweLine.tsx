import React from 'react';
import { IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { isBModifyDelAddReturnDisabled, disableAll, enableAll } from '../../store/slice/disableEnableSlice';
import {
  setAddRispostaClicked, addRisposta, resetRispostaType, stateAddedRisposta,
  setResAtLeast2, setAddRispostaUnclicked, resetAnswerValore,
} from '../../store/slice/risposteAddFormSlice';
import { setBCheckDisabled, isBCheckDisabled } from '../../store/slice/domandeAddFormSlice';

interface Props{ IDDomanda: string}

const ButtonEmptyAnsweLine = ({ IDDomanda }:Props) => {
  const iconsDisabled = useSelector(isBModifyDelAddReturnDisabled);
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const stateTextField = useSelector(stateAddedRisposta);
  const dispatch = useDispatch();
  if (stateTextField[IDDomanda]) {
    return (
      <>

        <IconButton
          disabled={iconsDisabled}
          onClick={() => {
            dispatch(setAddRispostaClicked(IDDomanda));
            dispatch(disableAll());
            dispatch(setBCheckDisabled());
          }}
          color="primary"
        >
          <AddCircleOutlineIcon />
        </IconButton>

      </>
    );
  }
  return (
    <span>
      <IconButton
        onClick={() => {
          dispatch(addRisposta(IDDomanda));
          dispatch(enableAll());
          dispatch(resetRispostaType(IDDomanda));
          dispatch(setResAtLeast2());
        }}
        color="primary"
        disabled={bCheckDisabled}
      >
        <CheckCircleOutlineIcon />
      </IconButton>
      <IconButton
        color="primary"
        onClick={() => {
          dispatch(enableAll());
          dispatch(setAddRispostaUnclicked(IDDomanda));
          dispatch(resetRispostaType(IDDomanda));
          dispatch(resetAnswerValore());
        }}
      >
        <HighlightOffIcon />
      </IconButton>

    </span>
  );
};

export default ButtonEmptyAnsweLine;
