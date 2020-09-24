import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setRispostaTipoData } from '../../../../../store/slice/risposteAddFormSlice';

interface Props{rispostaArray : any, id: string, IDRisposta: string}

const CheckboxDataAnswerLine = ({ rispostaArray, id, IDRisposta } : Props) => {
  const dispatch = useDispatch();
  const IDDomanda = id;
  if (rispostaArray.type === 'data') {
    return (
      <FormControlLabel
        control={(
          <Checkbox
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
          checked={false}
          onClick={() => dispatch(setRispostaTipoData({ IDDomanda, IDRisposta }))}
        />
)}
      label="data"
    />
  );
};
export default CheckboxDataAnswerLine;
