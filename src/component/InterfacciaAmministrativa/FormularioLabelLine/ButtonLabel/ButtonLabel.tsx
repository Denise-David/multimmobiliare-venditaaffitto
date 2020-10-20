import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './style';

// Bottone apri gestione etichetta
const ButtonLabel = ():ReactElement => {
  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.margin}
        variant="contained"
        color="primary"

      >
        Gestisci etichetta
      </Button>
    </div>
  );
};

export default ButtonLabel;
