import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { Domanda, Risposta } from '../../store/slice/formSlice';
import { State } from '../../store/store/store';
import { colDisable, isDisable } from '../../store/slice/editFormSlice';

interface Props {id : string}

const AnswerLineEditor = ({ id }: Props) => {
  const colorButton = useSelector(colDisable);
  const disableActive = useSelector(isDisable);

  // eslint-disable-next-line max-len
  const risposte = useSelector((state: State) => state.form.dataDomande.find((d: Domanda) => d.ID === id)?.Risposte);
  const listItems = risposte ? risposte.map((risposta : Risposta) => (

    <Grid key={risposta.ID} container spacing={3}>
      <Grid item xs={12} sm={1}>
        <IconButton disabled={disableActive}>
          <CreateIcon color={colorButton} />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={1}>
        <IconButton disabled={disableActive}>
          <DeleteIcon color={colorButton} />
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

export default AnswerLineEditor;
