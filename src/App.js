import React from 'react';
import './App.css';

import PokemonList from './pokemonsList';
import Pokedex from './capturedPokemon';

const App = () =>(
    <PokemonProvider>
    <div className = "App">
        <PokemonList  />
        <Pokedex   />
    </div>
    </PokemonProvider>
);

export default App;