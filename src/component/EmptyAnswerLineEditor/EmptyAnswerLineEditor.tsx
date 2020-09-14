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
} from '../../store/slice/risposteAddFormSlice';
import ButtonEmptyAnsweLine from '../ButtonEmptyAnswerLine/ButtonEmptyAnsweLine';
import TextFieldEmptyAnswerLine from '../TextFieldEmptyAnswerLine/TextFieldEmptyAnswerLine';

interface Props{ IDDomanda: string}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const EmptyAnswerLineEditor = ({ IDDomanda }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAddRispostaUnclicked(IDDomanda));
  }, [dispatch, IDDomanda]);

  const stateTextField = useSelector(stateAddedRisposta);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1} />
        <ButtonEmptyAnsweLine IDDomanda={IDDomanda} />
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
              <Grid item xs={12} sm={1}>
                <FormControlLabel
                  control={(
                    <Checkbox />
          )}
                  label="libera"
                />
              </Grid>
            </>
          ) : <></>}

      </Grid>
    </div>
  );
};

export default EmptyAnswerLineEditor;
