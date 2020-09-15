import React from 'react';
import {
  FormControlLabel, Checkbox,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import {
  risposteOfDomandaObject, unsetResAtLeast2,
} from '../../store/slice/risposteAddFormSlice';
import { objectToArray } from '../../util';
import { isBConfirmAddFormClicked } from '../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../store/slice/rightsSlice';
import TextFieldAnswerLine from '../TextFieldAnswerLine/TextFieldAnswerLine';
import ButtonAnswerLine from '../ButtonAnswerLine/ButtonAnswerLine';
import CheckboxDataAnswerLine from '../CheckboxDataAnswerLine/CheckboxDataAnswerLine';

// eslint-disable-next-line max-len
interface Props {id : string}

const AnswerLineEditor = ({ id }: Props) => {
  const dispatch = useDispatch();
  const risposteOFDomandeObj = useSelector(risposteOfDomandaObject);
  const IDDomanda = id;
  const rightRepModify = useSelector(haveRepModifyRight);
  const risposteOfDomanda = risposteOFDomandeObj[id] ? risposteOFDomandeObj[id] : {};
  const risposteArray = objectToArray(risposteOfDomanda);
  const confirmAddForm = useSelector(isBConfirmAddFormClicked);
  const numRisposte = risposteArray.length;

  const listItems = risposteArray ? risposteArray.map((rispostaArray : any, index) => {
    if (numRisposte < 2) {
      dispatch(unsetResAtLeast2());
    }
    return (
      <Grid key={rispostaArray.IDRisposta} container spacing={3}>
        {rightRepModify || confirmAddForm
          ? (
            <ButtonAnswerLine
              rispostaArray={rispostaArray}
              id={IDDomanda}
              IDRisposta={rispostaArray.IDRisposta}
            />
          ) : (
            <>
              {' '}
              <Grid item xs={12} sm={2} />
            </>
          )}
        <Grid item xs={12} sm={3} />
        <TextFieldAnswerLine
          rispostaArray={rispostaArray}
          id={IDDomanda}
          IDRisposta={rispostaArray.IDRisposta}
        />
        {rightRepModify || confirmAddForm
          ? (
            <>
              <Grid item xs={12} sm={1}>
                <CheckboxDataAnswerLine
                  rispostaArray={rispostaArray}
                  id={IDDomanda}
                  IDRisposta={rispostaArray.IDRisposta}
                />
              </Grid>
              <Grid item xs={12} sm={1}>
                <FormControlLabel
                  control={<Checkbox name="checkedA" />}
                  label="libera"
                />
              </Grid>
            </>
          ) : <></>}
      </Grid>
    );
  }) : <></>;

  return (
    <div>
      {listItems}
    </div>

  );
};

export default AnswerLineEditor;
