// eslint-disable-next-line import/prefer-default-export
export function getStringMedico(medico: {name: string, lastname: string, city: string}): string {
  return `${medico.name} ${medico.lastname}, ${medico.city}`;
}
