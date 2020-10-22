import React, { ReactElement } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setBCheckDisabled, setBCheckEnabled, isBCheckDisabled } from '../../../../../store/slice/domandeAddFormSlice';
import { modifyRisposta, rispostaType, setModifyRispostaUnclicked } from '../../../../../store/slice/risposteAddFormSlice';
import { enableAll } from '../../../../../store/slice/disableEnableSlice';

interface Props{rispostaArray : rispostaType, id: string, IDRisposta: string}
/**
 * Campo risposta
 */
const TextFieldAnswerLine = ({ rispostaArray, id, IDRisposta } : Props):ReactElement => {
  const dispatch = useDispatch();
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const NON_DIGIT = '/[^d]/g';
  const IDDomanda = id;
  if (rispostaArray.type !== 'data') {
    return (
      <>
        {' '}
        {/* TextField testo risposta */}
        <Grid item xs={12} sm={7}>
          <TextField
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !bCheckDisabled) {
                dispatch(enableAll());
                dispatch(setModifyRispostaUnclicked({
                  IDDomanda,
                  IDRisposta,

                }));
              }
            }}
            onChange={(event) => {
              const risposta = event.target.value;
              if (risposta === '') {
                dispatch(setBCheckDisabled());
              } else if (bCheckDisabled === true) {
                dispatch(setBCheckEnabled());
              }

              dispatch(modifyRisposta({
                IDDomanda, IDRisposta, risposta,
              }));
            }}
            disabled={!rispostaArray.stateModify}
            id="standard-basic"
            value={rispostaArray.risposta}
            fullWidth
          />
        </Grid>
        {/* TextField valore risposta con filtro solo numeri */}

        <Grid item xs={12} sm={1}>
          <TextField
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(enableAll());
                dispatch(setModifyRispostaUnclicked({
                  IDDomanda,
                  IDRisposta,

                }));
              }
            }}
            onChange={(event) => {
              const { value } = event.target;
              if (value !== '') {
                // eslint-disable-next-line radix
                const valore = parseInt(value.toString().replace(NON_DIGIT, ''));
                dispatch(modifyRisposta({
                  IDDomanda, IDRisposta, valore,
                }));
              } else {
                const valore = '0';
                dispatch(modifyRisposta({
                  IDDomanda, IDRisposta, valore,
                }));
              }
            }}
            disabled={!rispostaArray.stateModify}
            id="standard-basic"
            value={rispostaArray.valore}
            fullWidth
          />
        </Grid>
      </>
    );
  }
  return (
    <>
      {/* TextField testo Data */}
      <Grid item xs={12} sm={7}>
        <TextField
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !bCheckDisabled) {
              dispatch(enableAll());
              dispatch(setModifyRispostaUnclicked({
                IDDomanda,
                IDRisposta,

              }));
            }
          }}
          onChange={(event) => {
            const risposta = event.target.value;
            dispatch(modifyRisposta({ IDDomanda, IDRisposta, risposta }));
          }}
          disabled={!rispostaArray.stateModify}
          id="standard-basic"
          value={rispostaArray.risposta}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={1} />

    </>
  );
};

export default TextFieldAnswerLine;
