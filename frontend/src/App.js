import React from 'react';
import Records from './components/Records';
import Messages from './components/Messages';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Gestion des Dossiers Médicaux</h1>
      <Records />
      <h1>Messagerie Interne</h1>
      <Messages />
    </div>
  );
}

export default App;