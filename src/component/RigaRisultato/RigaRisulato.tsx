import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { formData } from '../../store/slice/risultatiFormularioSlice';
import RigaRisultatoVuota from '../RigaRisultatoVuota/RigaRisultatoVuota';

const RigaRisulato = () => {
  const listForm = useSelector(formData);
  const listItems = listForm ? listForm.Risultati.map((oneForm) => (

    // eslint-disable-next-line react/jsx-key
    <Grid container spacing={3}>
      <Grid item xs={12} sm={1}>
        <IconButton>
          <CreateIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={1}>
        <IconButton>
          <DeleteIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField disabled id="standard-basic" value={oneForm.testoAnamnesi} fullWidth />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField disabled id="standard-basic" value={oneForm.valoreMin} fullWidth />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField disabled id="standard-basic" value={oneForm.valoreMax} fullWidth />
      </Grid>
    </Grid>

  )) : <></>;
  return (
    <div>
      {listItems}
      <RigaRisultatoVuota />

    </div>
  );
};

export default RigaRisulato;
