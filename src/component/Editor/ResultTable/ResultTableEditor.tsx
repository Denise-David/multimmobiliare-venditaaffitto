import React, { ReactElement, useState } from 'react';
import {
  Paper, AppBar, Typography, Grid, Divider, IconButton, Collapse,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ResultLineEditor from './ResultLineEditor/ResultLineEditor';
import useStyles from './style';
import EmptyResultLineEditor from './EmptyResultLineEditor/EmptyResultLineEditor';

// Tabella risultati
const ResultTableEditor = ():ReactElement => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>

      <Paper>

        <AppBar position="static" className={classes.NavColor}>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={4} sm={1}>
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
            </Grid>
            <Grid item xs={4} sm={2}>
              <Typography variant="h5" align="center">
                Risultati
              </Typography>
            </Grid>
            <Grid item xs={4} sm={1} />
          </Grid>
        </AppBar>

        <Collapse in={expanded}>

          <div className={classes.padding}>
            <div className={classes.marginDivider}>
              <Grid container>
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
            <EmptyResultLineEditor />
          </div>

        </Collapse>
      </Paper>
    </div>
  );
};

export default ResultTableEditor;
