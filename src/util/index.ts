export interface Medico {
  givenname?: string;
  familyname?: string;
  firstname?: string;
  lastname?: string;
  city: string;
}

// eslint-disable-next-line import/prefer-default-export
export function getStringMedico(medico: Medico): string {
  return `${medico.givenname || medico.firstname || ''} ${
    medico.familyname || medico.lastname || ''
  }, ${medico.city || ''}`;
}
