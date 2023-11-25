// Registro.js
import React,{ useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
  const [mensaje, setMensaje] = useState('')
  const handleRegistro = (exito,mensaje) => {
    setMensaje(mensaje);
  };

  return (
    <div>
      <h1>Crea una cuenta</h1>
      <SocialButton icon="fa-facebook" />
      <SocialButton icon="fa-twitter" />
      <SocialButton icon="fa-linkedin" />
      <p>O usa tu mail para registrarte</p>
      <Formulario handleRegistro={handleRegistro} />
      <Alert mensaje={mensaje} />
    </div>
  );
};

export default Registro;
