import React from 'react';
import './App.css';

import PokemonList from './pokemonsList';
import Pokedex from './capturedPokemon';

const App = () =>(
    <div className = "App">
        <PokemonList  />
        <Pokedex   />
    </div>
);

export default App;