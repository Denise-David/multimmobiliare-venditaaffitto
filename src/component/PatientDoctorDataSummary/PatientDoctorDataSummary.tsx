import React from 'react';
import { useSelector } from 'react-redux';
import { newPatientInfo, oldPatientInfo } from '../../store/slice/patientDataSlice';
import { getStringMedico } from '../../util';
import useStyles from './style';

const PatientDoctorDataSummary = () => {
  const dataPatient = useSelector(newPatientInfo);
  const oldDataPatient = useSelector(oldPatientInfo);
  const classes = useStyles();
  return (
    <>
      {dataPatient.doctor
        && (
        <>
          { getStringMedico(dataPatient.doctor)
          === getStringMedico(oldDataPatient.doctor)
            ? (
              <>
                <span>
                  Medico inviante:
                  {' '}
                  {getStringMedico(oldDataPatient.doctor)}
                </span>

              </>
            )
            : (
              <span className={classes.color}>
                Medico inviante:
                {' '}
                <span className={classes.oldData}>
                  {getStringMedico(oldDataPatient.doctor)}
                </span>
                {' '}
                Nuovo:
                {' '}
                {getStringMedico(dataPatient.doctor)}
              </span>
            )}
        </>
        )}

      <br />
      {dataPatient.familyDoctor
        && (
        <>
          { getStringMedico(dataPatient.familyDoctor)
          === getStringMedico(oldDataPatient.familyDoctor)
            ? (
              <>
                <span>
                  Medico di famiglia:
                  {' '}
                  {getStringMedico(oldDataPatient.familyDoctor)}
                </span>

              </>
            )
            : (
              <span className={classes.color}>
                Medico di famiglia:
                {' '}
                <span className={classes.oldData}>
                  {getStringMedico(oldDataPatient.familyDoctor)}
                </span>
                {' '}
                Nuovo:
                {' '}
                {getStringMedico(dataPatient.familyDoctor)}
              </span>
            )}
        </>
        )}
    </>
  );
};

export default PatientDoctorDataSummary;
