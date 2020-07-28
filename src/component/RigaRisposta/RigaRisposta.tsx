import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Domanda, Risposta } from '../../store/slice/formSlice';
// eslint-disable-next-line no-unused-vars
import { State } from '../../store/store/store';
import { modifyRispostaAction } from '../../store/slice/editFormSlice';

interface Props {id : number}

const RigaRisulato = ({ id }: Props) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const risposte = useSelector((state: State) => state.form.dataDomande.find((d: Domanda) => d.ID === id)?.Risposte);
  // eslint-disable-next-line
  const listItems = risposte ? risposte.map((risposta : Risposta) => (

    // eslint-disable-next-line react/jsx-key
    <Grid container spacing={3}>
      <Grid item xs={12} sm={1}>
        <IconButton onClick={() => dispatch(modifyRispostaAction(risposta.ID))}>
          <CreateIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={1}>
        <IconButton>
          <DeleteIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={5} />
      <Grid item xs={12} sm={4}>
        <TextField disabled id="standard-basic" value={risposta.risposta} fullWidth />
      </Grid>
      <Grid item xs={12} sm={1}>
        <TextField disabled id="standard-basic" value={risposta.valore} fullWidth />
      </Grid>

    </Grid>
  )) : <></>;

  return (
    <div>
      {listItems}
    </div>

  );
};

export default RigaRisulato;
