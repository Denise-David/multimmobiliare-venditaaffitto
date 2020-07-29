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
  modifyDomandaAction, stateTextField, ddl,
} from '../../store/slice/editFormSlice';

const RigaRisulato = () => {
  const dispatch = useDispatch();
  const domande = useSelector(selectData);
  const textFieldState = useSelector(stateTextField);

  if (domande !== null) {
    const listItems = domande.map((domanda : any) => (
      <div key={domanda.ID}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={1}>
            <IconButton onClick={() => dispatch(modifyDomandaAction(domanda.ID))}>
              {textFieldState[domanda.ID] ? <CreateIcon color="primary" /> : <CheckCircleOutlineIcon color="primary" /> }
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={1}>
            <IconButton>
              <DeleteIcon color="primary" />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField disabled={textFieldState[domanda.ID]} value={domanda.Domanda} fullWidth />
          </Grid>
        </Grid>
        <RigaRisposta id={domanda.ID} />
        <RigaRispostaVuota />
      </div>
    ));
    return (

      <div>
        {listItems}
        <RigaDomandaVuota />
      </div>
    );
  }
  return (
    <div />
  );
};

export default RigaRisulato;
