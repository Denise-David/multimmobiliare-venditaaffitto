import React from 'react';
import QRCode from 'qrcode.react';

const EtichettaQrCode = () => (

  <QRCode value={`${window.location.host}/home?etichetta=4153656`} />

);

export default EtichettaQrCode;
