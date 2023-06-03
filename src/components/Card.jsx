import React from 'react';
import './Card.css';

const Card = ({ nombre, juego }) => {
  return (
    <div className="card">
      <p>Hola: {nombre}</p>
      <p>Tu juego favorito es: {juego}</p>
    </div>
  );
};

export default Card;