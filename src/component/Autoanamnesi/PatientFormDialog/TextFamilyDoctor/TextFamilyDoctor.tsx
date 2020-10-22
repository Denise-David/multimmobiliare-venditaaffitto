import React, { ReactElement, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked,
  setFieldFamilyDoctorEmpty,
  unsetFieldFamilyDoctorEmpty,
  fieldFamilyDoctorEmpty,
} from '../../../../store/slice/patientDataSlice';
import { getStringMedico } from '../../../../util';

/**
 * Campo medico di famiglia
 */
const TextFamilyDoctor = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const dispatch = useDispatch();
  const disabled = useSelector(textFieldDisabled);
  const cancClicked = useSelector(cancelClicked);
  const error = useSelector(fieldFamilyDoctorEmpty);

  useEffect(() => {
    if (disabled === false) {
      if (dataEtichetta) {
        if (dataEtichetta.familyDoctor === null) {
          dispatch(setFieldFamilyDoctorEmpty());
        } else if (dataEtichetta.familyDoctor !== null) {
          dispatch(unsetFieldFamilyDoctorEmpty());
        }
      }
    } else if (cancClicked === true) {
      dispatch(unsetFieldFamilyDoctorEmpty());
    }
  });

  return (
    <TextField
      fullWidth
      disabled
      error={error}
      label="Medico di famiglia"
      value={getStringMedico(dataEtichetta ? dataEtichetta.familyDoctor : {})}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'nameFamilyDoctor';
        dispatch(changePatientValue({ name, value }));
      }}
    />
  );
};

export default TextFamilyDoctor;
