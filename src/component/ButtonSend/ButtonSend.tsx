import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './style';

const ButtonSend = () => {
  const classes = useStyles();
  return (
    <Button className={classes.margin} variant="contained" color="primary" href="/about">
      Invia
    </Button>
  );
};

export default ButtonSend;
