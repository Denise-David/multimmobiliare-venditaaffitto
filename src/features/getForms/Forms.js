import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchForms } from './formsSlice';

/* prende i dati dalla BD quando il componente è montato */

const Forms = () => {
  // const data = useSelector(selectData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchForms('http://localhost:3030/getData'));
    dispatch({ type: 'prova', payload: 'Ciao' });
  }, []);

  return <div />;
};

export default Forms;
