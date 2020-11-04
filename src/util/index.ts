/**
 * struttura medico
 */
export interface Medico {
  id?:string,
  givenname?: string;
  familyname?: string;
  firstname?: string;
  lastname?: string;
  city?: string;
}

/**
 * funzione per estrarre il nome, cognome e città del medico
 */
export function getStringMedico(medico: Medico): string {
  if (medico) {
    if (medico.city === 'Nessun medico di famiglia' || medico.city === 'Nessun medico inviante' || medico.city === '') {
      return `${medico.city}`;
    }
    return `${medico.givenname || medico.firstname || ''} ${
      medico.familyname || medico.lastname || ''
    }, ${medico.city || ''}`;
  } return '';
}

/**
 * funzione per estrarre e unire gli array
 */
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

/**
 * funzione che converte un oggetto in un array
 */
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
