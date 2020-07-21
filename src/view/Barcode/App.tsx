import React from 'react';
import ButtonSend from '../../component/ButtonSend/ButtonSend';
import TextFieldCodice from '../../component/TextFieldCodice/TextFieldCodice';
import useStyles from './style';
import Nav from '../../component/Navbar/Nav';
import Logo from '../../component/Logo/Logo';
import CardElement from '../../component/CardElement/CardElement';

const Barcodepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.Content}>
      <Nav />
      <Logo />
      <CardElement />
      <div className={classes.Margin}>Oppure</div>
      <div className={classes.Margin}><TextFieldCodice /></div>
      <ButtonSend />
    </div>

  );
};
export default Barcodepage;
