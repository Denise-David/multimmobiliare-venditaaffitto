import React, { useState } from 'react';
import {
  Paper, AppBar, Typography, Grid, Divider, IconButton, Collapse,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ResultLineEditor from '../ResultLineEditor/ResultLineEditor';
import useStyles from './style';

const ResultTableEditor = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>

      <Paper>
        <AppBar position="static" className={classes.NavColor}>
          <Typography variant="h5" align="left">
            {expanded
              ? (
                <IconButton onClick={handleExpandClick} className={classes.space}>
                  <ExpandLessIcon fontSize="large" color="secondary" />
                </IconButton>
              ) : (
                <IconButton onClick={handleExpandClick} className={classes.space}>
                  <ExpandMoreIcon fontSize="large" color="secondary" />
                </IconButton>
              ) }
            Risultati
          </Typography>
        </AppBar>
        <Collapse in={expanded}>
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
        </Collapse>
      </Paper>
    </div>
  );
};

export default ResultTableEditor;
