import React from 'react';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { selectData } from '../../store/slice/formSlice';
import RigaRisposta from '../RigaRisposta/RigaRisposta';
import RigaRispostaVuota from '../RigaRispostaVuota/RigaRispostaVuota';
import RigaDomandaVuota from '../RigaDomandaVuota/RigaDomandaVuota';
import {
  modifyDomandaAction, stateTextField, iconCurrent, confirmAction,
} from '../../store/slice/editFormSlice';

const RigaRisulato = () => {
  const dispatch = useDispatch();
  const domande = useSelector(selectData);
  const textFieldState = useSelector(stateTextField);
  const icon = useSelector(iconCurrent);

  const confirmation = () => {
    dispatch(confirmAction());
  };

  const modifyState = () => {
    dispatch(modifyDomandaAction());
  };

  if (domande !== null) {
    if (icon === 'modify') {
      const listItems = domande.map((domanda : any) => (
        /* eslint-disable*/
    <div>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={1}>
        <IconButton onClick={modifyState}>
          <CreateIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={1}>
        <IconButton >
          <DeleteIcon color="primary" />
        </IconButton >
      </Grid>
      <Grid item xs={12} sm={10}>
        <TextField disabled={textFieldState} value={domanda.Domanda} fullWidth />
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
      
      
      } else
      {
        const listItems = domande.map((domanda : any) => (
          /* eslint-disable*/
   <div>
   <Grid container spacing={3}>
     <Grid item xs={12} sm={1}>
       <IconButton onClick={confirmation}>
         <CheckCircleOutlineIcon color="primary"/>
       </IconButton>
     </Grid>
     <Grid item xs={12} sm={1}>
       <IconButton >
         <DeleteIcon color="primary" />
       </IconButton >
     </Grid>
     <Grid item xs={12} sm={10}>
       <TextField disabled={textFieldState} value={domanda.Domanda} fullWidth />
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
    }
      }

  else {

    return (
         <div>

         </div>

    );

  }
};

export default RigaRisulato;
