import React from 'react';
import {
  Paper, AppBar, Typography, Grid, TextField, IconButton,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';

const AnswersTableEditor = () => {
  const classes = useStyles();
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
              <Grid item xs={12} sm={1}>
                <IconButton color="primary">
                  <CreateIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton color="primary">
                  <DeleteIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={10}>
                <Typography variant="subtitle1">
                  Risposta secondaria
                </Typography>
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton color="primary">
                  <CreateIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton color="primary">
                  <DeleteIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField fullWidth variant="outlined" />
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
