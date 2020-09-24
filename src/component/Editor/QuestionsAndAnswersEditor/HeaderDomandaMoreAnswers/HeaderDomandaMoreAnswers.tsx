import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './style';

const HeaderDomandaMoreAnswers = () => {
  const classes = useStyles();

  return (
    <span className={classes.bordi}>

      <Typography variant="h6" align="left">
        Domanda
      </Typography>

    </span>
  );
};

export default HeaderDomandaMoreAnswers;
