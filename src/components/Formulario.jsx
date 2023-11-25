import React, { useState } from 'react';

const Formulario = ({ handleRegistro }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!email.includes('@') || password !== confirmPassword) {
      handleRegistro(false, 'Completa todos los campos!');
    } else {
      // Procesar registro exitoso
      handleRegistro(true, 'Registro exitoso');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña:</label>
        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña:</label>
        <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-success btn-lg">Registrarse</button>
    </form>
  );
};

export default Formulario;
