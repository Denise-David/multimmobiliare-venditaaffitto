import React from 'react';
import {
  AppBar, Typography, IconButton, Menu, MenuItem, Checkbox, Grid,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import {
  setRisposteTutteUguali, risposteTutteUguali, setIntestazioneAttiva, intestazioneAttiva,
} from '../../store/slice/menuDomandeERisposteSlice';
import { resetRisposteOfDomanda } from '../../store/slice/risposteAddFormSlice';
import { expandedTableMoreAnswers, expandTable, resetIntestazioneMoreAns } from '../../store/slice/domandeAddFormSlice';

const NavQuestionsAndAnswers = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const classes = useStyles();
  const risTutteUguali = useSelector(risposteTutteUguali);
  const intestazione = useSelector(intestazioneAttiva);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const expanded = useSelector(expandedTableMoreAnswers);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <AppBar position="static" className={classes.NavColor}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={8} sm={1}>
          {expanded
            ? (
              <IconButton onClick={() => dispatch(expandTable())}>
                <ExpandLessIcon fontSize="large" color="secondary" />
              </IconButton>
            ) : (
              <IconButton onClick={() => dispatch(expandTable())}>
                <ExpandMoreIcon fontSize="large" color="secondary" />
              </IconButton>
            ) }
        </Grid>

        <Grid item xs={8} sm={4}>

          <Typography variant="h5" align="center">
            Domande a più risposte
          </Typography>

        </Grid>

        <Grid item xs={8} sm={1}>
          <IconButton
            color="secondary"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Grid>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {
            dispatch(setRisposteTutteUguali());
            handleClose();
            if (!risTutteUguali) {
              dispatch(resetRisposteOfDomanda());
            }
          }}
          >
            imposta risposte tutte uguali
            <Checkbox
              checked={risTutteUguali}
              onChange={() => {
                dispatch(setRisposteTutteUguali());
                handleClose();
                if (!risTutteUguali) {
                  dispatch(resetRisposteOfDomanda());
                }
              }}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </MenuItem>
          <MenuItem onClick={() => {
            dispatch(setIntestazioneAttiva());
            handleClose();
            if (intestazione) {
              dispatch(resetIntestazioneMoreAns());
            }
          }}
          >
            metti intestazione
            <Checkbox
              checked={intestazione}
              onClick={() => {
                dispatch(setIntestazioneAttiva());
                handleClose();
                if (intestazione) {
                  dispatch(resetIntestazioneMoreAns());
                }
              }}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </MenuItem>
        </Menu>
      </Grid>
    </AppBar>

  );
};

export default NavQuestionsAndAnswers;
