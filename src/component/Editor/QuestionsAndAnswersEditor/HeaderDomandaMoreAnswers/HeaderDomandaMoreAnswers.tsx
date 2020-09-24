import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import useStyles from './style';
import { setDomandaFacoltativa, setDomandaLibera } from '../../../../store/slice/domandeAddFormSlice';

interface Props {IDDomanda : string, domanda : any}

const HeaderDomandaMoreAnswers = ({ IDDomanda, domanda }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <span className={classes.bordi}>

      <Typography variant="h6" align="left">
        Domanda
        {' '}
        <FormControlLabel
          control={(
            <Checkbox
              checked={domanda.facoltativa}
              onChange={() => dispatch(setDomandaFacoltativa(IDDomanda))}
            />
        )}
          label="facoltativa"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={domanda.libera}
              onChange={() => dispatch(setDomandaLibera(IDDomanda))}
            />
        )}
          label="libera"
        />
      </Typography>

    </span>
  );
};

export default HeaderDomandaMoreAnswers;
