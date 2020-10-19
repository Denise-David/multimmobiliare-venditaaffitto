import React, { ReactElement } from 'react';
import {
  AppBar, Typography, IconButton, Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import { setExpanded, tableTwoAnsExpanded } from '../../../../store/slice/risposteAddFormSlice';

// Navbar della tabella risposte
const NavRisposteDueRisposte = ():ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const expanded = useSelector(tableTwoAnsExpanded);

  return (
    <>
      <AppBar position="static" className={classes.NavColor}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={4} sm={1}>
            {/* Bottone Menu */}
            <IconButton onClick={() => dispatch(setExpanded())} className={classes.space}>
              {expanded
                ? <ExpandLessIcon fontSize="large" color="secondary" />
                : <ExpandMoreIcon fontSize="large" color="secondary" />}
            </IconButton>
          </Grid>
          <Grid item xs={4} sm={2}>
            {/* Titolo tabella */}
            <Typography variant="h5" align="center">
              Risposte
            </Typography>
          </Grid>
          <Grid item xs={4} sm={1} />
        </Grid>
      </AppBar>

    </>
  );
};

export default NavRisposteDueRisposte;
