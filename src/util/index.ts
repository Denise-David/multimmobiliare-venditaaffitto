export interface Medico {givenname: string, familyname: string, city: string}

// eslint-disable-next-line import/prefer-default-export
export function getStringMedico(medico: Medico): string {
  return `${medico.givenname || ''} ${medico.familyname || ''}, ${medico.city || ''}`;
}
