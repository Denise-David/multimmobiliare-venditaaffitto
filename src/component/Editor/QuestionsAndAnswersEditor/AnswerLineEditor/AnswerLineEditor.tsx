import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import {
  rispostaType,
  risposteOfDomandaObject,
} from '../../../../store/slice/risposteAddFormSlice';
import { objectToArray } from '../../../../util';
import { isBConfirmAddFormClicked } from '../../../../store/slice/addFormSlice';
import { haveRepModifyRight } from '../../../../store/slice/rightsSlice';
import TextFieldAnswerLine from './TextFieldAnswerLine/TextFieldAnswerLine';
import ButtonAnswerLine from './ButtonAnswerLine/ButtonAnswerLine';
import CheckboxDataAnswerLine from './CheckboxDataAnswerLine/CheckboxDataAnswerLine';

// eslint-disable-next-line max-len
interface Props {id : string}

// Riga risposta
const AnswerLineEditor = ({ id }: Props):ReactElement => {
  const risposteOFDomandeObj = useSelector(risposteOfDomandaObject);
  const IDDomanda = id;
  const rightRepModify = useSelector(haveRepModifyRight);
  const risposteOfDomanda = risposteOFDomandeObj[id] ? risposteOFDomandeObj[id] : {};
  const risposteArray = objectToArray(risposteOfDomanda);
  const confirmAddForm = useSelector(isBConfirmAddFormClicked);

  const listItems = risposteArray ? risposteArray.map((rispostaArray : rispostaType) => (
    <Grid
      key={rispostaArray.IDRisposta}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >

      <TextFieldAnswerLine
        rispostaArray={rispostaArray}
        id={IDDomanda}
        IDRisposta={rispostaArray.IDRisposta}
      />
      <Grid item xs={12} sm={1}>
        <CheckboxDataAnswerLine
          rispostaArray={rispostaArray}
          id={IDDomanda}
          IDRisposta={rispostaArray.IDRisposta}
        />
      </Grid>

      {rightRepModify || confirmAddForm
        ? (

          <ButtonAnswerLine
            rispostaArray={rispostaArray}
            id={IDDomanda}
            IDRisposta={rispostaArray.IDRisposta}
          />

        ) : (
          <>

          </>
        )}
    </Grid>
  )) : <></>;

  return (
    <div>

      {listItems}

    </div>

  );
};

export default AnswerLineEditor;
