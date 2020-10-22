import React, { ReactElement, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {
  newPatientInfo, changePatientValue, textFieldDisabled,
  cancelClicked, setFieldFDoctorEmpty, unsetFieldDoctorEmpty, fieldDoctorEmpty,
} from '../../../../store/slice/patientDataSlice';
import { getStringMedico } from '../../../../util';

/**
 * Campo dottore inviante
 */
const Doctor = ():ReactElement => {
  const dataEtichetta = useSelector(newPatientInfo);
  const disabled = useSelector(textFieldDisabled);
  const dispatch = useDispatch();
  const cancClicked = useSelector(cancelClicked);
  const error = useSelector(fieldDoctorEmpty);

  useEffect(() => {
    if (disabled === false) {
      if (dataEtichetta) {
        if (dataEtichetta.doctor === null) {
          dispatch(setFieldFDoctorEmpty());
        } else if (dataEtichetta.doctor !== null) {
          dispatch(unsetFieldDoctorEmpty());
        }
      }
    } else if (cancClicked === true) {
      dispatch(unsetFieldDoctorEmpty());
    }
  });

  return (
    <TextField
      fullWidth
      disabled
      error={error}
      label="Medico inviante"
      value={getStringMedico(dataEtichetta ? dataEtichetta.doctor : {})}
      onChange={(event) => {
        const { value } = event.target;
        const name = 'doctor';
        dispatch(changePatientValue({ name, value }));
        if (value !== '') {
          dispatch(unsetFieldDoctorEmpty());
        } else if ((value === '' || value === ' ')) {
          dispatch(setFieldFDoctorEmpty());
        }
      }}
    />
  );
};

export default Doctor;
