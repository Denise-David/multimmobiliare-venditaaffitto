import React from 'react';
import {
  Paper, Typography, Grid, Collapse,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './style';
import {
  tableTwoAnsExpanded,
} from '../../store/slice/risposteAddFormSlice';
import {
} from '../../store/slice/domandeAddFormSlice';
import HeaderRisposteDueRisposte from '../HeaderRisposteDueRisposte/HeaderRisposteDueRisposte';
import Risposta1Line from '../Risposta1Line/Risposta1Line';
import Risposta2Line from '../Risposta2Line/Risposta2Line';

const AnswersTableEditor = () => {
  const classes = useStyles();
  const expanded = useSelector(tableTwoAnsExpanded);

  return (

    <Paper>

      <HeaderRisposteDueRisposte />
      <Collapse in={expanded}>
        <div className={classes.padding}>
          <div className={classes.marginDivider}>
            <Grid container>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={1} />
              <Risposta1Line />
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={1} />
              <Risposta2Line />
            </Grid>
            <Typography variant="body1" className={classes.marginTop}>
              * La risposta di riferimento è la risposta interessata, cioè
              la risposta di cui si visualizzerà la domanda, sotto forma di
              affermazione.
            </Typography>
          </div>

        </div>
      </Collapse>

    </Paper>

  );
};

export default AnswersTableEditor;
