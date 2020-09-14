import React from 'react';
import {
  AppBar, Typography, IconButton, Menu, MenuItem, Checkbox,
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import { setRisposteTutteUguali, risposteTutteUguali } from '../../store/slice/menuDomandeERisposteSlice';
import { resetRisposteOfDomanda } from '../../store/slice/risposteAddFormSlice';
import { expandedTable, expandTable } from '../../store/slice/domandeAddFormSlice';

const NavQuestionsAndAnswers = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const classes = useStyles();
  const risTutteUguali = useSelector(risposteTutteUguali);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const expanded = useSelector(expandedTable);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.NavColor}>

      <Typography variant="h5" align="left">
        {expanded
          ? (
            <IconButton onClick={() => dispatch(expandTable())} className={classes.space}>
              <ExpandLessIcon fontSize="large" color="secondary" />
            </IconButton>
          ) : (
            <IconButton onClick={() => dispatch(expandTable())} className={classes.space}>
              <ExpandMoreIcon fontSize="large" color="secondary" />
            </IconButton>
          ) }
        Domande e risposte
        <IconButton
          className={classes.spaceleft}
          color="secondary"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
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
        </Menu>
      </Typography>
    </AppBar>
  );
};

export default NavQuestionsAndAnswers;
