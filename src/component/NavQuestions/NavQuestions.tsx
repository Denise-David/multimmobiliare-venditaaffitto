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
  setIntestazioneAttiva, intestazioneAttiva, setGroupAttivi, raggruppaAttivo,
} from '../../store/slice/menuDomandeSlice';

import {
  expandedTableQuestion, expandTableQuestion, resetIntestazioneMoreAns,
} from '../../store/slice/domandeAddFormSlice';
import { openDialogGroup } from '../../store/slice/dialogSlice';
import { intestazioneMoreAnsAttiva, setIntestazioneMoreAnsAttiva } from '../../store/slice/menuDomandeERisposteSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import confirmAddForm from '../../store/sagas/departmentChoiceEditorSagas';

const NavQuestions = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const classes = useStyles();
  const intestazione = useSelector(intestazioneAttiva);
  const group = useSelector(raggruppaAttivo);
  const intMoreAns = useSelector(intestazioneMoreAnsAttiva);
  const rightMod = useSelector(haveRepModifyRight);
  const confirmClicked = useSelector(confirmAddForm);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const expanded = useSelector(expandedTableQuestion);

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
              <IconButton onClick={() => dispatch(expandTableQuestion())}>
                <ExpandLessIcon fontSize="large" color="secondary" />
              </IconButton>
            ) : (
              <IconButton onClick={() => dispatch(expandTableQuestion())}>
                <ExpandMoreIcon fontSize="large" color="secondary" />
              </IconButton>
            ) }
        </Grid>

        <Grid item xs={8} sm={4}>

          <Typography variant="h5" align="center">
            Domande
          </Typography>

        </Grid>
        {rightMod || confirmClicked
          ? (
            <Grid item xs={8} sm={1}>
              <IconButton
                color="secondary"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            </Grid>
          ) : <Grid item xs={8} sm={1} />}

        <>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => {
              dispatch(setIntestazioneAttiva());
              if (intMoreAns) {
                dispatch(setIntestazioneMoreAnsAttiva());
              }
              handleClose();
              if (intestazione) {
                dispatch(resetIntestazioneMoreAns());
              }
            }}
            >
              <Checkbox
                checked={intestazione}
                onClick={() => {
                  dispatch(setIntestazioneAttiva());
                  if (intMoreAns) {
                    dispatch(setIntestazioneMoreAnsAttiva());
                  }
                  handleClose();
                  if (intestazione) {
                    dispatch(resetIntestazioneMoreAns());
                  }
                }}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              metti intestazione

            </MenuItem>
            <MenuItem onClick={() => {
              dispatch(setGroupAttivi());
              handleClose();
              if (intestazione) {
                dispatch(resetIntestazioneMoreAns());
              }
            }}
            >
              <Checkbox
                checked={group}
                onClick={() => {
                  dispatch(setGroupAttivi());
                  handleClose();
                  if (intestazione) {
                    dispatch(resetIntestazioneMoreAns());
                  }
                }}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              raggruppa

            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              onClick={() => {
                dispatch(openDialogGroup());
                handleClose();
              }}
            >

              <Grid item xs={12} sm={2} />
              <Grid item xs={12} sm={10}>
                gestisci gruppi
              </Grid>
            </MenuItem>
          </Menu>
        </>

      </Grid>
    </AppBar>

  );
};

export default NavQuestions;
