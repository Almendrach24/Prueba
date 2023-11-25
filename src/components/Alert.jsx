// Alert.js
import React from 'react';

const Alert = ({ mensaje }) => {
  return (
    <div className={`alert ${mensaje.includes('exitoso') ? 'alert-success' : 'alert-danger'}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;