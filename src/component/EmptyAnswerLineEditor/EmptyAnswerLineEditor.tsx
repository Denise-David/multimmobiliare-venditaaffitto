import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
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
  answer, valore,
} from '../../store/slice/risposteAddFormSlice';
import { setIcons, unsetIcons } from '../../store/slice/addFormSlice';

interface Props{ IDDomanda: string}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const EmptyAnswerLineEditor = ({ IDDomanda }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAddRispostaUnclicked(IDDomanda));
  }, [dispatch, IDDomanda]);

  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);
  const stateTextField = useSelector(stateAddedRisposta);
  const rispostaText = useSelector(answer);
  const valoreText = useSelector(valore);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />

        {stateTextField[IDDomanda]
          ? (
            <Grid item xs={12} sm={1}>
              <IconButton disabled={disableActive}>
                <AddCircleOutlineIcon
                  onClick={() => {
                    dispatch(setAddRispostaClicked(IDDomanda));
                    dispatch(unsetIcons());
                    dispatch(disableAll());
                  }}
                  color={colorButton}
                />
              </IconButton>
            </Grid>

          )
          : (
            <Grid item xs={12} sm={1}>
              <IconButton
                onClick={() => {
                  dispatch(addRisposta(IDDomanda));
                  dispatch(setIcons());
                  dispatch(enableAll());
                }}
                color="primary"
              >
                <CheckCircleOutlineIcon />
              </IconButton>
            </Grid>
          )}

        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={4}>

          <TextField
            value={rispostaText[IDDomanda] || ''}
            onChange={(event) => {
              const { value } = event.target;
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
              dispatch(setValore({ IDDomanda, value }));
            }}
            disabled={stateTextField[IDDomanda]}
            id="standard-basic"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default EmptyAnswerLineEditor;
