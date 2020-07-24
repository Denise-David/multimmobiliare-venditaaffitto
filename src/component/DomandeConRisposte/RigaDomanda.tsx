import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { selectData } from '../../store/slice/domandeSlice';
import RigaRisposta from '../RigaRisposta/RigaRisposta';
import RigaRispostaVuota from '../RigaRispostaVuota/RigaRispostaVuota';
import RigaDomandaVuota from '../RigaDomandaVuota/RigaDomandaVuota';

const RigaRisulato = () => {
  const domande = useSelector(selectData);
  console.log(domande);
  const listItems = domande.map((domanda : any) => (
    /* eslint-disable*/
    <div>
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
      <Grid item xs={12} sm={10}>
        <TextField disabled id="standard-basic" value={domanda.Domanda} fullWidth />
      </Grid>
    </Grid>
    <RigaRisposta id={domanda.ID}/>
    <RigaRispostaVuota />
    </div>

  ));
  return (

    <div>{listItems}
    <RigaDomandaVuota />
    </div>
    

  );
};

export default RigaRisulato;
