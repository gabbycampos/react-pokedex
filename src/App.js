import React from 'react';
import Pokedex from './Pokedex';
import pokemon from './pokeProps';
import './App.css';

function App() {
  return (
    <div>
      <Pokedex pokemon={pokemon}/>
    </div>
  );
}

export default App;
