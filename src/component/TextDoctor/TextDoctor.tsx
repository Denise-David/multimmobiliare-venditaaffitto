import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { allDataEtichetta } from '../../store/slice/patientDataSlice';

const TextLastname = () => {
  const dataEtichetta = useSelector(allDataEtichetta);
  const familyDoctorName = dataEtichetta.data.hcase.doctor.givenname;
  const familyDoctorFamilyName = dataEtichetta.data.hcase.doctor.familyname;
  return (
    <TextField fullWidth label="Medico inviante" value={familyDoctorFamilyName.concat(' ', familyDoctorName)} />
  );
};

export default TextLastname;
