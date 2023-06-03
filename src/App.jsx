import './App.css';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [nombre, setNombre] = useState("");
  const [juego, setJuego] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 || nombre.trim().startsWith(" ")) {
      setErrorMessage("Por favor chequea que la información sea correcta");
    } else if (juego.length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
    } else {
      setErrorMessage("");
      setShowCard(true);
    }
  };

  return (
    <div className="app">
      <h1>Ingresa tu nombre y tu juego favorito</h1>
      <Formulario handleSubmit={handleSubmit} setNombre={setNombre} setJuego={setJuego} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {showCard && <Card nombre={nombre} juego={juego} />}
    </div>
  );
};

export default App;