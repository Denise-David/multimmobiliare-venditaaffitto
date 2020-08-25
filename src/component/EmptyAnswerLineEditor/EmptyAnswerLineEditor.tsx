import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  isDisable, colDisable,
} from '../../store/slice/editFormSlice';
import {
  setAddRispostaClicked, stateAddedRisposta,
  setAddRispostaUnclicked, setAnswer, setValore, addRisposta,
} from '../../store/slice/risposteAddFormSlice';

interface Props{ IDDomanda: string}

const EmptyAnswerLineEditor = ({ IDDomanda }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAddRispostaUnclicked(IDDomanda));
  }, [dispatch]);

  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);
  const stateTextField = useSelector(stateAddedRisposta);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />

        {stateTextField[IDDomanda]
          ? (
            <Grid item xs={12} sm={1}>
              <IconButton disabled={disableActive}>
                <AddCircleOutlineIcon
                  onClick={() => dispatch(setAddRispostaClicked(IDDomanda))}
                  color={colorButton}
                />
              </IconButton>
            </Grid>

          )
          : (
            <Grid item xs={12} sm={1}>
              <IconButton onClick={() => (dispatch(addRisposta(IDDomanda)))} color="primary">
                <CheckCircleOutlineIcon />
              </IconButton>
            </Grid>
          )}

        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={4}>

          <TextField
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setAnswer(value));
            }}
            disabled={stateTextField[IDDomanda]}
            id="standard-basic"
            fullWidth
          />

        </Grid>
        <Grid item xs={12} sm={1}>
          <TextField
            onChange={(event) => {
              const { value } = event.target;
              dispatch(setValore(value));
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
