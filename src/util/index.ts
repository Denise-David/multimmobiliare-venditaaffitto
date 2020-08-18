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

export function extractAndMergeArray(array : any[]) {
  let arrayRepartiUniti : any[] = [];
  array.map((ArrayRepartiSeparati : any) => {
    ArrayRepartiSeparati.map((reparto : any) => {
      arrayRepartiUniti = arrayRepartiUniti.concat(reparto);
      return (arrayRepartiUniti);
    });
    return (arrayRepartiUniti);
  });
  return arrayRepartiUniti;
}
