import React, { useState } from 'react';

const Formulario = ({ handleSubmit, setNombre, setJuego }) => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange = (e, setInputValue) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => {
          handleInputChange(e, setInputValue1);
          setNombre(e.target.value); 
        }}
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => {
          handleInputChange(e, setInputValue2);
          setJuego(e.target.value); 
        }}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;