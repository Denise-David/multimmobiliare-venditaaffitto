import React, { useEffect, useState } from 'react';
import {
  FormControlLabel, Checkbox,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import {

  setAddRispostaUnclicked,
  setType,
  typeAnswer,
} from '../../../../store/slice/risposteAddFormSlice';
import ButtonEmptyAnsweLine from './ButtonEmptyAnswerLine/ButtonEmptyAnsweLine';
import TextFieldEmptyAnswerLine from './TextFieldEmptyAnswerLine/TextFieldEmptyAnswerLine';
import useStyles from './style';

interface Props{ IDDomanda: string}

// Riga aggiunta risposta
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const EmptyAnswerLineEditor = ({ IDDomanda }: Props) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const typeRis = useSelector(typeAnswer);
  if (typeRis[IDDomanda] === 'data' && checked === false) {
    setChecked(!checked);
  } else if (typeRis[IDDomanda] !== 'data' && checked === true) {
    setChecked(!checked);
  }

  const classes = useStyles();

  useEffect(() => {
    dispatch(setAddRispostaUnclicked(IDDomanda));
  }, [dispatch, IDDomanda]);

  return (
    <div className={classes.margin}>
      <Grid

        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >

        <TextFieldEmptyAnswerLine IDDomanda={IDDomanda} />

        <Grid item xs={12} sm={1}>
          <FormControlLabel
            checked={checked}
            control={(
              <Checkbox
                onClick={() => dispatch(setType(IDDomanda))}
              />
          )}
            label="data"
          />
        </Grid>

        <ButtonEmptyAnsweLine IDDomanda={IDDomanda} />

      </Grid>
    </div>
  );
};

export default EmptyAnswerLineEditor;
