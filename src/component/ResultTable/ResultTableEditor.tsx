import React from 'react';
import {
  Paper, AppBar, Typography, Grid, Divider,
} from '@material-ui/core';
import ResultLineEditor from '../ResultLineEditor/ResultLineEditor';
import useStyles from './style';

const ResultTableEditor = () => {
  const classes = useStyles();

  return (
    <div>

      <Paper>
        <AppBar position="static" className={classes.NavColor}>
          <Typography variant="h5" align="center">
            Risultati
          </Typography>
        </AppBar>
        <div className={classes.padding}>
          <div className={classes.marginDivider}>
            <Grid container>
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={1} />
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" align="center">
                  Testo anamnesi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle1" align="center">
                  Valore min
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography variant="subtitle1" align="center">
                  Valore max
                </Typography>
              </Grid>
            </Grid>
            <Divider />
          </div>
          <ResultLineEditor />
        </div>
      </Paper>
    </div>
  );
};

export default ResultTableEditor;
