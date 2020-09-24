import React, { useEffect } from 'react';
import {
  FormControlLabel, Checkbox,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import {
  stateAddedRisposta,
  setAddRispostaUnclicked,
  setType,
} from '../../../../store/slice/risposteAddFormSlice';
import ButtonEmptyAnsweLine from './ButtonEmptyAnswerLine/ButtonEmptyAnsweLine';
import TextFieldEmptyAnswerLine from './TextFieldEmptyAnswerLine/TextFieldEmptyAnswerLine';
import useStyles from './style';

interface Props{ IDDomanda: string}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const EmptyAnswerLineEditor = ({ IDDomanda }: Props) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(setAddRispostaUnclicked(IDDomanda));
  }, [dispatch, IDDomanda]);

  const stateTextField = useSelector(stateAddedRisposta);

  return (
    <div className={classes.margin}>
      <Grid

        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >

        <TextFieldEmptyAnswerLine IDDomanda={IDDomanda} />
        {!stateTextField[IDDomanda]
          ? (
            <>
              <Grid item xs={12} sm={1}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      onClick={() => dispatch(setType(IDDomanda))}
                    />
          )}
                  label="data"
                />
              </Grid>

            </>
          ) : (
            <>

            </>
          )}
        <ButtonEmptyAnsweLine IDDomanda={IDDomanda} />

      </Grid>
    </div>
  );
};

export default EmptyAnswerLineEditor;
