export interface Medico {
  id?:string,
  givenname?: string;
  familyname?: string;
  firstname?: string;
  lastname?: string;
  city?: string;
}

// eslint-disable-next-line import/prefer-default-export
export function getStringMedico(medico: Medico): string {
  if (medico) {
    return `${medico.givenname || medico.firstname || ''} ${
      medico.familyname || medico.lastname || ''
    }, ${medico.city || ''}`;
  } return '';
}

export function extractAndMergeArray(array : any[]):Generator {
  let arrayRepartiUniti : any = [];
  array.map((ArrayRepartiSeparati : any) => {
    ArrayRepartiSeparati.map((reparto : any) => {
      arrayRepartiUniti = arrayRepartiUniti.concat(reparto);
      return (arrayRepartiUniti);
    });
    return (arrayRepartiUniti);
  });
  return arrayRepartiUniti;
}

export function objectToArray(object : any):any[] {
  if (object.length !== 0) {
    const array = Object.keys(object).map((key) => {
      const risposta = object[key];
      return risposta;
    });
    return array;
  }
  return [];
}
