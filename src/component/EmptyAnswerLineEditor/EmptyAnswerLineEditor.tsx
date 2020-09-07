import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  IconButton, FormControlLabel, Checkbox,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  isDisable, colDisable, enableAll, disableAll,
} from '../../store/slice/risultatiAddFormSlice';
import {
  setAddRispostaClicked, stateAddedRisposta,
  setAddRispostaUnclicked, setAnswer, setValore, addRisposta,
  answer, valore, setType, typeAnswer, resetRispostaType,
} from '../../store/slice/risposteAddFormSlice';
import { setIcons, unsetIcons } from '../../store/slice/addFormSlice';
import { setBCheckDisabled, setBCheckEnabled, isBCheckDisabled } from '../../store/slice/domandeAddFormSlice';

interface Props{ IDDomanda: string}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const EmptyAnswerLineEditor = ({ IDDomanda }: Props) => {
  const dispatch = useDispatch();
  const NON_DIGIT = '/[^0-9]/g';
  useEffect(() => {
    dispatch(setAddRispostaUnclicked(IDDomanda));
  }, [dispatch, IDDomanda]);

  const typeRis = useSelector(typeAnswer);
  const disableActive = useSelector(isDisable);
  const stateTextField = useSelector(stateAddedRisposta);
  const rispostaText = useSelector(answer);
  const valoreText = useSelector(valore);
  const bCheckDisabled = useSelector(isBCheckDisabled);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />

        {stateTextField[IDDomanda]
          ? (
            <>
              <Grid item xs={12} sm={1}>
                <IconButton
                  disabled={disableActive}
                  onClick={() => {
                    dispatch(setAddRispostaClicked(IDDomanda));
                    dispatch(unsetIcons());
                    dispatch(disableAll());
                    dispatch(setBCheckDisabled());
                  }}
                  color="primary"
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>

            </>
          )
          : (
            <Grid item xs={12} sm={1}>
              <IconButton
                onClick={() => {
                  dispatch(addRisposta(IDDomanda));
                  dispatch(setIcons());
                  dispatch(enableAll());
                  dispatch(resetRispostaType(IDDomanda));
                }}
                color="primary"
                disabled={bCheckDisabled}
              >
                <CheckCircleOutlineIcon />
              </IconButton>
            </Grid>
          )}
        {typeRis[IDDomanda] !== 'data'
          ? (
            <>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={2} />
              <Grid item xs={12} sm={4}>

                <TextField
                  value={rispostaText[IDDomanda] || ''}
                  onChange={(event) => {
                    const { value } = event.target;
                    if (value === '') {
                      dispatch(setBCheckDisabled());
                    } else if (bCheckDisabled === true) {
                      dispatch(setBCheckEnabled());
                    }
                    dispatch(setAnswer({ IDDomanda, value }));
                    dispatch(setAnswer({ IDDomanda, value }));
                  }}
                  disabled={stateTextField[IDDomanda]}
                  id="standard-basic"
                  fullWidth
                />

              </Grid>
              <Grid item xs={12} sm={1}>
                <TextField
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
            </>
          ) : (
            <>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={2} />
              <Grid item xs={12} sm={4}>

                <TextField
                  value={rispostaText[IDDomanda] || ''}
                  onChange={(event) => {
                    const { value } = event.target;
                  }}
                  disabled={stateTextField[IDDomanda]}
                  id="standard-basic"
                  fullWidth
                />

              </Grid>
              <Grid item xs={12} sm={1} />
            </>
          )}
        {!stateTextField[IDDomanda]
          ? (
            <>
              <Grid item xs={12} sm={1}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      onClick={() => dispatch(setType(IDDomanda))}
                    />
          )}
                  label="data"
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                <FormControlLabel
                  control={(
                    <Checkbox />
          )}
                  label="libera"
                />
              </Grid>
            </>
          ) : <></>}

      </Grid>
    </div>
  );
};

export default EmptyAnswerLineEditor;
