import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setBCheckDisabled, setBCheckEnabled, isBCheckDisabled } from '../../../../../store/slice/domandeAddFormSlice';
import {
  setAnswer, setValore, stateAddedRisposta, typeAnswer, valore, answer,
} from '../../../../../store/slice/risposteAddFormSlice';

interface Props{ IDDomanda: string}

const TextFieldEmptyAnswerLine = ({ IDDomanda }:Props) => {
  const dispatch = useDispatch();
  const bCheckDisabled = useSelector(isBCheckDisabled);
  const stateTextField = useSelector(stateAddedRisposta);
  const typeRis = useSelector(typeAnswer);
  const rispostaText = useSelector(answer);
  const valoreText = useSelector(valore);
  const NON_DIGIT = '/[^0-9]/g';
  if (typeRis[IDDomanda] !== 'data') {
    return (
      <>

        <Grid item xs={12} sm={7}>

          <TextField
            placeholder="risposta"
            value={rispostaText[IDDomanda] || ''}
            onChange={(event) => {
              const { value } = event.target;
              if (value === '') {
                dispatch(setBCheckDisabled());
              } else if (bCheckDisabled === true) {
                dispatch(setBCheckEnabled());
              }
              dispatch(setAnswer({ IDDomanda, value }));
            }}
            disabled={stateTextField[IDDomanda]}
            id="standard-basic"
            fullWidth
          />
        </Grid>
        {!stateTextField[IDDomanda]
          ? (
            <Grid item xs={12} sm={1}>
              <TextField
                placeholder="valore"
                value={valoreText[IDDomanda] || ''}
                onChange={(event) => {
                  const { value } = event.target;
                  if (value !== '') {
                    // eslint-disable-next-line radix
                    const intValue = parseInt(value.toString().replace(NON_DIGIT, '0'));
                    dispatch(setValore({ IDDomanda, intValue }));
                  } else {
                    const intValue = '0';
                    dispatch(setValore({ IDDomanda, intValue }));
                  }
                }}
                disabled={stateTextField[IDDomanda]}
                id="standard-basic"
                fullWidth
              />
            </Grid>
          ) : <></>}
      </>
    );
  }
  return (
    <>
      <Grid item xs={12} sm={7}>

        <TextField
          placeholder="testo data"
          value={rispostaText[IDDomanda] || ''}
          onChange={(event) => {
            const { value } = event.target;
            if (value === '') {
              dispatch(setBCheckDisabled());
            } else if (bCheckDisabled === true) {
              dispatch(setBCheckEnabled());
            }
            dispatch(setAnswer({ IDDomanda, value }));
          }}
          disabled={stateTextField[IDDomanda]}
          id="standard-basic"
          fullWidth
        />

      </Grid>
      <Grid item xs={12} sm={1} />
    </>
  );
};

export default TextFieldEmptyAnswerLine;
