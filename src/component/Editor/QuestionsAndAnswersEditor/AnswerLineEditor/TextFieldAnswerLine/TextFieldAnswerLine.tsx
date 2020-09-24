import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setBCheckDisabled, setBCheckEnabled, isBCheckDisabled } from '../../../../../store/slice/domandeAddFormSlice';
import { modifyRisposta } from '../../../../../store/slice/risposteAddFormSlice';

interface Props{rispostaArray : any, id: string, IDRisposta: string}
const TextFieldAnswerLine = ({ rispostaArray, id, IDRisposta } : Props) => {
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
            value={rispostaArray.Risposta}
            fullWidth
          />
        </Grid>
        {/* TextField valore risposta con filtro solo numeri */}

        <Grid item xs={12} sm={1}>
          <TextField
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
            value={rispostaArray.Valore}
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
          onChange={(event) => {
            const risposta = event.target.value;
            dispatch(modifyRisposta({ IDDomanda, IDRisposta, risposta }));
          }}
          disabled={!rispostaArray.stateModify}
          id="standard-basic"
          value={rispostaArray.Risposta}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={1} />

    </>
  );
};

export default TextFieldAnswerLine;
