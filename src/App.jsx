import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Saludo() {
  const [mensaje, setMensaje] = useState('Hello my friend!');

  const handleClick = () => {
    setMensaje('Hello my friend (from changed state)!');
  };

  return (
    <div className="App">
      <h1 className='text-center bg-dark text-light my-4 p-4'>{mensaje}</h1>
      <Button onClick={handleClick} variant='danger'>Cambio de saludo</Button>
    </div>
  );
}

export default Saludo;