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
  setRisposteTutteUguali, risposteTutteUguali, setIntestazioneMoreAnsAttiva,
  intestazioneMoreAnsAttiva, raggruppaAttivo, setGroupAttivi,
} from '../../../../store/slice/menuDomandeERisposteSlice';
import { resetRisposteOfDomanda } from '../../../../store/slice/risposteAddFormSlice';
import { expandedTableMoreAnswers, expandTable, resetIntestazioneMoreAns } from '../../../../store/slice/domandeAddFormSlice';
import { openDialogGroup } from '../../../../store/slice/dialogSlice';
import { intestazioneAttiva, setIntestazioneAttiva } from '../../../../store/slice/menuDomandeSlice';
import { haveRepModifyRight } from '../../../../store/slice/rightsSlice';
import { isBConfirmAddFormClicked } from '../../../../store/slice/addFormSlice';

const NavQuestionsAndAnswers = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const classes = useStyles();
  const intTwoAns = useSelector(intestazioneAttiva);
  const risTutteUguali = useSelector(risposteTutteUguali);
  const intestazione = useSelector(intestazioneMoreAnsAttiva);
  const group = useSelector(raggruppaAttivo);
  const rightMod = useSelector(haveRepModifyRight);
  const confirmClicked = useSelector(isBConfirmAddFormClicked);
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

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Grid container />
          <MenuItem onClick={() => {
            dispatch(setRisposteTutteUguali());
            handleClose();
            if (!risTutteUguali) {
              dispatch(resetRisposteOfDomanda());
            }
          }}
          >
            <Grid item xs={12} sm={2}>
              <Checkbox
                checked={risTutteUguali}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              imposta risposte tutte uguali
            </Grid>
          </MenuItem>
          <MenuItem onClick={() => {
            dispatch(setIntestazioneMoreAnsAttiva());
            if (intTwoAns) {
              dispatch(setIntestazioneAttiva());
            }

            handleClose();
            if (intestazione) {
              dispatch(resetIntestazioneMoreAns());
            }
          }}
          >
            <Checkbox
              checked={intestazione}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            metti intestazione

          </MenuItem>
          <MenuItem onClick={() => {
            dispatch(setGroupAttivi());
            handleClose();
          }}
          >
            <Checkbox
              checked={group}
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
      </Grid>
    </AppBar>

  );
};

export default NavQuestionsAndAnswers;
