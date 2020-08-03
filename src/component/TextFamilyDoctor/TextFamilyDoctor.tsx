import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/datiPazienteSlice';

const TextLastname = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  const familyDoctorName = dataEtichetta.data.hcase.familyDoctor.givenname;
  const familyDoctorFamilyName = dataEtichetta.data.hcase.familyDoctor.familyname;
  return (
    <TextField fullWidth label="Medico di famiglia" value={familyDoctorFamilyName.concat(' ', familyDoctorName)} />
  );
};

export default TextLastname;
