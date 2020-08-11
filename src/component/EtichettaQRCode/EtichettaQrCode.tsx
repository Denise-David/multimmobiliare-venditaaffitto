import React from 'react';
import QRCode from 'qrcode.react';

const EtichettaQrCode = () => (

  <QRCode value={`${window.location.host}/home?eitchetta=4153656`} />

);

export default EtichettaQrCode;
