import React, { ReactElement, useState } from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { rispostaType, setRispostaTipoData } from '../../../../../store/slice/risposteAddFormSlice';
import { haveRepModifyRight } from '../../../../../store/slice/rightsSlice';
import { isBConfirmAddFormClicked, setUnsavedChanges } from '../../../../../store/slice/addFormSlice';

interface Props{rispostaArray : rispostaType, id: string, IDRisposta: string}

/**
 * Checkbox risposta
 */
const CheckboxDataAnswerLine = ({ rispostaArray, id, IDRisposta } : Props):ReactElement => {
  const dispatch = useDispatch();
  const rightMod = useSelector(haveRepModifyRight);
  const confirmClicked = useSelector(isBConfirmAddFormClicked);
  const [disabled, setDisabled] = useState(false);

  if ((rightMod || confirmClicked) && disabled === true) {
    setDisabled(!disabled);
  } else if ((!rightMod && !confirmClicked) && disabled === false) {
    setDisabled(!disabled);
  }
  const IDDomanda = id;
  if (rispostaArray.type === 'data') {
    return (
      <FormControlLabel
        control={(
          <Checkbox
            disabled={disabled}
            checked
            onClick={() => dispatch(setRispostaTipoData({ IDDomanda, IDRisposta }))}
          />
)}
        label="data"
      />
    );
  } return (
    <FormControlLabel
      control={(
        <Checkbox
          disabled={disabled}
          checked={false}
          onClick={() => {
            dispatch(setUnsavedChanges());
            dispatch(setRispostaTipoData({ IDDomanda, IDRisposta }));
          }}
        />
)}
      label="data"
    />
  );
};
export default CheckboxDataAnswerLine;
