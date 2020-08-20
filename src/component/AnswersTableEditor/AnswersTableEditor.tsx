import React from 'react';
import {
  Paper, AppBar, Typography, Grid, TextField, IconButton,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import {
  getRisposta1, setBModifyRis1Clicked, risposta1, risposta2, setBModifyRis2Clicked,
} from '../../store/slice/risposteAddFormSlice';

const AnswersTableEditor = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ris1 = useSelector(risposta1);
  const ris2 = useSelector(risposta2);
  return (
    <div>

      <Paper>
        <AppBar position="static" className={classes.NavColor}>
          <Typography variant="h5" align="center">
            Risposte
          </Typography>
        </AppBar>
        <div className={classes.padding}>
          <div className={classes.marginDivider}>
            <Grid container>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={10}>
                <Typography variant="subtitle1">
                  Risposta di riferimento*
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <IconButton onClick={() => dispatch(setBModifyRis1Clicked())} color="primary">
                  <CreateIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  value={ris1.risposta1}
                  disabled={ris1.stateText}
                  defaultValue="Si"
                  onChange={
                  (event) => {
                    const res1 = event.target.value;
                    dispatch(getRisposta1(res1));
                  }
                }
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={10}>
                <Typography variant="subtitle1">
                  Risposta secondaria
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <IconButton onClick={() => dispatch(setBModifyRis2Clicked())} color="primary">
                  <CreateIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  value={ris2.risposta2}
                  disabled={ris2.stateText}
                  defaultValue="No"
                  onChange={
                  (event) => {
                    const res2 = event.target.value;
                    dispatch(getRisposta1(res2));
                  }
                }
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Typography variant="body1" className={classes.marginTop}>
              * La risposta di riferimento è la risposta interessata, cioè
              la risposta di cui si visualizzerà la domanda, sotto forma di
              affermazione.
            </Typography>
          </div>

        </div>
      </Paper>
    </div>
  );
};

export default AnswersTableEditor;
