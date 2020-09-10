import React from 'react';
import { AppBar, Typography, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';
import { setExpanded, tableTwoAnsExpanded } from '../../store/slice/risposteAddFormSlice';

const HeaderRisposteDueRisposte = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const expanded = useSelector(tableTwoAnsExpanded);

  return (
    <>
      <AppBar position="static" className={classes.NavColor}>

        <Typography variant="h5" align="left">
          <IconButton onClick={() => dispatch(setExpanded())} className={classes.space}>
            {expanded
              ? <ExpandLessIcon fontSize="large" color="secondary" />
              : <ExpandMoreIcon fontSize="large" color="secondary" />}
          </IconButton>

          Risposte
        </Typography>
        )

      </AppBar>

    </>
  );
};

export default HeaderRisposteDueRisposte;
